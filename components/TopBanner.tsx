import React from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const TopBanner: React.FC = () => {
  return (
    <SectionWrapper id="topBanner">
      <div className="relative top-10 md:top-32 flex w-full justify-around items-start">
        <div className="hidden md:block">
          <Image
            src={"/images/jane-profile-1.png"}
            alt="Profile Picture"
            width={600}
            height={400}
            className="max-w-md md:w-[40vw] lg:w-[50vw]"
          />
        </div>
        <div className="flex-col items-center justify-center pt-20">
          <div className="flex">
            <h1 className="text-4xl lg:text-7xl font-bold neobrutalist-title mb-2 md:mb-8">
            One You Can <a className="text-orange-700">Trust</a>
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-4xl lg:text-7xl font-bold neobrutalist-title mb-4 md:mb-8">
              Your <a className="text-orange-700">Family</a> With
            </h1>
          </div>
          <h2 className="text-xl lg:text-3xl neobrutalist-title max-w-md mb-8">
            Welcome to Rukaria Online
          </h2>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopBanner;
