"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function HeroSection() {
  const { scrollY } = useScroll();
  const profileY = useTransform(scrollY, [0, 400], [0, 80]);
  const profileOpacity = useTransform(scrollY, [0, 200], [1, 0.6]);

  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-16 md:min-h-[85vh] md:flex-row md:items-center lg:pb-28 lg:pt-24"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6"
      >
        <motion.p
          variants={fadeInUp}
          className="text-overline text-slate-400"
        >
          Taras Ostasha
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="font-display text-display-xl font-semibold text-slate-50"
        >
          <span className="block text-slate-400">Full Stack Developer</span>
          <span className="mt-2 block">
            I build{" "}
            <span className="bg-gradient-to-r from-accent via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              cinematic interactive experiences
            </span>
            {" "}for the web.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
        >
          Full stack developer and creative builder—from APIs and databases to
          polished, animated interfaces. Next.js, TypeScript, Node, and modern
          tooling.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group relative rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-glow transition-shadow duration-300 hover:shadow-glow-md"
          >
            <span className="relative z-10">Start a project</span>
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition-colors duration-300 hover:border-accent/50 hover:text-accent hover:shadow-glow-sm"
          >
            View selected work
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400"
        >
          <span className="uppercase tracking-[0.22em] text-slate-500">
            Recent focus
          </span>
          <span className="h-px w-10 bg-slate-700" />
          <span>Full stack products · Motion · Interactive storytelling</span>
        </motion.div>
      </motion.div>

      <motion.aside
        style={{ y: profileY, opacity: profileOpacity }}
        className="mt-4 flex flex-1 justify-center md:mt-0"
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_90px_rgba(15,23,42,0.9)] backdrop-blur-2xl ring-1 ring-white/5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Profile
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  Taras Ostasha
                </p>
                <p className="text-xs text-slate-400">
                  Full Stack Developer
                </p>
              </div>
              <div className="h-14 w-14 rounded-full border border-white/20 bg-gradient-to-br from-slate-700 to-slate-950 ring-2 ring-accent/20" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-[11px] text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  Experience
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-50">+X yrs</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  Timezone
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-50">[TZ]</p>
              </div>
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                  Status
                </p>
                <p className="mt-1 text-sm font-semibold text-emerald-200">
                  Accepting work
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
              {["Next.js", "React", "TypeScript", "Node", "PostgreSQL"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-slate-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </motion.aside>
    </section>
  );
}
