import logo from '../assets/saung/logo-upscale-light-no-bg.png';
// import logo from '../assets/saung/logo-lockup.png';
// import darkLogo from '../assets/saung/logo-upscale-dark.png';
import darkLogo from '../assets/saung/logo-upscale-dark-no-bg.png';

type LogoProps = { dark?: boolean; height?: number };

export function Logo({ dark = false, height = 36 }: LogoProps) {
  return (
    <img
      src={dark ? darkLogo : logo}
      alt="PT SAUNG — PT Sinar Anugerah Anagata"
      className="w-auto block"
      style={{ height }}
    />
  );
}
