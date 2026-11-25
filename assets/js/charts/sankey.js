const sourceColors = ['#77AADD', '#EE8866', '#EEDD88', '#FFAABB', '#99DDFF', '#44BB99'];
const targets = ['CCL', 'CP', 'STEM', 'CD', 'CPSAA', 'CC', 'CE', 'CCEC'];
const sources = sourceColors.map((_, index) => String(index + 1));
const priority = Object.fromEntries([...sources, ...targets].map((node, index) => [node, index]));

const hideEmptyFlows = {
  id: 'hide-empty-sankey-flows',
  afterDatasetUpdate(_chart, {meta}) {
    // Keep zero-weight rows in the layout so disconnected nodes remain visible.
    for (const flow of meta.data) {
      if (flow.flow !== 0) continue;
      flow.progress = 0;
      flow.skip = true;
    }
  },
};

function showTooltip(container, tooltipElement, {tooltip}) {
  const row = tooltip.dataPoints?.[0]?.raw;
  tooltipElement.hidden = !tooltip.opacity || !row;
  if (tooltipElement.hidden) return;

  tooltipElement.textContent = row.description
    ? row.description.replaceAll('<br>', '\n')
    : `${row.from} → ${row.to}: ${row.flow}`;
  const left = Math.max(0, Math.min(tooltip.caretX + 12, container.clientWidth - tooltipElement.offsetWidth));
  const below = tooltip.caretY + 12;
  const top = below + tooltipElement.offsetHeight <= container.clientHeight
    ? below
    : Math.max(0, tooltip.caretY - tooltipElement.offsetHeight - 12);
  tooltipElement.style.left = `${left}px`;
  tooltipElement.style.top = `${top}px`;
}

export function drawChart(container, Chart, rows, printView) {
  const canvas = container.querySelector('canvas');
  const tooltip = document.createElement('div');
  tooltip.className = 'sankey-tooltip';
  tooltip.hidden = true;
  container.append(tooltip);

  return new Chart(canvas, {
    type: 'sankey',
    plugins: [hideEmptyFlows],
    data: {
      datasets: [{
        data: rows.map(([from, to, flow, description]) => ({from, to, flow, description})),
        colorFrom: ({raw}) => sourceColors[Number(raw?.from) - 1] ?? sourceColors[0],
        colorTo: '#555555',
        colorMode: 'from',
        alpha: 0.4,
        priority,
        nodeAlign: 'start',
        nodeMinSize: 1,
        nodeWidth: 5,
        nodePadding: 10,
        nodeLabels: {
          color: '#2e3440',
          font: {family: 'EB Garamond', size: 24},
        },
      }],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      animation: false,
      // A label centered on the last node can extend below the diagram.
      layout: {padding: {top: 4, right: 4, bottom: 16, left: 4}},
      plugins: {
        tooltip: {
          enabled: false,
          external: printView ? undefined : context => showTooltip(container, tooltip, context),
        },
      },
    },
  });
}
