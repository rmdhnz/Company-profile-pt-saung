import marinePhoto from '../assets/saung/photo-marine.png';
import { Button } from '../components/Button';
import { contentWidth } from '../styles/inline';

export function Hero() {
  return (
    <section
      data-screen-label="Hero"
      className="relative bg-[#111315] text-left text-[#F7F8F6]"
    >
      <img
        src={marinePhoto}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,21,.95),rgba(17,19,21,.74)_55%,rgba(17,19,21,.45))]" />
      <div className={`${contentWidth} relative pt-[112px] pb-[88px]`}>
        <span className="text-[11px] font-semibold tracking-[.14em] uppercase text-[#46B43C]">
          PT Sinar Anugerah Anagata
        </span>
        <h1 className="m-0 mt-6 font-[Manrope,sans-serif] font-extrabold text-[64px] leading-[1.04] tracking-[-.02em] uppercase max-w-[17ch]">
          Rekayasa Maritim. Sistem Industri. Dibangun untuk Keandalan.
        </h1>
        <p className="m-0 mt-7 max-w-[58ch] text-[18px] leading-[1.6] text-[#C6CBCD]">
          PT SAUNG menyediakan solusi terintegrasi untuk kebutuhan maritim dan
          industri, mulai dari pembangunan dan perbaikan kapal, penyediaan mesin
          dan komponen, hingga sistem keselamatan dan proteksi kebakaran.
        </p>
        <p className="m-0 mt-4 max-w-[58ch] text-[15px] leading-[1.6] text-[#9BA1A4]">
          Perusahaan bergerak dalam produksi kapal berbahan fiberglass dan
          aluminium serta penyediaan mesin dan peralatan untuk kebutuhan maritim
          dan industri.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap">
          <Button href="#kapabilitas" arrow>
            Lihat Kapabilitas Kami
          </Button>
          <Button href="/pengalaman" variant="secondary">
            Lihat Pengalaman Terpilih
          </Button>
        </div>
        <div className="mt-20 grid grid-cols-4 gap-8 border-t border-[#3A4044] pt-7">
          {[
            ['03', 'Kapabilitas terintegrasi'],
            ['2025', 'Tahun pendirian'],
            ['Surabaya', 'Kantor pusat'],
            ['Fiberglass & Aluminium', 'Material konstruksi kapal'],
          ].map(([value, label]) => (
            <div key={label} className="grid gap-2">
              <span className="font-[Manrope,sans-serif] font-bold text-[32px] text-[#F7F8F6]">
                {value}
              </span>
              <span className="text-[11px] font-semibold tracking-[.14em] uppercase text-[#9BA1A4]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
