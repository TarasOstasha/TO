"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, sectionReveal, staggerContainer } from "@/lib/motion";

const projects = [
  {
    title: "Project Alpha",
    tag: "SaaS marketing · Design & build",
    description:
      "Placeholder description for a flagship project. Describe the problem, your role, and the outcome.",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"]
  },
  {
    title: "Project Beta",
    tag: "Product UI · Full stack",
    description:
      "Another featured project you can replace. Keep the focus on results and impact.",
    tech: ["Next.js", "TypeScript", "Node", "PostgreSQL"]
  },
  {
    title: "Project Gamma",
    tag: "Marketing campaign site",
    description:
      "Use this slot for a visually strong marketing or campaign site with motion.",
    tech: ["Next.js", "Framer Motion", "Animations"]
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.3 }
  })
};

export function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (next: number) => {
    const nextIndex = (next + projects.length) % projects.length;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  };

  const project = projects[index];

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
      className="relative px-4 py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-stretch">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/3"
        >
          <motion.div variants={fadeInUp} className="sticky top-28 space-y-4">
            <p className="text-overline text-slate-400">Projects</p>
            <h2 className="font-display text-display-md font-semibold text-slate-50">
              A reel of recent work.
            </h2>
            <p className="text-sm text-slate-400">
              Full stack builds and interactive experiences—replace with your
              own projects and links.
            </p>
            {/* Slider controls: dots */}
            <div className="flex items-center gap-2 pt-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-accent shadow-glow-sm"
                      : "w-2 bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative md:w-2/3"
        >
          <div className="relative rounded-3xl">
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_32px_120px_rgba(15,23,42,0.95)] backdrop-blur-2xl transition-shadow duration-300 hover:border-accent/20 hover:shadow-glow-border md:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-80" />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {project.tag}
                      </p>
                      <span className="text-[11px] text-slate-500">
                        0{index + 1} / {projects.length}
                      </span>
                    </div>
                    <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                      <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.24em] text-slate-500">
                        Project image / mockup
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-50 md:text-xl">
                        {project.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-slate-300">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex gap-3 text-xs">
                      <button className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-semibold uppercase tracking-[0.16em] text-accent transition-shadow hover:shadow-glow-sm">
                        View case study
                      </button>
                      <button className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200 transition-colors hover:border-white/20 hover:text-white">
                        Visit live site
                      </button>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-3 md:px-4">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous project"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-300 backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent hover:shadow-glow-sm md:h-12 md:w-12"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next project"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-300 backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent hover:shadow-glow-sm md:h-12 md:w-12"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
