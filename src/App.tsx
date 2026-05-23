import { useScrollReveal } from "./hooks/useScrollReveal";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Building } from "./components/Building";
import { Work } from "./components/Work";
import { Sprints } from "./components/Sprints";
import { Beyond } from "./components/Beyond";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Global background tint */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0b1220_0%,#050507_55%)]" />
        <div className="bg-noise absolute inset-0" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Building />
        <Work />
        <Sprints />
        <Beyond />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
