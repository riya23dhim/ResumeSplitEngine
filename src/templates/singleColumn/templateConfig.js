import { singleColumnStyles } from './styles';

// Page dimensions — must match styles.js CSS exactly
const pageConfig = {
  width: 794,
  height: 1123,
  paddingTop: 48,
  paddingBottom: 48,
  paddingLeft: 56,
  paddingRight: 56,
};

const contentHeight = pageConfig.height - pageConfig.paddingTop - pageConfig.paddingBottom;
const contentWidth = pageConfig.width - pageConfig.paddingLeft - pageConfig.paddingRight;

/**
 * Renders a block to HTML using the same CSS class names as BlockRenderer.js
 * The template's CSS (cssText) will be injected into the measurement container,
 * so these class names will be styled correctly during measurement.
 */
function renderBlockHTML(block) {
  switch (block.type) {
    case 'header':
      return `
        <div class="sc-header">
          <div class="sc-header-name">${block.name || ''}</div>
          <div class="sc-header-designation">${block.designation || ''}</div>
          <div class="sc-header-contact">${block.email || ''} · ${block.phone || ''} · ${block.address || ''}</div>
          <div class="sc-header-links">${block.github || ''} · ${block.linkedin || ''}</div>
        </div>`;

    case 'section_header':
      return `<div class="sc-section-header">${block.title || ''}</div>`;

    case 'summary':
      return `<p class="sc-summary">${block.text || ''}</p>`;

    case 'experience_item':
      return `
        <div class="sc-item-row">
          <div>
            <span class="sc-item-title">${block.role || ''}</span>
            <span class="sc-item-sub">— ${block.company || ''}</span>
          </div>
          <span class="sc-item-date">${block.duration || ''}</span>
        </div>`;

    case 'education_item':
      return `
        <div class="sc-item-row">
          <div>
            <span class="sc-item-title">${block.degree || ''}</span>
            <span class="sc-item-sub">— ${block.institution || ''}</span>
          </div>
          <span class="sc-item-date">${block.year || ''}</span>
        </div>`;

    case 'project_item':
      return `
        <div class="sc-project-row">
          <span class="sc-project-name">${block.name || ''}</span>
          <span class="sc-project-tech">${(block.technologies || []).join(' · ')}</span>
        </div>`;

    case 'skills':
      return `
        <div class="sc-skills">
          ${(block.items || []).map(s => `<span class="sc-skill-tag">${s}</span>`).join('')}
        </div>`;

    case 'publication_item':
      return `
        <div class="sc-pub">
          <span class="sc-pub-title">${block.title || ''}</span>
          <span class="sc-pub-venue">— ${block.venue || ''}</span>
        </div>`;

    case 'bullet':
      return `
        <div class="sc-bullet">
          ${block.isContinuation ? '<span class="sc-bullet-dot" style="visibility:hidden">▸</span>' : '<span class="sc-bullet-dot">▸</span>'}
          <span class="sc-bullet-text">${block.text || ''}</span>
        </div>`;

    default:
      return '';
  }
}

export const singleColumnConfig = {
  name: 'singleColumn',
  pageConfig,
  contentHeight,
  contentWidth,
  cssText: singleColumnStyles,
  renderBlockHTML,
};
