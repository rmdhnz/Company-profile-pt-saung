import { Button } from '../components/Button';
import { bodyCopy, contentWidth, heading } from '../styles/inline';

export function Contact() {
  return (
    <section
      id="kontak"
      data-screen-label="Kontak"
      style={{ background: '#25292C', color: '#F7F8F6' }}
    >
      <div style={contentWidth}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            gap: 64,
            alignItems: 'end',
          }}
        >
          <div style={{ display: 'grid', gap: 24 }}>
            <h2 style={{ ...heading, fontSize: 48, color: '#F7F8F6' }}>
              Punya kebutuhan teknis?
            </h2>
            <p style={{ ...bodyCopy, color: '#C6CBCD', fontSize: 16 }}>
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
