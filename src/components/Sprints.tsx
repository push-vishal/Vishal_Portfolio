import { images } from "../content";
import { Frame } from "./Frame";
import { SectionLabel } from "./SectionLabel";

export function Sprints() {
  return (
    <section id="sprints" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="orb orb-cyan h-[360px] w-[360px] -right-40 top-24 opacity-25" />

<SectionLabel>Innovation Sprints</SectionLabel>
        <h2 className="reveal mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-gradient-soft">Built under pressure.</span>
          <br />
          <span className="text-gradient italic">Shaped by execution.</span>
        </h2>

      {/* Timeline */}
      <div className="relative mt-12">
        {/* vertical rail */}
        <div className="absolute left-3 top-2 hidden h-full w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent md:block" />

        {/* Hackathon 1 */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="hidden md:col-span-1 md:block">
            <div className="relative mt-2 h-6 w-6">
              <span className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md" />
              <span className="relative grid h-6 w-6 place-items-center rounded-full bg-black ring-1 ring-cyan-400/60">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
              </span>
            </div>
          </div>

          <div className="md:col-span-5">
            <Frame
              src={images.sprintSih}
              alt="Smart India Hackathon 2025 presentation"
              ratio="aspect-[4/3]"
              glow
              overlay={
                <div className="absolute left-4 top-4">
                  <span className="glass rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-white/80">
                    SIH · 2025
                  </span>
                </div>
              }
            />
          </div>

          <div className="md:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
              Sprint 01
            </div>
            <h3 className="mt-2 font-display text-3xl tracking-tight text-white md:text-4xl">
              Smart India Hackathon 2025
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="chip">Role · Team Lead</span>
              <span className="chip">Shortlisted for Finals ★</span>
            </div>
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/65">
              My first hackathon experience where I led my team from{" "}
              <span className="text-white">ideation</span> to{" "}
              <span className="text-white">solution presentation</span>.
            </p>
          </div>
        </div>

        <div className="hairline my-16" />

        {/* Hackathon 2 */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="hidden md:col-span-1 md:block">
            <div className="relative mt-2 h-6 w-6">
              <span className="absolute inset-0 rounded-full bg-violet-400/30 blur-md" />
              <span className="relative grid h-6 w-6 place-items-center rounded-full bg-black ring-1 ring-violet-400/60">
                <span className="h-2 w-2 rounded-full bg-violet-300" />
              </span>
            </div>
          </div>

          <div className="md:col-span-11">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
              Sprint 02 · 24 Hours
            </div>
            <h3 className="mt-2 font-display text-3xl tracking-tight text-white md:text-4xl">
              24-Hour Grand Finale Hackathon
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Walchand College of Engineering · March 2026
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="chip">Role · Team Leader</span>
              <span className="chip">Endurance · Leadership · Execution</span>
            </div>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-white/65">
              My first 24-hour grand finale hackathon where{" "}
              <span className="text-white">leadership, endurance, rapid execution</span>
              , and <span className="text-white">live problem-solving</span> were tested.
            </p>

            {/* 3-image gallery */}
            <div className="mt-8 grid grid-cols-12 gap-3 md:gap-4">
              <div className="col-span-12 md:col-span-6">
                <Frame
                  src={images.sprintHackathon1}
                  alt="Hackathon main stage"
                  ratio="aspect-[4/3]"
                  glow
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Frame
                  src={images.sprintHackathon2}
                  alt="Live presentation"
                  ratio="aspect-[3/4]"
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Frame
                  src={images.sprintHackathon3}
                  alt="Team workshop"
                  ratio="aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
