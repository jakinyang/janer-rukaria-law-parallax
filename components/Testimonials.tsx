import React from "react";
// import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials: React.FC = () => {
  return (
    <div className="pt-48 flex justify-center">
      <div className="w-[60%]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="bg-white bg-opacity-80 h-[300px] rounded-xl text-gray-800">
              <div className="flex flex-col items-center justify-center pt-10">
                <h2 className="text-xl pb-10">Jackson Powers</h2>
                <p className="w-[60%]">
                  Im baby church-key schlitz paleo slow-carb shoreditch, pabst
                  crucifix fixie solarpunk fam. Bruh brunch tofu raw denim
                  scenester keffiyeh kitsch gentrify shoreditch before they sold
                  out bicycle rights knausgaard pug shabby chic venmo.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white bg-opacity-80 h-[300px] rounded-xl text-gray-800">
              <div className="flex flex-col items-center justify-center pt-10">
                <h2 className="text-xl pb-10">Jackson Powers</h2>
                <p className="w-[60%]">
                  Im baby church-key schlitz paleo slow-carb shoreditch, pabst
                  crucifix fixie solarpunk fam. Bruh brunch tofu raw denim
                  scenester keffiyeh kitsch gentrify shoreditch before they sold
                  out bicycle rights knausgaard pug shabby chic venmo.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white bg-opacity-80 h-[300px] rounded-xl text-gray-800">
              <div className="flex flex-col items-center justify-center pt-10">
                <h2 className="text-xl pb-10">Jackson Powers</h2>
                <p className="w-[60%]">
                  Im baby church-key schlitz paleo slow-carb shoreditch, pabst
                  crucifix fixie solarpunk fam. Bruh brunch tofu raw denim
                  scenester keffiyeh kitsch gentrify shoreditch before they sold
                  out bicycle rights knausgaard pug shabby chic venmo.
                </p>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
