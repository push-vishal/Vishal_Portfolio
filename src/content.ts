/**
 * Portfolio content — edit links and image filenames here.
 *
 * About portrait: replace `src/assets/about.jpeg`
 * Other images: copy into `public/images/` (see public/images/README.md)
 */

import aboutPortrait from "./assets/about.jpeg";

export const site = {
  name: "Vishal Ambilkar",
  email: "vishalambilkar@gmail.com",
  github: "https://github.com/push-vishal",
  linkedin: "https://www.linkedin.com/in/vishalambilkar/",
} as const;

export const socialLinks = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
] as const;

/** Served from /public/images/ — bundled on build & deploy */
export const images = {
  /** Bundled import — always loads in dev & production */
  about: aboutPortrait,
  beyond: "/images/beyond.png",
  projectSamvadd: "/images/project-samvadd.jpeg",
  projectInvestizen: "/images/project-investizen.png",
  sprintSih: "/images/sprint-sih.jpeg",
  sprintHackathon1: "/images/sprint-hackathon-1.jpeg",
  sprintHackathon2: "/images/sprint-hackathon-2.jpeg",
  sprintHackathon3: "/images/sprint-hackathon-3.jpeg",
  /** Shown if a file is missing or fails to load */
  placeholder: "/images/placeholder.svg",
} as const;

export function githubHandle(url: string) {
  try {
    const path = new URL(url).pathname.replace(/^\/|\/$/g, "");
    return path ? `@${path.split("/")[0]}` : "@github";
  } catch {
    return "@github";
  }
}

export function linkedinHandle(url: string) {
  try {
    const path = new URL(url).pathname.replace(/^\/in\//, "").replace(/\/$/, "");
    return path ? `in/${path}` : "LinkedIn";
  } catch {
    return "LinkedIn";
  }
}
