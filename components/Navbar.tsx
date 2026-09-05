import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  return (
    <header className="nav-header">
      <div style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
        Josh <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>& Co.</span>
      </div>

      <nav className="nav-links">
        {['Work', 'About', 'Capabilities', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <ThemeToggle />
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-text)',
            padding: '8px 18px',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
            boxShadow: 'var(--shadow-subtle)',
            whiteSpace: 'nowrap',
          }}
        >
          Let’s Build
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </header>
  );
};