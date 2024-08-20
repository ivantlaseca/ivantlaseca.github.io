import Head from 'next/head';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';

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
      </div>
    </>
  );
}
