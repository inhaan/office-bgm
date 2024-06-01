import clsx from "clsx";
import { ReactNode, memo } from "react";

interface CheckboxProps {
    children?: ReactNode;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const _Checkbox = ({ children, checked, onChange }: CheckboxProps) => {
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <label className="cursor-pointer inline-flex items-center relative align-top mx-2">
            <input type="checkbox" className="h-0 w-0 absolute" checked={checked} onChange={onChangeInput} />
            <span
                className={clsx(
                    "inline-flex w-4 h-4 select-none border-2 rounded-sm transition",
                    checked && "bg-sky-600 border-sky-600"
                )}
            >
                {checked && (
                    <div className="h-full flex items-center justify-center">
                        <svg viewBox="0 0 12 10" className="fill-none stroke-2 stroke-current w-3 text-white">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </div>
                )}
            </span>
            <span className="ms-2 select-none">{children}</span>
        </label>
    );
};

export const Checkbox = memo(_Checkbox);
