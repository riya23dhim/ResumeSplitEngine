
//component that will measure exh block height individually and stcjed together



// Hidden container used to measure real block height
let _container = null;
let _content = null;
let _currentCSS = null;

function getContainer(templateConfig) {
  // Create once and reuse again and again
  if (!_container) {
    _container = document.createElement('div');
    _container.style.position = 'absolute';
    //to hide it from view
    _container.style.top = '-9999px';
    _container.style.left = '-9999px';
    _container.style.visibility = 'hidden';
    document.body.appendChild(_container);
  }

  // Match layout width and font
  _container.style.width = `${templateConfig.contentWidth}px`;
  _container.style.fontFamily = "'Inter', sans-serif";

  // Update styles only if template CSS changed
  if (_currentCSS !== templateConfig.cssText) {
    _container.innerHTML = '';

    const style = document.createElement('style');
    style.textContent = templateConfig.cssText;
    _container.appendChild(style);

    _content = document.createElement('div');
    // overflow:auto creates a Block Formatting Context so margins
    // don't collapse outside the container — matches real page behavior
    _content.style.overflow = 'auto';
    _container.appendChild(_content);

    _currentCSS = templateConfig.cssText;
  }

  return _content;
}


// Measure a single block height
export function measure(block, templateConfig) {
  const content = getContainer(templateConfig);
  content.innerHTML = templateConfig.renderBlockHTML(block);
  return content.offsetHeight;
}


// Measure blocks together and we will use heights in paginate to decide to keep current block or not/
//if its splitable in that case measure will be used
export function measureAll(blocks, templateConfig) {
  const content = getContainer(templateConfig);

  // Force browser to resolve CSS before measuring (prevents underestimation)
  content.offsetHeight;

  content.innerHTML = '';

  const heights = [];
  let prevHeight = 0;

  for (let i = 0; i < blocks.length; i++) {
    const wrapper = document.createElement('span');
    wrapper.style.display = 'contents';
    wrapper.innerHTML = templateConfig.renderBlockHTML(blocks[i]);

    while (wrapper.firstChild) {
      content.appendChild(wrapper.firstChild);
    }

    const newHeight = content.offsetHeight;
    heights.push(newHeight - prevHeight);
    prevHeight = newHeight;
  }

  return heights;
}
