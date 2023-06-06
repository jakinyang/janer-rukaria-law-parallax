import React from 'react';
import aboutProfilePicture from '../public/assets/about-profile.svg';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id='about'>
      <div className="flex w-full">
        <div className="flex-1 flex flex-col items-start justify-center pl-8">
          <div className="neobrutalist-title">
            <h2 className="text-2xl font-bold mb-4">About</h2>
          </div>
          <div className='neobrutalist-title'>
            <p className="mb-2">
              Aesthetic umami yuccie 90s kinfolk. Microdosing chartreuse try-hard, mumblecore lumbersexual occupy post-ironic celiac DIY YOLO. Pitchfork raw denim flexitarian mlkshk church-key. Stumptown big mood copper mug ascot praxis. Vegan shoreditch 8-bit letterpress mixtape stumptown jean shorts helvetica mumblecore dreamcatcher. Disrupt cardigan tousled irony knausgaard.
            </p>
          </div>
          <div className='neobrutalist-title'>
            <p>
              Im baby church-key schlitz paleo slow-carb shoreditch, pabst crucifix fixie solarpunk fam. Bruh brunch tofu raw denim scenester keffiyeh kitsch gentrify shoreditch before they sold out bicycle rights knausgaard pug shabby chic venmo. Yes plz brunch drinking vinegar crucifix butcher pinterest subway tile slow-carb. Franzen bespoke beard master cleanse, artisan glossier vinyl cloud bread 8-bit tacos pop-up. Vape shabby chic disrupt, migas master cleanse gluten-free neutral milk hotel chambray literally ramps mustache pabst freegan.
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={aboutProfilePicture}
            alt="About Profile Picture"
            width={400}
            height={400}
            className="max-w-lg"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
