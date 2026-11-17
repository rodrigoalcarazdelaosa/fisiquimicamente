import test from 'node:test';
import assert from 'node:assert/strict';
import { createPerformance } from '../src/performance.mjs';
import { streamAnswer, stripReasoning } from '../src/stream.mjs';

function setup(enabled = true) {
  let time = 0;
  const records = [];
  const metrics = createPerformance({ receivedAt: 0, model: '@cf/google/gemma-4-26b-a4b-it',
    decision: { mode: 'reasoning', reason: 'complex_signals', score: 4 }, classifierMs: 0.125, enabled },
  { now: () => time, write: (record) => records.push(record) });
  return { metrics, records, at: (value) => { time = value; } };
}

test('records preparation, raw chunks, model tokens, public content and generation separately', () => {
  const { metrics, records, at } = setup();
  at(5); metrics.modelStart();
  at(10); metrics.firstChunk();
  at(12); metrics.modelToken(); metrics.reasoning();
  at(30); metrics.visible();
  at(40); metrics.firstChunk(); metrics.visible();
  metrics.usage({ completion_tokens: 50, completion_tokens_details: { reasoning_tokens: 20 } });
  at(60); metrics.finish('complete', 'stop');
  metrics.finish('cancelled');
  assert.equal(records.length, 1);
  assert.deepEqual(records[0], {
    event: 'notes_tutor_performance', version: 1, model: '@cf/google/gemma-4-26b-a4b-it',
    mode: 'reasoning', classifier_rule: 'complex_signals', classifier_score: 4, classifier_ms: 0.125,
    pre_model_ms: 5, first_chunk_ms: 10, first_model_token_ms: 12, first_visible_ms: 30,
    total_ms: 60, generation_ms: 55, reasoning_observed: true, reasoning_tokens: 20, output_tokens: 50,
    outcome: 'complete', finish_reason: 'stop',
  });
});

test('absent usage remains unknown and arbitrary provider finish text is never logged', () => {
  const { metrics, records } = setup();
  metrics.usage({}); metrics.finish('error', 'private upstream information');
  assert.equal(records[0].reasoning_tokens, null);
  assert.equal(records[0].output_tokens, null);
  assert.equal(records[0].finish_reason, null);
  assert.ok(!JSON.stringify(records).includes('private'));
});

test('performance logging can be disabled without changing the request', () => {
  const { metrics, records } = setup(false);
  metrics.modelStart(); metrics.firstChunk(); metrics.visible(); metrics.finish('complete');
  assert.equal(records.length, 0);
});

test('live stream timings distinguish hidden reasoning from the first public fragment', async () => {
  const { metrics, records, at } = setup();
  let controller;
  const source = new ReadableStream({ start(value) { controller = value; } });
  const encoder = new TextEncoder();
  const send = (packet) => controller.enqueue(encoder.encode(`data: ${JSON.stringify(packet)}\n\n`));
  at(2); metrics.modelStart();
  const reader = streamAnswer(source, metrics).getReader();
  at(10); send({ choices: [{ delta: { reasoning_content: 'Privado' } }] });
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(records.length, 0);
  at(30); send({ choices: [{ delta: { content: 'Respuesta pública.' } }] });
  const first = JSON.parse(new TextDecoder().decode((await reader.read()).value));
  assert.deepEqual(first, { type: 'delta', text: 'Respuesta pública.' });
  at(50); send({ choices: [{ delta: {}, finish_reason: 'stop' }],
    usage: { completion_tokens: 10, completion_tokens_details: { reasoning_tokens: 4 } } });
  controller.close();
  while (!(await reader.read()).done) {}
  assert.equal(records.length, 1);
  assert.equal(records[0].pre_model_ms, 2);
  assert.equal(records[0].first_chunk_ms, 10);
  assert.equal(records[0].first_model_token_ms, 10);
  assert.equal(records[0].first_visible_ms, 30);
  assert.equal(records[0].total_ms, 50);
  assert.equal(records[0].reasoning_observed, true);
  assert.equal(records[0].reasoning_tokens, 4);
  assert.ok(!JSON.stringify(records).includes('Privado'));
});

test('Gemma thought channels stay hidden when their delimiters arrive byte by byte', async () => {
  for (const hidden of ['<think>Privado</think>', '<|channel>thought\nPrivado<channel|>']) {
    const { metrics, records } = setup();
    const packets = [...(hidden + 'Respuesta')].map((content) => `data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n`).join('') + 'data: [DONE]\n\n';
    const bytes = new TextEncoder().encode(packets);
    let offset = 0;
    const source = new ReadableStream({ pull(controller) {
      if (offset === bytes.length) return controller.close();
      controller.enqueue(bytes.slice(offset, ++offset));
    } });
    const events = (await new Response(streamAnswer(source, metrics)).text()).trim().split('\n').map(JSON.parse);
    assert.equal(events.filter((event) => event.type === 'delta').map((event) => event.text).join(''), 'Respuesta');
    assert.equal(records[0].reasoning_observed, true);
    assert.ok(!JSON.stringify(events).includes('Privado'));
    assert.equal(stripReasoning(hidden + 'Respuesta'), 'Respuesta');
  }
  assert.equal(stripReasoning('<|channel>thought\nIncompleto'), '');
});

test('stream cancellation and stream failure each write one bounded outcome', async () => {
  {
    const { metrics, records } = setup();
    const source = new ReadableStream({ start() {} });
    const reader = streamAnswer(source, metrics).getReader();
    await reader.cancel();
    assert.equal(records.length, 1);
    assert.equal(records[0].outcome, 'cancelled');
  }
  {
    const { metrics, records } = setup();
    const source = new ReadableStream({ start(controller) { controller.error(new Error('private failure')); } });
    await new Response(streamAnswer(source, metrics)).text();
    assert.equal(records.length, 1);
    assert.equal(records[0].outcome, 'error');
    assert.ok(!JSON.stringify(records).includes('private'));
  }
});
