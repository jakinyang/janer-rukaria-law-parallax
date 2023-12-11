import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import SectionWrapper from "../SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const TopBanner: React.FC = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const el1 = imageRef1.current;

    gsap.to(el1, {
      scrollTrigger: {
        trigger: el1,
        start: "center center",
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
        start: "center center",
        end: "top top",
        scrub: 3,
      },
      y: -100,
      ease: "none",
      duration: 3
    })
  }, [])

  return (
    <SectionWrapper id="top">
      <div className=" top-10 md:top-32 flex flex-col md:flex-row gap-12 w-full justify-center items-center h-screen">
        <div className="text-center md:text-left md:pt-0">
          <h1 className="text-5xl md:text-7xl font-medium neobrutalist-title w-[12ch] md:w-[11ch] mb-6">
            One you can <span className="highlight-trust">trust</span> your{" "}
            <span className="highlight-family">legal affairs</span> with.
          </h1>
          <span className="font-light text-xl">
            Jane Rukaria, Barrister & Solicitor
          </span>
        </div>

        <div>
          <Image
            src={"/images/image-about.png"}
            alt="Profile Picture"
            width={600}
            height={400}
            className="max-w-[18rem] lg:max-w-[35rem]"
            />
          <Image
            src={"/blobs/aboutbg.svg"}
            alt="Profile Picture"
            width={400}
            height={100}
            className="absolute m-auto top-[50%] left-0 right-0 -z-10 opacity-70 lg:w-[60%] md:left-auto md:top-[40%] lg:top-[20%]"
            ref={imageRef2}
            />
          <Image
            src={"/blobs/aboutbg2.svg"}
            alt="Profile Picture"
            width={200}
            height={100}
            className="absolute m-auto -bottom-10 right-[20%] -z-10 md:left-auto md:top-[40%] lg:w-[30%] lg:top-[60%]"
            ref={imageRef1}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopBanner;
