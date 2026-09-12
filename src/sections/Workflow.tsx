import { SectionMarker } from '../components/SectionMarker';
import { workflowItems } from '../data/home';
import { contentWidth, heading } from '../styles/inline';

export function Workflow() {
  return (
    <section
      id="cara-kerja"
      data-screen-label="07 Cara Kerja"
      className="border-t border-[#E1E3E0]"
    >
      <div className={contentWidth}>
        <SectionMarker number="07" title="Cara Kami Bekerja" />
        <h2 className={`${heading} mt-10`}>
          Engineering yang praktis. Tanggung jawab yang jelas.
        </h2>
        <div className="mt-12 grid grid-cols-4 gap-8">
          {workflowItems.map(([number, title, text]) => (
            <div
              key={number}
              className="grid gap-3 border-t border-[#111315] pt-5"
            >
              <span className="font-[Manrope,sans-serif] font-extrabold text-[13px] tracking-[.1em] text-[#46B43C]">
                {number}
              </span>
              <h3 className="m-0 font-[Manrope,sans-serif] font-bold text-[16px] uppercase tracking-[.04em]">
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.6] text-[#4B5155]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
