import React from 'react';
import SectionWrapper from './SectionWrapper';
import { KeenSlider } from './KeenSlider';

const Testimonials: React.FC = () => {
  const testimonialsData = [
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
  ];

  return (
    <SectionWrapper id="testimonials">
      <div className="w-full flex flex-col items-end">
        <h2 className="text-2xl mb-8">Testimonials</h2>
        <KeenSlider testimonials={testimonialsData} />
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
