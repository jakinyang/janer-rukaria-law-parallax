import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ResourceOne: React.FC = () => {
  return (
    <div className="h-[550px] md:h-auto flex flex-col md:flex-row md:gap-5 md:items-start bg-white rounded-xl">
      <img
        src="/../images/canadaimmigration.jpeg"
        className="resourceImg h-auto md:h-auto md:w-[35%] rounded-xl p-5"
      />
      <div className="px-3 md:w-[55%] py-5 text-gray-800">
        <h3 className="font-semibold text-xl pb-5 cursor-pointer hover:underline">
          <Link href="https://www.cic.gc.ca/" target="_blank">
            Immigration Canada website
          </Link>
        </h3>
        <p className="pb-3">
          Immigration Canada (CIC) is responsible for implementing all aspects
          of Canadian immigration and citizenship.
        </p>
        <p className="font-semibold hover:underline cursor-pointer flex gap-1">
          <Link href="https://www.cic.gc.ca/" target="_blank">
            Learn More
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};
const ResourceTwo: React.FC = () => {
  return (
    <div className="h-[550px] md:h-auto flex flex-col md:flex-row md:gap-5 md:items-start bg-white rounded-xl">
      <img
        src="/../images/hrdc.jpeg"
        className="resourceImg h-auto md:h-full md:w-[35%] rounded-tr-xl md:rounded-tr-none rounded-tl-xl rounded-bl-xl"
      />
      <div className="px-3 md:w-[55%] py-5 text-gray-800">
        <h3 className="font-semibold text-xl pb-5 cursor-pointer hover:underline">
          <Link href="http://www.hrsdc.gc.ca/" target="_blank">
            Human Resources and Development Canada
          </Link>
        </h3>
        <p className="pb-3">
          The Department of Human Resources and Skills Development (HRSD) is
          responsible for providing all Canadians with the tools they need to
          thrive and prosper in the workplace and community.
        </p>
        <p className="font-semibold hover:underline cursor-pointer flex gap-1">
          <Link href="http://www.hrsdc.gc.ca/" target="_blank">
            Learn More
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};
const ResourceThree: React.FC = () => {
  return (
    <div className="h-[550px] md:h-auto flex flex-col md:flex-row md:gap-5 md:items-start bg-white rounded-xl">
      <img
        src="/../images/bcpnp.jpeg"
        className="self-center resourceImg w-[70%] md:h-auto md:w-[35%] md:pl-5 rounded-xl"
      />
      <div className="px-3 md:w-[55%] py-5 text-gray-800">
        <h3 className="font-semibold text-xl pb-5 cursor-pointer hover:underline">
          <Link
            href="http://www.aved.gov.bc.ca/provincialnominee/welcome.htm"
            target="_blank"
          >
            British Columbia Immigration Program
          </Link>
        </h3>
        <p className="pb-3">
          The British Columbia Provincial Nominee Program (BC PNP) offers
          accelerated immigration for qualified skilled workers and experienced
          entrepreneurs who wish to settle in British Columbia (BC) and become
          permanent residents of Canada.
        </p>
        <p className="font-semibold hover:underline cursor-pointer flex gap-1">
          <Link
            href="http://www.aved.gov.bc.ca/provincialnominee/welcome.htm"
            target="_blank"
          >
            Learn More
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <div className="flex flex-col w-full pt-20 md:pt-60 px-10 lg:px-28 items-center">
      <h2 className="font-serif font-semibold text-3xl md:text-5xl pb-10">
        Useful Links
      </h2>
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
            <ResourceOne />
          </SwiperSlide>
          <SwiperSlide>
            <ResourceTwo />
          </SwiperSlide>
          <SwiperSlide>
            <ResourceThree />
          </SwiperSlide>
          <SwiperSlide>
            <ResourceOne />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ResourceOne />
        <ResourceTwo />
        <ResourceThree />
        <ResourceOne />
      </div>
      <div className="hidden md:flex flex-col items-center mt-10">
        <p>Would like to know more about our services?</p>
        <button className="mt-5 bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded">
          Contact Jane Rukaria Law
        </button>
      </div>
    </div>
  );
};

export default Resources;
