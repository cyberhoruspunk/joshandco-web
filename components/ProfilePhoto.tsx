import React from 'react';

export default function ProfilePhoto() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto aspect-[4/5] rounded-[28px] overflow-visible">
      {/* Portrait Image Container */}
      <div className="w-full h-full rounded-[28px] overflow-hidden relative shadow-2xl bg-neutral-900 border border-neutral-200">
        <img
          src="/profile-photo.jpg"
          alt="Oni Joshua Adeola"
          className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
          onError={(e) => {
            // Fallback if portrait image path is different
            (e.target as HTMLImageElement).src = '/portrait.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating Code Card */}
      <div className="absolute top-[52%] -left-8 md:-left-12 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-4 text-[11px] font-mono text-neutral-700 shadow-xl z-10 leading-relaxed">
        <span className="text-neutral-400">// Execution Pipeline</span><br />
        <span className="text-purple-600 font-bold">def</span> <span className="text-blue-600 font-bold">build_idea</span>(vision):<br />
        &nbsp;&nbsp;strategy = Architect()<br />
        &nbsp;&nbsp;system = Engineer()<br />
        &nbsp;&nbsp;story = Visualize()<br />
        &nbsp;&nbsp;<span className="text-rose-600 font-bold">return</span> Execute(vision)
      </div>

      {/* Floating AI Architecture Card */}
      <div className="absolute bottom-8 -left-4 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-2xl px-5 py-3 shadow-xl z-10 flex items-center gap-4">
        <div>
          <div className="text-xs font-bold text-neutral-900">AI Prompt Architecture</div>
          <div className="text-[10px] text-neutral-500">Structured prompts · Few-shot systems</div>
        </div>
        <span className="text-purple-600 font-bold text-sm">?</span>
      </div>
    </div>
  );
}
