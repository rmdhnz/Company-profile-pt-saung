import marinePhoto from '../assets/saung/photo-marine.png';
import { Button } from '../components/Button';
import { contentWidth } from '../styles/inline';

export function Hero() {
  return (
    <section
      data-screen-label="Hero"
      style={{ position: 'relative', background: '#111315', color: '#F7F8F6' }}
    >
      <img
        src={marinePhoto}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg,rgba(17,19,21,.95),rgba(17,19,21,.74) 55%,rgba(17,19,21,.45))',
        }}
      />
      <div
        style={{
          ...contentWidth,
          position: 'relative',
          paddingTop: 112,
          paddingBottom: 88,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: '#46B43C',
          }}
        >
          PT Sinar Anugerah Anagata
        </span>
        <h1
          style={{
            margin: '24px 0 0',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 800,
            fontSize: 64,
            lineHeight: 1.04,
            letterSpacing: '-.02em',
            textTransform: 'uppercase',
            maxWidth: '17ch',
          }}
        >
          Rekayasa Maritim. Sistem Industri. Dibangun untuk Keandalan.
        </h1>
        <p
          style={{
            margin: '28px 0 0',
            maxWidth: '58ch',
            fontSize: 18,
            lineHeight: 1.6,
            color: '#C6CBCD',
          }}
        >
          PT SAUNG menyediakan solusi terintegrasi untuk kebutuhan maritim dan
          industri, mulai dari pembangunan dan perbaikan kapal, penyediaan mesin
          dan komponen, hingga sistem keselamatan dan proteksi kebakaran.
        </p>
        <p
          style={{
            margin: '16px 0 0',
            maxWidth: '58ch',
            fontSize: 15,
            lineHeight: 1.6,
            color: '#9BA1A4',
          }}
        >
          Perusahaan bergerak dalam produksi kapal berbahan fiberglass dan
          aluminium serta penyediaan mesin dan peralatan untuk kebutuhan maritim
          dan industri.
        </p>
        <div
          style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}
        >
          <Button href="#kapabilitas" arrow>
            Lihat Kapabilitas Kami
          </Button>
          <Button href="Pengalaman Terpilih.dc.html" variant="secondary">
            Lihat Pengalaman Terpilih
          </Button>
        </div>
        <div
          style={{
            marginTop: 80,
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: 32,
            borderTop: '1px solid #3A4044',
            paddingTop: 28,
          }}
        >
          {[
            ['03', 'Kapabilitas terintegrasi'],
            ['2025', 'Tahun pendirian'],
            ['Surabaya', 'Kantor pusat'],
            ['Fiberglass & Aluminium', 'Material konstruksi kapal'],
          ].map(([value, label]) => (
            <div key={label} style={{ display: 'grid', gap: 8 }}>
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  fontSize: 32,
                  color: '#F7F8F6',
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: '#9BA1A4',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
