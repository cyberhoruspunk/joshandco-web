import React from 'react';

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
  return (
    <section id="work" style={{ padding: '7rem 4rem', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              Featured Work
            </span>
          </div>
          <a
            href="#all-projects"
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-text-gradient)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            View All Projects →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }}>
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              style={{
                position: 'relative',
                height: '420px',
                borderRadius: '24px',
                padding: '24px',
                background: proj.themeBackground,
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: proj.badgeColor,
                    marginBottom: '8px',
                  }}
                >
                  {proj.id}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.25, color: 'var(--text-primary)' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '10px', lineHeight: 1.5 }}>
                  {proj.tags}
                </p>
              </div>

              <div
                style={{
                  width: '36px',
                  height: '36px',
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
      </div>
    </section>
  );
};