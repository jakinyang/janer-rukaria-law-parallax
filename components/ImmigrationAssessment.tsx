import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SectionWrapper from "./SectionWrapper";

const ItemOne: React.FC = () => {
  return (
    <div className="h-[450px] bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 text-center">
      <div>
        <img src="/../images/pencil.png" alt="" className="w-14" />
      </div>
      <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
        <p>Skilled Worker Class</p>
      </div>
      <div className="text-gray-800 font-novatest">
        this class of immigrants are allowed to come to Canada because they have
        sufficient education, work experience, knowledge of English and/or
        French and other abilities that will help them to establish themselves
        successfully in Canada.{" "}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html"
          target="_blank"
          className="hover:underline text-blue-700"
        >
          More Info…
        </Link>
      </div>
    </div>
  );
};

const ItemTwo: React.FC = () => {
  return (
    <div className="h-[450px] bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 text-center">
      <div>
        <img src="/../images/experience.png" alt="" className="w-14" />
      </div>
      <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
        <p>Canadian Experience Class</p>
      </div>
      <div className="text-gray-800 font-novatest">
        If you are a temporary foreign worker or a foreign student who graduated
        in Canada, you often have the qualities to make a successful transition
        from temporary to permanent residence. You are familiar with Canadian
        society and can contribute to the Canadian economy. You should have
        knowledge of English or French and qualifying work experience.{" "}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html"
          target="_blank"
          className="hover:underline text-blue-700"
        >
          More Info…
        </Link>
      </div>
    </div>
  );
};

const ItemThree: React.FC = () => {
  return (
    <div className="h-[450px] bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 text-center">
      <div>
        <img src="/../images/curious.png" alt="" className="w-14" />
      </div>
      <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
        <p>Provincial nominees</p>
      </div>
      <div className="text-gray-800 font-novatest">
        Persons who immigrate to Canada under the Provincial Nominee Program
        have the skills, education and work experience needed to make an
        immediate economic contribution to the province or territory that
        nominates them. They are ready to establish themselves successfully as
        permanent residents in Canada. To apply under the Provincial Nominee
        Program, applicants must be nominated by a Canadian province or
        territory.{" "}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
          target="_blank"
          className="hover:underline text-blue-700"
        >
          More Info…
        </Link>
      </div>
    </div>
  );
};

const ItemFour: React.FC = () => {
  return (
    <div className="h-[450px] bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 text-center">
      <div>
        <img src="/../images/briefcase.png" alt="" className="w-14" />
      </div>
      <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
        <p>Business Immigration</p>
      </div>
      <div className="text-gray-800 font-novatest">
        Immigrants in this category are allowed to immigrate to Canada because
        they have the funds, skills and business experience. They may apply in
        one of three classes:  Investors  Entrepreneurs and  Self-employed
        persons. Each application can be made for only one class and cannot be
        changed once the application is submitted. The criteria you must meet to
        qualify are different for each class.{" "}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html"
          target="_blank"
          className="hover:underline text-blue-700"
        >
          More Info…
        </Link>
      </div>
    </div>
  );
};
const ItemFive: React.FC = () => {
  return (
    <div className="h-[450px] bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 text-center">
      <div>
        <img src="/../images/family.png" alt="" className="w-14" />
      </div>
      <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
        <p>Family Class Immigration</p>
      </div>
      <div className="text-gray-800 font-novatest">
        Canadian citizens and permanent residents may sponsor close relatives or
        family members who want to become permanent residents of Canada.
        Sponsors must promise to support the relative or family member and their
        accompanying family members for a period of three to 10 years to help
        them settle in Canada.{" "}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html"
          target="_blank"
          className="hover:underline text-blue-700"
        >
          More Info…
        </Link>
      </div>
    </div>
  );
};
const ItemSix: React.FC = () => {
  return (
    <div className="h-[450px] bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 text-center">
      <div>
        <img src="/../images/collaboration.png" alt="" className="w-14" />
      </div>
      <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
        <p>Refugees</p>
      </div>
      <div className="text-gray-800 font-novatest">
        Convention refugees who seek refuge or asylum in Canada are not
        immigrants. However, those refugees whose claims are accepted by the
        Immigration and Refugee Board (if refuge is claimed inside Canada) or by
        Citizenship and Immigration Canada (if refuge is claimed outside
        Canada), then become eligible to apply to remain in Canada as
        immigrants.{" "}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees.html"
          target="_blank"
          className="hover:underline text-blue-700"
        >
          More Info…
        </Link>
      </div>
    </div>
  );
};
const ItemSeven: React.FC = () => {
  return (
    <div className="h-[450px] place-self-center bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 text-center">
      <div>
        <img src="/../images/icons8-passion-64.png" alt="" className="w-14" />
      </div>
      <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
        <p>Humanitarian and Compassionate cases</p>
      </div>
      <div className="text-gray-800 font-novatest">
        There are circumstances where people may be allowed to immigrate to
        Canada for &quot;humanitarian and compassionate considerations&quot;.{" "}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/humanitarian-compassionate-considerations.html"
          target="_blank"
          className="hover:underline text-blue-700"
        >
          More Info…
        </Link>
      </div>
    </div>
  );
};

const ImmigrationAssessment: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col w-full pt-20 md:pt-80 items-center">
        <h2 className="font-serif font-semibold text-3xl text-center md:text-5xl">
          Immigration Assessment
        </h2>
        <h3 className="max-w-3xl text-center py-5 md:pt-10 md:pb-0">
          There are several main ways to &quot;immigrate&quot; to Canada.
          <Link
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html"
            target="_blank"
            className="hover:underline"
          >
            {" "}
            Citizenship and Immigration Canada (CIC) website{" "}
          </Link>{" "}
          explains each category in detail. We suggest that you visit the CIC
          site and understand which category may apply to you.
        </h3>
        <div className="w-full md:hidden">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            rewind={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <ItemOne />
            </SwiperSlide>
            <SwiperSlide>
              <ItemTwo />
            </SwiperSlide>
            <SwiperSlide>
              <ItemThree />
            </SwiperSlide>
            <SwiperSlide>
              <ItemFour />
            </SwiperSlide>
            <SwiperSlide>
              <ItemFive />
            </SwiperSlide>
            <SwiperSlide>
              <ItemSix />
            </SwiperSlide>
            <SwiperSlide>
              <ItemSeven />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center items-center justify-center mt-10 gap-5 md:p-10 2xl:text-xl">
          <ItemOne />
          <ItemTwo />
          <ItemThree />
          <ItemFour />
          <ItemFive />
          <ItemSix />
          <ItemSeven />
          <div className="flex flex-col items-center mt-10">
            <p className="text-center">
              Would like to know <br />
              more about our services?
            </p>
            <button className="mt-5 bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded">
              Contact Jane Rukaria Law
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ImmigrationAssessment;
