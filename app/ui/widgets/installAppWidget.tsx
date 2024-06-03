import { memo, useCallback, useEffect, useState } from "react";
import { MdInstallDesktop } from "react-icons/md";

export const InstallAppWidget: React.FC = memo(function InstallAppWidget() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showInstall, setShowInstall] = useState(false);

    // beforeinstallprompt 이벤트를 감지
    useEffect(() => {
        const onBeforeInstallPrompt = (event: Event) => {
            event.preventDefault();
            setDeferredPrompt(event);
            setShowInstall(true);
        };

        window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener);

        return () => {
            window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener);
        };
    }, []);

    const onClick = useCallback(() => {
        if (!deferredPrompt) {
            return;
        }

        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(() => {
            setDeferredPrompt(null);
            setShowInstall(false);
        });
    }, [deferredPrompt]);

    if (!showInstall) {
        return null;
    }
    return (
        <MdInstallDesktop
            className="size-4 sm:size-5 cursor-pointer text-slate-600 hover:text-slate-700 active:text-slate-800"
            onClick={onClick}
        />
    );
});
