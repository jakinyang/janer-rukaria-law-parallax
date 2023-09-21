import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import HamburgerMenu from "./HamburgerMenu";
import SectionWrapper from "./SectionWrapper";

const NavBar: React.FC = () => {
  const navItems = [
    // { label: 'Top Banner', id: 'topBanner' },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Immigration Pathways", id: "assessment" },
    // { label: "Why?", id: "why" },
    { label: "Resources", id: "resources" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contactForm" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#232222] py-4 px-8 opacity-90 z-10">
      <div className="flex justify-between items-center">
        <a href="#top">
          <Image
            src="/../public/images-new/logo.png"
            width={55}
            height={48}
            alt="logo"
            className=""
          />
        </a>
        <div className="lg:hidden z-100">
          <HamburgerMenu />
        </div>
        <ul className="hidden lg:flex gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={"#" + item.id}
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
                className="text-xl font-thin"
              >
                <p className="neobrutalist-nav">{item.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    // <SectionWrapper id="nav">
    // </SectionWrapper>
  );
};

export default NavBar;
