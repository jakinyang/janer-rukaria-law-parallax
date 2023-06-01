import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';

const NavBar: React.FC = () => {
  const navItems = [
    // { label: 'Top Banner', id: 'topBanner' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Resources', id: 'resources' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contactForm' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-4">
      <div className="flex justify-between">
        <Image 
          src="/../public/images/logo-nav.png"
          width={150}
          height={150}
          alt="logo"
        />
        <ul className="flex justify-end space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-serif text-xl p-2 cursor-pointer"
              >
                <p className='neobrutalist-nav px-7'>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
