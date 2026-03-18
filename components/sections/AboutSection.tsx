"use client";

import { motion } from "framer-motion";
import { fadeInUp, sectionReveal, staggerContainer } from "@/lib/motion";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="mx-auto max-w-6xl px-4 py-20 md:py-24 lg:py-28"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-10 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_40px_160px_rgba(15,23,42,0.95)] backdrop-blur-2xl md:grid-cols-[1.4fr,1fr] md:p-8 lg:p-10"
      >
        <motion.div variants={fadeInUp} className="space-y-5">
          <p className="text-overline text-slate-400">About</p>
          <h2 className="font-display text-display-md font-semibold text-slate-50">
            A full stack developer who thinks in products.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            I'm Taras, a full stack developer with 8+ years of hands-on
            experience building modern web applications and scalable systems. I
            specialize in turning ideas into high-quality digital products -
            from robust backend architecture to polished, interactive frontends.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            I focus on building fast, reliable, and user-friendly solutions that
            not only look great but also perform at a high level. I enjoy
            collaborating with clients and teams to solve real business
            problems, improve user experience, and deliver scalable,
            production-ready products.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid gap-4 text-sm text-slate-200"
        >
          {[
            {
              label: "What I do best",
              items: [
                "Full stack web apps and APIs",
                "Cinematic, conversion-focused sites",
                "Motion, micro-interactions, and polish",
              ],
            },
            {
              label: "Ideal collaborations",
              items: [
                "Startups building or launching new products",
                "Businesses looking to scale or modernize",
                "Teams needing a reliable full stack partner",
              ],
            },
            {
              label: "Beyond the screen",
              copy: "Outside of development, I'm passionate about technology, design, and creating digital experiences. I also enjoy working with drones, photography, and exploring new creative tools.",
            },
          ].map((block) => (
            <div
              key={block.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/15"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                {block.label}
              </p>
              {"items" in block ? (
                <ul className="mt-3 space-y-1.5 text-[13px] text-slate-200">
                  {(block.items ?? []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[13px] text-slate-200">{block.copy}</p>
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
