import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-6 py-2.5 font-medium transition-all duration-200 active:scale-95 motion-reduce:active:scale-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses =
    variant === 'secondary'
      ? 'bg-transparent border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-gray-50'
      : 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
