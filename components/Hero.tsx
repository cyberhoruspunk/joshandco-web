import React from 'react';
import { ProfilePhoto } from './ProfilePhoto';

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 4rem',
        overflow: 'hidden',
        background: 'var(--hero-radial)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div style={{ maxWidth: '640px', zIndex: 2, paddingTop: '3rem' }}>
        <p
          style={{
            fontSize: '0.78rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'var(--accent-text-gradient)',
            marginBottom: '1.25rem',
          }}
        >
          Creative Engineer · Storyteller · Problem Solver
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
          }}
        >
          I build. I direct.<br />
          I make ideas real.
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '460px',
            marginBottom: '2rem',
          }}
        >
          Software engineering, AI systems, visual storytelling, and execution — crafted under one creative studio.
        </p>

        <div style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '2.5rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Josh <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>& Co.</span>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a
            href="#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-text)',
              padding: '13px 26px',
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
              padding: '13px 26px',
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

      <div
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-45%)',
          width: '540px',
          height: '680px',
          zIndex: 1,
        }}
      >
        <ProfilePhoto variant="hero" />

        <div
          style={{
            position: 'absolute',
            bottom: '220px',
            left: '-110px',
            background: 'var(--code-snippet-bg)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--code-snippet-border)',
            borderRadius: '16px',
            padding: '16px 22px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            boxShadow: 'var(--code-snippet-shadow)',
          }}
        >
          <div style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>// Execution Pipeline</div>
          <div><span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>def</span> <span style={{ color: 'var(--accent-blue)' }}>build_idea</span>(vision):</div>
          <div style={{ paddingLeft: '14px', color: 'var(--text-secondary)' }}>strategy = Architect()</div>
          <div style={{ paddingLeft: '14px', color: 'var(--text-secondary)' }}>system = Engineer()</div>
          <div style={{ paddingLeft: '14px', color: 'var(--text-secondary)' }}>story = Visualize()</div>
          <div style={{ paddingLeft: '14px', color: 'var(--accent-purple)' }}>return <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>Execute</span>(vision)</div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            left: '-20px',
            background: 'var(--code-snippet-bg)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--code-snippet-border)',
            borderRadius: '16px',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: 'var(--code-snippet-shadow)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>AI Prompt Architecture</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Structured prompts · Few-shot systems
            </div>
          </div>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2">
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="12" cy="18" r="3" />
            <line x1="8.5" y1="7.5" x2="15.5" y2="7.5" />
            <line x1="7.5" y1="8.5" x2="10.5" y2="15.5" />
            <line x1="16.5" y1="8.5" x2="13.5" y2="15.5" />
          </svg>
        </div>
      </div>
    </section>
  );
};