import { ProductStatus } from '@/types';

interface BadgeProps {
  status?: ProductStatus;
  tech?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const statusMap: Record<ProductStatus, string> = {
  active:      'badge--active',
  beta:        'badge--beta',
  development: 'badge--development',
};

const statusLabel: Record<ProductStatus, string> = {
  active:      '● Activo',
  beta:        '◐ Beta',
  development: '○ En desarrollo',
};

export default function Badge({ status, tech, children, className }: BadgeProps) {
  if (status) {
    return (
      <span className={`badge ${statusMap[status]} ${className ?? ''}`}>
        {statusLabel[status]}
      </span>
    );
  }
  return (
    <span className={`badge ${tech ? 'badge--tech' : ''} ${className ?? ''}`}>
      {children}
    </span>
  );
}
