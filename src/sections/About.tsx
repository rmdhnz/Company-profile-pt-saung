import plantPhoto from '../assets/saung/photo-plant.png';
import { SectionMarker } from '../components/SectionMarker';
import { bodyCopy, contentWidth, heading } from '../styles/inline';

export function About() {
  return (
    <section
      id="tentang"
      data-screen-label="01 Tentang"
      className={contentWidth}
    >
      <SectionMarker number="01" title="Tentang SAUNG" />
      <div className="mt-12 grid grid-cols-[7fr_5fr] max-lg:grid-cols-1 gap-16 items-start">
        <div className="grid gap-6">
          <h2 className={heading}>
            Solusi engineering untuk operasi maritim dan industri.
          </h2>
          <p className={bodyCopy}>
            PT Sinar Anugerah Anagata, atau PT SAUNG, adalah perusahaan berbasis
            di Surabaya yang bergerak dalam bidang marine engineering, vessel
            solutions, industrial equipment, dan safety systems.
          </p>
          <p className={bodyCopy}>
            Didirikan pada tahun 2025, perusahaan melayani kebutuhan klien di
            sektor maritim, baik dari instansi pemerintahan, perusahaan swasta,
            maupun klien perseorangan.
          </p>
          <p className={bodyCopy}>
            Kami membangun bisnis berdasarkan prinsip sederhana: memahami
            kebutuhan teknis dengan jelas, menyediakan solusi yang tepat, dan
            menjaga kualitas pekerjaan dari awal hingga penyelesaian.
          </p>
        </div>
        <div className="grid gap-8">
          <div className="border-l-2 border-[#46B43C] py-1 pl-6">
            <p className="m-0 font-[Manrope,sans-serif] font-bold text-[20px] leading-[1.4]">
              Kami fokus pada hal yang menentukan: peralatan yang andal,
              engineering yang praktis, dan penyelesaian pekerjaan yang dapat
              dipertanggungjawabkan.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-[#E8EAE7]">
            <img
              src={plantPhoto}
              alt="Fasilitas dan pekerjaan teknis PT SAUNG"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
