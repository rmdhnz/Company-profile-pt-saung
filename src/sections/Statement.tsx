import { bodyCopy, contentWidth, heading } from '../styles/inline';

export function Statement() {
  return (
    <section
      data-screen-label="Pernyataan"
      style={{ background: '#111315', color: '#F7F8F6' }}
    >
      <div style={{ ...contentWidth, paddingTop: 112, paddingBottom: 112 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            gap: 64,
            alignItems: 'end',
          }}
        >
          <h2 style={{ ...heading, fontSize: 56, color: '#F7F8F6' }}>
            Kami tidak menjual kompleksitas. Kami menyelesaikan kebutuhan
            operasional.
          </h2>
          <div style={{ display: 'grid', gap: 20 }}>
            <span
              style={{
                display: 'block',
                width: 64,
                height: 2,
                background: '#46B43C',
              }}
            />
            <p style={{ ...bodyCopy, color: '#C6CBCD', fontSize: 16 }}>
              Baik itu kapal, pompa, mesin, komponen, maupun sistem keselamatan,
              peran kami tetap sama:
            </p>
            <p style={{ ...bodyCopy, color: '#F7F8F6', fontSize: 16 }}>
              memahami kebutuhan, menyediakan solusi yang tepat, dan
              menyelesaikannya dengan tanggung jawab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
