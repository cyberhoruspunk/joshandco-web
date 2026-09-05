import React from 'react';
import { ProfilePhoto } from './ProfilePhoto';

const ROLES = [
  {
    title: 'Engineer',
    subtitle: 'Systems that scale',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="8" height="8" rx="2" />
        <rect x="14" y="2" width="8" height="8" rx="2" />
        <rect x="2" y="14" width="8" height="8" rx="2" />
        <rect x="14" y="14" width="8" height="8" rx="2" />
      </svg>
    ),
  },
  {
    title: 'AI Architect',
    subtitle: 'Intelligence that works',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.07-7.07l-2.12 2.12M8.05 16.95l-2.12 2.12M18.07 18.07l-2.12-2.12M8.05 7.05L5.93 4.93" />
      </svg>
    ),
  },
  {
    title: 'Visual Creator',
    subtitle: 'Stories that connect',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Project Executor',
    subtitle: 'Execution that delivers',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

const METRICS = [
  { value: '5+', label: 'Years Building' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '10+', label: 'Technologies' },
  { value: '∞', label: 'Ideas in Progress' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" style={{ padding: '8rem 4rem', maxWidth: '1240px', margin: '0 auto', backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '5rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ width: '280px', height: '380px' }}>
            <ProfilePhoto variant="about" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {ROLES.map((role, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  width: '210px',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div style={{ color: 'var(--text-secondary)' }}>{role.icon}</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>{role.title}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{role.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
            About
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.75rem 0 0.5rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            Oni Joshua Adeola
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Software Engineer · AI Architect · Visual Creator
          </p>

          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            I combine engineering precision with creative vision to build digital systems, AI solutions, and visual stories that solve real problems and leave a lasting impact.
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              padding: '12px 18px',
              background: 'var(--bg-card-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '14px',
              marginBottom: '3rem',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--btn-secondary-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              🎓
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Computer Science</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Federal University Oye-Ekiti (FUOYE), Nigeria</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
            {METRICS.map((m, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>{m.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};