import Image from "next/image";
import React from "react";
import SectionWrapper from "./SectionWrapper";

const Paragraph: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex gap-20 w-full pt-80 justify-center items-center">
        <div className="hidden lg:block">
          <Image
            src={"/images/jane41024_1.jpg"}
            alt="Jane Rukaria profile picture"
            width={400}
            height={400}
            className="max-w-md"
          />
        </div>
        <div className="flex-col">
          <h2 className="brutalist-title text-3xl md:text-4xl max-w-lg mb-8 font-serif font-semibold">
            Why would I need a lawyer to handle my immigration matter?
          </h2>
          <div className="">
            <p className="brutalist-title text-xl max-w-2xl">
              Maybe you’ve asked yourself this question because you know the
              Citizenship and Immigration Canada website has all the application
              forms, kits, manuals and guides that you may need. Or maybe you
              know of someone who did it themselves. Consider the fact that
              immigration is something that is truly life-changing; the stakes
              are high and the consequences of failure are far-reaching and
              costly. You and your family’s future are at stake. You need a
              dedicated lawyer, not the friend down the road who may know little
              more than what the website provides. Unless you work with a law
              firm that understands Canadian immigration law, you are unlikely
              to find the expertise to recognize and deal with the complex
              situations or problems that arise.
              <br />
              You need a lawyer who knows the most up-to-date immigration law
              and procedures. One who will give you candid advice, who can
              relate to the complex issues raised by culture, language, gender
              and race and who is sensitive to them.
              <br />
              One you can trust your family’s future with.
            </p>
          </div>
          <div className="">
            <button className="mt-5 bg-transparent hover:bg-white font-semibold hover:text-gray-800 py-2 px-4 border hover:border-transparent rounded">
              Contact Jane Rukaria Law
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Paragraph;
