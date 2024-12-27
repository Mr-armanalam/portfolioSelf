"use client";

import React, { createContext, useContext, useState } from "react";

interface ClickContextType {
  ispopout: boolean;
  setIspopout: (click: boolean) => void;
}

const ClickContext = createContext<ClickContextType | undefined>(undefined);

export function ClickProvider ({ children }: { children: React.ReactNode }) {
  const [ispopout, setIspopout] = useState(false);

  return (
    <ClickContext.Provider value={{ ispopout, setIspopout }}>
      {children}
    </ClickContext.Provider>
  );
}

export function useClick () {
  const context = useContext(ClickContext);

  if (!context) {
    throw new Error("useClick must be used within a ThemeProvider");
  }

  return context;
}
