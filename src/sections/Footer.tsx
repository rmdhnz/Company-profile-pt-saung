import { FooterLinks } from '../components/FooterLinks';
import { Logo } from '../components/Logo';

export function Footer() {
  return (
    <footer className="bg-[#111315] text-[#F7F8F6]">
      <div className="max-w-[1280px] mx-auto pt-16 px-12 pb-10">
        <div className="grid grid-cols-[2fr_1.1fr_1.1fr_1.4fr] gap-12">
          <div className="grid gap-5">
            <Logo dark height={42} />
            <p className="m-0 text-[13px] leading-[1.6] text-[#9BA1A4]">
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
              ['/pengalaman', 'Pengalaman Terpilih'],
              ['/korporasi', 'Informasi Korporasi'],
              ['#kontak', 'Kontak'],
            ]}
          />
          <div className="grid gap-3 text-[13px] text-[#C6CBCD]">
            <span className="footer-label">Kontak</span>
            <span>Surabaya, Jawa Timur, Indonesia</span>
            <a href="tel:+623100000000">+62 31 0000 0000</a>
            <a href="mailto:info@ptsaung.co.id">info@ptsaung.co.id</a>
            <span>www.ptsaung.co.id</span>
          </div>
        </div>
        <div className="mt-12 pt-5 border-t border-[#3A4044] flex justify-between text-[11px] tracking-[.08em] uppercase text-[#9BA1A4]">
          <span>© 2026 PT Sinar Anugerah Anagata</span>
          <span>Engineered for reliability</span>
        </div>
      </div>
    </footer>
  );
}
