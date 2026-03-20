"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type SiteToastVariant = "success" | "error";

type SiteToastProps = {
  open: boolean;
  variant: SiteToastVariant;
  title: string;
  message: string;
  onDismiss: () => void;
  /** Auto-hide after ms (0 = no auto-dismiss) */
  duration?: number;
};

function IconSuccess() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/35 bg-accent/10 text-accent shadow-[0_0_24px_rgba(74,222,255,0.2)]">
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

function IconError() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-rose-400/35 bg-rose-500/10 text-rose-300 shadow-[0_0_24px_rgba(244,63,94,0.15)]">
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M12 9v4M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </span>
  );
}

export function SiteToast({
  open,
  variant,
  title,
  message,
  onDismiss,
  duration = 5600
}: SiteToastProps) {
  const dismissRef = useRef(onDismiss);
  dismissRef.current = onDismiss;

  useEffect(() => {
    if (!open || duration <= 0) return;
    const t = window.setTimeout(() => dismissRef.current(), duration);
    return () => window.clearTimeout(t);
  }, [open, duration]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[200] flex justify-center px-4 pb-6 sm:pb-8"
        >
          <div
            className={[
              "pointer-events-auto flex w-full max-w-md gap-4 rounded-2xl border bg-slate-950/95 p-4 shadow-[0_24px_80px_rgba(5,6,10,0.85)] ring-1 backdrop-blur-md",
              variant === "success"
                ? "border-accent/25 ring-accent/10 shadow-glow"
                : "border-rose-500/20 ring-rose-500/10"
            ].join(" ")}
          >
            {variant === "success" ? <IconSuccess /> : <IconError />}
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="font-display text-sm font-semibold tracking-tight text-slate-50">
                {title}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-400">
                {message}
              </p>
            </div>
            <button
              type="button"
              onClick={onDismiss}
              className="shrink-0 self-start rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-slate-200"
              aria-label="Dismiss"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
