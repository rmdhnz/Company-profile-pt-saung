import { bodyCopy } from '../styles/inline';

type SectionMarkerProps = {
  number: string;
  title: string;
  description?: string;
  accent?: string;
  dark?: boolean;
};

export function SectionMarker({
  number,
  title,
  description,
  accent = '#46B43C',
  dark = false,
}: SectionMarkerProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 24,
        alignItems: 'start',
      }}
    >
      <span
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 800,
          fontSize: 72,
          lineHeight: 0.85,
          letterSpacing: '-.03em',
          color: accent,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {number}
      </span>
      <div
        style={{
          display: 'grid',
          gap: 8,
          paddingTop: 4,
          borderTop: `1px solid ${dark ? '#3A4044' : '#C9CCC9'}`,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 700,
            fontSize: 24,
            textTransform: 'uppercase',
            letterSpacing: '.08em',
            color: dark ? '#F7F8F6' : '#111315',
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            style={{
              ...bodyCopy,
              color: dark ? '#9BA1A4' : '#4B5155',
              maxWidth: '52ch',
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
