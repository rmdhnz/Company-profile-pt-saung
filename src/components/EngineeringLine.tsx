type EngineeringLineProps = { label: string; dark?: boolean };

export function EngineeringLine({ label, dark = false }: EngineeringLineProps) {
  return (
    <div className="flex items-center gap-4 w-full">
      <span
        className="flex-1 h-px"
        style={{ background: dark ? '#3A4044' : '#C9CCC9' }}
      />
      <span
        className="text-[11px] font-semibold tracking-[.14em] uppercase"
        style={{ color: dark ? '#9BA1A4' : '#6F767B' }}
      >
        {label}
      </span>
      <span className="w-[6px] h-[6px] bg-[#46B43C]" />
    </div>
  );
}
