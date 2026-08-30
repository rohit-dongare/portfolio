import type { ReactNode } from 'react';

export interface BrutalistBadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'dark' | 'neutral';
  className?: string;
  dot?: boolean;
}

export function BrutalistBadge({
  children,
  variant = 'neutral',
  className = '',
  dot = false,
}: BrutalistBadgeProps) {
  const variantClass =
    variant === 'gold' ? 'brutalist-tag-gold' : variant === 'dark' ? 'brutalist-tag-dark' : '';

  return (
    <span className={`brutalist-tag ${variantClass} ${className}`.trim()}>
      {dot && <span className="status-dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
