import Image from "next/image";
import React from "react";
import SectionWrapper from "./SectionWrapper";

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex w-full pt-80 justify-around items-center">
        <div className="flex-col">
          <h2 className="brutalist-title text-3xl md:text-4xl max-w-lg mb-8 font-serif font-semibold text-gray-800">
            <a className="text-white">About</a> Jane Rukaria Law
          </h2>
          <p className="brutalist-title text-xl max-w-xl mb-8">
            Jane Rukaria Law is a leading law firm specializing in various legal
            services. Our experienced team is committed to providing top-quality
            legal assistance to our clients. <br />
            <br />
            Im baby church-key schlitz paleo slow-carb shoreditch, pabst
            crucifix fixie solarpunk fam. Bruh brunch tofu raw denim scenester
            keffiyeh kitsch gentrify shoreditch before they sold out bicycle
            rights knausgaard pug shabby chic venmo. Yes plz brunch drinking
            vinegar crucifix butcher pinterest subway tile slow-carb. Franzen
            bespoke beard master cleanse, artisan glossier vinyl cloud bread
            8-bit tacos pop-up.
          </p>
          <button className="mt-5 bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded">
            Contact Jane Rukaria Law
          </button>
        </div>
        <div className="hidden md:block">
          <Image
            src={"/assets/profile-picture-1.svg"}
            alt="Jane Rukaria profile picture"
            width={400}
            height={400}
            className="max-w-md"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
