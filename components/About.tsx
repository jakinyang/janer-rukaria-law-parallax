import Image from "next/image";

import SectionWrapper from "./SectionWrapper";

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex w-full md:pt-60 justify-center items-center">
        <div className="flex-col">
          <h2 className="brutalist-title text-3xl md:text-4xl max-w-lg mb-4 lg:mb-8 font-serif font-semibold lg:pl-10">
            <a className="md:text-gray-800">About</a> Jane Rukaria Law
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
            <button className="mt-5 bg-transparent hover:bg-white font-semibold md:hover:text-gray-800 py-2 px-4 border hover:border-transparent rounded">
              Contact Jane Rukaria Law
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/images/jane-profile-2.png"}
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
