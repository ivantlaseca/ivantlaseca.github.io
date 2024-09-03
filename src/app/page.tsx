import Head from 'next/head';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Services from '@/app/components/Services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ivan's Portfolio</title>
        <meta name="description" content="Ivan's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
