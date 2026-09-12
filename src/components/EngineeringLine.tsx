type EngineeringLineProps = { label: string; dark?: boolean };

export function EngineeringLine({ label, dark = false }: EngineeringLineProps) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%' }}
    >
      <span
        style={{ flex: 1, height: 1, background: dark ? '#3A4044' : '#C9CCC9' }}
      />
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: dark ? '#9BA1A4' : '#6F767B',
        }}
      >
        {label}
      </span>
      <span style={{ width: 6, height: 6, background: '#46B43C' }} />
    </div>
  );
}
