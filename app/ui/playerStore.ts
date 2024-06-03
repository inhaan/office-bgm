import { create } from "zustand";
import { persist } from "zustand/middleware";
import bgm from "@/app/lib/bgm.json";
import _ from "lodash";

interface PlayerState {
    displayClock: boolean;
    setDisplayClock: (displayClock: boolean) => void;

    clockPosition: { x: number; y: number };
    setClockPosition: (position: { x: number; y: number }) => void;

    ellapsedPosition: { x: number; y: number };
    setEllapsedPosition: (position: { x: number; y: number }) => void;

    displayEllapsed: boolean;
    setDisplayEllapsed: (displayEllapsed: boolean) => void;

    displayCategory: boolean;
    setDisplayCategory: (displayCategory: boolean) => void;

    selectedCategories: string[];
    selectCategories: (ids: string[]) => void;

    likes: string[];
    toggleLike: (id: string) => void;

    currentBGMIndex: number;
    cachedBGMList?: string[];
    getBGMList: () => string[];
    nextBGM: () => void;
    previousBGM: () => void;
    getCurrentBGM: () => string;

    closeInfoToastEver: boolean;
    getCloseInfoToastEver: () => boolean;
    setCloseInfoToastEver: (closeInfoToastEver: boolean) => void;

    alarmInstallEver: boolean;
    getAlarmInstallEver: () => boolean;
    setAlarmInstallEver: (alarmInstallEver: boolean) => void;
}

const initialSelectedCategories = bgm.map(({ category }) => category);
let prevSelectedCategories: string[] = [];

export const usePlayerStore = create<PlayerState>()(
    persist(
        (set, get) => ({
            displayClock: true,
            setDisplayClock: (displayClock: boolean) => set({ displayClock }),

            clockPosition: { x: 0.8, y: 0.1 },
            setClockPosition: (clockPosition: { x: number; y: number }) => set({ clockPosition }),

            displayEllapsed: true,
            setDisplayEllapsed: (displayEllapsed: boolean) => set({ displayEllapsed }),

            ellapsedPosition: { x: 0.05, y: 0.1 },
            setEllapsedPosition: (ellapsedPosition: { x: number; y: number }) => set({ ellapsedPosition }),

            displayCategory: false,
            setDisplayCategory: (displayCategory: boolean) => set({ displayCategory }),

            selectedCategories: initialSelectedCategories,
            selectCategories: (ids: string[]) => {
                set({ selectedCategories: ids, currentBGMIndex: 0 });
            },

            likes: [],
            toggleLike: (id: string) => {
                set((state) => {
                    const likes = state.likes.includes(id)
                        ? state.likes.filter((like) => like !== id)
                        : [...state.likes, id];
                    return { likes };
                });
            },

            cachedBGMList: undefined,
            getBGMList: () => {
                const cachedBGMList = get().cachedBGMList;
                if (cachedBGMList && _.isEqual(prevSelectedCategories, get().selectedCategories)) {
                    return cachedBGMList;
                }
                const BGMList = shuffleBGMList(get().selectedCategories, get().likes);
                prevSelectedCategories = get().selectedCategories;
                set({ cachedBGMList: BGMList });
                return BGMList;
            },
            currentBGMIndex: 0,
            nextBGM: () => {
                set((state) => {
                    const nextIndex = (state.currentBGMIndex + 1) % state.getBGMList().length;
                    return { currentBGMIndex: nextIndex };
                });
            },
            previousBGM: () => {
                set((state) => {
                    const nextIndex =
                        (state.currentBGMIndex - 1 + state.getBGMList().length) % state.getBGMList().length;
                    return { currentBGMIndex: nextIndex };
                });
            },
            getCurrentBGM: () => {
                return get().getBGMList()[get().currentBGMIndex];
            },

            closeInfoToastEver: false,
            getCloseInfoToastEver: () => get().closeInfoToastEver,
            setCloseInfoToastEver: (closeInfoToastEver: boolean) => set({ closeInfoToastEver }),

            alarmInstallEver: false,
            getAlarmInstallEver: () => get().alarmInstallEver,
            setAlarmInstallEver: (alarmInstallEver: boolean) => set({ alarmInstallEver }),
        }),
        {
            name: "player-storage",
            partialize: (state) =>
                _.pick(state, [
                    "displayClock",
                    "displayEllapsed",
                    "selectedCategories",
                    "clockPosition",
                    "ellapsedPosition",
                    "likes",
                    "closeInfoToastEver",
                    "alarmInstallEver",
                ]),
        }
    )
);

/** 선택된 카테고리에 해당하는 BGM 리스트를 섞어서 반환 */
function shuffleBGMList(selectedCategories: string[], likes: string[]) {
    const bgmList = bgm
        .filter(({ category }) => selectedCategories.includes(category))
        .map(({ videos }) => videos)
        .flat();

    // Favorites 카테고리가 선택되어 있으면 좋아요한 BGM을 추가
    if (selectedCategories.includes("Favorites")) {
        bgmList.push(...likes);
    }

    // BGM 리스트가 비어있으면 전체 BGM을 추가
    if (bgmList.length === 0) {
        bgmList.push(...bgm.map(({ videos }) => videos).flat());
    }

    return _.shuffle(_.uniq(bgmList));
}
