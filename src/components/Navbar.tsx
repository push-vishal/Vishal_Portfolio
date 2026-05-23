import { useEffect, useState } from "react";
import { images } from "../content";
import { cn } from "../utils/cn";

const links = [
  { label: "About", href: "#about", id: "about" },
 { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Building", href: "#building", id: "building" },
   { label: "Work", href: "#work", id: "work" },
] as const;

const sectionIds = links.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);

      const offset = window.scrollY + window.innerHeight * 0.35;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-5">
      {/* Soft fade under nav when scrolled */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050507]/90 to-transparent transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      />

      <nav
        className={cn(
          "nav-bar glass-strong relative mx-auto flex max-w-4xl items-center gap-2 rounded-full p-1.5 sm:gap-3 sm:p-2",
          scrolled && "nav-bar--scrolled"
        )}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#top"
          className="nav-logo group flex shrink-0 items-center gap-2 rounded-full py-1 pl-1 pr-2 sm:pr-3"
          aria-label="Back to top"
        >
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white/15 ring-offset-1 ring-offset-transparent sm:h-9 sm:w-9">
            <img
              src={images.about}
              alt="Vishal Ambilkar"
              className="h-full w-full object-cover object-top"
            />
            <span className="absolute -inset-1 -z-10 rounded-full bg-cyan-400/25 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
          </span>
          <span className="hidden font-display text-base italic text-white/85 md:block">
            vishal
          </span>
        </a>

        {/* Nav links */}
        <ul className="nav-links" role="list">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn("nav-link", isActive && "nav-link--active")}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-primary nav-cta inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
        >
          <span className="hidden sm:inline">Let&apos;s Connect</span>
          <span className="sm:hidden">Connect</span>
          <span className="ml-1 text-cyan-300 sm:ml-1.5" aria-hidden>
            →
          </span>
        </a>
      </nav>
    </header>
  );
}
