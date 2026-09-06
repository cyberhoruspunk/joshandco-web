import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.85rem clamp(1rem, 3vw, 4rem)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: 'var(--bg-nav)',
        borderBottom: '1px solid var(--border-subtle)',
        gap: '1rem',
      }}
    >
      {/* Brand */}
      <div 
        style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          color: 'var(--text-primary)',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Josh <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>& Co.</span>
      </div>

      {/* Navigation Links */}
      <nav
        style={{
          display: 'flex',
          gap: 'clamp(0.75rem, 1.8vw, 2rem)',
          alignItems: 'center',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {['Work', 'About', 'Capabilities', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
        <ThemeToggle />
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-text)',
            padding: '7px 14px',
            borderRadius: '9999px',
            fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: 'var(--shadow-subtle)',
            whiteSpace: 'nowrap',
          }}
        >
          Let’s Build
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </header>
  );
};