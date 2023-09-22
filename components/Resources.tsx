import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SectionWrapper from "./SectionWrapper";

import { resources } from "@/data/resources";

interface ResourceProps {
  resource: {
    name: string;
    description: string;
    image: string;
    link: string;
  };
}

const ResourceCard: React.FC<ResourceProps> = ({ resource }) => {
  return (
    <li
      key={resource.name}
      className="bg-[#F17B89] bg-opacity-40 hover:bg-opacity-80 duration-200 shadow-xl rounded-xl min-h-[23rem] md:min-h-min"
    >
      <Link
        href={resource.link}
        target="blank"
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 p-8 pb-12 text-center md:text-left lg:text-center lg:grid-cols-1 h-full"
      >
        <div className="flex flex-col gap-4 self-start">
          <h3 className="text-xl font-semibold">{resource.name}</h3>
          <p>{resource.description}</p>
        </div>
        <div className="hidden md:block lg:self-end">
          <img src={resource.image} alt="" />
        </div>
      </Link>
    </li>
  );
};

const Resources: React.FC = () => {
  const resourceList = resources.map((resource, i) => {
    return <ResourceCard key={i} resource={resource} />;
  });

  const resourceSwiperList = resources.map((resource, i) => {
    return (
      <SwiperSlide key={i}>
        <ResourceCard resource={resource} />
      </SwiperSlide>
    );
  });

  return (
    <SectionWrapper id="resources">
      <div className="flex flex-col w-full pt-20 md:pt-[6.5rem] items-center">
        <h2 className="font-serif font-semibold text-3xl md:text-5xl pb-10">
          Helpful Resources
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
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {resourceSwiperList}
          </Swiper>
        </div>
        <ul className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-5">
          {resourceList}
        </ul>
        <div className="hidden md:flex flex-col items-center mt-10">
          <p>Would like to know more about our services?</p>
          <button className="mt-5 bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded duration-200">
            Contact Jane Rukaria Law
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Resources;
