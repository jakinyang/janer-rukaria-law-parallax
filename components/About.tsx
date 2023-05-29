import Image from 'next/image';
import React from 'react';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex w-full justify-around items-center">
        <div className='flex-col'>
          <h2 className='brutalist-title text-2xl max-w-sm mb-8'>
            About Jane Rukaria Law
            </h2>
          <p className='brutalist-title text-lg max-w-sm mb-8'>
            Jane Rukaria Law is a leading law firm specializing in various legal
            services. Our experienced team is committed to providing top-quality
            legal assistance to our clients.
          </p>
        </div>
        <Image
          src={"/assets/profile-picture-1.svg"}
          alt="Jane Rukaria profile picture"
          width={400}
          height={400}
          className="max-w-md"
        />
      </div>
    </SectionWrapper>
  );
};

export default About;
