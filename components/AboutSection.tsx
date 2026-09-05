import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-[1240px] mx-auto px-6 py-16 border-t border-neutral-200">
      <div className="max-w-2xl">
        <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-4">
          About
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-4 leading-tight">
          Where technical rigor meets creative direction.
        </h2>
        <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
          Led by Oni Joshua Adeola, Josh & Co. operates at the intersection of robust computer science and visual expression. Every system is built for durability, performance, and aesthetic precision.
        </p>
      </div>
    </section>
  );
}
