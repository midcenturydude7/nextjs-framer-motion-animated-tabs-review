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
        className="nav-wrapper space-x-4 border-slate-300/10 bg-gradient-to-b from-[rgba(17,17,32,0.88)] to-[rgb(0,2,8)] py-[0.5rem] pl-6 pr-[1.8rem]"
      >
        {mobileNavItems.map(({ path, label, id }) => {
          return (
            <li key={id} className="relative list-item">
              <Link href={path}>
                <button
                  // layout
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
                    "btn-tab transtion-colors h-[2.5rem] w-[5.5rem] rounded-lg border border-transparent px-8 text-slate-300/70 duration-1000 ease-in-out hover:border-[#00b7ff27] hover:text-gray-200/80",
                    selected === path
                      ? "cursor-default rounded-lg bg-gradient-to-b from-[#000208] to-[#141449] transition-colors duration-1000 ease-in-out border-[#00b7ff31] text-gray-200/80"
                      : "",
                  )}
                >
                  <span className="list-label">{label}</span>
                  {/* <AnimatePresence> */}
                  {focused === path ? (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      // exit={{
                      //   opacity: 0,
                      //   transition: {
                      //     duration: 1,
                      //     ease: "easeOut",
                      //   },
                      // }}
                      className="highlighted-tab"
                      layoutId="highlight"
                    />
                  ) : null}
                  {/* </AnimatePresence> */}
                  {selected === path ? (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      className="selected-tab"
                      layoutId="underline"
                    />
                  ) : null}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
