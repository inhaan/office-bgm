export function isMobileDevice() {
    if (typeof window === "undefined") {
        return false;
    }
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    return mediaQuery.matches;
}
