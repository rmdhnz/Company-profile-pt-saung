import type { ReactNode } from 'react';

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
  const sizeClass = {
    sm: 'text-[11px] px-[14px] py-[8px] min-h-[34px]',
    md: 'text-[12px] px-[20px] py-[12px] min-h-[44px]',
    lg: 'text-[13px] px-[24px] py-[16px] min-h-[52px]',
  }[size];
  const variantClass = {
    primary: 'bg-[#46B43C] text-[#111315] border-[#46B43C]',
    secondary: 'bg-transparent text-[#111315] border-[#111315]',
    ghost: 'bg-transparent text-[#111315] border-transparent px-0 py-[8px]',
  }[variant];
  return (
    <a
      className={`saung-button saung-button-${variant} inline-flex items-center ${arrow ? 'justify-between' : 'justify-center'} gap-6 font-['Inter',sans-serif] font-semibold tracking-[.08em] uppercase rounded-[2px] border no-underline ${sizeClass} ${variantClass}`}
      href={href}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </a>
  );
}
