import React from 'react';

export default function BlockRenderer({ block }) {
    switch (block.type) {

        case 'header':
            return (
                <div className="sc-header">
                    <div className="sc-header-name">{block.name}</div>
                    <div className="sc-header-designation">{block.designation}</div>
                    <div className="sc-header-contact">{block.email} · {block.phone} · {block.address}</div>
                    <div className="sc-header-links">{block.github} · {block.linkedin}</div>
                </div>
            );

        case 'section_header':
            return <div className="sc-section-header">{block.title}</div>;

        case 'summary':
            return <p className="sc-summary">{block.text}</p>;

        case 'experience_item':
            return (
                <div className="sc-item-row">
                    <div>
                        <span className="sc-item-title">{block.role}</span>
                        <span className="sc-item-sub">— {block.company}</span>
                    </div>
                    <span className="sc-item-date">{block.duration}</span>
                </div>
            );

        case 'education_item':
            return (
                <div className="sc-item-row">
                    <div>
                        <span className="sc-item-title">{block.degree}</span>
                        <span className="sc-item-sub">— {block.institution}</span>
                    </div>
                    <span className="sc-item-date">{block.year}</span>
                </div>
            );

        case 'project_item':
            return (
                <div className="sc-project-row">
                    <span className="sc-project-name">{block.name}</span>
                    <span className="sc-project-tech">{(block.technologies || []).join(' · ')}</span>
                </div>
            );

        case 'skills':
            return (
                <div className="sc-skills">
                    {(block.items || []).map((skill, i) => (
                        <span key={i} className="sc-skill-tag">{skill}</span>
                    ))}
                </div>
            );

        case 'publication_item':
            return (
                <div className="sc-pub">
                    <span className="sc-pub-title">{block.title}</span>
                    <span className="sc-pub-venue">— {block.venue}</span>
                </div>
            );

        case 'bullet':
            return (
                <div className="sc-bullet">
                    <span className="sc-bullet-dot" style={block.isContinuation ? { visibility: 'hidden' } : undefined}>▸</span>
                    <span className="sc-bullet-text">{block.text}</span>
                </div>
            );

        default:
            return null;
    }
}
