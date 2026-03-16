"use client";

import { motion } from "framer-motion";
import { fadeInUp, sectionReveal, staggerContainer } from "@/lib/motion";

const services = [
  {
    title: "Conversion-driven marketing sites",
    summary:
      "Launch-ready marketing sites that tell a clear story, look cinematic, and are optimized for performance.",
    details: [
      "Positioning, structure, and page flows",
      "High-end visual design and motion",
      "Performance and basic SEO best practices"
    ],
    meta: "1–3 weeks · Ideal for product launches & campaigns"
  },
  {
    title: "Product UI & web apps",
    summary:
      "Interfaces for products, dashboards, and tools built with modern frontend engineering.",
    details: [
      "Component systems and design systems",
      "Responsive, accessible layouts",
      "Collaboration with product & design"
    ],
    meta: "3–6+ weeks · Ideal for growing product teams"
  },
  {
    title: "Agency & studio partnerships",
    summary:
      "Reliable implementation partner for creative studios who need design-to-code execution.",
    details: [
      "Pixel-perfect builds from Figma",
      "Flexible white-label collaboration",
      "Clear communication and handoff"
    ],
    meta: "Flexible · Ideal for agencies & studios"
  }
];

export function ServicesSection() {
  return (
    <motion.section
      id="services"
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
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="space-y-3">
          <p className="text-overline text-slate-400">Services</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-display-md font-semibold text-slate-50">
              Ways we can work together.
            </h2>
            <p className="max-w-md text-xs text-slate-400 md:text-[13px]">
              These cards are placeholders for your real services. Adjust the
              language to match the type of engagements you want more of.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid gap-5 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.6)] transition-shadow hover:border-accent/15 hover:shadow-glow-sm"
            >
              <div className="relative space-y-3 text-[13px] text-slate-200">
                <h3 className="text-base font-semibold text-slate-50">
                  {service.title}
                </h3>
                <p className="text-slate-300">{service.summary}</p>
                <ul className="mt-2 space-y-1.5">
                  {service.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] font-medium text-accent">
                  {service.meta}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

