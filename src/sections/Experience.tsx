import mooringBoatPhoto from '../assets/saung/photo-mooring-boat.png';
import { Button } from '../components/Button';
import { EngineeringLine } from '../components/EngineeringLine';
import { SectionMarker } from '../components/SectionMarker';
import { SpecList } from '../components/SpecList';
import { experienceList, projectSpecs } from '../data/home';
import { bodyCopy, contentWidth, heading } from '../styles/inline';

export function Experience() {
  return (
    <section
      id="pengalaman"
      data-screen-label="06 Pengalaman"
      style={{ background: '#111315', color: '#F7F8F6' }}
    >
      <div style={contentWidth}>
        <SectionMarker number="06" title="Pengalaman Terpilih" dark />
        <div
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            gap: 64,
          }}
        >
          <div style={{ display: 'grid', gap: 24 }}>
            <h2 style={{ ...heading, color: '#F7F8F6' }}>
              Pengalaman pada berbagai jenis kapal dan kebutuhan operasi.
            </h2>
            <p style={{ ...bodyCopy, color: '#C6CBCD' }}>
              Tim yang berada di balik SAUNG membawa pengalaman pada berbagai
              jenis proyek maritim, mulai dari patrol vessels dan passenger
              vessels hingga mooring boats, rescue boats, tugboats, serta vessel
              repair and modification.
            </p>
            <p style={{ ...bodyCopy, color: '#C6CBCD' }}>
              Setiap proyek menunjukkan tuntutan yang berbeda—baik dari sisi
              ukuran, fungsi, konfigurasi maupun lingkungan operasi.
            </p>
            <Button href="Pengalaman Terpilih.dc.html" arrow>
              Jelajahi Pengalaman Terpilih
            </Button>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            <EngineeringLine label="Jenis pekerjaan" dark />
            <SpecList items={experienceList} dark />
          </div>
        </div>
        <div
          style={{
            marginTop: 64,
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            gap: 48,
          }}
        >
          <img
            src={mooringBoatPhoto}
            alt="Mooring boat"
            style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
          />
          <div style={{ display: 'grid', gap: 20 }}>
            <span
              style={{
                color: '#167D8D',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
              }}
            >
              — Kapal Kerja
            </span>
            <h3
              style={{
                margin: 0,
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                fontSize: 36,
                color: '#F7F8F6',
                textTransform: 'uppercase',
              }}
            >
              Mooring Boat
            </h3>
            <SpecList items={projectSpecs} dark />
            <Button
              href="Pengalaman Terpilih.dc.html"
              variant="secondary"
              size="sm"
              arrow
            >
              Lihat Proyek
            </Button>
            <p style={{ ...bodyCopy, fontSize: 12, color: '#9BA1A4' }}>
              Pekerjaan diselesaikan oleh tim teknis sebelum pendirian PT Sinar
              Anugerah Anagata pada 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
