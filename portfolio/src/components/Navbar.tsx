import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import { navbarLinks } from '../utils/Data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] py-4 border-b border-[#333] transition-colors duration-300 ${scrolled ? 'bg-[rgba(10,10,10,0.98)]' : 'bg-[rgba(10,10,10,0.95)]'
        } backdrop-blur-[10px]`}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#00d9ff]">&lt;Rachit Saini&gt;</div>
        <ul className="hidden md:flex list-none gap-8">
          {
            navbarLinks.map((navbarLink: string, idx: number) => {
              return (
                <li><Link to={navbarLink} spy={true} smooth={true} offset={0} duration={500} className="text-white no-underline transition-colors hover:text-[#00d9ff] cursor-pointer">{navbarLink}</Link></li>

              )
            })
          }
        </ul>
      </div>
    </nav>
  );
}
