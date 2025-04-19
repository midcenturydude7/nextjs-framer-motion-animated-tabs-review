"use client";
import React from "react";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";
import { mobileNavItems } from "../../../lib/mobileNavItems";

export default function MobileNav() {
  const pathname = usePathname();
  const [mobileNavbar, toggleMobileNavbar] = useCycle(false, true);

  return (
    <nav className="ml-auto py-4 lg:hidden">
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
    </nav>
  );
}
