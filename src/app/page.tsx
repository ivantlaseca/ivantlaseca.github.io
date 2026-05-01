// app/page.tsx
// CHECKLIST:
// - Import paths assume components are in src/app/components/
// - Services is commented out intentionally — uncomment when ready.
// - Verify Navbar and Footer components exist if you have them; they are not imported here.

import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Highlights from "@/app/components/Highlights";
import HowIWork from "@/app/components/HowIWork";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
// import Services from "@/app/components/Services"; // Commented out — re-enable when ready.

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Highlights />
      <HowIWork />
      <Skills />
      <Contact />
    </div>
  );
}