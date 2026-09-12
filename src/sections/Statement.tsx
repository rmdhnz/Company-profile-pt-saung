import { contentWidth, heading } from '../styles/inline';

export function Statement() {
  return (
    <section
      data-screen-label="Pernyataan"
      className="bg-[#111315] text-[#F7F8F6]"
    >
      <div className={`${contentWidth} pt-[112px] pb-[112px]`}>
        <div className="grid grid-cols-[7fr_5fr] gap-16 items-end">
          <h2 className={`${heading} text-[56px] text-[#F7F8F6]`}>
            Kami tidak menjual kompleksitas. Kami menyelesaikan kebutuhan
            operasional.
          </h2>
          <div className="grid gap-5">
            <span className="block w-16 h-[2px] bg-[#46B43C]" />
            <p className="m-0 text-[16px] leading-[1.6] text-[#C6CBCD]">
              Baik itu kapal, pompa, mesin, komponen, maupun sistem keselamatan,
              peran kami tetap sama:
            </p>
            <p className="m-0 text-[16px] leading-[1.6] text-[#F7F8F6]">
              memahami kebutuhan, menyediakan solusi yang tepat, dan
              menyelesaikannya dengan tanggung jawab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
