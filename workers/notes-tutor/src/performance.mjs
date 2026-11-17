export function createPerformance({ receivedAt, model, decision, classifierMs, enabled = false },
  { now = () => performance.now(), write = (event) => console.log(JSON.stringify(event)) } = {}) {
  const elapsed = () => Math.max(0, Math.round((now() - receivedAt) * 1000) / 1000);
  const record = {
    event: 'notes_tutor_performance', version: 1, model,
    mode: decision.mode, classifier_rule: decision.reason, classifier_score: decision.score,
    classifier_ms: Math.round(classifierMs * 1000) / 1000,
    pre_model_ms: null, first_chunk_ms: null, first_model_token_ms: null,
    first_visible_ms: null, total_ms: null, generation_ms: null,
    reasoning_observed: false, reasoning_tokens: null, output_tokens: null,
  };
  let finished = false;
  const mark = (key) => { if (record[key] === null) record[key] = elapsed(); };
  return {
    modelStart: () => mark('pre_model_ms'),
    firstChunk: () => mark('first_chunk_ms'),
    modelToken: () => mark('first_model_token_ms'),
    visible: () => mark('first_visible_ms'),
    reasoning: () => { record.reasoning_observed = true; },
    usage(usage) {
      const reasoning = usage?.completion_tokens_details?.reasoning_tokens ?? usage?.output_tokens_details?.reasoning_tokens;
      const output = usage?.completion_tokens ?? usage?.output_tokens;
      if (Number.isFinite(reasoning)) {
        record.reasoning_tokens = reasoning;
        if (reasoning > 0) record.reasoning_observed = true;
      }
      if (Number.isFinite(output)) record.output_tokens = output;
    },
    finish(outcome, finishReason = null) {
      if (finished) return;
      finished = true;
      record.total_ms = elapsed();
      record.generation_ms = record.pre_model_ms === null ? null
        : Math.round((record.total_ms - record.pre_model_ms) * 1000) / 1000;
      // Only bounded labels and durations: never questions, answers, URLs, headers or IPs.
      const safeFinishReason = ['stop', 'length', 'eos_token'].includes(finishReason) ? finishReason : null;
      if (enabled) write({ ...record, outcome, finish_reason: safeFinishReason });
    },
  };
}
