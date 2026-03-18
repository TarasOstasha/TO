"use client";

import { motion } from "framer-motion";
import { fadeInUp, sectionReveal, staggerContainer } from "@/lib/motion";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="relative overflow-hidden px-4 py-20 md:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="rounded-3xl border border-white/15 bg-slate-950/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.6)] ring-1 ring-white/5 md:p-8 lg:p-10"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-overline text-slate-400">Contact</p>
            <h2 className="font-display text-display-md font-semibold text-slate-50">
              Tell me about your next launch.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              I work with startups, businesses, and teams to build fast,
              scalable, and user-focused web applications. If you have an idea,
              need to improve an existing product, or want to launch something
              new, I'd love to hear about it. I typically respond within 24
              hours.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row"
          >
            <div className="flex-1 space-y-3 text-sm text-slate-200">
              <a
                href="mailto:dev@tarasostasha.com?subject=Project Inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-glow transition-shadow duration-300 hover:shadow-glow-md"
              >
                Email me
              </a>
              <div className="space-y-1 text-[13px] text-slate-300">
                <p>
                  Or share a few details about your project, timeline, and
                  budget below. You can wire this form into your preferred
                  backend or service later.
                </p>
              </div>
            </div>

            <form className="flex-1 space-y-3 text-[13px]">
              <div>
                <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Name
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-500 focus:border-accent/60 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Email
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-500 focus:border-accent/60 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    Project type
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-500 focus:border-accent/60 focus:ring-2"
                    placeholder="Marketing site, product UI, etc."
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    Budget range
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-500 focus:border-accent/60 focus:ring-2"
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Project details
                </label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-500 focus:border-accent/60 focus:ring-2"
                  placeholder="Timeline, goals, links, anything that helps me understand the work."
                />
              </div>
              <button
                type="button"
                className="mt-1 w-full inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition-colors hover:border-accent/50 hover:text-accent hover:shadow-glow-sm"
              >
                Send message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
