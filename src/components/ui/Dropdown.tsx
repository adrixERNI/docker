"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DropdownProps {
    label: ReactNode;
    children: ReactNode;
    className?: string;
}

export const Dropdown = ({ label, children, className }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative inline-block text-left">
            <div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer">
                {label}
            </div>
            {open && (
                <div
                    className={twMerge(
                        "absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-background border border-border z-50",
                        className
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export const DropdownHeader = ({ children }: { children: ReactNode }) => (
    <div className="px-4 py-3 text-sm border-b border-border">{children}</div>
);

export const DropdownItem = ({
    children,
    onClick,
    className
}: {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}) => (
    <button
        onClick={onClick}
        className={twMerge(
            "w-full text-left px-4 py-2 text-sm hover:bg-muted/10 transition-colors cursor-pointer",
            className
        )}
    >
        {children}
    </button>
);

export const DropdownDivider = () => <div className="border-t border-border my-1" />;
