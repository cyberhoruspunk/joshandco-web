import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import CapabilitiesSection from '../components/CapabilitiesSection';
import AboutSection from '../components/AboutSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh & Co. — Oni Joshua Adeola</title>
        <meta
          name="description"
          content="Creative Engineer · Storyteller · Problem Solver. Software engineering, AI systems, visual storytelling, and execution crafted under one studio banner."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-[#f7f6f2] text-[#141414] flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <FeaturedWork />
          <CapabilitiesSection />
          <AboutSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
