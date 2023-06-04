import React from 'react';
import TextCard from './TextCard';
import SectionWrapper from './SectionWrapper';

const Services: React.FC = () => {
  const services = [
    `Vexillologist keffiyeh taxidermy snackwave, narwhal franzen chicharrones stumptown kombucha blue bottle health goth pour-over meditation quinoa letterpress.`,
    `Messenger bag 90's venmo blue bottle sus dreamcatcher. Chia celiac scenester affogato, cornhole neutral milk hotel yuccie church-key tumblr pok pok meggings.`,
    `Prism letterpress tilde, listicle mukbang praxis lumbersexual organic gorpcore bruh brunch taxidermy mustache lyft chia.`,
    `Scenester same hexagon coloring book bicycle rights marxism irony health goth cornhole. `,
    `Gatekeep food truck narwhal squid shoreditch, butcher pork belly hexagon. `,
    `
    Wolf vegan schlitz narwhal organic ennui, glossier humblebrag fam`,
  ];

  return (
    <SectionWrapper id='services'>
      <div className="w-full">
        <div className='neobrutalist-title'>
          <h2 className="text-2xl font-bold text-right mr-8">Our Services</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {services.map((service, index) => (
            <TextCard key={index} text={service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
