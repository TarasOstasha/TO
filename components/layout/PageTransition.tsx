"use client";

import { motion } from "framer-motion";
import { pageEnter } from "@/lib/motion";
import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageEnter}
      className="contents"
    >
      {children}
    </motion.div>
  );
}
