import type { Item } from '../types/content';

type SpecListProps = { items: Item[]; dark?: boolean };

export function SpecList({ items, dark = false }: SpecListProps) {
  return (
    <dl style={{ margin: 0, display: 'grid' }}>
      {items.map((item) => (
        <div
          key={item.label}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            padding: '12px 0',
            borderBottom: `1px solid ${dark ? '#3A4044' : '#E1E3E0'}`,
          }}
        >
          <dt
            style={{
              fontSize: 12,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: dark ? '#9BA1A4' : '#6F767B',
            }}
          >
            {item.label}
          </dt>
          <dd
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 500,
              color: dark ? '#F7F8F6' : '#111315',
            }}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
