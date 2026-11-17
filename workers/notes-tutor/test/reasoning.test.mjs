import test from 'node:test';
import assert from 'node:assert/strict';
import { selectReasoning } from '../src/reasoning.mjs';
import { reasoningCases } from './reasoning-cases.mjs';

for (const example of reasoningCases) {
  test(`reasoning route: ${example.id}`, () => {
    const decision = selectReasoning(example);
    assert.equal(decision.mode, example.expected, example.question);
    assert.equal(decision.enableThinking, example.expected === 'reasoning');
  });
}

test('routing is deterministic and does not mutate the conversation', () => {
  const input = structuredClone(reasoningCases.find((example) => example.id === 'double-concentration'));
  const before = structuredClone(input);
  assert.deepEqual(selectReasoning(input), selectReasoning(input));
  assert.deepEqual(input, before);
});
