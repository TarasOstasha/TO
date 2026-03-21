"use client";

import { FormEvent, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, sectionReveal, staggerContainer } from "@/lib/motion";
import { SiteToast, type SiteToastVariant } from "@/components/ui/SiteToast";

type ToastState = {
  variant: SiteToastVariant;
  title: string;
  message: string;
};

export function ContactSection() {
  const [toast, setToast] = useState<ToastState | null>(null);

  const dismissToast = useCallback(() => setToast(null), []);

  const showToast = useCallback(
    (variant: SiteToastVariant, title: string, message: string) => {
      setToast({ variant, title, message });
    },
    []
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      const contentType = response.headers.get("content-type") || "";
      const isJson = contentType.includes("application/json");
      const result = isJson ? await response.json() : null;

      if (response.ok && result?.ok) {
        showToast(
          "success",
          "Message sent",
          "Thanks - I'll get back to you soon."
        );
        form.reset();
        return;
      }

      if (isJson && result?.message) {
        showToast("error", "Couldn’t send", result.message);
        return;
      }

      showToast(
        "error",
        "Something went wrong",
        `Send failed (HTTP ${response.status}). Check that contact.php is deployed on your server.`
      );
    } catch {
      showToast(
        "error",
        "Network error",
        "Please check your connection and try again."
      );
    }
  };

  return (
    <>
      <SiteToast
        open={toast !== null}
        variant={toast?.variant ?? "success"}
        title={toast?.title ?? ""}
        message={toast?.message ?? ""}
        onDismiss={dismissToast}
      />

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

            <form
              onSubmit={handleSubmit}
              className="flex-1 space-y-3 text-[13px]"
            >
              <div>
                <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Name
                </label>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-500 focus:border-accent/60 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Email
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-500 focus:border-accent/60 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Phone (optional)
                </label>
                <input
                  name="phone"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-500 focus:border-accent/60 focus:ring-2"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Project details
                </label>
                <textarea
                  name="proposition"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-500 focus:border-accent/60 focus:ring-2"
                  placeholder="Timeline, goals, links, anything that helps me understand the work."
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition-colors hover:border-accent/50 hover:text-accent hover:shadow-glow-sm"
              >
                Send message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    </>
  );
}
