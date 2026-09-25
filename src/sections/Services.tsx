import industrialPhoto from '../assets/saung/photo-industrial.png';
import marinePhoto from '../assets/saung/photo-marine-upscale.png';
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
      className="border-t border-[#E1E3E0]"
    >
      <div className={contentWidth}>
        <SectionMarker number={number} title={title} accent={accent} />
        <div className="mt-12 grid grid-cols-[6fr_6fr] max-lg:grid-cols-1 gap-16">
          <div className="grid gap-6">
            <h2 className={heading}>{headingText}</h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={bodyCopy}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="aspect-[3/2] overflow-hidden bg-[#E8EAE7]">
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
        <div
          className={
            cards.length === 4
              ? 'mt-14 grid grid-cols-2 max-md:grid-cols-1 gap-0'
              : 'mt-14 grid grid-cols-3 max-md:grid-cols-1 gap-6'
          }
        >
          {cards.map(([cardTitle, cardBody]) => (
            <div
              key={cardTitle}
              className="border border-[#E1E3E0] border-t-2 bg-[#FFFFFF] p-8 grid gap-3"
              style={{ borderTopColor: accent }}
            >
              <h3 className="m-0 font-[Manrope,sans-serif] font-bold text-[16px] uppercase tracking-[.04em]">
                {cardTitle}
              </h3>
              <p className="m-0 text-[13px] leading-[1.6] text-[#4B5155]">
                {cardBody}
              </p>
            </div>
          ))}
        </div>
        {note && (
          <p className="m-0 mt-6 text-[13px] leading-[1.6] text-[#6F767B]">
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
        className="border-t border-[#E1E3E0]"
      >
        <div className={contentWidth}>
          <SectionMarker
            number="02"
            title="Kapabilitas"
            description="SAUNG menggabungkan kapabilitas engineering, supply, dan safety dalam satu ekosistem layanan yang saling melengkapi."
          />
          <h2 className={`${heading} mt-10`}>
            Satu perusahaan. Tiga kapabilitas terintegrasi.
          </h2>
          <div className="mt-12 grid grid-cols-3 max-md:grid-cols-1 gap-6">
            {capabilityCards.map((card) => (
              <div key={card.title} className="grid gap-4">
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
          <p className="m-0 mt-8 text-[13px] leading-[1.6] text-[#6F767B] max-w-[88ch]">
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
