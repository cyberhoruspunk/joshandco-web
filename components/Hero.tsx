import React from 'react';
import ProfilePhoto from './ProfilePhoto';

export default function Hero() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-6 pt-8 pb-16 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-neutral-500 mb-6">
          Creative Engineer · Storyteller · Problem Solver
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08] mb-6">
          I build. I direct.<br />
          I make ideas real.
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 max-w-lg leading-relaxed mb-6">
          Software engineering, AI systems, visual storytelling, and execution — crafted under one creative studio.
        </p>

        <div className="text-xl font-bold text-neutral-950 tracking-tight mb-8">
          Josh & Co.
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="bg-neutral-950 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-colors"
          >
            Explore My Work ?
          </a>
          <a
            href="mailto:contact@joshandco.cc"
            className="bg-neutral-100 text-neutral-800 border border-neutral-300 px-7 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Let's Build Something
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <ProfilePhoto />
      </div>
    </section>
  );
}
