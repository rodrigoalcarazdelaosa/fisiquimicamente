// Normalize provider SSE into JSON lines containing only the public answer.
// Reasoning fields and provider errors never reach the browser.
export function streamAnswer(source, metrics) {
  const reader = source.getReader();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let cancelled = false;
  return new ReadableStream({
    async start(controller) {
      const send = (event) => controller.enqueue(encoder.encode(JSON.stringify(event) + '\n'));
      const filter = reasoningFilter(() => metrics?.reasoning());
      let buffer = '';
      let completed = false;
      let finishReason = '';
      let hasAnswer = false;
      const process = (frame) => {
        const data = frame.split('\n').filter((line) => line.startsWith('data:'))
          .map((line) => line.slice(5).replace(/^ /, '')).join('\n');
        if (!data) return;
        if (data === '[DONE]') { completed = true; return; }
        const packet = JSON.parse(data);
        if (packet.error || packet.errors?.length) throw new Error('Provider stream failed');
        const choice = packet.choices?.[0];
        metrics?.usage(packet.usage);
        const reasoning = choice?.delta?.reasoning_content || choice?.delta?.reasoning
          || packet.reasoning_content || packet.reasoning;
        if (typeof reasoning === 'string' && reasoning.trim()) metrics?.reasoning();
        finishReason = choice?.finish_reason || packet.finish_reason || finishReason;
        if (finishReason === 'error') throw new Error('Provider stream failed');
        const delta = choice?.delta?.content ?? packet.response;
        if (delta || reasoning) metrics?.modelToken();
        if (typeof delta === 'string') {
          const text = filter(delta);
          if (text) {
            if (text.trim()) { hasAnswer = true; metrics?.visible(); }
            send({ type: 'delta', text });
          }
        }
      };
      try {
        while (!completed && !cancelled) {
          const { value, done } = await reader.read();
          if (value?.byteLength) metrics?.firstChunk();
          buffer = (buffer + decoder.decode(value, { stream: !done })).replace(/\r\n/g, '\n');
          let end;
          while ((end = buffer.indexOf('\n\n')) !== -1) {
            process(buffer.slice(0, end));
            buffer = buffer.slice(end + 2);
            if (completed) break;
          }
          if (done) {
            if (buffer.trim()) process(buffer);
            break;
          }
        }
        if (cancelled) return;
        if ((!completed && !['stop', 'length', 'eos_token'].includes(finishReason)) || !hasAnswer) {
          throw new Error('Incomplete provider stream');
        }
        metrics?.finish(finishReason === 'length' ? 'truncated' : 'complete', finishReason);
        send({ type: 'done', truncated: finishReason === 'length' });
      } catch {
        if (!cancelled) {
          metrics?.finish('error');
          send({ type: 'error', error: 'unavailable' });
        }
      } finally {
        if (!cancelled) controller.close();
        await reader.cancel().catch(() => {});
        reader.releaseLock();
      }
    },
    cancel(reason) {
      cancelled = true;
      metrics?.finish('cancelled');
      return reader.cancel(reason);
    },
  });
}

export function stripReasoning(text, onReasoning = () => {}) {
  return reasoningFilter(onReasoning)(text).trim();
}

function reasoningFilter(onReasoning) {
  const openings = { '<think>': '</think>', '<|channel>thought': '<channel|>' };
  let pending = '';
  let closing = null;
  return (chunk) => {
    pending += chunk;
    let output = '';
    while (pending) {
      const tags = closing ? [closing] : Object.keys(openings);
      const lower = pending.toLowerCase();
      let index = -1;
      let matched;
      for (const tag of tags) {
        const found = lower.indexOf(tag);
        if (found !== -1 && (index === -1 || found < index)) { index = found; matched = tag; }
      }
      if (index !== -1) {
        if (!closing) output += pending.slice(0, index);
        else if (pending.slice(0, index).trim()) onReasoning();
        pending = pending.slice(index + matched.length);
        closing = closing ? null : openings[matched];
      } else {
        // Hold a possible split tag instead of briefly displaying it.
        let held = 0;
        for (const tag of tags) {
          for (let size = Math.min(tag.length - 1, pending.length); size > held; size--) {
            if (lower.endsWith(tag.slice(0, size))) { held = size; break; }
          }
        }
        if (!closing) output += pending.slice(0, pending.length - held);
        else if (pending.slice(0, pending.length - held).trim()) onReasoning();
        pending = pending.slice(pending.length - held);
        break;
      }
    }
    return output;
  };
}
