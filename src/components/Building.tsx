import { SectionLabel } from "./SectionLabel";

const chips = [
  "Analytics Thinking",
  "Fintech Exposure",
  "Data-Driven Decisions",
  "Real-World Learning",
];

export function Building() {
  return (
    <section id="building" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
<SectionLabel>Currently Building</SectionLabel>
        <h2 className="reveal mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-gradient-soft">Learning through execution.</span>
          <br />
          <span className="text-gradient italic">Growing through real-world exposure.</span>
        </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Timeline rail */}
        <div className="md:col-span-3">
          <div className="glass rounded-2xl p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">Timeline</div>
            <div className="mt-3 font-display text-2xl text-white md:text-3xl">May 2026</div>
            <div className="text-white/40">↓</div>
            <div className="font-display text-2xl text-white md:text-3xl">July 2026</div>
            <div className="hairline my-5" />
            <div className="flex items-center gap-2 text-xs text-emerald-300/90">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
              Active Internship
            </div>
          </div>
        </div>

        {/* Story card */}
        <div className="md:col-span-9">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-7 md:p-10">
            <div className="orb orb-cyan absolute -right-16 -top-16 h-72 w-72 opacity-40" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/25 to-violet-500/25 ring-1 ring-white/15">
                  <span className="font-display text-2xl text-white">B</span>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">Company</div>
                  <div className="font-display text-2xl text-white md:text-3xl">Bluestock Fintech</div>
                </div>
                <div className="ml-auto rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] tracking-wide text-cyan-200">
                  Data Analyst Intern
                </div>
              </div>

              <p className="mt-8 max-w-3xl text-pretty text-[16px] leading-relaxed text-white/70 md:text-lg">
                Currently working as a <span className="text-white">Data Analyst Intern</span> at Bluestock Fintech,
                gaining hands-on exposure to analytics, fintech workflows, and
                <span className="text-white"> data-driven decision-making</span>.
              </p>

              <div className="hairline my-8" />

              <div className="flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span key={c} className="chip">
                    <span className="h-1 w-1 rounded-full bg-violet-300/80" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
