import React from 'react'
import TopBanner from './TopBanner'
import About from './About'
import { ParallaxLayer } from '@react-spring/parallax'
import Services from './Services'

export function ContentLayer() {
  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{ zIndex: 1 }}
    >
      <TopBanner />
      <About />
      <Services />
    </ParallaxLayer>
  )
}
