import { SectionMarker } from '../components/SectionMarker';
import { sectorItems } from '../data/home';
import { contentWidth, heading } from '../styles/inline';

export function Sectors() {
  return (
    <section
      id="sektor"
      data-screen-label="08 Industri"
      className={contentWidth}
    >
      <SectionMarker number="08" title="Sektor yang Kami Layani" />
      <h2 className={`${heading} mt-10`}>
        Mendukung operasi di berbagai sektor.
      </h2>
      <div className="mt-12 grid grid-cols-2 max-md:grid-cols-1 border-t border-[#111315]">
        {sectorItems.map(([itemTitle, itemBody]) => (
          <div
            key={itemTitle}
            className="py-7 pr-8 border-b border-[#E1E3E0] grid gap-2"
          >
            <h3 className="m-0 font-[Manrope,sans-serif] font-bold text-[16px] uppercase tracking-[.04em]">
              {itemTitle}
            </h3>
            <p className="m-0 text-[13px] leading-[1.6] text-[#4B5155]">
              {itemBody}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
