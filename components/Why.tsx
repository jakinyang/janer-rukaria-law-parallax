import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import SectionWrapper from "./SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const Why: React.FC = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const el1 = imageRef1.current;

    gsap.to(el1, {
      scrollTrigger: {
        trigger: el1,
        start: "top bottom",
        end: "bottom 100px",
        scrub: 2,
      },
      y: -400,
      ease: "none",
      duration: 5,
    });

    const el2 = imageRef2.current;

    gsap.to(el2, {
      scrollTrigger: {
        trigger: el2,
        start: "center bottom",
        end: "bottom top",
        scrub: 3,
      },
      y: -200,
      ease: "none",
      duration: 6,
    });
  }, []);

  return (
    <SectionWrapper id="about">
      <div className="flex gap-20 w-full pt-20 md:pt-[83px] justify-center items-center relative">
        <div className="flex-col">
          <h2 className="brutalist-title text-3xl md:text-4xl max-w-lg mb-8 font-serif font-semibold">
            Why would I need a <span className="text-[#43A329]">lawyer</span> to handle my immigration matter?
          </h2>
          <div>
            <p className="brutalist-title md:text-xl max-w-2xl">
              Maybe you’ve asked yourself this question because you know the
              Citizenship and Immigration Canada website has all the application
              forms, kits, manuals and guides that you may need.
              <br />
              <br />
              Consider the fact that immigration is something that is truly
              life-changing; the stakes are high and the consequences of failure
              are far-reaching and costly. You and your family’s future are at
              stake.
              <br />
              <br />
              You need a dedicated lawyer to find the expertise to recognize and
              deal with the complex situations or problems that arise.
              <br />
              <br />
              You need a lawyer who knows the most up-to-date immigration law
              and procedures. One who will give you candid advice, who can
              relate to the complex issues raised by culture, language, gender
              and race and who is sensitive to them.
              <br />
              <br />
              One you can trust your family’s future with.
            </p>
          </div>
          <div className="">
            <button className="mt-8 bg-transparent hover:bg-white duration-200 font-semibold hover:text-gray-800 py-2 px-4 border hover:border-transparent rounded">
              Contact Jane Rukaria Law
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/images-new/image-why.png"}
            alt="Jane Rukaria profile picture"
            width={400}
            height={400}
            className="max-w-md rounded-full"
          />
          <Image
            src={"/images/green-5.svg"}
            alt="Profile Picture"
            width={700}
            height={200}
            className="hidden lg:block absolute top-[5%] m-auto right-[-15%] -z-20"
            ref={imageRef2}
          />
          <Image
            src={"/images/green-4.svg"}
            alt="Profile Picture"
            width={300}
            height={100}
            className="hidden lg:block absolute right-0 bottom-[10%] -z-10"
            ref={imageRef1}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Why;
