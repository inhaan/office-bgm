import clsx from "clsx";
import { ReactNode, memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "../../icons";

interface ModalProps {
    children?: ReactNode;
    title?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = memo(function Modal({ children, title, isOpen, onClose }: ModalProps) {
    const [isRender, setIsRender] = useState(false);
    const [isShow, setIsShow] = useState(false);

    if (isOpen && !isRender) {
        setIsRender(true);
    } else if (!isOpen && isShow) {
        setIsShow(false);
    }

    useEffect(() => {
        if (isOpen) {
            setIsShow(true);
        } else {
            setTimeout(() => {
                setIsRender(false);
            }, 300);
        }
    }, [isOpen]);

    if (!isRender) {
        return null;
    }
    return (
        <>
            {createPortal(
                <div
                    className={clsx(
                        "fixed inset-0 flex items-center justify-center transition-opacity duration-300 z-10",
                        {
                            "opacity-100": isShow,
                            "opacity-0 pointer-events-none": !isShow,
                        }
                    )}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
                    <div
                        className={clsx(
                            "relative bg-white rounded-lg shadow-lg transform transition-transform duration-300 min-w-80",
                            {
                                "translate-y-0": isShow,
                                "-translate-y-10": !isShow,
                            }
                        )}
                    >
                        {title && (
                            <div className="p-4 border-b flex justify-between items-center">
                                <h2 className="text-lg font-semibold">{title}</h2>
                                <button className="text-gray-600 hover:text-gray-900" onClick={onClose}>
                                    <XIcon className="w-6 h-6" />
                                </button>
                            </div>
                        )}
                        <div className="p-4">{children}</div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
});
