import Image from "next/image";
import React from "react";
import SectionWrapper from "./SectionWrapper";

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex w-full pt-80 justify-around items-center">
        <div className="flex-col bg-white bg-opacity-80 p-16 rounded-tr-[100px] rounded-b-[100px]">
          <h2 className="brutalist-title text-3xl md:text-4xl max-w-lg mb-8 font-serif font-semibold text-gray-800">
            <a className="text-gray-800">About</a> Jane Rukaria Law
          </h2>
          <div className="">
            <p className="brutalist-title text-xl max-w-2xl text-gray-800">
              Jane was born and raised in Kenya. She studied law at the
              University of Nairobi and the Kenya School of Law and was called
              to the Bar of Kenya in 1992. After completion of her studies in
              Kenya, Jane gained valuable experience in civil litigation and has
              successfully argued cases in several areas of law up to the
              highest court in Kenya.
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
          <button className="mt-5 text-gray-800 bg-transparent hover:bg-white font-semibold hover:text-gray-800 py-2 px-4 border border-gray-800 hover:border-transparent rounded">
            Contact Jane Rukaria Law
          </button>
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/images/Jane1.jpeg"}
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
