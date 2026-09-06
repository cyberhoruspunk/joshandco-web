import React from 'react';

interface ProfilePhotoProps {
  variant?: 'hero' | 'about';
  className?: string;
}

export const PROFILE_IMAGE_URL = '/IMG_7226.JPG';

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ variant = 'hero', className = '' }) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: variant === 'about' ? '24px' : '20px',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-secondary)',
        border: variant === 'about' ? '1px solid var(--border-subtle)' : 'none',
      }}
    >
      <img
        src={PROFILE_IMAGE_URL}
        alt="Oni Joshua Adeola"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
        }}
      />

      {variant === 'about' && (
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            fontFamily: 'serif',
            fontStyle: 'italic',
            fontSize: '1.5rem',
            color: '#ffffff',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)',
            pointerEvents: 'none',
          }}
        >
          Oni Joshua
        </div>
      )}
    </div>
  );
};