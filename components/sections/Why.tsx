import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import SectionWrapper from "../SectionWrapper";

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
    <SectionWrapper id="why">
      <div className="flex gap-20 w-full pt-[2rem] md:pt-[6rem] justify-center items-center relative">
        <div className="flex-col">
          <h2 className="brutalist-title text-3xl md:text-4xl max-w-lg mb-8 font-serif font-semibold">
            Why would I need a <span className="text-[#E6770F]">lawyer</span> to handle my immigration matter?
          </h2>
          <div>
            <p className="brutalist-title md:text-xl max-w-2xl">
              Maybe you've asked yourself this question because you know that the Citizenship and Immigration Canada website has all the application forms, kits, manuals and guides you need. Or maybe you know someone who has done it themselves.
              <br />
              <br />
              Remember that immigration is a truly life-changing process - the stakes are high and the consequences of failure are far-reaching and costly. The future of you and your family is at stake.
              <br />
              <br />
              We have over 20 years of experience representing clients with their immigration needs to Canada. We have successfully represented clients before the Federal Court and the Immigration and Refugee Board of Canada.
              <br />
              <br />
              Gain peace of mind during your immigration process, avoid problems before they arise, and get real solutions when they do.
              <br />
              <br />
              You need a dedicated attorney working on your behalf, an experienced professional who will go above and beyond what the website says and what your friend or family can suggest. Unless you work with a law firm that understands Canadian immigration law, you are unlikely to find the expertise to recognize and deal with the complex situations or problems that arise during the course of your immigration process.
              <br />
              <br />
              You need a lawyer who knows the latest immigration laws and procedures. One who will give you candid advice, one who understands and is sensitive to the complex issues raised by culture, language, gender and race. One you can trust with your future and the future of your family.
              <br />
              <br />
              Talk to us about the main ways to immigrate to Canada to get a better perspective on your unique situation.
            </p>
          </div>
          <div className="mt-12">
            <a href="#contactForm" className="bg-transparent hover:bg-white duration-200 font-semibold hover:text-gray-800 py-2 px-4 border hover:border-transparent rounded">
              Contact Jane Rukaria Law
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/images/image-why.png"}
            alt="Jane Rukaria profile picture"
            width={400}
            height={400}
            className="max-w-md rounded-full"
          />
          <Image
            src={"/blobs/green-5.svg"}
            alt="Profile Picture"
            width={700}
            height={200}
            className="hidden lg:block absolute top-[5%] m-auto right-[-15%] -z-20"
            ref={imageRef2}
          />
          <Image
            src={"/blobs/green-4.svg"}
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
