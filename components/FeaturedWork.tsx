import React, { useRef } from 'react';

const PROJECTS = [
  {
    id: '01',
    title: 'Virtual Machine Escape Prevention System',
    tags: 'Python, Flask, WebSockets, Cybersecurity Architecture.',
    themeBackground: 'var(--card-project-1)',
    badgeColor: '#0071E3',
  },
  {
    id: '02',
    title: 'Web & Application Engineering',
    tags: 'Next.js, React, TypeScript, Tailwind CSS, Python/Flask, WebSockets.',
    themeBackground: 'var(--card-project-2)',
    badgeColor: '#7928CA',
  },
  {
    id: '03',
    title: 'AI & Prompt Architecture',
    tags: 'Structured prompting, few-shot systems, evaluation pipelines, AI workflows.',
    themeBackground: 'var(--card-project-3)',
    badgeColor: '#D946EF',
  },
  {
    id: '04',
    title: 'Cinematic Visuals',
    tags: 'iPhone 15 Pro, Blackmagic Camera, Apple Log, CapCut color grading.',
    themeBackground: 'var(--card-project-4)',
    badgeColor: '#10B981',
  },
  {
    id: '05',
    title: 'Creative Direction',
    tags: 'Portrait retouching, visual design, campaign graphics, futuristic art direction.',
    themeBackground: 'var(--card-project-5)',
    badgeColor: '#F43F5E',
  },
];

export const FeaturedWork: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 4rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              Featured Work
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginTop: '0.4rem' }}>
              Selected Projects
            </h2>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => scroll('left')}
              aria-label="Previous Project"
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
              aria-label="Next Project"
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
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            style={{
              flex: '0 0 clamp(280px, 75vw, 360px)',
              scrollSnapAlign: 'start',
              position: 'relative',
              height: '440px',
              borderRadius: '24px',
              padding: '28px',
              background: proj.themeBackground,
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: proj.badgeColor,
                  marginBottom: '10px',
                  letterSpacing: '0.05em',
                }}
              >
                {proj.id}
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--text-primary)' }}>
                {proj.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '14px', lineHeight: 1.6 }}>
                {proj.tags}
              </p>
            </div>

            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--btn-secondary-bg)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};