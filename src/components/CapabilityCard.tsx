import type { Division } from '../types/content';

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
      className="p-8 border border-[#E1E3E0] bg-[#FFFFFF] rounded-[2px] border-t-2 grid gap-4 content-start"
      style={{ borderTopColor: accent }}
    >
      <span
        aria-hidden="true"
        className="inline-block w-7 h-7 bg-current"
        style={{
          color: accent,
          WebkitMaskImage: `url("https://unpkg.com/lucide-static@0.446.0/icons/${icon}.svg")`,
          maskImage: `url("https://unpkg.com/lucide-static@0.446.0/icons/${icon}.svg")`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
      <h3 className="m-0 font-[Manrope,sans-serif] font-bold text-[16px] uppercase tracking-[.04em]">
        {title}
      </h3>
      <p className="m-0 text-[14px] leading-[1.35] text-[#4B5155]">
        {description}
      </p>
      <ul className="m-0 p-0 list-none grid gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-[13px] text-[#4B5155] flex gap-3 items-baseline"
          >
            <span
              className="w-[6px] h-px shrink-0"
              style={{ background: accent }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
