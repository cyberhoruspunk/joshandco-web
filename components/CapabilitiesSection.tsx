import React from 'react';

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
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="var(--border-medium)" strokeWidth="1.5">
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
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="var(--border-medium)" strokeWidth="1.5">
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
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="var(--border-medium)" strokeWidth="1.5">
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
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="var(--border-medium)" strokeWidth="1.5">
        <rect x="10" y="14" width="44" height="36" rx="4" />
        <line x1="16" y1="24" x2="36" y2="24" />
        <line x1="16" y1="32" x2="48" y2="32" />
        <line x1="16" y1="40" x2="28" y2="40" />
      </svg>
    ),
  },
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="site-container">
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
            Experience / Capabilities
          </span>
        </div>

        <div className="capabilities-grid">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'var(--btn-secondary-bg)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {cap.icon}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{cap.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {cap.desc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {cap.points.map((pt, idx) => (
                    <li key={idx} style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--text-muted)' }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>{cap.graphic}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};