import React from 'react';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: '??',
      title: 'Systems Engineering',
      desc: 'Python backends, asynchronous WebSockets, virtualization security, and distributed microservices.'
    },
    {
      icon: '??',
      title: 'AI & Prompt Architecture',
      desc: 'Stateful conversational workflows, context windows, few-shot prompting, and automated eval systems.'
    },
    {
      icon: '??',
      title: 'Cinematic Storytelling',
      desc: 'Apple Log mobile cinematography, high dynamic range color correction, and studio brand assets.'
    }
  ];

  return (
    <section id="capabilities" className="w-full max-w-[1240px] mx-auto px-6 py-16 border-t border-neutral-200">
      <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-8">
        Core Capabilities
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((c, i) => (
          <div key={i} className="bg-neutral-100/70 border border-neutral-200 rounded-2xl p-6">
            <div className="text-2xl mb-4">{c.icon}</div>
            <h3 className="text-base font-bold text-neutral-900 mb-2">{c.title}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
