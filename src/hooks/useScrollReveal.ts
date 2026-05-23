import { useEffect } from "react";

/** Adds `.in-view` for browsers without scroll-driven `animation-timeline`. */
export function useScrollReveal() {
  useEffect(() => {
    if (CSS.supports("animation-timeline", "view()")) return;

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
