import React from 'react';
import BlockRenderer from './BlockRenderer';
import { twoColumnStyles } from './styles';

// Block types that belong in the LEFT sidebar
const LEFT_BLOCK_TYPES = new Set([
    'header',
    'skills',
    'education_item',
    'publication_item',
]);

// Section headers that introduce left-column sections
const LEFT_SECTION_TITLES = new Set(['Skills', 'Education', 'Publications']);

function splitBlocks(blocks) {
    const left = [];
    const right = [];
    let currentSide = 'right'; // default

    blocks.forEach(block => {
        if (block.type === 'header') {
            left.push(block);
            return;
        }

        if (block.type === 'section_header') {
            if (LEFT_SECTION_TITLES.has(block.title)) {
                currentSide = 'left';
                left.push(block);
            } else {
                currentSide = 'right';
                right.push(block);
            }
            return;
        }

        if (LEFT_BLOCK_TYPES.has(block.type)) {
            left.push(block);
        } else if (currentSide === 'left') {
            left.push(block);
        } else {
            right.push(block);
        }
    });

    return { left, right };
}

export default function Page({ blocks, pageNumber }) {
    const { left, right } = splitBlocks(blocks);

    return (
        <>
            <style>{twoColumnStyles}</style>
            <div className="tc-page">
                <div className="tc-left">
                    {left.map((block, i) => (
                        <BlockRenderer key={i} block={block} column="left" />
                    ))}
                </div>
                <div className="tc-right">
                    {right.map((block, i) => (
                        <BlockRenderer key={i} block={block} column="right" />
                    ))}
                </div>
            </div>
        </>
    );
}
