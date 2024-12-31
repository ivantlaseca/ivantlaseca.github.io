import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Services from '@/app/components/Services';

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </div>
    </>
  );
}
