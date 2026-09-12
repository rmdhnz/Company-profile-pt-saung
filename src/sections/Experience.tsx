import mooringBoatPhoto from '../assets/saung/photo-mooring-boat.png';
import { Button } from '../components/Button';
import { EngineeringLine } from '../components/EngineeringLine';
import { SectionMarker } from '../components/SectionMarker';
import { SpecList } from '../components/SpecList';
import { experienceList, projectSpecs } from '../data/home';
import { contentWidth, heading } from '../styles/inline';

export function Experience() {
  return (
    <section
      id="pengalaman"
      data-screen-label="06 Pengalaman"
      className="bg-[#111315] text-[#F7F8F6]"
    >
      <div className={contentWidth}>
        <SectionMarker number="06" title="Pengalaman Terpilih" dark />
        <div className="mt-12 grid grid-cols-[7fr_5fr] gap-16">
          <div className="grid gap-6">
            <h2 className={`${heading} text-[#F7F8F6]`}>
              Pengalaman pada berbagai jenis kapal dan kebutuhan operasi.
            </h2>
            <p className="m-0 text-[15px] leading-[1.6] text-[#C6CBCD]">
              Tim yang berada di balik SAUNG membawa pengalaman pada berbagai
              jenis proyek maritim, mulai dari patrol vessels dan passenger
              vessels hingga mooring boats, rescue boats, tugboats, serta vessel
              repair and modification.
            </p>
            <p className="m-0 text-[15px] leading-[1.6] text-[#C6CBCD]">
              Setiap proyek menunjukkan tuntutan yang berbeda—baik dari sisi
              ukuran, fungsi, konfigurasi maupun lingkungan operasi.
            </p>
            <Button href="/pengalaman" arrow>
              Jelajahi Pengalaman Terpilih
            </Button>
          </div>
          <div className="grid gap-4">
            <EngineeringLine label="Jenis pekerjaan" dark />
            <SpecList items={experienceList} dark />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-[1.6fr_1fr] gap-12">
          <img
            src={mooringBoatPhoto}
            alt="Mooring boat"
            className="w-full aspect-video object-cover"
          />
          <div className="grid gap-5">
            <span className="text-[#167D8D] text-[11px] font-semibold tracking-[.14em] uppercase">
              — Kapal Kerja
            </span>
            <h3 className="m-0 font-[Manrope,sans-serif] font-bold text-[36px] text-[#F7F8F6] uppercase">
              Mooring Boat
            </h3>
            <SpecList items={projectSpecs} dark />
            <Button href="/pengalaman" variant="secondary" size="sm" arrow>
              Lihat Proyek
            </Button>
            <p className="m-0 text-[12px] leading-[1.6] text-[#9BA1A4]">
              Pekerjaan diselesaikan oleh tim teknis sebelum pendirian PT Sinar
              Anugerah Anagata pada 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
