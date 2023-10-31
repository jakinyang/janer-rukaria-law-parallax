import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import SectionWrapper from "../SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  // create new ref to add another blob and copy lines below

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
      <div className="flex w-full md:pt-[6.5rem] justify-center items-center">
        <div className="hidden lg:block relative">
          <Image
            src={"/images/image-about.png"}
            alt="Jane Rukaria profile picture"
            width={400}
            height={400}
            className="max-w-md"
          />
          <Image
            src={"/blobs/red-5.svg"}
            alt="Profile Picture"
            width={600}
            height={200}
            className="hidden lg:block absolute top-0 m-auto -z-20"
            ref={imageRef2}
          />
          <Image
            src={"/blobs/red-4.svg"}
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
              I was born in a small village in Meru County on the slopes of Mount Kenya in Kenya. I studied law at the University of Nairobi and the Kenya School of Law and was called to the Kenyan Bar in 1992. After completing my studies in Kenya, I worked as a Junior Counsel for one year before opening my own general practice in Mombasa, Kenya in 1995. I have gained valuable experience in civil litigation and have successfully argued cases in various areas of law up to the Supreme Court of Kenya. In addition to my legal practice, I am also involved in community work, providing pro bono legal services in Canada and facilitating education for needy children in several villages in Kenya.
              <br />
              <br />
              I graduated from the University of British Columbia in 2001 and was called to the Bar of British Columbia in 2004. I opened my law practice in Vancouver, Canada, with a mission to help people from all walks of life gain access to the legal system.
              <br />
              <br />
              The cost of legal services continues to be an obstacle to people receiving proper legal advice. To that end, I charge fixed fees in all my cases, with very few exceptions where the legal issues are complex.
              <br />
              <br />
              As an immigrant from Africa, I feel I have a deep understanding of multicultural issues and the challenges faced by immigrants and Canadians alike in Canada, which I try to put to good use in serving my clients and the community.

            </p>
          </div>
          <div className="lg:pl-10 mt-8">
            <a href="#contactForm" className="bg-transparent hover:bg-white duration-200 font-semibold hover:text-gray-800 py-2 px-4 border hover:border-transparent rounded">
              Contact Jane Rukaria Law
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
