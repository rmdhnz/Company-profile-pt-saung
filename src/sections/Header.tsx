import { useState } from 'react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { MobileMenuButton } from '../components/MobileMenuButton';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 bg-[#F7F8F6] border-b border-[#E1E3E0]">
      <div className="site-header-inner max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 min-h-[76px] flex items-center gap-6 flex-wrap lg:flex-nowrap">
        <Logo />
        <nav
          id="mobile-navigation"
          className={`site-nav flex justify-end gap-5 ml-auto text-[12px] font-semibold tracking-[.08em] uppercase ${isMenuOpen ? 'is-open' : ''}`}
        >
          <a href="#tentang" onClick={closeMenu}>
            Perusahaan
          </a>
          <a href="#kapabilitas" onClick={closeMenu}>
            Kapabilitas
          </a>
          <a className="secondary-nav" href="#maritim" onClick={closeMenu}>
            Maritim
          </a>
          <a className="secondary-nav" href="#industri" onClick={closeMenu}>
            Industri
          </a>
          <a className="secondary-nav" href="#keselamatan" onClick={closeMenu}>
            Keselamatan
          </a>
          <Link to="/pengalaman" onClick={closeMenu}>
            Pengalaman
          </Link>
          <Link to="/korporasi" onClick={closeMenu}>
            Korporasi
          </Link>
          <Button
            className="mobile-menu-action"
            href="mailto:info@ptsaung.co.id?subject=Kebutuhan%20teknis%20-%20PT%20SAUNG"
            size="sm"
          >
            Ajukan Kebutuhan
          </Button>
        </nav>
        <Button
          className="site-header-action"
          href="mailto:info@ptsaung.co.id?subject=Kebutuhan%20teknis%20-%20PT%20SAUNG"
          size="sm"
        >
          Ajukan Kebutuhan
        </Button>
        <MobileMenuButton
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        />
      </div>
    </header>
  );
}
