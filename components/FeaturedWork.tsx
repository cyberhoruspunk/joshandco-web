import React from 'react';

export default function FeaturedWork() {
  const projects = [
    {
      title: 'Hypervisor Isolation Engine',
      category: 'Systems Security / Python',
      desc: 'Runtime VM escape mitigation engine monitoring syscall patterns and hypercall integrity.',
      link: 'https://github.com/cyberhoruspunk'
    },
    {
      title: 'Prompt Architecture Engine',
      category: 'AI Systems / Next.js',
      desc: 'Structured generation framework for deterministic multi-stage LLM evaluation pipelines.',
      link: 'https://github.com/cyberhoruspunk'
    },
    {
      title: 'Cinematic Visual Direction',
      category: 'Color Science / Apple Log',
      desc: 'Blackmagic Log workflows, 10-bit color timing, and high-fidelity video productions.',
      link: '#'
    }
  ];

  return (
    <section id="work" className="w-full max-w-[1240px] mx-auto px-6 py-16 border-t border-neutral-200">
      <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-8">
        Featured Work & Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">{project.category}</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">{project.desc}</p>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-neutral-900 hover:underline">
              View Repository ?
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
