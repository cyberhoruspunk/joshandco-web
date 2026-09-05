Set-Content -Path "pages\index.tsx" -Value @'
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SignatureStatement from '../components/SignatureStatement';
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

      <div className="min-h-screen bg-[#f6f5f1] text-[#121212] flex flex-col justify-between selection:bg-neutral-900 selection:text-white">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <SignatureStatement />
          <FeaturedWork />
          <CapabilitiesSection />
          <AboutSection />
        </main>

        <FooterSection />
      </div>
    </>
  );
}
'@