import { measure } from './measure';

export function splitItem(block, availableHeight, templateConfig) {
    if (!block.text) return {};
    //using binary serach to find the best split point 
    let low = 0;
    let high = block.text.length;
    let best = 0;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        const testBlock = {
            ...block,
            text: block.text.slice(0, mid)
        };
        //testing that it is able to fit in the available height  for the given template
        const height = measure(testBlock, templateConfig);

        if (height <= availableHeight) {
            best = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (!best) return {};

    // erorr fix.  Snap to nearest word boundary  so we don't split mid-word
    const snapped = block.text.lastIndexOf(' ', best);
    if (snapped > 0) best = snapped;

    return {
        firstPart: { ...block, text: block.text.slice(0, best).trimEnd() },
        secondPart: { ...block, text: block.text.slice(best).trimStart(), isContinuation: true }
    };
}
