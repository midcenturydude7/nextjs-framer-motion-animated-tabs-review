"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { mobileNavItems } from "../../../lib/mobileNavItems";

export default function Navbar() {
  const pathname = usePathname();
  const [selected, setSelected] = React.useState(pathname);
  const [focused, setFocused] = React.useState(null);

  return (
    <motion.nav
      onPointerLeave={() => setFocused(null)}
      className="nav-container lg:flex lg:flex-grow lg:justify-center"
    >
      <motion.ul layout className="nav-wrapper">
        {mobileNavItems.map(({ path, label, id }) => {
          return (
            <motion.li layout key={id} className="relative list-item">
              <Link href={path}>
                <motion.button
                  layout
                  onClick={() => setSelected(path)}
                  onKeyDown={(e) =>
                    e.key === "Enter" ? setSelected(path) : null
                  }
                  onFocus={() => setFocused(path)}
                  onBlur={() => setFocused(null)}
                  onPointerEnter={() => setFocused(path)}
                  tabIndex={0}
                  className=""
                >
                  <span className="list-label">{label}</span>
                  <AnimatePresence>
                    {focused === path ? (
                      <motion.div
                        transition={{
                          layout: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        exit={{
                          opacity: 0,
                          transition: {
                            duration: 1,
                            ease: "easeOut",
                          },
                        }}
                        className="highlighted-tab"
                        layoutId="highlight"
                      />
                    ) : null}
                  </AnimatePresence>
                </motion.button>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
