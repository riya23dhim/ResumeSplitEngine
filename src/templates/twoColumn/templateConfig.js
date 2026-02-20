import { twoColumnStyles } from './styles';

// Page dimensions — must match styles.js CSS exactly
const pageConfig = {
  width: 794,
  height: 1123,
  // Two-column has no outer padding — layout is flex with sidebar + main
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
};

// Right column dimensions (where most content goes)
const rightColumnConfig = {
  paddingTop: 40,
  paddingBottom: 40,
  paddingLeft: 32,
  paddingRight: 32,
};

// Left sidebar dimensions
const leftColumnConfig = {
  width: 260,
  paddingTop: 40,
  paddingBottom: 40,
  paddingLeft: 24,
  paddingRight: 24,
};

// Content heights for each column
const rightContentWidth = pageConfig.width - leftColumnConfig.width - rightColumnConfig.paddingLeft - rightColumnConfig.paddingRight;
const leftContentWidth = leftColumnConfig.width - leftColumnConfig.paddingLeft - leftColumnConfig.paddingRight;
const contentHeight = pageConfig.height - rightColumnConfig.paddingTop - rightColumnConfig.paddingBottom;

// For the paginator — use right column width as default (most content goes there)
const contentWidth = rightContentWidth;

/**
 * Renders a block to HTML using the same CSS class names as BlockRenderer.js
 * Uses right-column classes by default. For left-column measurement,
 * the caller can use measureLeft() or pass column context.
 */
function renderBlockHTML(block, column = 'right') {
  if (column === 'left') return renderLeftBlockHTML(block);
  return renderRightBlockHTML(block);
}

function renderLeftBlockHTML(block) {
  switch (block.type) {
    case 'header':
      return `
        <div>
          <div class="tc-header-name">${block.name || ''}</div>
          <div class="tc-header-designation">${block.designation || ''}</div>
          <div class="tc-header-divider"></div>
          <div class="tc-header-contact">
            ${block.email || ''}<br>
            ${block.phone || ''}<br>
            ${block.address || ''}<br>
            ${block.github || ''}<br>
            ${block.linkedin || ''}
          </div>
        </div>`;

    case 'section_header':
      return `<div class="tc-left-section-header">${block.title || ''}</div>`;

    case 'summary':
      return `<p class="tc-left-summary">${block.text || ''}</p>`;

    case 'skills':
      return `
        <div class="tc-skills">
          ${(block.items || []).map(s => `<span class="tc-skill-tag">${s}</span>`).join('')}
        </div>`;

    case 'education_item':
      return `
        <div class="tc-edu">
          <div class="tc-edu-degree">${block.degree || ''}</div>
          <div class="tc-edu-inst">${block.institution || ''}</div>
          <div class="tc-edu-year">${block.year || ''}</div>
        </div>`;

    case 'publication_item':
      return `
        <div class="tc-pub">
          <div class="tc-pub-title">${block.title || ''}</div>
          <div class="tc-pub-venue">${block.venue || ''}</div>
        </div>`;

    case 'bullet':
      return `
        <div class="tc-left-bullet">
          ${block.isContinuation ? '<span class="tc-left-bullet-dot" style="visibility:hidden">▸</span>' : '<span class="tc-left-bullet-dot">▸</span>'}
          <span class="tc-left-bullet-text">${block.text || ''}</span>
        </div>`;

    default:
      return '';
  }
}

function renderRightBlockHTML(block) {
  switch (block.type) {
    case 'section_header':
      return `<div class="tc-right-section-header">${block.title || ''}</div>`;

    case 'summary':
      return `<p class="tc-right-summary">${block.text || ''}</p>`;

    case 'experience_item':
      return `
        <div class="tc-item-row">
          <div>
            <span class="tc-item-title">${block.role || ''}</span>
            <span class="tc-item-sub">— ${block.company || ''}</span>
          </div>
          <span class="tc-item-date">${block.duration || ''}</span>
        </div>`;

    case 'education_item':
      return `
        <div class="tc-item-row">
          <div>
            <span class="tc-item-title">${block.degree || ''}</span>
            <span class="tc-item-sub">— ${block.institution || ''}</span>
          </div>
          <span class="tc-item-date">${block.year || ''}</span>
        </div>`;

    case 'project_item':
      return `
        <div class="tc-project-row">
          <span class="tc-project-name">${block.name || ''}</span>
          <span class="tc-project-tech">${(block.technologies || []).join(' · ')}</span>
        </div>`;

    case 'skills':
      return `
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin:6px 0;">
          ${(block.items || []).map(s => `<span style="background:#f0f4ff;color:#4c51bf;border-radius:4px;padding:3px 10px;font-size:11.5px;">${s}</span>`).join('')}
        </div>`;

    case 'publication_item':
      return `
        <div class="tc-pub" style="color:#2d3748;">
          <span style="font-size:12.5px;">${block.title || ''}</span>
          <span style="font-size:11.5px;color:#a0aec0;margin-left:6px;">— ${block.venue || ''}</span>
        </div>`;

    case 'bullet':
      return `
        <div class="tc-bullet">
          ${block.isContinuation ? '<span class="tc-bullet-dot" style="visibility:hidden">▸</span>' : '<span class="tc-bullet-dot">▸</span>'}
          <span class="tc-bullet-text">${block.text || ''}</span>
        </div>`;

    default:
      return '';
  }
}

export const twoColumnConfig = {
  name: 'twoColumn',
  pageConfig,
  contentHeight,
  contentWidth,        // right column width (default for paginator)
  leftContentWidth,
  rightContentWidth,
  cssText: twoColumnStyles,
  renderBlockHTML,
};
