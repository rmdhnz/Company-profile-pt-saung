import { SectionMarker } from '../components/SectionMarker';
import { workflowItems } from '../data/home';
import { bodyCopy, contentWidth, heading } from '../styles/inline';

export function Workflow() {
  return (
    <section
      id="cara-kerja"
      data-screen-label="07 Cara Kerja"
      style={{ borderTop: '1px solid #E1E3E0' }}
    >
      <div style={contentWidth}>
        <SectionMarker number="07" title="Cara Kami Bekerja" />
        <h2 style={{ ...heading, marginTop: 40 }}>
          Engineering yang praktis. Tanggung jawab yang jelas.
        </h2>
        <div
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: 32,
          }}
        >
          {workflowItems.map(([number, title, text]) => (
            <div
              key={number}
              style={{
                display: 'grid',
                gap: 12,
                borderTop: '1px solid #111315',
                paddingTop: 20,
              }}
            >
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: '.1em',
                  color: '#46B43C',
                }}
              >
                {number}
              </span>
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
                {title}
              </h3>
              <p style={{ ...bodyCopy, fontSize: 13 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
