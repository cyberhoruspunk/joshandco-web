import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { FeaturedWork } from '../components/FeaturedWork';
import { SignatureStatement } from '../components/SignatureStatement';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { FooterSection } from '../components/FooterSection';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Oni Joshua Adeola',
    alternateName: ['Josh & Co.', 'joshandco', 'Josh & Co'],
    url: 'https://joshandco.cc',
    image: 'https://joshandco.cc/profile-photo.jpg',
    jobTitle: 'Software Engineer & AI Architect',
    sameAs: [
      'https://github.com/cyberhoruspunk',
      'https://joshandco.cc'
    ],
    description: 'Multidisciplinary software engineer, AI architect, and creative director building digital systems, AI solutions, and visual stories.',
  };

  return (
    <>
      <Head>
        {/* Primary Page Title & Core SEO */}
        <title>Josh & Co. | Oni Joshua Adeola | Software Engineer & AI Architect</title>
        <meta
          name="description"
          content="Official portfolio of Josh & Co. (Oni Joshua Adeola). Multidisciplinary Software Engineer, AI Prompt Architect, and Visual Creator based in Nigeria."
        />
        <meta
          name="keywords"
          content="joshandco, Josh and Co, Josh & Co., Oni Joshua Adeola, Software Engineer Nigeria, AI Architect, Full Stack Developer, Computer Science FUOYE"
        />
        <meta name="author" content="Oni Joshua Adeola" />
        <link rel="canonical" href="https://joshandco.cc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons & Brand Icon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joshandco.cc/" />
        <meta property="og:title" content="Josh & Co. | Oni Joshua Adeola" />
        <meta
          property="og:description"
          content="Software engineering, AI systems, visual storytelling, and execution, crafted under one creative studio."
        />
        <meta property="og:image" content="https://joshandco.cc/profile-photo.jpg" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://joshandco.cc/" />
        <meta name="twitter:title" content="Josh & Co. | Oni Joshua Adeola" />
        <meta
          name="twitter:description"
          content="Software engineering, AI systems, visual storytelling, and execution, crafted under one creative studio."
        />
        <meta name="twitter:image" content="https://joshandco.cc/profile-photo.jpg" />

        {/* Google Structured Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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