import { images } from "../content";
import { Frame } from "./Frame";
import { SectionLabel } from "./SectionLabel";

type Project = {
  name: string;
  tagline: string;
  description: string;
  badge: string;
  img: string;
  tags: string[];
  accent: string;
};

const projects: Project[] = [
  {
    name: "Samvadd.AI",
    tagline: "Civic AI Assistant",
    description:
      "An AI-powered civic assistant simplifying access to Indian government schemes.",
    badge: "Coming Soon",
    img: images.projectSamvadd,
    tags: ["LLMs", "Civic Tech", "Conversational AI", "Public Good"],
    accent: "from-cyan-400/25 to-violet-500/0",
  },
  {
    name: "Investizen",
    tagline: "Smarter Financial Habits",
    description:
      "A fintech-focused platform helping users build smarter financial decision-making habits.",
    badge: "Coming Soon",
    img: images.projectInvestizen,
    tags: ["Fintech", "Behavioral Design", "Analytics", "Product"],
    accent: "from-violet-400/25 to-cyan-400/0",
  },
];

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="orb orb-violet h-[360px] w-[360px] -left-40 top-16 opacity-25" />

      <div className="flex items-end justify-between gap-6">
        <div>
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="reveal mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            <span className="text-gradient-soft">Products in motion.</span>
            <br />
            <span className="text-gradient italic">Crafted with intent.</span>
          </h2>
        </div>
        <div className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 md:block">
          02 — Projects
        </div>
      </div>

      <div className="mt-10 space-y-10">
        {projects.map((p, idx) => (
          <article
            key={p.name}
            className={`grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12 ${
              idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Mockup */}
            <div className="md:col-span-7">
              <Frame
                src={p.img}
                alt={`${p.name} mockup`}
                ratio="aspect-[16/10]"
                glow
                overlay={
                  <>
                    {/* Browser chrome */}
                    <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="absolute right-4 top-4 z-10">
                      <span className="glass rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-white/70">
                        Preview
                      </span>
                    </div>
                  </>
                }
              />
            </div>

            {/* Details */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                  0{idx + 1} · {p.tagline}
                </span>
              </div>
              <h3 className="mt-3 font-display text-4xl tracking-tight text-white md:text-5xl">
                {p.name}
              </h3>
              <p className="mt-4 text-pretty text-[15.5px] leading-relaxed text-white/65 md:text-base">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[11px] tracking-wide text-cyan-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  {p.badge}
                </span>
                <button className="btn-ghost inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/85">
                  Case study
                  <span className="text-cyan-300">↗</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
