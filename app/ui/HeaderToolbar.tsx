import { memo, useCallback } from "react";
import { Button, Checkbox } from "inhan-ui";
import { usePlayerStore } from "./playerStore";

export const HeaderToolbar: React.FC = memo(function HeaderToolbar() {
    const { displayClock, setDisplayClock, displayEllapsed, setDisplayEllapsed, setDisplayCategory } = usePlayerStore();

    const onChangeClock = useCallback(
        (checked: boolean) => {
            setDisplayClock(checked);
        },
        [setDisplayClock]
    );

    const onChangeEllapsed = useCallback(
        (checked: boolean) => {
            setDisplayEllapsed(checked);
        },
        [setDisplayEllapsed]
    );

    const onClickCategory = useCallback(() => {
        setDisplayCategory(true);
    }, [setDisplayCategory]);

    return (
        <>
            <Checkbox checked={displayClock} onChange={onChangeClock}>
                clock
            </Checkbox>
            <Checkbox checked={displayEllapsed} onChange={onChangeEllapsed}>
                ellapsed
            </Checkbox>
            <Button className="ml-1" onClick={onClickCategory}>
                category
            </Button>
        </>
    );
});
