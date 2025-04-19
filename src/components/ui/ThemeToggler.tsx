"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import Button from "./Button";

const ThemeToggler = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme");

        if (stored === "light" || stored === "dark") {
            setTheme(stored);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    return (
        <div className="fixed bottom-5 end-5" onClick={handleToggleTheme}>
            <Button size="icon-md" radius="full">
                <MdDarkMode size={18} />
            </Button>
        </div>
    );
};

export default ThemeToggler;
