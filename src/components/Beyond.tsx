import { images } from "../content";
import { cn } from "../utils/cn";
import { Frame } from "./Frame";
import { SectionLabel } from "./SectionLabel";

const interests = [
  { name: "Nature Photography", icon: "📷" },
  { name: "Badminton", icon: "🏸" },
  { name: "Cricket", icon: "🏏" },
  { name: "Chess", icon: "♞" },
  { name: "Adventure", icon: "🧭" },
];

export function Beyond() {
  return (
    <section id="beyond" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Frame
            src={images.beyond}
            alt="Nature exploration aesthetic"
            ratio="aspect-[4/5]"
            glow
            overlay={
              <div className="absolute right-4 top-4">
                <span className="glass rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.28em] text-white/80">
                  Off-screen
                </span>
              </div>
            }
            caption="Enjoying the moment, 2026"
          />
        </div>

        <div className="md:col-span-7 md:pt-8">
          <SectionLabel>Beyond Tech</SectionLabel>
          <h2 className="reveal mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            <span className="text-gradient-soft">Beyond code,</span>
            <br />
            <span className="text-gradient italic">creativity continues.</span>
          </h2>

          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/65 md:text-[17px]">
            The best ideas often arrive between frames — on a quiet trail, mid-rally,
            or in the silence between two chess moves. Life beyond the screen keeps
            the work honest.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((i, idx) => (
              <li
                key={i.name}
                className={cn(
                  "min-w-0",
                  idx === 4 && "sm:col-span-2 sm:flex sm:justify-center lg:col-span-1 lg:col-start-auto",
                  idx === 3 && "lg:col-start-2"
                )}
              >
                <div
                  className={cn(
                    "glass group flex w-full items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-white/20",
                    idx === 4 && "sm:max-w-[calc(50%-0.375rem)] lg:max-w-none"
                  )}
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-white/10 text-lg">
                    {i.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] text-white">{i.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                      Pursuit
                    </div>
                  </div>
                  <span className="shrink-0 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-cyan-300">
                    →
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
