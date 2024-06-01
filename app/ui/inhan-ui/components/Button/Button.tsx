import clsx from "clsx";
import { ReactNode, memo } from "react";

interface ButtonProps {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
}

const _Button = ({ children, className, onClick }: ButtonProps) => {
    return (
        <button
            className={clsx("text-sky-600 select-none font-semibold hover:underline active:text-sky-700", className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export const Button = memo(_Button);
