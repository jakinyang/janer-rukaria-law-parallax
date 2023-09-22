import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import HamburgerMenu from "./HamburgerMenu";

const NavBar: React.FC = () => {
  const navItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Immigration Pathways", id: "assessment" },
    { label: "Why Need A Lawyer", id: "why" },
    { label: "Resources", id: "resources" },
    // { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contactForm" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#232222] py-4 px-8 bg-opacity-90 z-10">
      <div className="flex justify-between items-center">
        <a href="#top">
          <img src="/images-new/logo.svg" alt="logo" className="w-[105px]" />
        </a>
        <div className="lg:hidden z-100">
          <HamburgerMenu />
        </div>
        <ul className="hidden lg:flex gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={"#" + item.id}
                className={`font-thin hover:opacity-70 duration-200 neobrutalist-nav ${item.label === "Contact" && "mt-8 bg-white text-[#232222] py-2 px-4 hover:bg-transparent hover:text-white hover:border-white border rounded duration-200"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
