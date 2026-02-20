import React from 'react';

// LEFT sidebar block types: header, skills, education, publications, summary
const LEFT_TYPES = new Set(['header', 'section_header_left', 'skills', 'education_item', 'publication_item', 'summary']);

export default function BlockRenderer({ block, column }) {
    if (column === 'left') {
        return <LeftBlock block={block} />;
    }
    return <RightBlock block={block} />;
}

function LeftBlock({ block }) {
    switch (block.type) {
        case 'header':
            return (
                <div>
                    <div className="tc-header-name">{block.name}</div>
                    <div className="tc-header-designation">{block.designation}</div>
                    <div className="tc-header-divider" />
                    <div className="tc-header-contact">
                        {block.email}<br />
                        {block.phone}<br />
                        {block.address}<br />
                        {block.github}<br />
                        {block.linkedin}
                    </div>
                </div>
            );

        case 'section_header':
            return <div className="tc-left-section-header">{block.title}</div>;

        case 'summary':
            return <p className="tc-left-summary">{block.text}</p>;

        case 'skills':
            return (
                <div className="tc-skills">
                    {(block.items || []).map((skill, i) => (
                        <span key={i} className="tc-skill-tag">{skill}</span>
                    ))}
                </div>
            );

        case 'education_item':
            return (
                <div className="tc-edu">
                    <div className="tc-edu-degree">{block.degree}</div>
                    <div className="tc-edu-inst">{block.institution}</div>
                    <div className="tc-edu-year">{block.year}</div>
                </div>
            );

        case 'publication_item':
            return (
                <div className="tc-pub">
                    <div className="tc-pub-title">{block.title}</div>
                    <div className="tc-pub-venue">{block.venue}</div>
                </div>
            );

        case 'bullet':
            return (
                <div className="tc-left-bullet">
                    <span className="tc-left-bullet-dot" style={block.isContinuation ? { visibility: 'hidden' } : undefined}>▸</span>
                    <span className="tc-left-bullet-text">{block.text}</span>
                </div>
            );

        default:
            return null;
    }
}

function RightBlock({ block }) {
    switch (block.type) {
        case 'section_header':
            return <div className="tc-right-section-header">{block.title}</div>;

        case 'summary':
            return <p className="tc-right-summary">{block.text}</p>;

        case 'experience_item':
            return (
                <div className="tc-item-row">
                    <div>
                        <span className="tc-item-title">{block.role}</span>
                        <span className="tc-item-sub">— {block.company}</span>
                    </div>
                    <span className="tc-item-date">{block.duration}</span>
                </div>
            );

        case 'education_item':
            return (
                <div className="tc-item-row">
                    <div>
                        <span className="tc-item-title">{block.degree}</span>
                        <span className="tc-item-sub">— {block.institution}</span>
                    </div>
                    <span className="tc-item-date">{block.year}</span>
                </div>
            );

        case 'project_item':
            return (
                <div className="tc-project-row">
                    <span className="tc-project-name">{block.name}</span>
                    <span className="tc-project-tech">{(block.technologies || []).join(' · ')}</span>
                </div>
            );

        case 'skills':
            return (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '6px 0' }}>
                    {(block.items || []).map((skill, i) => (
                        <span key={i} style={{ background: '#f0f4ff', color: '#4c51bf', borderRadius: '4px', padding: '3px 10px', fontSize: '11.5px' }}>{skill}</span>
                    ))}
                </div>
            );

        case 'publication_item':
            return (
                <div className="tc-pub" style={{ color: '#2d3748' }}>
                    <span style={{ fontSize: '12.5px' }}>{block.title}</span>
                    <span style={{ fontSize: '11.5px', color: '#a0aec0', marginLeft: '6px' }}>— {block.venue}</span>
                </div>
            );

        case 'bullet':
            return (
                <div className="tc-bullet">
                    <span className="tc-bullet-dot" style={block.isContinuation ? { visibility: 'hidden' } : undefined}>▸</span>
                    <span className="tc-bullet-text">{block.text}</span>
                </div>
            );

        default:
            return null;
    }
}
