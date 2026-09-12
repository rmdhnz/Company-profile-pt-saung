import { Button } from '../components/Button';
import { Logo } from '../components/Logo';

export function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: '#F7F8F6',
        borderBottom: '1px solid #E1E3E0',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          minHeight: 76,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <Logo />
        <nav
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 20,
            marginLeft: 'auto',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
          }}
        >
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
