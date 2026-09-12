type FooterLinksProps = { title: string; links: string[][] };

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div
      style={{ display: 'grid', gap: 12, alignContent: 'start', fontSize: 13 }}
    >
      <span className="footer-label">{title}</span>
      {links.map(([href, label]) => (
        <a key={label} href={href}>
          {label}
        </a>
      ))}
    </div>
  );
}
