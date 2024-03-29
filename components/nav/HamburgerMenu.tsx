import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-scroll';

import SectionWrapper from '../SectionWrapper';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const navItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Immigration Pathways", id: "assessment" },
    { label: "Why Need A Lawyer", id: "why" },
    { label: "Resources", id: "resources" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contactForm" },
  ];

return (
  <SectionWrapper id="hamburgerMenu" className='p-0'>
    <button onClick={toggleDrawer}><FaBars /></button>
    <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        
    >
      <div className='flex flex-col m-5'>
        {navItems.map((item) => (
            <div key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-serif text-xl p-2 cursor-pointer text-gray-800"
              >
                <p className='neobrutalist-nav lg:px-7 font-serif'>
                  {item.label}
                </p>
              </Link>
            </div>
          ))}
      </div>
    </Drawer>
  </ SectionWrapper>
  )
}

export default HamburgerMenu;