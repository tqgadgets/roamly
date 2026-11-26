import type { HTMLAttributes } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = '', children, ...props }: CardProps) {
  const baseClasses =
    'bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow p-6';

  return (
    <div className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
