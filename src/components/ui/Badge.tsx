import type { HTMLAttributes } from 'react';

export type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className = '', children, ...props }: BadgeProps) {
  const baseClasses =
    'inline-flex items-center rounded-full text-xs font-semibold px-3 py-1 bg-orange-50 text-[var(--color-accent)]';

  return (
    <span className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
