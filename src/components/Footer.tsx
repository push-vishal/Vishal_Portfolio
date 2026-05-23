export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 md:flex-row md:justify-between">
        <div className="flex items-center gap-3 text-sm text-white/55">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 ring-1 ring-white/15">
            <span className="font-display text-base text-white">V</span>
          </span>
          Build with <span className="text-gradient">❤️</span> by{" "}
          <span className="text-white/85">vishal</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
          © 2026 · All rights reserved
        </div>
      </div>
    </footer>
  );
}
