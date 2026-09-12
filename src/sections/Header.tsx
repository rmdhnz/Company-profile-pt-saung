import { Button } from '../components/Button';
import { Logo } from '../components/Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-[#F7F8F6] border-b border-[#E1E3E0]">
      <div className="max-w-[1280px] mx-auto px-12 min-h-[76px] flex items-center gap-6">
        <Logo />
        <nav className="flex justify-end gap-5 ml-auto text-[12px] font-semibold tracking-[.08em] uppercase">
          <a href="#tentang">Perusahaan</a>
          <a href="#kapabilitas">Kapabilitas</a>
          <a className="secondary-nav" href="#maritim">
            Maritim
          </a>
          <a className="secondary-nav" href="#industri">
            Industri
          </a>
          <a className="secondary-nav" href="#keselamatan">
            Keselamatan
          </a>
          <a href="Pengalaman Terpilih.dc.html">Pengalaman</a>
          <a href="Informasi Korporasi.dc.html">Korporasi</a>
        </nav>
        <Button
          href="mailto:info@ptsaung.co.id?subject=Kebutuhan%20teknis%20-%20PT%20SAUNG"
          size="sm"
        >
          Ajukan Kebutuhan
        </Button>
      </div>
    </header>
  );
}
