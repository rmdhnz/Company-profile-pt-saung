import { About } from '../../sections/About';
import { Contact } from '../../sections/Contact';
import { Corporate } from '../../sections/Corporate';
import { Experience } from '../../sections/Experience';
import { Footer } from '../../sections/Footer';
import { Header } from '../../sections/Header';
import { Hero } from '../../sections/Hero';
import { Sectors } from '../../sections/Sectors';
import { Services } from '../../sections/Services';
import { Statement } from '../../sections/Statement';
import { Workflow } from '../../sections/Workflow';

export function Home() {
  return (
    <div className="font-['Inter',sans-serif] text-[#111315] bg-[#F7F8F6]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Workflow />
      <Statement />
      <Sectors />
      <Corporate />
      <Contact />
      <Footer />
    </div>
  );
}
