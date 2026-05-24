import { images } from "../content";
import { cn } from "../utils/cn";
import { Frame } from "./Frame";
import { SectionLabel } from "./SectionLabel";

const chips = [
  "AI Builder",
  "Problem Solver",
  "Nature Photographer",
  "Strategic Thinker",
  "Team Leader",
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="orb orb-violet h-[360px] w-[360px] -left-40 top-16 opacity-30" />

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16 lg:gap-20">
        {/* LEFT — portrait */}
        <div className="md:col-span-5 lg:col-span-5">
          <div className="relative w-full sticky top-32">
            <Frame
              src={images.about}
              alt="Vishal Ambilkar portrait"
              ratio="aspect-[4/5]"
              glow
              loading="eager"
              overlay={
                <div className="absolute left-4 top-4">
                  <div className="glass rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.28em] text-white/80">
                    Portrait · 2026
                  </div>
                </div>
              }
              caption="Vishal Ambilkar — B.Tech CSE-AI"
            />

        {/* RIGHT — content */}
        <div className="flex flex-col justify-center md:col-span-7 lg:col-span-7">
          <SectionLabel>About</SectionLabel>
          <h2 className="reveal mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            <span className="text-gradient-soft">Driven by curiosity.</span>
            <br />
            <span className="text-gradient italic">Built for impact.</span>
          </h2>

          <div className="mt-8 space-y-3.5 text-pretty text-[15.5px] leading-relaxed text-white/65 md:text-[17px]">
            <p>
              I'm <span className="text-white">Vishal Ambilkar</span>, a
              second-year B.Tech CSE-AI student at G.H Raisoni College of Engineering and Management Pune. Passionate about building
              intelligent solutions for real-world challenges.
              I lead with curiosity. <span className="text-white/85">Ownership keeps me sharp.</span> I find problems, understand them deeply, and build meaningful solutions around them.
              Versatile by nature, I use AI to move faster—but the
              <span className="text-white/85"> thinking, architecture, and decisions </span>
              remain mine.
              Beyond technology, I find inspiration in nature photography and
              enjoy <span className="text-white/85">badminton, cricket, and chess</span>.
            </p>
          </div>

          {/* Chips — even grid */}
          <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-6 md:grid-cols-5">
            {chips.map((c, i) => (
              <li
                key={c}
                className={cn(
                  "min-w-0",
                  i < 3 && "sm:col-span-2 md:col-span-1",
                  i === 3 && "sm:col-span-2 sm:col-start-2 md:col-span-1 md:col-start-auto",
                  i === 4 && "col-span-2 flex justify-center sm:col-span-2 sm:col-start-4 md:col-span-1 md:col-start-auto"
                )}
              >
                <span className="chip w-full justify-center sm:w-full">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-300/80" />
                  {c}
                </span>
              </li>
            ))}
          </ul>

          {/* Stat band */}
          <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
            {[
              { k: "2nd", v: "Year B.Tech" },
              { k: "5+", v: "Skills Stack" },
              { k: "∞", v: "Curiosity" },
            ].map((s) => (
              <div
                key={s.v}
                className="glass flex flex-col items-center justify-center rounded-2xl p-4 text-center md:p-5"
              >
                <div className="font-display text-3xl text-gradient md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/45">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
