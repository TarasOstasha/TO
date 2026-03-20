"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "tech", label: "Tech Stack" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" }
];

type LogoPhase = "typing" | "gold";

function LogoMark() {
  const chars = useMemo(
    () =>
      [
        { ch: "<", className: "text-slate-400" },
        { ch: "T", className: "text-slate-200" },
        { ch: "O", className: "text-slate-200" },
        { ch: ".", className: "text-accent" },
        { ch: "d", className: "text-accent" },
        { ch: "e", className: "text-accent" },
        { ch: "v", className: "text-accent" },
        { ch: " ", className: "text-slate-400" },
        { ch: "/", className: "text-slate-400" },
        { ch: ">", className: "text-slate-400" }
      ] as const,
    []
  );

  const [phase, setPhase] = useState<LogoPhase>("typing");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingMs = 70;
    // 3 loops / minute => ~20s per full cycle
    const cycleMs = 20000;
    const settleMs = 250;
    const holdMs = Math.max(0, cycleMs - chars.length * typingMs - settleMs);

    if (phase === "typing") {
      setCount(0);
      let i = 0;
      const id = window.setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= chars.length) {
          window.clearInterval(id);
          window.setTimeout(() => setPhase("gold"), settleMs);
        }
      }, typingMs);
      return () => window.clearInterval(id);
    }

    const goldTimeout = window.setTimeout(() => setPhase("typing"), holdMs);
    return () => window.clearTimeout(goldTimeout);
  }, [chars.length, phase]);

  return (
    <span
      className={[
        // keep the SAME pill styling (no size changes during animation)
        "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-slate-200 ring-1 ring-white/5 md:text-xs"
      ].join(" ")}
      aria-label="TO.dev"
    >
      {/* reserve full width (render invisible trailing chars) */}
      <span>
        {chars.slice(0, phase === "typing" ? count : chars.length).map((c, idx) => {
          const baseChar =
            c.ch === "<" ? "\u003C" : c.ch === ">" ? "\u003E" : c.ch;

          return (
            <motion.span
              key={`v-${idx}-${c.ch}`}
              initial={{ opacity: 0, y: 1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.16, ease: [0.22, 0.61, 0.36, 1] }}
              className={c.className}
            >
              {baseChar}
            </motion.span>
          );
        })}

        {/* caret sits between visible and invisible chars */}
        {phase === "typing" ? (
          <motion.span
            aria-hidden
            className="ml-0.5 inline-block h-[0.95em] w-px bg-white/60 align-[-0.15em]"
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : null}

        <span aria-hidden className="opacity-0">
          {chars
            .slice(phase === "typing" ? count : chars.length)
            .map((c, idx) => {
              const baseChar =
                c.ch === "<" ? "\u003C" : c.ch === ">" ? "\u003E" : c.ch;
              return (
                <span key={`i-${idx}-${c.ch}`} className={c.className}>
                  {baseChar}
                </span>
              );
            })}
        </span>
      </span>
    </span>
  );
}

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
          <LogoMark />
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
