import React from 'react'
import TopBanner from './TopBanner'
import About from './About'
import { ParallaxLayer } from '@react-spring/parallax'
import Services from './Services'
import NavBar from './NavBar';
import Resources from './Resources';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

export function ContentLayer() {
  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{ zIndex: 1 }}
    >
      <NavBar />
      <TopBanner />
      <About />
      <Services />
      <Resources />
      <Testimonials />
      <ContactForm />
    </ParallaxLayer>
  )
}
