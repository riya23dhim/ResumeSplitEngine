export function canSplit(block) {
    const splittableTypes = ['summary', 'bullet'];

    return splittableTypes.includes(block.type);
}
