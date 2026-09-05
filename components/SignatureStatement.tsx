import React from 'react';

export const SignatureStatement: React.FC = () => {
  return (
    <section
      style={{
        padding: '10rem 2rem',
        textAlign: 'center',
        background: 'var(--signature-radial)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
          }}
        >
          Technology is my foundation.<br />
          <span
            style={{
              background: 'var(--accent-text-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Creativity is my edge.
          </span>
        </h2>
      </div>
    </section>
  );
};