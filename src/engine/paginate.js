import { measure, measureAll } from './measure';
import { splitItem } from './splitItem';
import { canSplit } from './rules';
//componets to split data in pages
export function paginate(blocks, templateConfig) {
    const { contentHeight } = templateConfig;

    // Pre-measure all blocks using  measure all and use array of heights to decide 
    const blockHeights = measureAll(blocks, templateConfig);

    const pages = [];
    let currentPage = [];
    let currentHeight = 0;

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];

        const blockHeight = blockHeights[i];

        // Block fits on current page — just add it
        if (currentHeight + blockHeight <= contentHeight) {
            currentPage.push(block);
            currentHeight += blockHeight;
            continue;
        }

        // Block doesn't fit  try to split if splittable
        if (canSplit(block)) {

            const remaining = contentHeight - currentHeight;

            // Only attempt split if there's meaningful space left 20px 
            if (remaining > 20) {
                const { firstPart, secondPart } = splitItem(block, remaining, templateConfig);
                //split in two section for curent and next page and then keep first section in current page push it in pages
                //keep second section new page and calulate its height
                if (firstPart && secondPart) {
                    currentPage.push(firstPart);
                    pages.push(currentPage);
                    currentPage = [secondPart];
                    currentHeight = measure(secondPart, templateConfig);
                    continue;
                }
            }
        }

        // Block doesn't fit and can't be split (or split failed)
        // Push current page and start new page with this block
        if (currentPage.length > 0) {
            pages.push(currentPage);
        }
        currentPage = [block];
        currentHeight = blockHeight;
    }

    if (currentPage.length) pages.push(currentPage);

    return pages;
}
