/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getWithExpiry } from "@/lib/utils";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  isdarkMode: string;
  setIsDarkMode: (click: any) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isdarkMode, setIsDarkMode] = useState("light");

  const handleThemeChange = () => {
    if (
      getWithExpiry('theme') === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme : dark)").matches)
    ) {
      setIsDarkMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [isdarkMode]);

  return (
    <ThemeContext.Provider value={{ isdarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme () {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useClick must be used within a ThemeProvider");
  }

  return context;
}
