import type { Item } from '../types/content';

type SpecListProps = { items: Item[]; dark?: boolean };

export function SpecList({ items, dark = false }: SpecListProps) {
  return (
    <dl className="m-0 grid">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 py-3 border-b"
          style={{ borderBottomColor: dark ? '#3A4044' : '#E1E3E0' }}
        >
          <dt
            className="text-[12px] tracking-[.08em] uppercase"
            style={{ color: dark ? '#9BA1A4' : '#6F767B' }}
          >
            {item.label}
          </dt>
          <dd
            className="m-0 text-[13px] font-medium"
            style={{ color: dark ? '#F7F8F6' : '#111315' }}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
