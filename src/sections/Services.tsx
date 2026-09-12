import industrialPhoto from '../assets/saung/photo-industrial.png';
import marinePhoto from '../assets/saung/photo-marine.png';
import safetyPhoto from '../assets/saung/photo-safety.png';
import { Button } from '../components/Button';
import { CapabilityCard } from '../components/CapabilityCard';
import { SectionMarker } from '../components/SectionMarker';
import { capabilityCards } from '../data/home';
import { bodyCopy, contentWidth, heading } from '../styles/inline';

function CapabilitySection({
  id,
  number,
  title,
  accent,
  headingText,
  paragraphs,
  image,
  alt,
  note,
  cards,
}: {
  id: string;
  number: string;
  title: string;
  accent: string;
  headingText: string;
  paragraphs: string[];
  image: string;
  alt: string;
  note?: string;
  cards: string[][];
}) {
  return (
    <section
      id={id}
      data-screen-label={`${number} ${title}`}
      style={{ borderTop: '1px solid #E1E3E0' }}
    >
      <div style={contentWidth}>
        <SectionMarker number={number} title={title} accent={accent} />
        <div
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: '6fr 6fr',
            gap: 64,
          }}
        >
          <div style={{ display: 'grid', gap: 24 }}>
            <h2 style={heading}>{headingText}</h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} style={bodyCopy}>
                {paragraph}
              </p>
            ))}
          </div>
          <div
            style={{
              aspectRatio: '3/2',
              overflow: 'hidden',
              background: '#E8EAE7',
            }}
          >
            <img
              src={image}
              alt={alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: `repeat(${cards.length === 4 ? 2 : 3},1fr)`,
            gap: cards.length === 4 ? 0 : 24,
          }}
        >
          {cards.map(([cardTitle, cardBody]) => (
            <div
              key={cardTitle}
              style={{
                border: '1px solid #E1E3E0',
                borderTop: `2px solid ${accent}`,
                background: '#FFFFFF',
                padding: 32,
                display: 'grid',
                gap: 12,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: 'uppercase',
                  letterSpacing: '.04em',
                }}
              >
                {cardTitle}
              </h3>
              <p style={{ ...bodyCopy, fontSize: 13 }}>{cardBody}</p>
            </div>
          ))}
        </div>
        {note && (
          <p
            style={{
              ...bodyCopy,
              marginTop: 24,
              fontSize: 13,
              color: '#6F767B',
            }}
          >
            {note}
          </p>
        )}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <>
      <section
        id="kapabilitas"
        data-screen-label="02 Kapabilitas"
        style={{ borderTop: '1px solid #E1E3E0' }}
      >
        <div style={contentWidth}>
          <SectionMarker
            number="02"
            title="Kapabilitas"
            description="SAUNG menggabungkan kapabilitas engineering, supply, dan safety dalam satu ekosistem layanan yang saling melengkapi."
          />
          <h2 style={{ ...heading, marginTop: 40 }}>
            Satu perusahaan. Tiga kapabilitas terintegrasi.
          </h2>
          <div
            style={{
              marginTop: 48,
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 24,
            }}
          >
            {capabilityCards.map((card) => (
              <div key={card.title} style={{ display: 'grid', gap: 16 }}>
                <CapabilityCard {...card} />
                <Button
                  href={`#${card.division === 'marine' ? 'maritim' : card.division === 'industrial' ? 'industri' : 'keselamatan'}`}
                  variant="ghost"
                  size="sm"
                  arrow
                >
                  {card.division === 'marine'
                    ? 'Lihat Rekayasa Maritim'
                    : card.division === 'industrial'
                      ? 'Lihat Sistem Industri'
                      : 'Lihat Solusi Keselamatan'}
                </Button>
              </div>
            ))}
          </div>
          <p
            style={{
              ...bodyCopy,
              marginTop: 32,
              fontSize: 13,
              color: '#6F767B',
              maxWidth: '88ch',
            }}
          >
            Materi perusahaan mencantumkan berbagai kategori seperti pump,
            compressor, generator, electric motor, gearbox, valve, hydraulic
            equipment, marine piping, navigation equipment, dan komponen kapal
            lainnya. Lini fire protection PT SAUNG mencakup Dry Chemical Powder,
            liquid gas, thermatic/semi automatic, CO₂, dan foam.
          </p>
        </div>
      </section>
      <CapabilitySection
        id="maritim"
        number="03"
        title="Rekayasa Maritim"
        accent="#167D8D"
        headingText="Dibangun untuk tuntutan operasi yang nyata."
        paragraphs={[
          'Setiap kapal memiliki tujuan operasional yang berbeda.',
          'Karena itu, SAUNG tidak melihat kapal sebagai produk standar, tetapi sebagai sebuah sistem yang harus menyesuaikan kebutuhan pengguna, kondisi operasi, kapasitas, konfigurasi, dan lingkungan kerjanya.',
          'Kapabilitas yang ditampilkan dalam portofolio perusahaan mencakup berbagai jenis kapal seperti passenger boat, patrol boat, ambulance boat, rescue boat, survey boat, landing craft, fishing boat, tugboat, catamaran, serta floating structures.',
        ]}
        image={marinePhoto}
        alt="Pekerjaan konstruksi kapal"
        note="Materi portfolio perusahaan secara khusus juga menampilkan pekerjaan modifikasi kapal serta kategori repair kapal."
        cards={[
          [
            'Pembangunan Kapal',
            'Pembangunan kapal fiberglass dan aluminium untuk berbagai kebutuhan komersial dan operasional.',
          ],
          [
            'Modifikasi Kapal',
            'Penyesuaian dan peningkatan kapal eksisting untuk memenuhi kebutuhan operasional baru.',
          ],
          [
            'Perbaikan Kapal',
            'Perbaikan dan pemeliharaan kapal untuk membantu menjaga kelayakan dan kesiapan operasional.',
          ],
        ]}
      />
      <CapabilitySection
        id="industri"
        number="04"
        title="Sistem Industri"
        accent="#D69024"
        headingText="Peralatan di balik operasi yang andal."
        paragraphs={[
          'Operasi maritim dan industri tidak hanya bergantung pada satu mesin.',
          'Pompa, motor, piping, valve, electrical system, compressor, dan berbagai supporting equipment harus bekerja sebagai satu sistem yang dapat diandalkan.',
          'SAUNG menyediakan berbagai kebutuhan machinery dan equipment untuk aplikasi marine maupun industrial.',
        ]}
        image={industrialPhoto}
        alt="Mesin dan peralatan industri"
        cards={[
          [
            'Pumps',
            'Solusi pumping untuk berbagai aplikasi, mulai dari centrifugal pump dan sewage pump hingga vacuum pump, booster pump, screw pump, dan specialized pumping systems.',
          ],
          [
            'Mesin & Komponen',
            'Mesin dan komponen untuk mendukung sistem mekanikal dan operasional.',
          ],
          [
            'Marine Equipment',
            'Komponen kapal, sistem navigasi, safety equipment, hatch, marine lighting, cargo handling, dan supporting equipment lainnya.',
          ],
          [
            'Pengadaan',
            'Dukungan pengadaan equipment dan spare parts berdasarkan kebutuhan teknis dan operasional klien.',
          ],
        ]}
      />
      <CapabilitySection
        id="keselamatan"
        number="05"
        title="Keselamatan & Proteksi Kebakaran"
        accent="#C63632"
        headingText="Perlindungan harus bekerja sebelum dibutuhkan."
        paragraphs={[
          'Keselamatan tidak dimulai ketika keadaan darurat terjadi.',
          'Ia dimulai dari pemilihan equipment yang tepat, penempatan yang sesuai, dan kesiapan sistem ketika dibutuhkan.',
          'SAUNG menyediakan berbagai solusi proteksi kebakaran untuk kebutuhan bangunan, fasilitas industri, kapal, dan area operasional.',
        ]}
        image={safetyPhoto}
        alt="Peralatan proteksi kebakaran"
        cards={[
          [
            'Alat Pemadam Api',
            'Berbagai jenis media pemadam untuk kebutuhan dan karakteristik risiko yang berbeda.',
          ],
          [
            'Peralatan Proteksi Kebakaran',
            'Equipment pendukung untuk membangun sistem perlindungan kebakaran yang lebih lengkap.',
          ],
          [
            'Keselamatan Maritim & Industri',
            'Produk keselamatan yang mendukung lingkungan kerja dan operasi maritim.',
          ],
        ]}
      />
    </>
  );
}
