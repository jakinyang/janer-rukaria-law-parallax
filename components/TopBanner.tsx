import React from 'react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

const TopBanner: React.FC = () => {
  return (
    <SectionWrapper id='topBanner'>
      <div className="relative top-32 flex w-full justify-around items-center" >
        <Image
          src={"/assets/profile-picture-1.svg"}
          alt="Profile Picture"
          width={400}
          height={400}
          className="max-w-md"
        />
        <div className="flex-col">
          <div className='flex'>
            <h1 className="text-5xl font-bold neobrutalist-title mb-8 mr-3 text-orange-700">
              Innovating
            </h1>
            <h1 className="text-5xl font-bold neobrutalist-title mb-8">
              Solutions
            </h1>
          </div>
          <div className='flex'>
            <h1 className="text-5xl font-bold neobrutalist-title mb-8 pl-10">
              for Your Legal
            </h1>
            <h1 className="text-5xl font-bold neobrutalist-title mb-8 ml-3 text-orange-700">
              Needs
            </h1>
          </div>
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