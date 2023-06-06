import React from "react";
// import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Ratings: React.FC = (numOfStar) => {
  return (
    <div className="flex items-center">
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>First star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Second star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Third star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fourth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-300 dark:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fifth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="pt-80 pb-48 flex justify-center">
      <div className="w-[60%]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          speed={2000}
          rewind={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="bg-[#F8F8F8] bg-testimonials3 bg-contain bg-center bg-no-repeat h-[300px] rounded-xl text-gray-800">
              <div className="flex flex-col items-center justify-center pt-10">
                <p className="w-[60%] pt-5">
                  <a className="font-semibold text-2xl font-serif">
                    Amazing Service!
                  </a>{" "}
                  Im baby church-key schlitz paleo slow-carb shoreditch, pabst
                  crucifix fixie solarpunk fam. Bruh brunch tofu raw denim
                  scenester keffiyeh kitsch gentrify shoreditch before they sold
                  out bicycle rights knausgaard pug shabby chic venmo.
                </p>
                <div className="w-[60%] flex flex-col items-start pt-5">
                  <Ratings />
                  <h2 className="text-xl">Jackson Powers</h2>
                  <h3 className="pb-5">Enterpreneur</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F8F8F8] bg-testimonials3 bg-contain bg-center bg-no-repeat h-[300px] rounded-xl text-gray-800">
              <div className="flex flex-col items-center justify-center pt-10">
                <p className="w-[60%] pt-5">
                  <a className="font-semibold text-2xl font-serif">
                    Amazing Service!
                  </a>{" "}
                  Im baby church-key schlitz paleo slow-carb shoreditch, pabst
                  crucifix fixie solarpunk fam. Bruh brunch tofu raw denim
                  scenester keffiyeh kitsch gentrify shoreditch before they sold
                  out bicycle rights knausgaard pug shabby chic venmo.
                </p>
                <div className="w-[60%] flex flex-col items-start pt-5">
                  <Ratings />
                  <h2 className="text-xl">Jackson Powers</h2>
                  <h3 className="pb-5">Enterpreneur</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F8F8F8] bg-testimonials3 bg-contain bg-center bg-no-repeat h-[300px] rounded-xl text-gray-800">
              <div className="flex flex-col items-center justify-center pt-10">
                <p className="w-[60%] pt-5">
                  <a className="font-semibold text-2xl font-serif">
                    Amazing Service!
                  </a>{" "}
                  Im baby church-key schlitz paleo slow-carb shoreditch, pabst
                  crucifix fixie solarpunk fam. Bruh brunch tofu raw denim
                  scenester keffiyeh kitsch gentrify shoreditch before they sold
                  out bicycle rights knausgaard pug shabby chic venmo.
                </p>
                <div className="w-[60%] flex flex-col items-start pt-5">
                  <Ratings />
                  <h2 className="text-xl">Jackson Powers</h2>
                  <h3 className="pb-5">Enterpreneur</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
