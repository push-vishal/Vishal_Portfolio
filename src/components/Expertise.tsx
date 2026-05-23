import { SectionLabel } from "./SectionLabel";

const groups = [
  {
    title: "Core Engineering",
    icon: "⌘",
    accent: "from-cyan-400/30 to-cyan-400/0",
    items: ["Python", "C++", "C", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: "❖",
    accent: "from-violet-400/30 to-violet-400/0",
    items: ["HTML5", "React", "Tailwind CSS"],
  },
  {
    title: "Data & Analysis",
    icon: "✦",
    accent: "from-cyan-300/30 to-violet-400/0",
    items: ["SQL", "Data Analysis", "Analytical Thinking"],
  },
  {
    title: "Workflow & Tools",
    icon: "◈",
    accent: "from-fuchsia-300/30 to-cyan-300/0",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="orb orb-cyan h-[360px] w-[360px] -right-40 top-10 opacity-30" />

      <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel>Expertise</SectionLabel>
          <h2 className="reveal mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            <span className="text-gradient-soft">Technology is the medium.</span>
            <br />
            <span className="text-gradient italic">Problem-solving is the mindset.</span>
          </h2>
        </div>
      </div>

      {/* Feature capability card */}
      <div className="glass-strong relative mt-10 overflow-hidden rounded-3xl p-7 md:p-10">
        <div className="orb orb-violet absolute -right-10 -top-10 h-52 w-52 opacity-50" />
        <div className="orb orb-cyan absolute -left-10 -bottom-10 h-52 w-52 opacity-40" />
        <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/25 to-violet-500/25 ring-1 ring-white/15">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-white">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>
              </svg>
            </div>
          </div>
          <p className="md:col-span-10 text-balance text-lg leading-relaxed text-white/75 md:text-2xl">
            Building <span className="text-gradient italic font-display">intelligent digital solutions</span> through
            engineering fundamentals, modern web technologies, analytics, and
            product-focused thinking.
          </p>
        </div>
      </div>

      {/* Capability cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${g.accent} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl text-white/85">{g.icon}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                0{groups.indexOf(g) + 1}
              </span>
            </div>
            <h3 className="mt-6 text-base text-white">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11.5px] text-white/70"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
