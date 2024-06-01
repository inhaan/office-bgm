import { useCallback, useEffect, useState } from "react";

interface UseFullscreenProps {
    fullscreenRef: React.RefObject<HTMLElement>;
}

export function useFullscreen({ fullscreenRef }: UseFullscreenProps) {
    const [isFullscreen, setIsFullscreen] = useState(
        typeof document !== "undefined" && document.fullscreenElement ? true : false
    );

    const onToggleFullScreen = useCallback(() => {
        if (isFullscreen) {
            document.exitFullscreen();
        } else {
            fullscreenRef.current?.requestFullscreen();
        }
    }, [isFullscreen, fullscreenRef]);

    useEffect(() => {
        const onFullScreenChange = () => {
            setIsFullscreen(document.fullscreenElement ? true : false);
        };

        document.addEventListener("fullscreenchange", onFullScreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", onFullScreenChange);
        };
    }, []);

    return { isFullscreen, onToggleFullScreen };
}
