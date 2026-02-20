import React from 'react';
import BlockRenderer from './BlockRenderer';
import { singleColumnStyles } from './styles';

export default function Page({ blocks, pageNumber }) {
    return (
        <>
            <style>{singleColumnStyles}</style>
            <div className="sc-page">
                {blocks.map((block, index) => (
                    <BlockRenderer key={index} block={block} />
                ))}
            </div>
        </>
    );
}
