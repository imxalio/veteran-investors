import Links from './component/Links';
import SectionTitle from './component/SectionTitle';
import { FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950">
      <div className="py-20 px-7 max-w-screen-xl mx-auto text-white grid md:grid-cols-3 items-center gap-5">
        <div className="text-center md:col-start-2">
          <SectionTitle>Veteran Investor</SectionTitle>
          <p>
            The ultimate destination for stock trading and crypto enthusiasts.
          </p>
        </div>

        <div className="flex gap-7 text-xl md:justify-self-end justify-center items-center">
          <FaTiktok />
          <FaInstagram />
          <FaTwitter />
        </div>

        <div className="md:flex gap-10 list-none text-lg text-center md:row-start-1">
          <Links />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
