import React from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const TopBanner: React.FC = () => {
  return (
    <SectionWrapper id="topBanner">
      <div className="relative top-32 flex w-full justify-around items-center">
        <div className="hidden md:block">
          <Image
            src={"/assets/profile-picture-1.svg"}
            alt="Profile Picture"
            width={400}
            height={400}
            className="max-w-md"
          />
        </div>
        <div className="flex-col">
          <div className="flex">
            <h1 className="text-3xl lg:text-5xl font-bold neobrutalist-title mb-8 mr-3 text-orange-700">
              Innovating <a className="text-white">Solutions</a>
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-3xl lg:text-5xl font-bold neobrutalist-title mb-8 pl-10">
              for Your Legal <a className="text-orange-700">Needs</a>
            </h1>
          </div>
          <h2 className="text-xl lg:text-2xl neobrutalist-title max-w-md mb-8 text-right">
            Lorem ipsum dolor sit amet
          </h2>
          <h2 className="lg:text-xl neobrutalist-title max-w-md mb-8 font-sans text-right">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet
          </h2>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopBanner;
