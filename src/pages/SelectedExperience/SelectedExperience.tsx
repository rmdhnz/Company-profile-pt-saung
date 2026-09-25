import { useState } from 'react';
import { Link } from 'react-router-dom';
import mooringBoatPhoto from '../../assets/saung/photo-mooring-boat-upscale.png';
import { Button } from '../../components/Button';
import { EngineeringLine } from '../../components/EngineeringLine';
import { Logo } from '../../components/Logo';
import { MobileMenuButton } from '../../components/MobileMenuButton';
import { SectionMarker } from '../../components/SectionMarker';
import { SpecList } from '../../components/SpecList';
import { experienceList, projectSpecs } from '../../data/home';
import { contentWidth } from '../../styles/inline';

const scopeRows = [
  [
    'Kapal Patroli',
    'Patrol boat untuk kebutuhan pengawasan dan operasi di perairan.',
  ],
  [
    'Kapal Penumpang',
    'Passenger boat untuk angkutan orang pada rute dan kapasitas yang berbeda.',
  ],
  [
    'Kapal Kerja & Mooring',
    'Mooring boat dan kapal kerja untuk kegiatan operasional pelabuhan dan lapangan.',
  ],
  [
    'Kapal Penyelamat & Ambulans',
    'Rescue boat dan ambulance boat untuk kebutuhan tanggap darurat.',
  ],
  [
    'Kapal Survei & Landing Craft',
    'Survey boat, landing craft, dan kapal fungsional lainnya.',
  ],
  [
    'Tugboat, Catamaran & Struktur Terapung',
    'Tugboat, catamaran, serta floating structures.',
  ],
  ['Kapal Ikan', 'Fishing boat untuk kebutuhan operasi penangkapan.'],
  [
    'Perbaikan & Modifikasi',
    'Repair dan modifikasi kapal eksisting sesuai kebutuhan operasional baru.',
  ],
];

export function SelectedExperience() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="font-['Inter',sans-serif] text-[#111315] bg-[#F7F8F6]">
      <header className="sticky top-0 z-20 bg-[#F7F8F6] border-b border-[#E1E3E0]">
        <div className="site-header-inner max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 min-h-[76px] flex items-center gap-6 flex-wrap lg:flex-nowrap">
          <Link to="/">
            <Logo />
          </Link>
          <nav
            id="mobile-navigation"
            className={`site-nav flex justify-end gap-5 ml-auto text-[12px] font-semibold tracking-[.06em] uppercase ${isMenuOpen ? 'is-open' : ''}`}
          >
            <Link to="/#tentang" onClick={closeMenu}>
              Perusahaan
            </Link>
            <Link to="/#kapabilitas" onClick={closeMenu}>
              Kapabilitas
            </Link>
            <Link
              className="text-[#111315] border-b-2 border-[#46B43C] pb-1"
              to="/pengalaman"
              onClick={closeMenu}
            >
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
      <section className="bg-[#111315] text-[#F7F8F6]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-[72px]">
          <Link
            to="/"
            className="text-[11px] font-semibold tracking-[.14em] uppercase text-[#9BA1A4]"
          >
            ← Kembali ke halaman utama
          </Link>
          <div className="mt-8 grid grid-cols-[7fr_5fr] max-lg:grid-cols-1 gap-16 items-end">
            <div className="grid gap-6">
              <SectionMarker number="06" title="Pengalaman Terpilih" dark />
              <h1 className="m-0 font-[Manrope,sans-serif] font-extrabold text-[56px] max-sm:text-[40px] leading-[1.06] tracking-[-.02em] max-w-[22ch] uppercase">
                Pengalaman pada berbagai jenis kapal
              </h1>
              <p className="m-0 text-[16px] leading-[1.6] text-[#C6CBCD] max-w-[60ch]">
                Tim yang berada di balik SAUNG membawa pengalaman pada berbagai
                jenis proyek maritim, mulai dari patrol vessels dan passenger
                vessels hingga mooring boats, rescue boats, tugboats, serta
                vessel repair and modification.
              </p>
            </div>
            <div className="grid gap-4 content-end">
              <EngineeringLine label="Jenis pekerjaan" dark />
              <SpecList items={experienceList} dark />
            </div>
          </div>
        </div>
      </section>
      <section className={contentWidth}>
        <SectionMarker
          number="01"
          title="Proyek Terdokumentasi"
          accent="#167D8D"
        />
        <div className="mt-12 grid grid-cols-[1.6fr_1fr] max-lg:grid-cols-1 gap-12 items-start">
          <div className="aspect-video overflow-hidden bg-[#E8EAE7]">
            <img
              src={mooringBoatPhoto}
              alt="Mooring boat"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="grid gap-5 content-start">
            <span className="text-[#167D8D] text-[11px] font-semibold tracking-[.14em] uppercase">
              — Kapal Kerja
            </span>
            <h2 className="m-0 font-[Manrope,sans-serif] font-bold text-[36px] leading-[1.1] uppercase tracking-[.02em]">
              Mooring Boat
            </h2>
            <p className="m-0 text-[15px] leading-[1.6] text-[#4B5155]">
              Kapal kerja untuk kegiatan mooring, dibangun mengikuti kebutuhan
              operasi, konfigurasi, dan lingkungan kerja pengguna.
            </p>
            <SpecList items={projectSpecs} />
            <p className="m-0 text-[12px] leading-[1.6] text-[#6F767B] max-w-[40ch]">
              Pekerjaan diselesaikan oleh tim teknis sebelum pendirian PT Sinar
              Anugerah Anagata pada 2025.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-[#E1E3E0]">
        <div className={contentWidth}>
          <SectionMarker
            number="02"
            title="Lingkup Pengalaman"
            description="Portofolio perusahaan mencantumkan kapabilitas pada berbagai jenis kapal dan struktur maritim."
          />
          <div className="mt-12 grid grid-cols-2 max-md:grid-cols-1 border-t border-[#111315]">
            {scopeRows.map(([title, body]) => (
              <div
                key={title}
                className="px-8 py-6 border-b border-[#E1E3E0] grid gap-2"
              >
                <h3 className="m-0 font-[Manrope,sans-serif] font-bold text-[16px] uppercase tracking-[.04em]">
                  {title}
                </h3>
                <p className="m-0 text-[13px] leading-[1.6] text-[#4B5155] max-w-[54ch]">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="m-0 mt-6 text-[13px] leading-[1.6] text-[#6F767B] max-w-[80ch]">
            Daftar di atas menggambarkan lingkup kapabilitas dan pengalaman
            teknis, bukan riwayat proyek korporasi. Dokumentasi proyek dapat
            disampaikan atas permintaan.
          </p>
        </div>
      </section>
      <section className="bg-[#25292C] text-[#F7F8F6]">
        <div className={`${contentWidth} py-[88px]`}>
          <div className="grid grid-cols-[7fr_5fr] max-lg:grid-cols-1 gap-16 items-end">
            <div className="grid gap-6">
              <h2 className="m-0 font-[Manrope,sans-serif] font-extrabold text-[44px] max-sm:text-[34px] leading-[1.08] max-w-[22ch]">
                Butuh dokumentasi proyek yang lebih lengkap?
              </h2>
              <p className="m-0 text-[16px] leading-[1.6] text-[#C6CBCD] max-w-[56ch]">
                Sampaikan jenis kapal atau pekerjaan yang Anda rencanakan. Tim
                kami akan menyiapkan referensi pengalaman yang relevan.
              </p>
            </div>
            <Button
              href="mailto:info@ptsaung.co.id?subject=Permintaan%20dokumentasi%20pengalaman%20proyek"
              size="lg"
              arrow
            >
              Minta Dokumentasi Proyek
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-[#111315] text-[#F7F8F6] border-t border-[#3A4044]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-14 flex justify-between items-end gap-12 flex-wrap">
          <Logo dark height={42} />
          <div className="flex flex-wrap gap-8 text-[13px] text-[#C6CBCD]">
            <Link to="/">Halaman Utama</Link>
            <Link to="/korporasi">Informasi Korporasi</Link>
            <a href="mailto:info@ptsaung.co.id">info@ptsaung.co.id</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
