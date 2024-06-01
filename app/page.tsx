"use client";

import { Baloo_2 } from "next/font/google";
import { Modal } from "./ui/inhan-ui";
import clsx from "clsx";
import { CategoryWidget, ClockWidget, EllapsedWidget } from "./ui/widgets";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useCallback, useRef } from "react";
import { usePlayerStore } from "./ui/playerStore";
import { BGMPlayer } from "./ui/BGMPlayer";
import { PlayerToolbar } from "./ui/PlayerToolbar";
import { FaGithub } from "react-icons/fa6";
import { ViewInfoToast } from "./ui/ViewInfoToast";
import { HeaderToolbar } from "./ui/HeaderToolbar";

dayjs.extend(duration);
const baloo = Baloo_2({ subsets: ["latin"], weight: ["400", "800"] });

export default function Home() {
    const startTime = useRef(Date.now());
    const playerContainerRef = useRef<HTMLDivElement>(null);
    const { displayClock, displayEllapsed, displayCategory, setDisplayCategory } = usePlayerStore();

    const onCloseCategory = useCallback(() => {
        setDisplayCategory(false);
    }, [setDisplayCategory]);

    const onApplyCategory = useCallback(() => {
        setDisplayCategory(false);
    }, [setDisplayCategory]);

    return (
        <div className="bg-white flex justify-center items-start w-full h-full sm:items-center">
            <div className="w-full h-full max-w-5xl max-h-max flex flex-col sm:w-4/5 sm:max-h-[600px]">
                {/* 헤더 */}
                <header className={clsx("flex flex-col-reverse items-center p-2 sm:p-5 sm:flex-col", baloo.className)}>
                    <div className="w-full flex flex-col justify-between sm:flex-row">
                        <div className="flex items-center gap-2 font-extrabold text-xl self-start sm:text-2xl">
                            Office BGM
                        </div>
                        <div className="flex self-end">
                            <HeaderToolbar />
                        </div>
                    </div>
                </header>

                {/* 컨텐츠 */}
                <main
                    className={clsx(
                        "flex bg-white w-full h-full flex-col max-h-[400px] sm:max-h-none sm:flex-row ",
                        baloo.className
                    )}
                >
                    <div className="relative w-full h-full rounded-none overflow-hidden flex bg-black mt-0.5 min-h-[185px] max-h-[400px] sm:rounded-lg sm:min-h-0 sm:max-h-full">
                        <div ref={playerContainerRef} className="absolute top-0 left-0 w-full h-full">
                            <div className="relative w-full h-full flex flex-col justify-between sm:flex-row">
                                {/* 플레이어 */}
                                <div className="relative w-full h-full">
                                    {displayClock && <ClockWidget />}
                                    {displayEllapsed && <EllapsedWidget startTime={startTime.current} />}
                                    <BGMPlayer />
                                </div>

                                {/* 툴바 */}
                                <PlayerToolbar fullscreenRef={playerContainerRef} />
                            </div>
                        </div>
                    </div>
                </main>

                {/* 모달 */}
                <Modal title="Category" isOpen={displayCategory} onClose={onCloseCategory}>
                    <CategoryWidget onApply={onApplyCategory} />
                </Modal>

                {/* 토스트 */}
                <ViewInfoToast />

                {/* 푸터 */}
                <footer className="flex justify-end w-full pt-5 text-xs text-gray-400">
                    <div className="flex flex-col items-end px-2">
                        <div className="flex space-x-2">
                            <i>@ 2024 </i>
                            <i>developed by inhan</i>
                            <a
                                href="https://github.com/inhaan/office-bgm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base hover:text-gray-600 transition"
                            >
                                <FaGithub />
                            </a>
                        </div>
                        <div>
                            <a href="https://iconscout.com/icons/music" target="_blank">
                                Music
                            </a>{" "}
                            by{" "}
                            <a href="https://iconscout.com/contributors/roundicons-com" target="_blank">
                                Roundicons.com
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
