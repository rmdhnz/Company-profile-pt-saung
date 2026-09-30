type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      className="site-menu-toggle"
      aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      onClick={onClick}
    >
      <svg
        className="site-menu-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M5 7h14" />
        <path d="M5 12h14" />
        <path d="M5 17h14" />
      </svg>
    </button>
  );
}
