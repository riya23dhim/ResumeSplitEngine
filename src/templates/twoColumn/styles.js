export const twoColumnStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .tc-page {
    width: 794px;
    min-height: 1123px;
    height: 1123px;
    overflow: hidden;
    background: #ffffff;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    display: flex;
    box-shadow: 0 4px 32px rgba(0,0,0,0.12);
  }

  /* LEFT SIDEBAR */
  .tc-left {
    width: 260px;
    min-height: 1123px;
    background: #1a1a2e;
    padding: 40px 24px;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  /* RIGHT MAIN */
  .tc-right {
    flex: 1;
    padding: 40px 32px;
    box-sizing: border-box;
    overflow: hidden;
  }

  /* LEFT — HEADER */
  .tc-header-name { font-size: 20px; font-weight: 700; color: #ffffff; line-height: 1.2; }
  .tc-header-designation { font-size: 12px; color: #667eea; font-weight: 500; margin-top: 4px; }
  .tc-header-divider { width: 32px; height: 2px; background: #667eea; margin: 10px 0; }
  .tc-header-contact { font-size: 11px; color: #a0aec0; margin-top: 4px; line-height: 1.7; }

  /* LEFT — SECTION HEADER */
  .tc-left-section-header {
    margin: 18px 0 6px;
    font-size: 9.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #667eea;
    border-bottom: 1px solid #2d3748;
    padding-bottom: 4px;
  }

  /* LEFT — SKILLS */
  .tc-skills { display: flex; flex-direction: column; gap: 5px; margin: 4px 0; }
  .tc-skill-tag {
    background: #2d3748;
    color: #e2e8f0;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 11px;
    font-weight: 400;
  }

  /* LEFT — EDUCATION */
  .tc-edu { margin-top: 8px; }
  .tc-edu-degree { font-size: 12px; font-weight: 600; color: #e2e8f0; }
  .tc-edu-inst { font-size: 11px; color: #a0aec0; margin-top: 1px; }
  .tc-edu-year { font-size: 11px; color: #667eea; margin-top: 1px; }

  /* LEFT — PUBLICATION */
  .tc-pub { margin-top: 7px; }
  .tc-pub-title { font-size: 11px; color: #e2e8f0; line-height: 1.4; }
  .tc-pub-venue { font-size: 10.5px; color: #667eea; margin-top: 1px; }

  /* LEFT — BULLET */
  .tc-left-bullet { display: flex; gap: 6px; margin-bottom: 3px; }
  .tc-left-bullet-dot { color: #667eea; font-size: 10px; margin-top: 3px; flex-shrink: 0; }
  .tc-left-bullet-text { font-size: 11px; color: #a0aec0; line-height: 1.5; }

  /* LEFT — SUMMARY */
  .tc-left-summary { font-size: 11.5px; color: #a0aec0; line-height: 1.6; margin: 0 0 4px; }

  /* RIGHT — SECTION HEADER */
  .tc-right-section-header {
    margin: 16px 0 6px;
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #2d3748;
    border-bottom: 1.5px solid #e2e8f0;
    padding-bottom: 4px;
  }

  /* RIGHT — EXPERIENCE / PROJECT */
  .tc-item-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 10px;
  }
  .tc-item-title { font-size: 13px; font-weight: 600; color: #1a1a2e; }
  .tc-item-sub { font-size: 12px; color: #718096; margin-left: 5px; }
  .tc-item-date { font-size: 11px; color: #a0aec0; white-space: nowrap; }

  /* RIGHT — PROJECT */
  .tc-project-row { margin-top: 9px; }
  .tc-project-name { font-size: 13px; font-weight: 600; color: #1a1a2e; }
  .tc-project-tech { font-size: 10.5px; color: #a0aec0; margin-left: 7px; }

  /* RIGHT — BULLET */
  .tc-bullet { display: flex; gap: 7px; margin-bottom: 3px; margin-top: 2px; }
  .tc-bullet-dot { color: #667eea; font-size: 10px; margin-top: 3px; flex-shrink: 0; }
  .tc-bullet-text { font-size: 11.5px; color: #4a5568; line-height: 1.55; }

  /* RIGHT — SUMMARY */
  .tc-right-summary { font-size: 12.5px; color: #4a5568; line-height: 1.65; margin: 0 0 4px; }
`;
