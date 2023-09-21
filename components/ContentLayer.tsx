import React from "react";
import TopBanner from "./TopBanner";
import About from "./About";
import { ParallaxLayer } from "@react-spring/parallax";
import Services from "./Services";
import NavBar from "./NavBar";
import Resources from "./Resources";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ImmigrationAssessment from "./ImmigrationPathways";
import Why from "./Why";

export function ContentLayer() {
  return (
    // <ParallaxLayer
    //   offset={0}
    //   speed={0.5}
    //   style={{ zIndex: 1 }}
    // >
    // </ParallaxLayer>
    <div className="flex flex-col items-center">
      <TopBanner />
      <NavBar />
      <About />
      <Services />
      <ImmigrationAssessment />
      <Why />
      <Resources />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
