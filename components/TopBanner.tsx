import React from 'react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

const TopBanner: React.FC = () => {
  return (
    <SectionWrapper id='topBanner'>
      <div className="flex w-full justify-around items-center" >
        <Image
          src={"/assets/profile-picture-1.svg"}
          alt="Profile Picture"
          width={400}
          height={400}
          className="max-w-md"
        />
        <div className="flex-col">
            <h1 className="text-4xl font-bold neobrutalist-title flex-1 mb-8">
              Jane Rukaria
            </h1>
            <h2 className="text-2xl neobrutalist-title max-w-sm text-right mb-8">
              Lorem ipsum dolor sit amet
            </h2>
            <h2 className="text-xl neobrutalist-title max-w-sm text-right mb-8">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </h2>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopBanner;