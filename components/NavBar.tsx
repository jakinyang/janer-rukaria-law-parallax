import React from 'react';
import { Link } from 'react-scroll';

const NavBar: React.FC = () => {
  const navItems = [
    { label: 'Top Banner', id: 'topBanner' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Resources', id: 'resources' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contactForm' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-4">
      <ul className="flex justify-end space-x-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="p-2 cursor-pointer"
            >
              <p className='neobrutalist-nav'>
                {item.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
