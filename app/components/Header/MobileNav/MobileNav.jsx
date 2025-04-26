"use client";
import React from "react";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";
import { mobileNavItems } from "../../../lib/mobileNavItems";
import { useNavContext } from "../../../contexts/NavContext";
import { menuSlide, slide } from "../../../lib/anim";
import Curve from "./Curve/Curve";

export default function MobileNav({ focused, setFocused }) {
  // const pathname = usePathname();
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
            <motion.ul
              onPointerLeave={() => setFocused(null)}
              className="flex flex-col justify-center"
            >
              {mobileNavItems.map(({ id, path, label }) => {
                const isActive = path === selectedTab;
                return (
                  <li
                    className={cn(
                      "relative flex space-y-1 border border-x-0 border-b-slate-400/10 border-t-transparent pb-4 pt-[0.5px] last:border-none",
                      selectedTab === path
                        ? "bg-gradient-to-r from-[#111329a3] to-transparent"
                        : "",
                    )}
                    key={id}
                  >
                    <motion.div
                      variants={slide}
                      initial={"initial"}
                      animate="enter"
                      exit="exit"
                      className={cn(
                        selectedTab === path
                          ? "absolute left-[-5px] top-0 z-[2] block h-full w-2 border border-[#00b7ff] bg-slate-400/75"
                          : "",
                      )}
                    />
                    {focused === label ? (
                      <motion.div
                        // initial={{ opacity: 0 }}
                        // animate={{ opacity: 1, transition: { duration: 0.2 } }}
                        // exit={{
                        //   opacity: 0,
                        //   transition: {
                        //     duration: 1,
                        //     ease: "easeOut",
                        //   },
                        // }}
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
                        className={cn(
                          "absolute left-[-5px] top-[-4px] z-[1] block h-full w-2 bg-slate-400/75 hover:border",
                        )}
                        layoutId="marker"
                      />
                    ) : null}
                    {!focused && selectedTab === path ? (
                      <motion.div
                        // initial={{ opacity: 0 }}
                        // animate={{ opacity: 1 }}
                        // exit={{
                        //   opacity: 0,
                        //   transition: {
                        //     duration: 1,
                        //     ease: "easeOut",
                        //   },
                        // }}
                        transition={{
                          layout: {
                            duration: 0.25,
                            ease: "easeOut",
                            type: "spring",
                            bounce: 0,
                            damping: 50,
                            mass: 0.5,
                            stiffness: 400,
                          },
                        }}
                        layoutId="marker"
                        className={cn(
                          "absolute left-[-5px] top-[-4px] z-[1] block h-full w-2 bg-slate-400/75",
                        )}
                      />
                    ) : null}
                    <Link key={id} href={path} className="">
                      <motion.button
                        data-active={isActive}
                        onClick={() => {
                          setSelectedTab(path);
                          toggleMobileNavbar();
                        }}
                        onFocus={() => setFocused(label)}
                        onBlur={() => setFocused(null)}
                        onPointerEnter={() => setFocused(label)}
                        tabIndex={0}
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
                  </li>
                );
              })}
            </motion.ul>
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
