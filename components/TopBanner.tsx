import React from 'react';
import profileGroup from '../public/assets/profile-group.svg';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

const TopBanner: React.FC = () => {
  return (
    <SectionWrapper id='topBanner'>
      <div className="flex w-full h-full" >
        <div className="flex-1 flex justify-center items-center">
          <Image
          src={profileGroup}
            alt="Profile Picture"
            className="h-1/2"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pl-8 mt-56">
          <div className="neobrutalist-title ml-10">
            <h1 className="text-4xl font-bold">Jane Rukaria</h1>
          </div>
          <div className="neobrutalist-title mt-10 ml-32">
            <h2 className="text-2xl ">Lorem ipsum dolor sit amet</h2>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopBanner;