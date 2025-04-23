"use client";
import React from "react";

import Navbar from "./Navbar/Navbar";
import MobileNav from "./MobileNav/MobileNav";
function Header() {
  const [focused, setFocused] = React.useState(null);

  return (
    <header className="flex border-b-[1px] border-slate-300/10 bg-[rgba(0,2,8.0.61)] p-8 shadow-2xl shadow-black/80">
      <Navbar focused={focused} setFocused={setFocused} />
      <MobileNav />
    </header>
  );
}

export default Header;
