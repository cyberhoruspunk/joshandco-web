import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { FeaturedWork } from '../components/FeaturedWork';
import { SignatureStatement } from '../components/SignatureStatement';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { FooterSection } from '../components/FooterSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh & Co. — Oni Joshua Adeola</title>
        <meta
          name="description"
          content="Multidisciplinary software engineer, AI prompt architect, project executor, and visual creator."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
        <Navbar />
        <Hero />
        <AboutSection />
        <FeaturedWork />
        <SignatureStatement />
        <CapabilitiesSection />
        <FooterSection />
      </main>
    </>
  );
}