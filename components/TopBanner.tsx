import React from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const TopBanner: React.FC = () => {
  return (
    <SectionWrapper id="topBanner">
      <div className=" top-10 md:top-32 flex flex-col md:flex-row gap-4 w-full justify-center items-center h-screen">
        <div className="text-center md:text-left pt-20 md:pt-0">
          {/* <div className="flex">
            <h1 className="text-4xl lg:text-7xl font-bold neobrutalist-title mb-2 md:mb-8">
              Who you can <a className="text-orange-700">trust</a>
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-4xl lg:text-7xl font-bold neobrutalist-title mb-4 md:mb-8">
              your <a className="text-orange-700">family</a> with
            </h1>
          </div>
          <h2 className="text-xl lg:text-3xl neobrutalist-title max-w-md mb-8">
            Welcome to Rukaria Online
          </h2> */}
          <h1 className="text-5xl md:text-7xl font-medium neobrutalist-title w-[12ch] md:w-[11ch] mb-6">
            Who you can <span className="highlight-trust">trust</span> your{" "}
            <span className="highlight-family">family</span> with.
          </h1>
          <span className="font-light text-xl">
            Jane Rukaria, Immigration Lawyer
          </span>
        </div>

        <div>
          <Image
            src={"/images-new/image-hero.png"}
            alt="Profile Picture"
            width={600}
            height={400}
            className="max-w-[18rem] lg:max-w-[35rem]"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopBanner;
