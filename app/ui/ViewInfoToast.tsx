import { memo, useCallback, useEffect, useState } from "react";
import { Toast, isMobileDevice, wait } from "inhan-ui";
import { usePlayerStore } from "./playerStore";

export const ViewInfoToast: React.FC = memo(function ViewInfoToast() {
    const [showToast, setShowToast] = useState(false);
    const { getCloseInfoToastEver, setCloseInfoToastEver } = usePlayerStore();

    const onCloseToast = useCallback(async () => {
        setShowToast(false);

        await wait(0.5);
        setCloseInfoToastEver(true);
    }, [setShowToast, setCloseInfoToastEver]);

    useEffect(() => {
        showInfoToast();

        async function showInfoToast() {
            await wait(1);
            if (!getCloseInfoToastEver()) {
                setShowToast(true);
            }
        }
    }, []);

    if (!isMobileDevice() || getCloseInfoToastEver()) {
        return;
    }

    return <Toast message="Best viewed in fullscreen landscape mode" show={showToast} onClose={onCloseToast} />;
});
