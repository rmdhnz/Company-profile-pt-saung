import { FooterLinks } from '../components/FooterLinks';
import { Logo } from '../components/Logo';
import { bodyCopy } from '../styles/inline';

export function Footer() {
  return (
    <footer style={{ background: '#111315', color: '#F7F8F6' }}>
      <div
        style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px 40px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1.1fr 1.1fr 1.4fr',
            gap: 48,
          }}
        >
          <div style={{ display: 'grid', gap: 20 }}>
            <Logo dark height={42} />
            <p style={{ ...bodyCopy, fontSize: 13, color: '#9BA1A4' }}>
              PT Sinar Anugerah Anagata. Rekayasa maritim, sistem industri,
              serta keselamatan dan proteksi kebakaran.
            </p>
          </div>
          <FooterLinks
            title="Kapabilitas"
            links={[
              ['#maritim', 'Rekayasa Maritim'],
              ['#industri', 'Sistem Industri'],
              ['#keselamatan', 'Keselamatan & Proteksi Kebakaran'],
            ]}
          />
          <FooterLinks
            title="Navigasi"
            links={[
              ['#tentang', 'Perusahaan'],
              ['#kapabilitas', 'Kapabilitas'],
              ['Pengalaman Terpilih.dc.html', 'Pengalaman Terpilih'],
              ['Informasi Korporasi.dc.html', 'Informasi Korporasi'],
              ['#kontak', 'Kontak'],
            ]}
          />
          <div
            style={{ display: 'grid', gap: 12, fontSize: 13, color: '#C6CBCD' }}
          >
            <span className="footer-label">Kontak</span>
            <span>Surabaya, Jawa Timur, Indonesia</span>
            <a href="tel:+623100000000">+62 31 0000 0000</a>
            <a href="mailto:info@ptsaung.co.id">info@ptsaung.co.id</a>
            <span>www.ptsaung.co.id</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            paddingTop: 20,
            borderTop: '1px solid #3A4044',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 11,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: '#9BA1A4',
          }}
        >
          <span>© 2026 PT Sinar Anugerah Anagata</span>
          <span>Engineered for reliability</span>
        </div>
      </div>
    </footer>
  );
}
