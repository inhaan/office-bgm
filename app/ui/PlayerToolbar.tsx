"use client";

import { memo, useCallback, useState } from "react";
import { usePlayerStore } from "./playerStore";
import { useFullscreen } from "./hooks/useFullscreen";
import { FaForwardStep, FaBackwardStep, FaExpand, FaCompress, FaRegHeart, FaHeart } from "react-icons/fa6";
import clsx from "clsx";

interface PlayerToolbarProps {
    fullscreenRef: React.RefObject<HTMLElement>;
}

export const PlayerToolbar: React.FC<PlayerToolbarProps> = memo(function PlayerToolbar({ fullscreenRef }) {
    const { nextBGM, previousBGM, likes, toggleLike, getCurrentBGM } = usePlayerStore();
    const { isFullscreen, onToggleFullScreen } = useFullscreen({ fullscreenRef });
    const isLiked = likes.includes(getCurrentBGM());
    const [isAnimating, setIsAnimating] = useState(false);

    const onClickBackward = useCallback(() => {
        previousBGM();
    }, [previousBGM]);

    const onClickForward = useCallback(() => {
        nextBGM();
    }, [nextBGM]);

    const onToggleLike = () => {
        setIsAnimating(true);
        toggleLike(getCurrentBGM());
        setTimeout(() => setIsAnimating(false), 600); // 애니메이션 지속 시간과 일치시킵니다
    };

    return (
        <div className="flex flex-row justify-evenly items-center bg-black py-1 px-2 sm:flex-col sm:py-5">
            {isFullscreen ? (
                <FaCompress className="size-6 text-white cursor-pointer" onClick={onToggleFullScreen} />
            ) : (
                <FaExpand className="size-6 text-white cursor-pointer" onClick={onToggleFullScreen} />
            )}
            {isLiked ? (
                <FaHeart
                    className={clsx("size-6 text-rose-600 cursor-pointer", { "heart-animation": isAnimating })}
                    onClick={onToggleLike}
                />
            ) : (
                <FaRegHeart
                    className={clsx("size-6 text-white cursor-pointer", { "heart-animation": isAnimating })}
                    onClick={onToggleLike}
                />
            )}
            <FaBackwardStep className="size-6 text-white cursor-pointer" onClick={onClickBackward} />
            <FaForwardStep className="size-6 text-white cursor-pointer" onClick={onClickForward} />
        </div>
    );
});
