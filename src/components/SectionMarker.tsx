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
    <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
      <span
        className="font-['Manrope',sans-serif] font-extrabold text-[72px] leading-[.85] tracking-[-.03em] tabular-nums"
        style={{ color: accent }}
      >
        {number}
      </span>
      <div
        className="grid gap-2 pt-1 border-t"
        style={{ borderTopColor: dark ? '#3A4044' : '#C9CCC9' }}
      >
        <h2
          className="m-0 font-['Manrope',sans-serif] font-bold text-[24px] uppercase tracking-[.08em]"
          style={{ color: dark ? '#F7F8F6' : '#111315' }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="m-0 text-[15px] leading-[1.6] max-w-[52ch]"
            style={{ color: dark ? '#9BA1A4' : '#4B5155' }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
