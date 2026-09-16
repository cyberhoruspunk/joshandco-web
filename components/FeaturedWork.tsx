import React, { useRef } from 'react';

interface Project {
  id: string;
  title: string;
  category?: string;
  description?: string;
  tags: string[] | string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  themeBackground: string;
  badgeColor: string;
}

const PROJECTS: Project[] = [
  {
    id: '01',
    title: "TG's Beauty Cosmetics",
    category: 'E-Commerce & Digital Architecture',
    description: 'A minimalist digital store and catalog platform built to elevate cosmetics branding, featuring instant product discovery and direct WhatsApp order routing.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel', 'TypeScript'],
    liveUrl: 'https://cosmetic-portfolio.vercel.app',
    githubUrl: 'https://github.com/cyberhoruspunk',
    featured: true,
    themeBackground: 'var(--card-project-1, #121212)',
    badgeColor: '#0070F3',
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
        {PROJECTS.map((proj) => {
          const CardComponent = proj.liveUrl ? 'a' : 'div';
          const linkProps = proj.liveUrl
            ? { href: proj.liveUrl, target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <CardComponent
              key={proj.id}
              {...linkProps}
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
                textDecoration: 'none',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: proj.badgeColor,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {proj.id}
                  </span>
                  {proj.liveUrl && (
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      LIVE SITE ↗
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--text-primary)', marginTop: '10px' }}>
                  {proj.title}
                </h3>

                {proj.description && (
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.5 }}>
                    {proj.description}
                  </p>
                )}

                {/* Web UI Preview Mockup for TG Beauty */}
                {proj.id === '01' && (
                  <div
                    style={{
                      marginTop: '14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      padding: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                    </div>
                    <div style={{ height: '8px', width: '40%', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '6px' }} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                      <div style={{ height: '36px', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
                      <div style={{ height: '36px', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
                    </div>
                  </div>
                )}

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '14px', lineHeight: 1.6 }}>
                  {Array.isArray(proj.tags) ? proj.tags.join(' • ') : proj.tags}
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
            </CardComponent>
          );
        })}
      </div>
    </section>
  );
};