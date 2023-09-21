import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import SectionWrapper from "./SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const el1 = imageRef1.current;

    gsap.to(el1, {
      scrollTrigger: {
        trigger: el1,
        start: "top bottom",
        end: "bottom 100px",
        scrub: 5,
      },
      y: -50,
      ease: "none",
      duration: 5
    })

    const el2 = imageRef2.current;

    gsap.to(el2, {
      scrollTrigger: {
        trigger: el2,
        start: "center bottom",
        end: "top top",
        scrub: 3,
      },
      y: -200,
      ease: "none",
      duration: 3
    })
  }, [])
  return (
    <SectionWrapper id="about">
      <div className="flex w-full md:pt-[83px] justify-center items-center">
        <div className="hidden lg:block relative">
          <Image
            src={"/images-new/image-about.png"}
            alt="Jane Rukaria profile picture"
            width={400}
            height={400}
            className="max-w-md"
          />
          <Image
            src={"/images/red-5.svg"}
            alt="Profile Picture"
            width={600}
            height={200}
            className="hidden lg:block absolute top-0 m-auto -z-20"
            ref={imageRef2}
            />
          <Image
            src={"/images/red-4.svg"}
            alt="Profile Picture"
            width={200}
            height={100}
            className="hidden lg:block absolute -left-10 top-0 bottom-0 m-auto -z-10"
            ref={imageRef1}
          />
        </div>
        <div className="flex-col">
          <h2 className="brutalist-title text-3xl md:text-4xl mb-4 lg:mb-8 font-serif font-semibold lg:pl-10">
            About the <span className="text-[#E4483A]">Founder</span>
          </h2>
          <div className="">
            <p className="brutalist-title lg:text-xl max-w-2xl lg:pl-10">
              Jane was born and raised in Kenya. She studied law at the
              University of Nairobi and the Kenya School of Law and was called
              to the Bar of Kenya in 1992. After completion of her studies in
              Kenya, Jane gained valuable experience in civil litigation and has
              successfully argued cases in several areas of law up to the
              highest court in Kenya.
              <br />
              <br />
              {/* Apart from her legal work, Jane is also involved in community work
            through providing pro-bono legal services and facilitating
            micro-economic self-help projects in several villages in Kenya. */}
              In 2001 Jane qualified at the University of British Columbia and
              was called to the Bar of British Columbia in 2004. She has also
              opened her own law firm in Vancouver, Canada with the mission of
              helping people from overseas to come to Canada to live, work,
              study or immigrate. As a new Canadian immigrant from Africa, she
              possesses a deep understanding of multicultural issues and the
              challenges facing immigrants to Canada, which she tries to put to
              good use in serving her clients and community.
            </p>
          </div>
          <div className="lg:pl-10">
            <button className="mt-8 bg-transparent hover:bg-white font-semibold md:hover:text-gray-800 py-2 px-4 border hover:border-transparent rounded duration-200">
              Contact Jane Rukaria Law
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
