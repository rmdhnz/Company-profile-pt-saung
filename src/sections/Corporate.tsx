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
      style={{ borderTop: '1px solid #E1E3E0' }}
    >
      <div style={contentWidth}>
        <SectionMarker number="09" title="Informasi Perusahaan" />
        <div
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: '6fr 6fr',
            gap: 64,
          }}
        >
          <div style={{ display: 'grid', gap: 24 }}>
            <h2 style={heading}>
              Dibangun di atas fondasi korporasi yang formal.
            </h2>
            <p style={bodyCopy}>
              PT Sinar Anugerah Anagata adalah badan usaha yang berkedudukan di
              Surabaya dan memiliki dokumen pendirian serta perizinan usaha yang
              dicantumkan dalam materi perusahaan.
            </p>
            <Button
              href="Informasi Korporasi.dc.html"
              variant="secondary"
              arrow
            >
              Lihat Informasi Korporasi
            </Button>
          </div>
          <SpecList items={corporateData} />
        </div>
      </div>
    </section>
  );
}
