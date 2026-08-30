import type { ReactNode } from 'react';

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  badge?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  badge,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div
      className="section-header-wrap"
      style={{
        textAlign: align,
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <span className="section-eyebrow">{eyebrow}</span>
        {badge}
      </div>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
