export function FooterBar() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <p className="font-medium">
          © {new Date().getFullYear()} Taras Ostasha. All rights reserved.
        </p>
        <p className="flex flex-wrap items-center gap-3">
          <span>Based in [Your City]</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>Available for remote collaborations worldwide.</span>
        </p>
      </div>
    </footer>
  );
}

