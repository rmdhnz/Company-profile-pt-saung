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
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  );
}
