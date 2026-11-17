// Conservative routing: only clearly simple requests skip thinking.
// Scientific topic names alone do not contribute to the score.
const normalize = (text = '') => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const patterns = {
  solve: /\b(calcula(?:r)?|resuelve|resolver|resuelvelo|determina(?:r)?|deduir|resol(?:dre)?|calculeu|calculate|compute|solve|determine|work out)\b/,
  derive: /\b(deduce|deducir|deduir|demuestra|demostrar|demostra|dedueix|derive|prove)\b|\b(explica(?:me)?|explain|show|presenta|dame)\s+(?:(?:la|una|the|a|an)\s+)?(demostracion|deduccion|derivation|proof|demostracio|deduccio)\b/,
  quantities: /\b(ph|poh|composicion|composicio|composition|concentracion|concentracio|concentration|masa|massa|mass|volumen|volum|volume|velocidad|velocitat|velocity|speed|aceleracion|acceleracio|acceleration|energia|energy|presion|pressio|pressure|temperatura|temperature|fuerza|forca|force|moles|mol|rendimiento|rate|velocitat|equilibrium constant)\b/,
  data: /\b(datos|dades|data|tabla|taula|table|grafica|grafic|graph|resultados|resultats|results|experimental(?:es|s)?|measurements)\b/,
  analyze: /\b(analiza(?:r)?|analitza|interpreta(?:r)?|interpret|analy[sz]e|relaciona(?:r)?|relate|connect)\b/,
  change: /\b(duplic\w*|dobl\w*|triplic\w*|mitad|meitat|half|double\w*|halv\w*|aument\w*|augment\w*|disminu\w*|increas\w*|decreas\w*|canvi\w*|cambi\w*|chang\w*)\b/,
  causal: /\b(por que|per que|why|que pasa|que ocurre|que passaria|what happens|what if|y si|i si)\b/,
  method: /\b(otro metodo|otra forma|un altre metode|altre metode|another method|different method)\b/,
  relation: /\b(relacion entre|relacio entre|relationship between)\b/,
  steps: /\b(paso a paso|pas a pas|step by step|y luego|a continuacion|and then|despres)\b/,
  simple: /\b(que es|que son|que significa|define|definicion|definicio|what is|what are|what does|definition|diferencia entre|diferencias entre|difference between|explica(?:me)?|explain|describe|descriu|resume|resum(?:eix)?|summari[sz]e|por que|per que|why|cual es|cuales son|which|how does|como funciona|com funciona)\b/,
  followup: /^(?:[¿?\s]*(?:y si|i si|what if|y ahora|i ara|and now|continua|continue|segueix|explicalo|explica-ho|explain (?:it|that)|ponme|dona'm|give me|resuelvelo|resol-ho))\b|\b(otro metodo|altre metode|another method|lo anterior|previous answer)\b|^[¿?\s]*(?:(?:y |i |and )?(?:por que|per que|why)(?: (?:eso|aixo|is that))?)[?\s]*$|\b(?:ese|este|aquest|that|this) (?:paso|pas|step|resultado|resultat|result)\b/,
};

function signals(text) {
  const flags = Object.fromEntries(Object.entries(patterns).map(([name, pattern]) => [name, pattern.test(text)]));
  const numerical = /\b\d+(?:[.,]\d+)?\b/.test(text);
  const equation = /[=]|\b(?:ka|kb|kc|kp)\b/.test(text);
  const score = (flags.solve ? 2 : 0) + (flags.derive ? 5 : 0)
    + (flags.solve && (flags.quantities || flags.data || equation) ? 2 : 0)
    + (numerical && flags.quantities ? 3 : 0)
    + (flags.analyze && (flags.data || flags.quantities) ? 3 : 0)
    + (flags.change && flags.causal ? 3 : 0)
    + (flags.method ? 4 : 0) + (flags.relation ? 3 : 0) + (flags.steps ? 1 : 0);
  return { ...flags, score };
}

export function selectReasoning(input) {
  const question = normalize(input.question);
  const current = signals(question);
  const result = (thinking, reason, score = current.score) => ({
    enableThinking: thinking, mode: thinking ? 'reasoning' : 'fast', reason, score,
  });
  if (current.score >= 3) return result(true, 'complex_signals');

  // Inspect history only for a follow-up, so an earlier exercise cannot slow a new definition.
  if (current.followup) {
    const recent = (input.history || []).slice(-4);
    const recentQuestions = recent.filter((item) => item.role === 'user');
    if (recentQuestions.some((item) => {
      const previous = signals(normalize(item.content));
      return previous.score >= 3 || previous.solve || previous.derive || !previous.simple;
    })) return result(true, 'complex_followup');
    if (recentQuestions.length && recentQuestions.every((item) => signals(normalize(item.content)).simple)
      && !current.solve && !current.change && !current.method) return result(false, 'simple_followup');
    return result(true, 'uncertain_followup');
  }

  if (current.simple && !current.solve && !current.derive && !current.analyze) {
    // A short reference to a selected exercise still needs its mathematical context.
    const refers = /\b(esto|este|esta|aixo|aquest|aquesta|this|it|ejercicio|exercici|exercise|problem)\b/.test(question);
    if (refers && question.split(/\s+/).length <= 12) {
      if (/\b(ejercicio|exercici|exercise|problem)\b/.test(question)
        && !/\b(que es|what is)\b/.test(question)) return result(true, 'complex_reference');
      const reference = signals(normalize(input.selection || input.context || ''));
      if (reference.score >= 3 || reference.solve || reference.derive) return result(true, 'complex_reference');
    }
    return result(false, 'clear_simple_request');
  }
  return result(true, 'uncertain_request');
}
