import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { CarouselCard } from './CarouselCard';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface Testimonial {
  text: string;
}

interface TestimonialsKeenSliderProps {
  testimonials: Testimonial[];
}

export const KeenSlider: React.FC<TestimonialsKeenSliderProps> = ({ testimonials }) => {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 20,
    },
  });

  return (
    <SectionWrapper id="testimonials">
      <div className="w-full flex flex-col items-end">
        <div ref={sliderContainerRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="">
              <CarouselCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};