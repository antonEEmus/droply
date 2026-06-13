"use client";

import { Card, CardTitle, ToggleButton } from "@heroui/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@gravity-ui/icons";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-row gap-0 self-end radius-none">
      <ToggleButton
        isSelected={theme === "light"}
        onPress={() => setTheme("light")}
        id="light"
      >
        Light
        <Sun />
      </ToggleButton>
      <ToggleButton
        isSelected={theme === "dark"}
        onPress={() => setTheme("dark")}
        id="dark"
      >
        Dark
        <Moon />
      </ToggleButton>
    </div>
  );
}
