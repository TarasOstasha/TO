"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type CaseStudyData = {
  title: string;
  overview: string;
  problem: string;
  solution: string;
  technicalImplementation: string[];
  challenges: string;
  results: string;
};

type CaseStudyModalProps = {
  isOpen: boolean;
  caseStudy: CaseStudyData | null;
  onClose: () => void;
};

export function CaseStudyModal({ isOpen, caseStudy, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && caseStudy ? (
        <motion.div
          className="fixed inset-0 z-[210] flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${caseStudy.title} case study`}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative w-full max-w-[900px] overflow-hidden rounded-3xl border border-white/15 bg-slate-950/85 shadow-[0_36px_120px_rgba(2,6,23,0.82)] ring-1 ring-white/10 backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="Close case study modal"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="max-h-[85vh] overflow-y-auto p-6 md:p-8">
              <p className="text-overline text-slate-400">Case study</p>
              <h3 className="mt-2 pr-12 font-display text-2xl font-semibold text-slate-50 md:text-3xl">
                {caseStudy.title}
              </h3>

              <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-300 md:text-base">
                <section>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Overview</p>
                  <p className="mt-1">{caseStudy.overview}</p>
                </section>
                <section>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Problem</p>
                  <p className="mt-1">{caseStudy.problem}</p>
                </section>
                <section>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Solution</p>
                  <p className="mt-1">{caseStudy.solution}</p>
                </section>
                <section>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Technical implementation
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-200">
                    {caseStudy.technicalImplementation.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Challenges</p>
                  <p className="mt-1">{caseStudy.challenges}</p>
                </section>
                <section>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Results</p>
                  <p className="mt-1">{caseStudy.results}</p>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
