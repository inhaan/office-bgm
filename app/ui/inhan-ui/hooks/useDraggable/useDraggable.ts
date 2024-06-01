import { useCallback, useEffect } from "react";
import { findPositioningParent } from "../../utils/dom_util";
import { useWindowSize } from "../useWindowSize";

interface UseDraggableProps {
    targetRef: React.RefObject<HTMLElement>;
    position: { x: number; y: number };
    onChangePosition?: (position: { x: number; y: number }) => void;
}

export function useDraggable({ targetRef, position, onChangePosition }: UseDraggableProps) {
    const { width: windowWidth } = useWindowSize();

    const setTargetPosition = useCallback(
        (x: number, y: number) => {
            const target = targetRef.current;
            if (!target) {
                return;
            }
            const container = findPositioningParent(target);
            if (!container) {
                return;
            }

            // 경계를 벗어나지 않도록 조정
            const newX = Math.max(0, Math.min(container.clientWidth - target.clientWidth, x * container.clientWidth));
            const newY = Math.max(
                0,
                Math.min(container.clientHeight - target.clientHeight, y * container.clientHeight)
            );

            target.style.left = `${newX}px`;
            target.style.top = `${newY}px`;
        },
        [targetRef]
    );

    // 위치 동기화
    useEffect(() => {
        const target = targetRef.current;
        if (!target) {
            return;
        }
        setTargetPosition(position.x, position.y);
    }, [targetRef, position, setTargetPosition, windowWidth]);

    useEffect(() => {
        const target = targetRef.current;
        if (!target) {
            return;
        }
        const container = findPositioningParent(target);
        if (!container) {
            return;
        }

        let initialX: number, initialY: number;
        let rect: DOMRect;

        const preventSiblingsPointerEvents = (value: boolean) => {
            Array.from(container.children)
                .filter((child) => child !== target)
                .forEach((child) => {
                    if (child instanceof HTMLElement) {
                        child.style.pointerEvents = value ? "none" : "auto";
                    }
                });
        };

        const mouseDownHandler = (e: MouseEvent | TouchEvent) => {
            e.preventDefault();
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

            initialX = clientX;
            initialY = clientY;

            rect = target.getBoundingClientRect();

            // 형제 요소의 이벤트를 차단
            preventSiblingsPointerEvents(true);

            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
            document.addEventListener("touchmove", mouseMoveHandler);
            document.addEventListener("touchend", mouseUpHandler);
        };

        const mouseMoveHandler = (e: MouseEvent | TouchEvent) => {
            e.preventDefault();
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

            const dx = clientX - initialX;
            const dy = clientY - initialY;

            let newX = (dx + (rect.left - container.getBoundingClientRect().left)) / container.clientWidth;
            let newY = (dy + (rect.top - container.getBoundingClientRect().top)) / container.clientHeight;

            setTargetPosition(newX, newY);
            onChangePosition?.({ x: newX, y: newY });
        };

        const mouseUpHandler = () => {
            // 형제 요소의 이벤트 차단 해제
            preventSiblingsPointerEvents(false);

            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
            document.removeEventListener("touchmove", mouseMoveHandler);
            document.removeEventListener("touchend", mouseUpHandler);
        };

        target.addEventListener("mousedown", mouseDownHandler);
        target.addEventListener("touchstart", mouseDownHandler);

        return () => {
            target.removeEventListener("mousedown", mouseDownHandler);
            target.removeEventListener("touchstart", mouseDownHandler);
        };
    }, [onChangePosition, setTargetPosition, targetRef]);
}
