import clsx from "clsx";
import React, { memo, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface ToastProps {
    message: string;
    show: boolean;
    onClose: () => void;
}

export const Toast: React.FC<ToastProps> = memo(function Toast({ message, show, onClose }) {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 500); // 애니메이션 시간과 일치시키기 위해 0.5초 후에 숨김

            return () => clearTimeout(timer);
        }
    }, [show]);

    return (
        visible && (
            <div
                className={clsx("fixed bottom-4 right-4 transition-transform transform", {
                    "toast-enter": show,
                    "toast-leave": !show,
                })}
            >
                <div className="flex gap-2 bg-blue-500 text-white p-4 rounded shadow-lg" onClick={onClose}>
                    <div>
                        <span>{message}</span>
                    </div>
                    <button className="text-white hover:text-gray-200" aria-label="Close">
                        <FaXmark />
                    </button>
                </div>
            </div>
        )
    );
});
