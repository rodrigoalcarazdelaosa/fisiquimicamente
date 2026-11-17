// Normalize provider SSE into JSON lines containing only the public answer.
// Reasoning fields and provider errors never reach the browser.
export function streamAnswer(source) {
  const reader = source.getReader();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let cancelled = false;
  return new ReadableStream({
    async start(controller) {
      const send = (event) => controller.enqueue(encoder.encode(JSON.stringify(event) + '\n'));
      const filter = reasoningFilter();
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
        finishReason = choice?.finish_reason || packet.finish_reason || finishReason;
        if (finishReason === 'error') throw new Error('Provider stream failed');
        const delta = choice?.delta?.content ?? packet.response;
        if (typeof delta === 'string') {
          const text = filter(delta);
          if (text) { hasAnswer = true; send({ type: 'delta', text }); }
        }
      };
      try {
        while (!completed && !cancelled) {
          const { value, done } = await reader.read();
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
        send({ type: 'done', truncated: finishReason === 'length' });
      } catch {
        if (!cancelled) send({ type: 'error', error: 'unavailable' });
      } finally {
        if (!cancelled) controller.close();
        await reader.cancel().catch(() => {});
        reader.releaseLock();
      }
    },
    cancel(reason) {
      cancelled = true;
      return reader.cancel(reason);
    },
  });
}

function reasoningFilter() {
  let pending = '';
  let thinking = false;
  return (chunk) => {
    pending += chunk;
    let output = '';
    while (pending) {
      const tag = thinking ? '</think>' : '<think>';
      const lower = pending.toLowerCase();
      const index = lower.indexOf(tag);
      if (index !== -1) {
        if (!thinking) output += pending.slice(0, index);
        pending = pending.slice(index + tag.length);
        thinking = !thinking;
      } else {
        // Hold a possible split tag instead of briefly displaying it.
        let held = Math.min(tag.length - 1, pending.length);
        while (held && !tag.startsWith(lower.slice(-held))) held--;
        if (!thinking) output += pending.slice(0, pending.length - held);
        pending = pending.slice(pending.length - held);
        break;
      }
    }
    return output;
  };
}
