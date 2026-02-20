/**
 * Template-aware block measurement.
 * 
 * Creates a hidden container that mimics the actual page layout,
 * injects the template's CSS, and measures the real rendered height
 * of each block.
 * 
 * Uses a persistent container for performance — created once, reused across calls.
 */

let _container = null;
let _content = null;
let _currentCSS = null;

function getContainer(templateConfig) {
  if (!_container) {
    _container = document.createElement('div');
    _container.style.position = 'absolute';
    _container.style.top = '-9999px';
    _container.style.left = '-9999px';
    _container.style.visibility = 'hidden';
    document.body.appendChild(_container);
  }

  // Update width if it changed
  _container.style.width = `${templateConfig.contentWidth}px`;
  _container.style.fontFamily = "'Inter', sans-serif";

  // Inject CSS only if template changed
  if (_currentCSS !== templateConfig.cssText) {
    _container.innerHTML = '';
    const style = document.createElement('style');
    style.textContent = templateConfig.cssText;
    _container.appendChild(style);
    _content = document.createElement('div');
    _container.appendChild(_content);
    _currentCSS = templateConfig.cssText;
  }

  return _content;
}

export function measure(block, templateConfig) {
  const content = getContainer(templateConfig);
  content.innerHTML = templateConfig.renderBlockHTML(block);

  // Force layout calculation
  const height = content.offsetHeight;

  return height;
}

/**
 * Measure all blocks by rendering them stacked together — exactly as
 * they'll appear on the actual page.  This captures margin collapse,
 * gap interactions, and any other context-dependent sizing.
 * 
 * Returns an array of per-block heights computed from their bounding rects.
 */
export function measureAll(blocks, templateConfig) {
  const content = getContainer(templateConfig);

  // Force browser to fully resolve injected CSS before measuring
  // This ensures font metrics and styles are "warm" for accurate readings
  content.offsetHeight;

  const heights = [];

  // Measure cumulative height at each block boundary
  // by rendering blocks one at a time and tracking total growth.
  // This captures margin collapse between adjacent blocks.
  content.innerHTML = '';
  let prevHeight = 0;

  for (let i = 0; i < blocks.length; i++) {
    // Append this block's HTML
    const wrapper = document.createElement('span');
    wrapper.style.display = 'contents'; // Invisible wrapper, no layout impact
    wrapper.innerHTML = templateConfig.renderBlockHTML(blocks[i]);

    // Move children out of wrapper into content directly
    while (wrapper.firstChild) {
      content.appendChild(wrapper.firstChild);
    }

    const newHeight = content.offsetHeight;
    heights.push(newHeight - prevHeight);
    prevHeight = newHeight;
  }

  return heights;
}
