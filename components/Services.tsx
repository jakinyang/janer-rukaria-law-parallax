import React from "react";
import { services } from "../data/services";
import SectionWrapper from "./SectionWrapper";

interface ServiceData {
  name: string;
  description: string;
}

const Services: React.FC = () => {
  const servicesList = services.map((service: ServiceData, i) => {
    return (
      <div className="" key={i}>
        <hr />
        <div className="flex items-center gap-2 mt-5 mb-5 font-bookmania2 text-xl  font-semibold">
          <img src="/../images/diamond.png" alt="" className="w-auto h-6" />
          <p>{service.name}</p>
        </div>
        <div className=" font-novatest">{service.description}</div>
      </div>
    );
  });

  return (
    <SectionWrapper>
      <div className="flex flex-col w-full pt-10 md:pt-60 md:px-20 items-center">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
          <div className="lg:w-[30%]">
            <h2 className="font-serif font-semibold text-3xl md:text-5xl">
              Our Services
            </h2>
            {/* <h3 className="text-2xl pt-10 pb-5">
            Why would I need a lawyer to handle my immigration matter?
          </h3> */}
            <p className="md:text-lg pt-10">
              Our main area of practice is immigration and refugee protection
              law although we also offer our clients services in other areas of
              law.
            </p>
          </div>
          <div className="lg:w-[70%] grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-10 2xl:text-xl">
            {servicesList}
            <div className="">
              <hr />
              <div className="flex items-center gap-2 mt-5 mb-5 font-bookmania2 text-xl  font-semibold">
                <img
                  src="/../images/diamond.png"
                  alt=""
                  className="w-auto h-6"
                />
                <p>Personal Injury</p>
              </div>
              <div className="md:pb-10 font-novatest">
                Im baby church-key schlitz paleo slow-carb shoreditch, pabst
                crucifix fixie solarpunk fam. Im baby church-key schlitz paleo
                slow-carb shoreditch, pabst crucifix fixie solarpunk fam.
              </div>
              <hr className="hidden md:block" />
            </div>
            <div className="">
              <hr />
              <div className="flex items-center gap-2 mt-5 mb-5 font-bookmania2 text-xl  font-semibold">
                <img
                  src="/../images/diamond.png"
                  alt=""
                  className="w-auto h-6"
                />
                <p>Company Law</p>
              </div>
              <div className="pb-10 font-novatest">
                Im baby church-key schlitz paleo slow-carb shoreditch, pabst
                crucifix fixie solarpunk fam. Im baby church-key schlitz paleo
                slow-carb shoreditch, pabst crucifix fixie solarpunk fam.
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <p>Would like to know more about our services?</p>
          <button className="mt-5 bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded">
            Contact Jane Rukaria Law
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
