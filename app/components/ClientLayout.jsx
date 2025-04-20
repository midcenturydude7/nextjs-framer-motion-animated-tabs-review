"use client";

import { NavProvider } from "../contexts/NavContext";

export default function ClientLayout({ children }) {
  return <NavProvider>{children}</NavProvider>;
}

