import dayjs from "dayjs";
import { memo, useEffect, useRef, useState } from "react";
import { usePlayerStore } from "../playerStore";
import { useDraggable } from "inhan-ui";
import { useDynamicFont } from "../hooks/useDynamicFont";

interface EllapsedWidgetProps {
    startTime: number;
}

export const EllapsedWidget: React.FC<EllapsedWidgetProps> = memo(function EllapsedWidget({ startTime }) {
    const [ellpased, setEllapsed] = useState(() => Date.now() - startTime);
    const { ellapsedPosition, setEllapsedPosition } = usePlayerStore();
    const draggableRef = useRef<HTMLDivElement>(null);
    const ellapsedRef = useRef<HTMLDivElement>(null);

    useDynamicFont({ draggableRef, fontRef: ellapsedRef });

    useDraggable({
        targetRef: draggableRef,
        position: ellapsedPosition,
        onChangePosition: setEllapsedPosition,
    });

    // 시간 업데이트
    useEffect(() => {
        const intervalId = setInterval(() => {
            setEllapsed(Date.now() - startTime);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [startTime]);

    return (
        <div ref={draggableRef} className="absolute flex items-center opacity-80 cursor-pointer hover:opacity-90">
            <div ref={ellapsedRef} className="text-white text-3xl">
                {dayjs.duration(ellpased).format("HH:mm:ss")}
            </div>
        </div>
    );
});
