"use client";

import { motion } from "framer-motion";
import { fadeInUp, sectionReveal, staggerContainer } from "@/lib/motion";

const categories = [
  {
    title: "Product & UX",
    items: [
      "User flows and navigation",
      "Landing pages that convert",
      "Design systems & layout structure"
    ]
  },
  {
    title: "Frontend Engineering",
    items: [
      "Next.js apps and marketing sites",
      "Component-driven UI architecture",
      "Performance-minded implementation"
    ]
  },
  {
    title: "Motion & Interaction",
    items: [
      "Scroll-based storytelling",
      "Micro-interactions and transitions",
      "Cinematic yet minimal motion"
    ]
  },
  {
    title: "Workflow & Tools",
    items: [
      "Collaborating from Figma designs",
      "Git-based workflows",
      "Quality and handoff focus"
    ]
  }
];

const techChips = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "Framer Motion",
  "WordPress",
  "Volusion",
  "Shopify"
];

export function TechStackSection() {
  return (
    <motion.section
      id="tech"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
      className="mx-auto max-w-6xl px-4 py-20 md:py-24 lg:py-28"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="space-y-3">
          <p className="text-overline text-slate-400">Skills</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-display-md font-semibold text-slate-50">
              What I bring to your project.
            </h2>
            <p className="max-w-md text-xs text-slate-400 md:text-[13px]">
              Adjust these categories and tools to match your real strengths.
              The goal is to quickly show clients how you think and what you can
              own end-to-end.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -2 }}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-4 text-[13px] text-slate-200 backdrop-blur-xl transition-shadow hover:border-white/15 hover:shadow-glow-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                {category.title}
              </p>
              <ul className="mt-3 space-y-1.5">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Core stack & tools
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-slate-200">
            {techChips.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 transition-shadow hover:border-accent/30 hover:shadow-glow-sm"
                type="button"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                <span>{tech}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

