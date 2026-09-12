import { SectionMarker } from '../components/SectionMarker';
import { sectorItems } from '../data/home';
import { bodyCopy, contentWidth, heading } from '../styles/inline';

export function Sectors() {
  return (
    <section id="sektor" data-screen-label="08 Industri" style={contentWidth}>
      <SectionMarker number="08" title="Sektor yang Kami Layani" />
      <h2 style={{ ...heading, marginTop: 40 }}>
        Mendukung operasi di berbagai sektor.
      </h2>
      <div
        style={{
          marginTop: 48,
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          borderTop: '1px solid #111315',
        }}
      >
        {sectorItems.map(([itemTitle, itemBody]) => (
          <div
            key={itemTitle}
            style={{
              padding: '28px 32px 28px 0',
              borderBottom: '1px solid #E1E3E0',
              display: 'grid',
              gap: 8,
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
              {itemTitle}
            </h3>
            <p style={{ ...bodyCopy, fontSize: 13 }}>{itemBody}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
