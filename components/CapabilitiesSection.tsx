import React, { useRef } from 'react';

const CAPABILITIES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Engineering',
    desc: 'Full-stack web applications, real-time systems, backend architecture.',
    points: ['Scalable', 'Reliable', 'Performant'],
    graphic: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="var(--border-medium)" strokeWidth="1.5">
        <polygon points="32 6 56 18 32 30 8 18" />
        <polygon points="32 22 56 34 32 46 8 34" />
        <polygon points="32 38 56 50 32 62 8 50" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3m10-10h-3M5 12H2" />
      </svg>
    ),
    title: 'AI',
    desc: 'Prompt engineering, AI workflows, evaluation systems, structured prompting.',
    points: ['Intelligent', 'Adaptive', 'Measurable'],
    graphic: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="var(--border-medium)" strokeWidth="1.5">
        <circle cx="32" cy="32" r="6" />
        <circle cx="16" cy="20" r="4" />
        <circle cx="48" cy="20" r="4" />
        <circle cx="20" cy="48" r="4" />
        <circle cx="44" cy="48" r="4" />
        <line x1="20" y1="22" x2="28" y2="28" />
        <line x1="44" y1="22" x2="36" y2="28" />
        <line x1="23" y1="45" x2="29" y2="36" />
        <line x1="41" y1="45" x2="35" y2="36" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: 'Visuals',
    desc: 'Mobile cinematography, color grading, portrait retouching, visual direction.',
    points: ['Cinematic', 'Impactful', 'Memorable'],
    graphic: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="var(--border-medium)" strokeWidth="1.5">
        <circle cx="32" cy="32" r="26" />
        <circle cx="32" cy="32" r="18" strokeDasharray="4 4" />
        <circle cx="32" cy="32" r="8" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Execution',
    desc: 'Project management, sprint planning, QA, delivery, and technical coordination.',
    points: ['Organized', 'Efficient', 'Results-driven'],
    graphic: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="var(--border-medium)" strokeWidth="1.5">
        <rect x="10" y="14" width="44" height="36" rx="4" />
        <line x1="16" y1="24" x2="36" y2="24" />
        <line x1="16" y1="32" x2="48" y2="32" />
        <line x1="16" y1="40" x2="28" y2="40" />
      </svg>
    ),
  },
];

export const CapabilitiesSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="capabilities" style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 4rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              Experience / Capabilities
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginTop: '0.4rem' }}>
              Core Disciplines
            </h2>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => scroll('left')}
              aria-label="Previous Capability"
              type="button"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--btn-secondary-bg)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next Capability"
              type="button"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--btn-secondary-bg)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Swipeable Track */}
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '1.5rem clamp(1.25rem, 4vw, 4rem) 2.5rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {CAPABILITIES.map((cap, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 clamp(270px, 75vw, 340px)',
              scrollSnapAlign: 'start',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '390px',
              boxShadow: 'var(--shadow-card)',
              cursor: 'pointer',
            }}
          >
            <div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--btn-secondary-bg)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem',
                }}
              >
                {cap.icon}
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {cap.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {cap.desc}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
                {cap.points.map((pt, idx) => (
                  <li key={idx} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--text-muted)' }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              {cap.graphic}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};