import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full max-w-[1240px] mx-auto px-6 py-6 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold tracking-tight text-neutral-950 no-underline">
        Josh & Co.
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
        <a href="#work" className="hover:text-neutral-950 transition-colors">Work</a>
        <a href="#about" className="hover:text-neutral-950 transition-colors">About</a>
        <a href="#process" className="hover:text-neutral-950 transition-colors">Process</a>
        <a href="#capabilities" className="hover:text-neutral-950 transition-colors">Capabilities</a>
        <a href="#contact" className="hover:text-neutral-950 transition-colors">Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="mailto:contact@joshandco.cc"
          className="bg-neutral-950 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors"
        >
          Let's Build ?
        </a>
      </div>
    </header>
  );
}
