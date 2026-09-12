import plantPhoto from '../assets/saung/photo-plant.png';
import { SectionMarker } from '../components/SectionMarker';
import { bodyCopy, contentWidth, heading } from '../styles/inline';

export function About() {
  return (
    <section id="tentang" data-screen-label="01 Tentang" style={contentWidth}>
      <SectionMarker number="01" title="Tentang SAUNG" />
      <div
        style={{
          marginTop: 48,
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'grid', gap: 24 }}>
          <h2 style={heading}>
            Solusi engineering untuk operasi maritim dan industri.
          </h2>
          <p style={bodyCopy}>
            PT Sinar Anugerah Anagata, atau PT SAUNG, adalah perusahaan berbasis
            di Surabaya yang bergerak dalam bidang marine engineering, vessel
            solutions, industrial equipment, dan safety systems.
          </p>
          <p style={bodyCopy}>
            Didirikan pada tahun 2025, perusahaan melayani kebutuhan klien di
            sektor maritim, baik dari instansi pemerintahan, perusahaan swasta,
            maupun klien perseorangan.
          </p>
          <p style={bodyCopy}>
            Kami membangun bisnis berdasarkan prinsip sederhana: memahami
            kebutuhan teknis dengan jelas, menyediakan solusi yang tepat, dan
            menjaga kualitas pekerjaan dari awal hingga penyelesaian.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 32 }}>
          <div
            style={{
              borderLeft: '2px solid #46B43C',
              padding: '4px 0 4px 24px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                fontSize: 20,
                lineHeight: 1.4,
              }}
            >
              Kami fokus pada hal yang menentukan: peralatan yang andal,
              engineering yang praktis, dan penyelesaian pekerjaan yang dapat
              dipertanggungjawabkan.
            </p>
          </div>
          <div
            style={{
              aspectRatio: '4/3',
              overflow: 'hidden',
              background: '#E8EAE7',
            }}
          >
            <img
              src={plantPhoto}
              alt="Fasilitas dan pekerjaan teknis PT SAUNG"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
