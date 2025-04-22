"use client";
import React from "react";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";
import { mobileNavItems } from "../../../lib/mobileNavItems";
import { useNavContext } from "../../../contexts/NavContext";
import { menuSlide, slide } from "../../../lib/anim";
import Curve from "./Curve/Curve";

export default function MobileNav() {
  const pathname = usePathname();
  const { selectedTab, setSelectedTab } = useNavContext();
  const [mobileNavbar, toggleMobileNavbar] = useCycle(false, true);

  return (
    <nav className="ml-auto px-8 py-4 lg:hidden">
      <div className="relative z-10">
        <motion.button
          animate={mobileNavbar ? "open" : "closed"}
          onClick={() => toggleMobileNavbar()}
          className="flex flex-col space-y-2"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 },
            }}
            className="block h-[0.125rem] w-8 rounded-lg bg-slate-400/75"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="block h-[0.125rem] w-8 rounded-lg bg-slate-400/75"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -12 },
            }}
            className="block h-[0.125rem] w-8 rounded-lg bg-slate-400/75"
          />
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        {mobileNavbar && (
          <motion.div
            key="mobile-navbar"
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed inset-0 flex h-full flex-col items-center justify-center gap-10 bg-gradient-to-b from-[rgba(12,12,39,1)] to-[rgb(0,2,8)]"
          >
            <motion.div className="flex flex-col space-y-6">
              {mobileNavItems.map(({ id, path, label }) => {
                const isActive = path === selectedTab;
                return (
                  <Link key={id} href={path} className="flex">
                    <motion.button
                      data-active={isActive}
                      onClick={() => {
                        setSelectedTab(path);
                        toggleMobileNavbar();
                      }}
                      variants={slide}
                      initial={"initial"}
                      animate="enter"
                      exit="exit"
                      className={cn(
                        "px-4 text-4xl text-slate-400/80 transition-colors duration-1000 ease-in-out hover:text-slate-200/80",
                        path === selectedTab
                          ? "cursor-default text-slate-200/80"
                          : "",
                      )}
                    >
                      <span>{label}</span>
                    </motion.button>
                  </Link>
                );
              })}
            </motion.div>
            <motion.div className="h-px w-[95%] bg-slate-500/20" />
            <motion.div
              variants={slide}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.ul
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
                className="flex items-center justify-center space-x-8"
              >
                <li>
                  <div className="h-10 w-10 rounded-lg bg-slate-400/80" />
                </li>
                <li>
                  <div className="h-10 w-10 rounded-lg bg-slate-400/80" />
                </li>
                <li>
                  <div className="h-10 w-10 rounded-lg bg-slate-400/80" />
                </li>
              </motion.ul>
            </motion.div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
