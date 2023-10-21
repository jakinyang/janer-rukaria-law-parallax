import TopBanner from "./TopBanner";

import NavBar from "./NavBar";
import About from "./About";
import Services from "./Services";
import ImmigrationAssessment from "./ImmigrationPathways";
import Why from "./Why";
import Resources from "./Resources";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";

import Footer from "./Footer";

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
