import { useEffect, useState } from "react";
import { usePlayerStore } from "../playerStore";
import { wait } from "../inhan-ui";

export function useInstallApp() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const { getAlarmInstallEver, setAlarmInstallEver } = usePlayerStore();

    // beforeinstallprompt 이벤트를 감지
    useEffect(() => {
        if (getAlarmInstallEver()) {
            return;
        }

        const onBeforeInstallPrompt = (event: Event) => {
            event.preventDefault();
            setDeferredPrompt(event);
        };

        window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener);

        return () => {
            window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener);
        };
    }, [getAlarmInstallEver]);

    // 앱 설치 알람
    useEffect(() => {
        alarmInstall();

        async function alarmInstall() {
            await wait(1);

            if (getAlarmInstallEver() || !deferredPrompt) {
                return;
            }

            if (window.confirm("Do you want to install this app?")) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(() => {
                    setDeferredPrompt(null);
                });
            }

            setAlarmInstallEver(true);
        }
    }, [deferredPrompt, getAlarmInstallEver, setAlarmInstallEver]);
}
