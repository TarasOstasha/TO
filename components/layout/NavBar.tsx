"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "tech", label: "Tech Stack" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" }
];

export function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      className="sticky top-0 z-20 border-b border-white/5 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link
          href="#hero"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-slate-200 ring-1 ring-white/5 md:text-xs">
            <span className="text-slate-400">&lt;</span>
            <span className="mx-1">TO</span>
            <span className="text-accent">.dev</span>
            <span className="mx-1 text-slate-400">/&gt;</span>
          </span>
          <span className="text-sm font-medium text-slate-200">
            {/* Taras Ostasha */}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group relative py-1 transition-colors duration-300 hover:text-white"
            >
              {section.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent/20 hover:shadow-glow-sm"
        >
          Hire me
        </a>
      </div>
    </motion.header>
  );
}
