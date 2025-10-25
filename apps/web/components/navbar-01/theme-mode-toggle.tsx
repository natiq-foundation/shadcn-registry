"use client";

import { Button } from "@workspace/ui/components/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
    const { setTheme, theme, themes } = useTheme();

    console.log(themes);
    const toggleTheme = () =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <Button onClick={toggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
}
