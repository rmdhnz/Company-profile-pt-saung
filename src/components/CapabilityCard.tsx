import type { Division } from '../types/content';
import { bodyCopy } from '../styles/inline';

type CapabilityCardProps = {
  division: Division;
  title: string;
  description: string;
  items: string[];
};

export function CapabilityCard({
  division,
  title,
  description,
  items,
}: CapabilityCardProps) {
  const accent = {
    marine: '#167D8D',
    industrial: '#D69024',
    safety: '#C63632',
  }[division];
  const icon = { marine: 'ship', industrial: 'factory', safety: 'flame' }[
    division
  ];
  return (
    <div
      style={{
        padding: 32,
        border: '1px solid #E1E3E0',
        background: '#FFFFFF',
        borderRadius: 2,
        borderTop: `2px solid ${accent}`,
        display: 'grid',
        gap: 16,
        alignContent: 'start',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: 28,
          height: 28,
          background: accent,
          WebkitMaskImage: `url("https://unpkg.com/lucide-static@0.446.0/icons/${icon}.svg")`,
          maskImage: `url("https://unpkg.com/lucide-static@0.446.0/icons/${icon}.svg")`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
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
      <p style={{ ...bodyCopy, fontSize: 14, lineHeight: 1.35 }}>
        {description}
      </p>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'grid',
          gap: 8,
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              fontSize: 13,
              color: '#4B5155',
              display: 'flex',
              gap: 12,
              alignItems: 'baseline',
            }}
          >
            <span
              style={{
                width: 6,
                height: 1,
                background: accent,
                flex: '0 0 auto',
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
