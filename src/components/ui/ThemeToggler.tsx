"use client";

import React, { useCallback, useEffect, useState } from "react";
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
            <Button size="sm" radius="full">
                {theme === "dark" ? "Light mode" : "Dark mode"}
            </Button>
        </div>
    );
};

export default ThemeToggler;
