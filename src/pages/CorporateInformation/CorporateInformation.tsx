import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { SectionMarker } from '../../components/SectionMarker';
import { SpecList } from '../../components/SpecList';
import { corporateData } from '../../data/home';
import { bodyCopy, contentWidth } from '../../styles/inline';

const corporateDetails = [
  ...corporateData,
  {
    label: 'Bidang usaha',
    value: 'Marine engineering, industrial equipment, safety systems',
  },
  { label: 'Klien yang dilayani', value: 'Pemerintahan, swasta, perseorangan' },
];
const documents = [
  [
    'Akta Pendirian',
    'Dokumen pendirian badan usaha PT Sinar Anugerah Anagata.',
  ],
  ['Perizinan Usaha', 'Perizinan usaha sesuai bidang kegiatan perusahaan.'],
  [
    'Dokumen Pendukung',
    'Dokumen administratif lain untuk keperluan pengadaan dan verifikasi vendor.',
  ],
];
const scopeRows = [
  [
    'Rekayasa Maritim',
    'Pembangunan, modifikasi, dan perbaikan kapal fiberglass dan aluminium serta struktur maritim.',
  ],
  [
    'Sistem Industri',
    'Penyediaan mesin, pompa, valve, piping, peralatan kelistrikan, komponen kapal, dan spare parts.',
  ],
  [
    'Keselamatan & Proteksi Kebakaran',
    'Alat pemadam api, sistem proteksi kebakaran, serta peralatan keselamatan maritim dan industri.',
  ],
  [
    'Pengadaan',
    'Dukungan pengadaan equipment dan spare parts berdasarkan kebutuhan teknis klien.',
  ],
];

export function CorporateInformation() {
  return (
    <div className="font-['Inter',sans-serif] text-[#111315] bg-[#F7F8F6]">
      <header className="sticky top-0 z-20 bg-[#F7F8F6] border-b border-[#E1E3E0]">
        <div className="max-w-[1280px] mx-auto px-12 min-h-[76px] flex items-center gap-6">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="flex justify-end gap-5 ml-auto text-[12px] font-semibold tracking-[.06em] uppercase">
            <Link to="/#tentang">Perusahaan</Link>
            <Link to="/#kapabilitas">Kapabilitas</Link>
            <Link to="/pengalaman">Pengalaman</Link>
            <Link
              className="text-[#111315] border-b-2 border-[#46B43C] pb-1"
              to="/korporasi"
            >
              Korporasi
            </Link>
          </nav>
          <Button
            href="mailto:info@ptsaung.co.id?subject=Kebutuhan%20teknis%20-%20PT%20SAUNG"
            size="sm"
          >
            Ajukan Kebutuhan
          </Button>
        </div>
      </header>
      <section className="max-w-[1280px] mx-auto px-12 pt-16">
        <Link
          to="/"
          className="text-[11px] font-semibold tracking-[.14em] uppercase text-[#6F767B]"
        >
          ← Kembali ke halaman utama
        </Link>
        <div className="mt-8">
          <SectionMarker number="09" title="Informasi Perusahaan" />
        </div>
        <div className="mt-10 grid grid-cols-[6fr_6fr] gap-16 items-start pb-24">
          <div className="grid gap-6">
            <h1 className="m-0 font-[Manrope,sans-serif] font-extrabold text-[48px] leading-[1.08] tracking-[-.02em] max-w-[20ch]">
              Dibangun di atas fondasi korporasi yang formal.
            </h1>
            <p className={`${bodyCopy} max-w-[60ch]`}>
              PT Sinar Anugerah Anagata adalah badan usaha yang berkedudukan di
              Surabaya dan memiliki dokumen pendirian serta perizinan usaha yang
              dicantumkan dalam materi perusahaan.
            </p>
            <p className={`${bodyCopy} max-w-[60ch]`}>
              Perusahaan melayani klien dari instansi pemerintahan, perusahaan
              swasta, maupun perseorangan, dengan lingkup pekerjaan pada
              rekayasa maritim, sistem industri, serta keselamatan dan proteksi
              kebakaran.
            </p>
          </div>
          <SpecList items={corporateDetails} />
        </div>
      </section>
      <section className="border-t border-[#E1E3E0]">
        <div className={contentWidth}>
          <SectionMarker
            number="01"
            title="Dokumen & Perizinan"
            description="Dokumen legalitas perusahaan tersedia dan dapat disampaikan kepada calon klien atas permintaan."
          />
          <div className="mt-12 grid grid-cols-3 gap-6">
            {documents.map(([title, body]) => (
              <div
                key={title}
                className="border border-[#E1E3E0] border-t-2 border-t-[#46B43C] bg-[#FFFFFF] p-8 grid gap-3 content-start"
              >
                <h3 className="m-0 font-[Manrope,sans-serif] font-bold text-[16px] uppercase tracking-[.04em]">
                  {title}
                </h3>
                <p className="m-0 text-[13px] leading-[1.6] text-[#4B5155]">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="m-0 mt-6 text-[13px] leading-[1.6] text-[#6F767B] max-w-[80ch]">
            Nomor dokumen dan salinan resmi tidak dipublikasikan di halaman ini.
            Silakan ajukan permintaan untuk keperluan verifikasi vendor atau
            proses pengadaan.
          </p>
        </div>
      </section>
      <section className="border-t border-[#E1E3E0]">
        <div className={contentWidth}>
          <SectionMarker number="02" title="Ruang Lingkup Usaha" />
          <div className="mt-10 grid grid-cols-2 border-t border-[#111315]">
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
        </div>
      </section>
      <section className="bg-[#111315] text-[#F7F8F6]">
        <div className={`${contentWidth} py-[88px]`}>
          <div className="grid grid-cols-[7fr_5fr] gap-16 items-end">
            <div className="grid gap-6">
              <h2 className="m-0 font-[Manrope,sans-serif] font-extrabold text-[44px] leading-[1.08] max-w-[22ch]">
                Perlu dokumen legalitas untuk proses pengadaan?
              </h2>
              <p className="m-0 text-[16px] leading-[1.6] text-[#C6CBCD] max-w-[56ch]">
                Kirimkan permintaan beserta keperluan verifikasi Anda. Tim kami
                akan menyiapkan dokumen yang dibutuhkan.
              </p>
            </div>
            <Button
              href="mailto:info@ptsaung.co.id?subject=Permintaan%20dokumen%20legalitas%20perusahaan"
              size="lg"
              arrow
            >
              Minta Dokumen Legalitas
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-[#111315] text-[#F7F8F6] border-t border-[#3A4044]">
        <div className="max-w-[1280px] mx-auto px-12 py-14 flex justify-between items-end gap-12 flex-wrap">
          <Logo dark height={42} />
          <div className="flex gap-8 text-[13px] text-[#C6CBCD]">
            <Link to="/">Halaman Utama</Link>
            <Link to="/pengalaman">Pengalaman Terpilih</Link>
            <a href="mailto:info@ptsaung.co.id">info@ptsaung.co.id</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
