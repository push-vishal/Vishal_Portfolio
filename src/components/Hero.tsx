import { useEffect, useState } from "react";

const roles = [
  "AI Builder",
  "Data Analyst",
  "Problem Solver",
  "Python Developer",
  "Team Leader",
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="bg-noise absolute inset-0" />
      <div className="orb orb-cyan h-[520px] w-[520px] -left-32 top-10" />
      <div className="orb orb-violet h-[480px] w-[480px] -right-24 top-40" />
      <div className="orb orb-cyan h-[360px] w-[360px] left-1/2 top-[60%] -translate-x-1/2 opacity-30" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050507_85%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        {/* Top badge */}
        <div className="fade-up glass mb-7 inline-flex items-center gap-3 rounded-full px-4 py-1.5">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-cyan-400" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-white/70">
            CSE-AI Student • AI Builder • Data Analyst
          </span>
        </div>

        {/* Greeting */}
        <p
          className="fade-up font-display text-2xl italic text-white/70 md:text-3xl"
          style={{ animationDelay: "0.05s" }}
        >
          Hey, I'm Vishal..!
        </p>

        {/* Headline */}
        <h1
          className="fade-up mt-4 text-balance font-display text-[44px] leading-[1.02] tracking-tight md:text-[88px]"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient-soft">Curious Minds.</span>
          <br />
          <span className="text-gradient italic">Intelligent Solutions.</span>
        </h1>

        {/* Description */}
        <p
          className="fade-up mt-7 max-w-2xl text-balance text-base leading-relaxed text-white/60 md:text-lg"
          style={{ animationDelay: "0.18s" }}
        >
          Building thoughtful digital experiences at the intersection of{" "}
          <span className="text-white/85">artificial intelligence</span>,{" "}
          <span className="text-white/85">data</span>, and{" "}
          <span className="text-white/85">innovation</span>.
        </p>

        {/* Rotating role badge */}
        <div
          className="fade-up glass mt-8 inline-flex h-10 items-center gap-3 overflow-hidden rounded-full px-4"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/45">
            Currently
          </span>
          <span className="h-3 w-px bg-white/15" />
          <div className="relative h-5 w-[140px] overflow-hidden text-sm">
            {roles.map((r, idx) => (
              <span
                key={r}
                className={`absolute inset-0 flex items-center text-white transition-all duration-500 ${
                  idx === i
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0"
                }`}
              >
                <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  {r}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div
          className="fade-up mt-5 inline-flex items-center gap-2 text-xs text-white/55"
          style={{ animationDelay: "0.32s" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
          Currently interning at{" "}
          <span className="text-white/85">Bluestock Fintech</span> • Open for AI
          &amp; Product Collaborations
        </div>

        {/* CTAs */}
        <div
          className="fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#work"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white"
          >
            Explore Work
            <span className="text-cyan-300">→</span>
          </a>
          <a
            href="#contact"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white/85"
          >
            Let's Connect
          </a>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
