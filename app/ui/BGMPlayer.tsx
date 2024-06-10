import { memo, useCallback } from "react";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import { usePlayerStore } from "./playerStore";

const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
        autoplay: 1,
        fs: 0,
        loop: 1,
    },
};

export const BGMPlayer = memo(function BGMPlayer() {
    const { getCurrentBGM, nextBGM } = usePlayerStore();
    const currentBGM = getCurrentBGM();

    const onPlayerReady: YouTubeProps["onReady"] = useCallback((event: YouTubeEvent) => {
        event.target.playVideo();
    }, []);

    const onPlayerError: YouTubeProps["onError"] = useCallback(() => {
        nextBGM();
    }, [nextBGM]);

    const onPlayerEnd: YouTubeProps["onEnd"] = useCallback(() => {
        nextBGM();
    }, [nextBGM]);

    return (
        <YouTube
            videoId={currentBGM}
            className="w-full h-full"
            opts={opts}
            onReady={onPlayerReady}
            onError={onPlayerError}
            onEnd={onPlayerEnd}
        />
    );
});
