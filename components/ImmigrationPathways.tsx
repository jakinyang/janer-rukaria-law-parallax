import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SectionWrapper from "./SectionWrapper";

import { immigration } from "@/data/immigration";

interface PathwayProps {
  pathway: {
    name: string;
    description: string;
    icon: string;
    link: string
  }
}

const PathwayCard: React.FC<PathwayProps> = ({ pathway }) => {
  return (
    <li key={pathway.name} className="bg-[#F17B89] bg-opacity-40 hover:bg-opacity-80 duration-200 shadow-xl rounded-xl min-h-[23rem] md:min-h-min">
        <Link
          href={pathway.link}
          target="blank"
          className="flex flex-col gap-4 items-center p-8 pb-12 text-center"
        >
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-semibold">{pathway.name}</h3>
            <img src={pathway.icon} alt="" />
          </div>
          <p>{pathway.description}</p>
        </Link>
      </li>
  )
}

const ImmigrationAssessment: React.FC = () => {
  const pathwayList = immigration.map((pathway, i) => {
    return (
      <PathwayCard key={i} pathway={pathway} />
    );
  });

  const pathwaySwiperList = immigration.map((pathway, i) => {
    return (
      <SwiperSlide key={i}>
        <PathwayCard pathway={pathway} />
      </SwiperSlide>
    );
  });

  return (
    <SectionWrapper id="assessment">
      <div className="flex flex-col w-full pt-20 md:pt-[6.5rem] items-center">
        <h2 className="font-serif font-semibold text-3xl text-center md:text-5xl">
          Immigration Pathways
        </h2>
        <p className="max-w-3xl text-center py-5 md:pt-4 md:pb-0">
          There are several main ways to &quot;immigrate&quot; to Canada.
          <Link
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html"
            target="_blank"
            className="hover:underline text-[#F17B89]"
          >
            {" "}
            Citizenship and Immigration Canada (CIC) website{" "}
          </Link>{" "}
          explains each category in detail. We suggest that you visit the CIC
          site and understand which category may apply to you.
        </p>
        <div className="w-full mt-4 md:hidden">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            rewind={true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")} 
          >
            {pathwaySwiperList}
          </Swiper>
        </div>
        <ul className="hidden md:grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 2xl:text-xl ">
          {pathwayList}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default ImmigrationAssessment;
