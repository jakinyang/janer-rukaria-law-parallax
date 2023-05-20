import React from 'react';
import TopBanner from '../components/TopBanner';
import About from '../components/About';
import Services from '../components/Services';
import Resources from '../components/Resources';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import BackgroundLayer from '../components/BackgroundLayer';

const App: React.FC = () => {
  return (
    <>
      <BackgroundLayer />
      <TopBanner />
      <About />
      <Services />
      <Resources />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default App;
