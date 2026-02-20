export function canSplit(block) {
    //check if its splitable only heavy summay and bullet point can be splitable else move the block to net page

    const splittableTypes = ['summary', 'bullet'];

    return splittableTypes.includes(block.type);
}
