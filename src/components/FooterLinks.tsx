type FooterLinksProps = { title: string; links: string[][] };

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="grid gap-3 content-start text-[13px]">
      <span className="footer-label">{title}</span>
      {links.map(([href, label]) => (
        <a key={label} href={href}>
          {label}
        </a>
      ))}
    </div>
  );
}
