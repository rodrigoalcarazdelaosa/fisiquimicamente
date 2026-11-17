import { selectReasoning } from '../src/reasoning.mjs';
import { createPerformance } from '../src/performance.mjs';
import { streamAnswer } from '../src/stream.mjs';
import { buildMessages } from '../src/index.mjs';
import { reasoningCases } from '../test/reasoning-cases.mjs';

const args = process.argv.slice(2);
const option = (name) => args.find((arg) => arg.startsWith(`--${name}=`))?.split('=').slice(1).join('=');
const model = '@cf/google/gemma-4-26b-a4b-it';
const inputFor = (example) => ({ ...example,
  page: { title: 'Evaluación de Física y Química', language: 'es', tags: ['Bachillerato'],
    url: 'https://fisiquimicamente.com/recursos-fisica-quimica/apuntes/' },
  section: 'Evaluación', selection: '',
  context: 'Usa los datos de la pregunta. Si faltan datos necesarios, pídelos sin inventarlos.',
  history: example.history || [],
});

if (!args.includes('--live')) {
  const mismatches = reasoningCases.filter((example) => selectReasoning(example).mode !== example.expected);
  const timings = [];
  // Warm up the same rules before reporting steady-state costs.
  for (let i = 0; i < 200; i++) selectReasoning(reasoningCases[i % reasoningCases.length]);
  for (let i = 0; i < 5000; i++) {
    const start = performance.now();
    selectReasoning(reasoningCases[i % reasoningCases.length]);
    timings.push(performance.now() - start);
  }
  timings.sort((a, b) => a - b);
  const input = inputFor(reasoningCases.find((example) => example.id === 'simplify-exercise'));
  input.context = 'Contexto de los apuntes. '.repeat(600).slice(0, 12000);
  input.history = Array.from({ length: 6 }, (_, index) => ({ role: index % 2 ? 'assistant' : 'user',
    content: 'Calcula la concentración con Ka = 1,8e-5. '.repeat(200).slice(0, 6000) }));
  const start = performance.now();
  for (let i = 0; i < 100; i++) { selectReasoning(input); buildMessages(input); }
  console.log(JSON.stringify({ cases: reasoningCases.length, mismatches: mismatches.map((item) => item.id),
    classifier_median_ms: timings[2500], classifier_p95_ms: timings[4750],
    max_input_classification_and_messages_mean_ms: (performance.now() - start) / 100,
    live_calls: 0 }, null, 2));
  process.exitCode = mismatches.length ? 1 : 0;
} else {
  const account = process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_API_TOKEN;
  if (!account || !token) throw new Error('Faltan CLOUDFLARE_ACCOUNT_ID y/o CLOUDFLARE_API_TOKEN. No se ha enviado ninguna consulta.');
  const cases = reasoningCases.filter((example) => example.quality && (!option('case') || example.id === option('case')));
  const repeats = Number(option('repeat') || 1);
  const calls = cases.reduce((total, example) => total + (selectReasoning(example).enableThinking ? 1 : 2), 0) * repeats;
  if (!cases.length || !Number.isInteger(repeats) || repeats < 1 || repeats > 5 || calls > 40) {
    throw new Error('Selecciona un caso válido con --case=ID y entre 1 y 5 repeticiones con --repeat=N (máximo 40 llamadas).');
  }
  for (const example of cases) {
    const input = inputFor(example);
    const selected = selectReasoning(input);
    for (let run = 1; run <= repeats; run++) {
      const modes = selected.enableThinking ? [true] : run % 2 ? [true, false] : [false, true];
      for (const thinking of modes) {
        const result = await evaluate(input, thinking, account, token);
        console.log(JSON.stringify({ case_id: example.id, run,
          policy: selected.enableThinking ? 'always_and_adaptive' : thinking ? 'always' : 'adaptive',
          question: example.question, quality_reference: example.quality, ...result }));
      }
    }
  }
}

async function evaluate(input, thinking, account, token) {
  let metrics;
  const receivedAt = performance.now();
  const messages = buildMessages(input);
  const timing = createPerformance({ receivedAt, model, enabled: true, classifierMs: 0,
    decision: { mode: thinking ? 'reasoning' : 'fast', reason: 'evaluation', score: null } },
  { write: (value) => { metrics = value; } });
  timing.modelStart();
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(account)}/ai/run/${model}`, {
    method: 'POST', signal: AbortSignal.timeout(90000),
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, stream: true, max_tokens: 3072,
      chat_template_kwargs: { enable_thinking: thinking } }),
  });
  if (!response.ok || !response.body) throw new Error(`Workers AI ha devuelto HTTP ${response.status}. Evaluación detenida.`);
  let answer = '';
  for await (const chunk of streamAnswer(response.body, timing)) {
    const event = JSON.parse(new TextDecoder().decode(chunk));
    if (event.type === 'delta') answer += event.text;
    if (event.type === 'error') throw new Error('La respuesta de Workers AI se ha interrumpido. Evaluación detenida.');
  }
  return { metrics, answer };
}
