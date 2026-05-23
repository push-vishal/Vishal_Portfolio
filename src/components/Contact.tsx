import { githubHandle, linkedinHandle, site } from "../content";

const cards = [
  {
    label: "GitHub",
    handle: githubHandle(site.github),
    href: site.github,
    accent: "from-cyan-400/20 to-violet-500/0",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 .5C5.73.5.94 5.29.94 11.56c0 4.88 3.16 9.01 7.54 10.48.55.1.75-.24.75-.53v-1.88c-3.07.67-3.72-1.3-3.72-1.3-.5-1.27-1.23-1.6-1.23-1.6-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.45-.28-5.02-1.22-5.02-5.45 0-1.21.43-2.19 1.14-2.96-.11-.28-.49-1.41.11-2.93 0 0 .93-.3 3.05 1.13.88-.25 1.83-.37 2.77-.38.94 0 1.89.13 2.77.38 2.12-1.43 3.05-1.13 3.05-1.13.6 1.52.22 2.65.11 2.93.71.77 1.14 1.75 1.14 2.96 0 4.24-2.58 5.17-5.04 5.44.4.34.76 1.01.76 2.04v3.03c0 .29.2.64.76.53 4.38-1.47 7.53-5.6 7.53-10.48C23.06 5.29 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: linkedinHandle(site.linkedin),
    href: site.linkedin,
    accent: "from-violet-400/20 to-cyan-400/0",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.11V21h-4v-5.36c0-1.28-.02-2.93-1.78-2.93-1.79 0-2.07 1.4-2.07 2.84V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: site.email,
    href: `mailto:${site.email}`,
    accent: "from-fuchsia-400/20 to-cyan-400/0",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.5 6.5l8.5 6 8.5-6" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="orb orb-cyan h-[420px] w-[420px] -left-32 top-0 opacity-30" />
      <div className="orb orb-violet h-[420px] w-[420px] -right-32 bottom-0 opacity-30" />

<div className="relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.32em] text-white/55">
            ✦ Get in touch
          </div>
          <h2 className="reveal mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            <span className="text-gradient-soft">Let's build</span>{" "}
            <span className="text-gradient italic">something meaningful.</span>
          </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/60">
          Open to AI &amp; product collaborations, internships, and meaningful conversations.
        </p>
      </div>

      <div className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.href.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
            className="glass group relative overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div
              className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br ${c.accent} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10">
                {c.icon}
              </div>
              <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                ↗
              </span>
            </div>
            <div className="mt-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                {c.label}
              </div>
              <div className="mt-1 font-display text-2xl text-white">{c.handle}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Big availability banner */}
      <div className="glass-strong relative mt-12 overflow-hidden rounded-3xl p-6 md:p-8">
        <div className="orb orb-cyan absolute -left-10 -top-10 h-48 w-48 opacity-40" />
        <div className="relative flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="relative inline-flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            Available for AI &amp; Product collaborations · Summer 2026 onwards
          </div>
          <a
            href={`mailto:${site.email}`}
            className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white"
          >
            Start a conversation
            <span className="text-cyan-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
