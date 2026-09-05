import React, { useState } from 'react';

interface ProfilePhotoProps {
  variant?: 'hero' | 'about';
  className?: string;
}

export const PROFILE_IMAGE_URL = '/profile-photo.jpg';

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ variant = 'hero', className = '' }) => {
  const [hasError, setHasError] = useState(false);

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
        boxShadow: variant === 'about' ? 'var(--shadow-card)' : 'none',
      }}
    >
      {!hasError ? (
        <img
          src={PROFILE_IMAGE_URL}
          alt="Oni Joshua Adeola"
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
          }}
        >
          [ Image Not Found ]
        </div>
      )}

      {variant === 'about' && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            fontFamily: 'serif',
            fontStyle: 'italic',
            fontSize: '1.4rem',
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