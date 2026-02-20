export const singleColumnStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .sc-page {
    width: 794px;
    min-height: 1123px;
    height: 1123px;
    overflow: hidden;
    background: #ffffff;
    padding: 48px 56px;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    position: relative;
    box-shadow: 0 4px 32px rgba(0,0,0,0.12);
  }

  /* HEADER */
  .sc-header { margin-bottom: 20px; }
  .sc-header-name { font-size: 28px; font-weight: 700; color: #1a1a2e; letter-spacing: -0.5px; }
  .sc-header-designation { font-size: 14px; color: #667eea; font-weight: 500; margin-top: 3px; }
  .sc-header-contact { font-size: 12px; color: #718096; margin-top: 5px; }
  .sc-header-links { font-size: 12px; color: #718096; margin-top: 2px; }

  /* SECTION HEADER */
  .sc-section-header {
    margin: 18px 0 6px;
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #667eea;
    border-bottom: 1.5px solid #e2e8f0;
    padding-bottom: 4px;
  }

  /* SUMMARY */
  .sc-summary {
    font-size: 12.5px;
    color: #4a5568;
    line-height: 1.65;
    margin: 0 0 4px;
  }

  /* EXPERIENCE / EDUCATION */
  .sc-item-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 10px;
  }
  .sc-item-title { font-size: 13.5px; font-weight: 600; color: #1a1a2e; }
  .sc-item-sub { font-size: 12.5px; color: #718096; margin-left: 6px; }
  .sc-item-date { font-size: 11.5px; color: #a0aec0; white-space: nowrap; }

  /* PROJECT */
  .sc-project-row { margin-top: 9px; }
  .sc-project-name { font-size: 13.5px; font-weight: 600; color: #1a1a2e; }
  .sc-project-tech { font-size: 11px; color: #a0aec0; margin-left: 8px; }

  /* BULLET */
  .sc-bullet {
    display: flex;
    gap: 7px;
    margin-bottom: 3px;
    margin-top: 2px;
  }
  .sc-bullet-dot { color: #667eea; font-size: 11px; margin-top: 3px; flex-shrink: 0; }
  .sc-bullet-text { font-size: 12px; color: #4a5568; line-height: 1.55; }

  /* SKILLS */
  .sc-skills { display: flex; flex-wrap: wrap; gap: 7px; margin: 7px 0 4px; }
  .sc-skill-tag {
    background: #f0f4ff;
    color: #4c51bf;
    border-radius: 4px;
    padding: 3px 11px;
    font-size: 11.5px;
    font-weight: 500;
    border: 1px solid #c3dafe;
  }

  /* PUBLICATION */
  .sc-pub { margin-top: 7px; }
  .sc-pub-title { font-size: 12.5px; color: #2d3748; }
  .sc-pub-venue { font-size: 11.5px; color: #a0aec0; margin-left: 6px; }
`;
