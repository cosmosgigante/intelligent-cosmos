'use client';

import { useEffect, useRef } from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ label, title, subtitle, centered, className }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className ?? ''}`}
      style={{ 
        textAlign: centered ? 'center' : 'left', 
        maxWidth: centered ? '800px' : undefined, 
        margin: centered ? '0 auto' : undefined,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)'
      }}
    >
      {label && <span className="section-label">{label}</span>}
      <h2 
        style={{ lineHeight: '1.1' }}
        dangerouslySetInnerHTML={{ __html: title }} 
      />
      {subtitle && (
        <p 
          style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-lg)', maxWidth: '600px', marginLeft: centered ? 'auto' : '0', marginRight: centered ? 'auto' : '0' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
