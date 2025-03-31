"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { mobileNavItems } from "../../../lib/mobileNavItems";

export default function Navbar() {
  const pathname = usePathname();
  const [selected, setSelected] = React.useState(pathname);
  const [focused, setFocused] = React.useState(null);

  return (
    <nav className="nav-container lg:flex lg:flex-grow lg:justify-center">
      <ul className="nav-wrapper">
        {mobileNavItems.map(({ path, label, id }) => {
          return (
            <li key={id} className="list-item list-none outline-none">
              <Link href={path}>
                <button
                  onClick={() => setSelected(path)}
                  onKeyDown={(e) =>
                    e.key === "Enter" ? setSelected(path) : null
                  }
                  onFocus={() => setFocused(path)}
                  onBlur={() => setFocused(null)}
                  onPointerEnter={() => setFocused(path)}
                  onPointerLeave={() => setFocused(null)}
                  tabIndex={0}
                  className="relative"
                >
                  <span>{label}</span>
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
