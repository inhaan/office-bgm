/** position 기준이 되는 부모 요소 조회 */
export function findPositioningParent(element: HTMLElement): HTMLElement | null {
    let parent = element.parentElement;

    while (parent) {
        const style = window.getComputedStyle(parent);
        if (["relative", "absolute", "fixed"].includes(style.position)) {
            return parent;
        }
        parent = parent.parentElement;
    }

    return null;
}
