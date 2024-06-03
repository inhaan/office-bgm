import { memo, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { usePlayerStore } from "../playerStore";
import { useDraggable } from "../inhan-ui";
import { useDynamicFont } from "../hooks/useDynamicFont";

export const ClockWidget: React.FC = memo(function ClockWidget() {
    const [time, setTime] = useState(() => Date.now());
    const { clockPosition, setClockPosition } = usePlayerStore();
    const draggableRef = useRef<HTMLDivElement>(null);
    const clockRef = useRef<HTMLDivElement>(null);

    useDynamicFont({ draggableRef, fontRef: clockRef });

    useDraggable({
        targetRef: draggableRef,
        position: clockPosition,
        onChangePosition: setClockPosition,
    });

    // 시간 업데이트
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now());
        }, 1000 * 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={draggableRef} className="absolute flex items-center opacity-80 cursor-pointer hover:opacity-90">
            <div ref={clockRef} className="text-white whitespace-nowrap" suppressHydrationWarning>
                {dayjs(time).format("A hh:mm")}
            </div>
        </div>
    );
});
