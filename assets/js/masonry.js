const wide = matchMedia('screen and (width > 768px)');

function initMasonry(container) {
  const cards = [...container.children];
  let frame;
  let containerWidth;

  function layout() {
    const style = getComputedStyle(container);
    const columns = Number(style.getPropertyValue('--masonry-columns'));
    if (columns < 2) return;

    const gap = parseFloat(style.columnGap);
    const sizes = [];
    for (const card of cards) {
      if (card.classList.contains('d-none') || !card.getClientRects().length) continue;
      const {width, height} = card.getBoundingClientRect();
      const margin = parseFloat(getComputedStyle(card).marginBottom);
      sizes.push({card, width, height: height + margin});
    }

    const columnWidth = (sizes[0]?.width ?? 0) + gap;
    const heights = Array(columns).fill(0);
    // Place each card in the shortest column, breaking ties in DOM order.
    for (const {card, height} of sizes) {
      const top = Math.min(...heights);
      const column = heights.indexOf(top);
      heights[column] += height;
      card.style.setProperty('--masonry-x', `${column * columnWidth}px`);
      card.style.setProperty('--masonry-y', `${top}px`);
    }
    container.style.setProperty('--masonry-height', `${Math.max(...heights)}px`);
    container.setAttribute('data-masonry-ready', '');
  }

  const observer = new ResizeObserver(entries => {
    const resized = entries.find(entry => entry.target === container);
    const widthChanged = resized && resized.contentRect.width !== containerWidth;
    if (resized) containerWidth = resized.contentRect.width;
    // The height we set on the container must not trigger another layout.
    if (frame || (!widthChanged && !entries.some(entry => entry.target !== container))) return;
    frame = requestAnimationFrame(() => {
      frame = undefined;
      layout();
    });
  });
  function updateMode() {
    if (wide.matches) {
      observer.observe(container);
      for (const card of cards) observer.observe(card);
      layout();
    } else {
      observer.disconnect();
      cancelAnimationFrame(frame);
      frame = undefined;
      container.removeAttribute('data-masonry-ready');
      container.removeAttribute('data-masonry-animate');
    }
  }

  container.addEventListener('portfoliofilter', () => {
    container.setAttribute('data-masonry-animate', '');
    if (wide.matches) layout();
  });
  wide.addEventListener('change', updateMode);
  updateMode();
}

document.querySelectorAll('.js-layout-masonry').forEach(initMasonry);
