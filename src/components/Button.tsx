import type { CSSProperties, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  arrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export function Button({
  children,
  href,
  variant = 'primary',
  arrow = false,
  size = 'md',
}: ButtonProps) {
  const sizes = {
    sm: { fontSize: 11, padding: '8px 14px', minHeight: 34 },
    md: { fontSize: 12, padding: '12px 20px', minHeight: 44 },
    lg: { fontSize: 13, padding: '16px 24px', minHeight: 52 },
  };
  const variants: Record<string, CSSProperties> = {
    primary: {
      background: '#46B43C',
      color: '#111315',
      borderColor: '#46B43C',
    },
    secondary: {
      background: 'transparent',
      color: '#111315',
      borderColor: '#111315',
    },
    ghost: {
      background: 'transparent',
      color: '#111315',
      borderColor: 'transparent',
      padding: '8px 0',
    },
  };
  return (
    <a
      className={`saung-button saung-button-${variant}`}
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: arrow ? 'space-between' : 'center',
        gap: 24,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        borderRadius: 2,
        border: '1px solid transparent',
        textDecoration: 'none',
        ...sizes[size],
        ...variants[variant],
      }}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </a>
  );
}
