"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

// Create the context
const NavContext = createContext({
  selectedTab: "",
  setSelectedTab: () => {},
});

// Create a provider component
export function NavProvider({ children }) {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState("/");

  // Initialize with the current pathname when it becomes available
  useEffect(() => {
    if (pathname) {
      setSelectedTab(pathname);
    }
  }, [pathname]);

  return (
    <NavContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </NavContext.Provider>
  );
}

// Create a custom hook to use the context
export function useNavContext() {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
}

