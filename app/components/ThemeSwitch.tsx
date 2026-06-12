"use client";

import { ToggleButton } from "@heroui/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@gravity-ui/icons";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <ToggleButton
        isSelected={theme === "light"}
        onPointerDown={() => setTheme("light")}
        id="light"
      >
        Light
        <Sun />
      </ToggleButton>
      <ToggleButton
        isSelected={theme === "dark"}
        onPointerDown={() => setTheme("dark")}
        id="dark"
      >
        Dark
        <Moon />
      </ToggleButton>
    </div>
  );
}
