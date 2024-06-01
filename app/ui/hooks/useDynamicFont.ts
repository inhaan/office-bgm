import { useEffect } from "react";
import { findPositioningParent, useWindowSize } from "../inhan-ui";

interface UseDynamicFontProps {
    draggableRef: React.RefObject<HTMLElement>;
    fontRef: React.RefObject<HTMLElement>;
}

export function useDynamicFont({ draggableRef, fontRef }: UseDynamicFontProps) {
    const { width: windowWidth } = useWindowSize();

    useEffect(() => {
        const containerEl = draggableRef.current && findPositioningParent(draggableRef.current);
        if (containerEl) {
            fontRef.current?.style.setProperty("font-size", `${containerEl.clientWidth * 0.045}px`);
        }
    }, [draggableRef, fontRef, windowWidth]);
}
