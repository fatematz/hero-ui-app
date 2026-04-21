"use client";

import { Sun, Moon } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Switch
      isSelected={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
    >
      {({ isSelected }) => (
        <Switch.Control
          className={`h-[31px] w-[51px] ${
            isSelected
              ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]"
              : "bg-blue-500"
          }`}
        >
          <Switch.Thumb
            className={`size-[27px] bg-white shadow-sm ${
              isSelected ? "ms-[22px] shadow-lg" : ""
            }`}
          >
            <Switch.Icon>
              {isSelected ? (
                <Moon className="size-4 text-cyan-600" />
              ) : (
                <Sun className="size-4 text-blue-600" />
              )}
            </Switch.Icon>
          </Switch.Thumb>
        </Switch.Control>
      )}
    </Switch>
  );
};

export default ThemeToggle;