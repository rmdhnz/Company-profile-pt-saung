import { Button } from '../components/Button';
import { contentWidth, heading } from '../styles/inline';

export function Contact() {
  return (
    <section
      id="kontak"
      data-screen-label="Kontak"
      className="bg-[#25292C] text-[#F7F8F6]"
    >
      <div className={contentWidth}>
        <div className="grid grid-cols-[7fr_5fr] gap-16 items-end">
          <div className="grid gap-6">
            <h2 className={`${heading} text-[48px] text-[#F7F8F6]`}>
              Punya kebutuhan teknis?
            </h2>
            <p className="m-0 text-[16px] leading-[1.6] text-[#C6CBCD]">
              Kirimkan spesifikasi, ruang lingkup pekerjaan, atau kebutuhan
              equipment Anda. Tim kami akan meninjau permintaan tersebut dan
              mendiskusikan solusi yang sesuai.
            </p>
          </div>
          <Button
            href="mailto:info@ptsaung.co.id?subject=Diskusi%20kebutuhan%20teknis%20-%20PT%20SAUNG&body=Mohon%20sampaikan%20spesifikasi%2C%20ruang%20lingkup%20pekerjaan%2C%20atau%20kebutuhan%20equipment%20Anda."
            size="lg"
            arrow
          >
            Diskusikan Kebutuhan Anda
          </Button>
        </div>
      </div>
    </section>
  );
}
