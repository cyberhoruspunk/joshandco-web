import React from 'react';
import { ProfilePhoto } from './ProfilePhoto';

export const Hero: React.FC = () => {
  return (
    <section className="hero-wrapper">
      <div className="site-container">
        <div className="hero-grid">
          
          {/* Left Text Content */}
          <div>
            <p
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--accent-text-gradient)',
                marginBottom: '1rem',
              }}
            >
              Creative Engineer · Storyteller · Problem Solver
            </p>

            <h1
              style={{
                fontSize: 'clamp(2.3rem, 5.5vw, 4.5rem)',
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
              }}
            >
              I build. I direct.<br />
              I make ideas real.
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                maxWidth: '520px',
                marginBottom: '1.75rem',
              }}
            >
              Software engineering, AI systems, visual storytelling, and execution — crafted under one creative studio.
            </p>

            <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Josh <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>& Co.</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href="#work"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                Explore My Work
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              <a
                href="#contact"
                style={{
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  border: '1px solid var(--btn-secondary-border)',
                  backgroundColor: 'var(--btn-secondary-bg)',
                  color: 'var(--btn-secondary-text)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
              >
                Let’s Build Something
              </a>
            </div>
          </div>

          {/* Right Column / Fluid Portrait */}
          <div className="hero-portrait-wrapper">
            <ProfilePhoto variant="hero" />

            {/* Code Snippet Floating Graphic */}
            <div className="floating-code-snippet">
              <div style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>// Execution Pipeline</div>
              <div>
                <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>def</span>{' '}
                <span style={{ color: 'var(--accent-blue)' }}>build_idea</span>(vision):
              </div>
              <div style={{ paddingLeft: '12px', color: 'var(--text-secondary)' }}>strategy = Architect()</div>
              <div style={{ paddingLeft: '12px', color: 'var(--text-secondary)' }}>system = Engineer()</div>
              <div style={{ paddingLeft: '12px', color: 'var(--text-secondary)' }}>story = Visualize()</div>
              <div style={{ paddingLeft: '12px', color: 'var(--accent-purple)' }}>
                return <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>Execute</span>(vision)
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};