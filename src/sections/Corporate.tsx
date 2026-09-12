import { Button } from '../components/Button';
import { SectionMarker } from '../components/SectionMarker';
import { SpecList } from '../components/SpecList';
import { corporateData } from '../data/home';
import { bodyCopy, contentWidth, heading } from '../styles/inline';

export function Corporate() {
  return (
    <section
      id="korporasi"
      data-screen-label="09 Korporasi"
      className="border-t border-[#E1E3E0]"
    >
      <div className={contentWidth}>
        <SectionMarker number="09" title="Informasi Perusahaan" />
        <div className="mt-12 grid grid-cols-[6fr_6fr] gap-16">
          <div className="grid gap-6">
            <h2 className={heading}>
              Dibangun di atas fondasi korporasi yang formal.
            </h2>
            <p className={bodyCopy}>
              PT Sinar Anugerah Anagata adalah badan usaha yang berkedudukan di
              Surabaya dan memiliki dokumen pendirian serta perizinan usaha yang
              dicantumkan dalam materi perusahaan.
            </p>
            <Button href="/korporasi" variant="secondary" arrow>
              Lihat Informasi Korporasi
            </Button>
          </div>
          <SpecList items={corporateData} />
        </div>
      </div>
    </section>
  );
}
