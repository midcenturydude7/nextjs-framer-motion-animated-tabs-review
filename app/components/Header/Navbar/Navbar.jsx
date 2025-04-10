"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { mobileNavItems } from "../../../lib/mobileNavItems";
import { cn } from "../../../lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [selected, setSelected] = React.useState(pathname);
  const [focused, setFocused] = React.useState(null);

  return (
    <nav
      // onPointerLeave={() => setFocused(null)}
      className="nav-container lg:flex lg:flex-grow lg:justify-center"
    >
      <ul
        onPointerLeave={() => setFocused(null)}
        className="nav-wrapper space-x-4 border-slate-300/10 bg-gradient-to-b from-[rgba(21,24,43,0.79)] to-[rgba(0,0,0,0.87)] py-[0.5rem] pl-6 pr-[1.8rem]"
      >
        {mobileNavItems.map(({ path, label, id }) => {
          return (
            <li
              key={id}
              className="relative list-item border-r-[2px] border-slate-500/20 last:border-0"
            >
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
                  // onPointerLeave={() => setFocused(null)}
                  tabIndex={0}
                  className={cn(
                    "btn-tab btn-tab-click h-[2.5rem] w-[5.5rem] rounded-lg border border-transparent px-8 text-slate-300/70 transition-colors duration-1000 ease-in-out hover:border-[#00b7ff27] hover:text-gray-200/80",
                    selected === path
                      ? "btn-tab-active cursor-default rounded-lg border-[#00b7ff3b] text-gray-200/80 transition-colors duration-1000 ease-out"
                      : "",
                  )}
                >
                  <motion.span layout className="list-label">
                    {label}
                  </motion.span>
                  {/* 'FOLLOW' HIGHLIGHT: Animates when the button is focused and follows cursor */}
                  <AnimatePresence>
                    {focused === path ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                          opacity: 0,
                          transition: {
                            duration: 1,
                            ease: "easeOut",
                          },
                        }}
                        transition={{
                          layout: {
                            duration: 0.25,
                            ease: "easeOut",
                          },
                        }}
                        className={cn(
                          selected === path
                            ? "highlighted-tab-selected"
                            : "highlighted-tab",
                        )}
                        layoutId="highlight"
                      />
                    ) : null}
                  </AnimatePresence>
                  {/* UNDERLINE: Animates/moves along selected path */}
                  {selected === path ? (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.25,
                          ease: "easeOut",
                          type: "spring",
                          bounce: 0,
                          damping: 50,
                          mass: 0.5,
                          stiffness: 500,
                        },
                      }}
                      className="selected-tab bg-gradient-to-r from-[#0f2124] to-[#00b7ffcf]"
                      layoutId="underline"
                    />
                  ) : null}
                  {/* "BOOMERANG" HIGHLIGHT: If new path isn't selected, highlight returns to selected path */}
                  <AnimatePresence>
                    {!focused && selected === path ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                          opacity: 0,
                          transition: {
                            duration: 1,
                            ease: "easeOut",
                          },
                        }}
                        className={cn(
                          selected === path
                            ? "highlighted-tab-selected"
                            : "boomerang-tab bg-gradient-to-b from-[#000208] to-[#141449] transition-colors duration-1000 ease-in-out",
                        )}
                        transition={{
                          layout: {
                            duration: 0.25,
                            ease: "easeOut",
                            type: "spring",
                            bounce: 0,
                            damping: 50,
                            mass: 0.5,
                            stiffness: 500,
                          },
                        }}
                        layoutId="highlight"
                      />
                    ) : null}
                  </AnimatePresence>
                </motion.button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
