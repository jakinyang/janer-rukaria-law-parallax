import TopBanner from "./sections/TopBanner";

import NavBar from "./nav/NavBar";
import About from "./sections/About";
import Services from "./sections/Services";
import ImmigrationAssessment from "./sections/ImmigrationPathways";
import Why from "./sections/Why";
import Resources from "./sections/Resources";
import Testimonials from "./sections/Testimonials";
import ContactForm from "./sections/ContactForm";

import Footer from "./sections/Footer";

export function ContentLayer() {
  return (
    <div className="flex flex-col items-center gap-[6.5rem] text-white">
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
