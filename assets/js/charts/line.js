const textColor = '#111111';
const headingFont = {family: 'Cabin Sketch', size: 18};
const tickFont = {family: 'EB Garamond', size: 16};

function scale({title, ticks, height, ...options}) {
  return {
    type: 'linear',
    ...options,
    title: {display: true, text: title, color: textColor, font: headingFont},
    ticks: {color: textColor, font: tickFont, padding: 10, ...ticks},
    grid: {color: textColor, drawOnChartArea: false},
    border: {color: textColor},
    afterFit: height ? axis => { axis.height = height; } : undefined,
  };
}

export function drawChart(canvas, Chart, {datasets, x, y, legend, annotations}, printView) {
  canvas.setAttribute('aria-label', `${y.title} · ${x.title}`);
  const labels = {color: textColor, font: headingFont, boxWidth: 10};
  const annotationLines = annotations?.map(([value, content]) => ({
    type: 'line',
    scaleID: 'x',
    value,
    adjustScaleRange: false,
    borderColor: '#2a54a9',
    label: {
      display: true,
      position: 'start',
      content,
      backgroundColor: '#BBCCEE',
      color: textColor,
      font: {...headingFont, weight: 'bold'},
    },
  }));

  return new Chart(canvas, {
    type: 'line',
    data: {datasets},
    options: {
      responsive: false,
      maintainAspectRatio: false,
      animation: printView || matchMedia('(prefers-reduced-motion: reduce)').matches
        ? false : {duration: 1000},
      elements: {line: {tension: 0.4}},
      scales: {x: scale(x), y: scale(y)},
      plugins: {
        legend: {display: Boolean(legend), labels: {...labels, ...legend}},
        annotation: annotationLines ? {annotations: annotationLines} : false,
      },
    },
  });
}
