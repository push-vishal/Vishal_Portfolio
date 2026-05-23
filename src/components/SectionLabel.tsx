type Props = { children: React.ReactNode };

export function SectionLabel({ children }: Props) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-400/60 to-violet-400/60" />
      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/60">
        {children}
      </span>
    </div>
  );
}
