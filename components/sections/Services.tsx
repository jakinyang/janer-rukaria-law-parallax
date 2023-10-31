import { useState } from "react";
import { services } from "../../data/services";
import SectionWrapper from "../SectionWrapper";

interface ServiceData {
  name: string;
  description: string[];
}

const Services: React.FC = () => {
  const servicesList = services.map((service: ServiceData, i: number) => {
    return (
      <li className="top-0 border-t-[1px] group relative" key={i}>
        <div className="flex items-center gap-2 mt-5 mb-5 font-bookmania2 text-xl font-semibold">
          <img src="/images/diamond.png" alt="" className="w-auto h-6" />
          <h3>{service.name}</h3>
        </div>
        <div
          className="absolute w-full transition-all duration-1000 ease-in-out opacity-100 group-hover:opacity-0 overflow-hidden"
          style={{ maxHeight: '1.5em' }}
        >
          <p className="font-novatest truncate">
            {service.description}
          </p>
        </div>
        <div
          className="transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 overflow-hidden max-h-0 group-hover:max-h-[50vh]"
        >
          <p className="font-novatest">
            {service.description.map((item: string, i: number) => (
              <span key={i}>
                {item}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
      </li>
    );
  });

  return (
    <SectionWrapper id="services">
      <div className="flex flex-col pt-[6.5rem] items-center">
        <div className="flex flex-col justify-between md:flex-row gap-10">
          <div className="lg:w-[30%]">
            <h2 className="font-serif font-semibold text-3xl md:text-5xl">
              Our Services
            </h2>
            <p className="md:text-lg pt-4">
              After 30 years of legal work, I have reduced my practice work to focus on immigration and refugee protection law.
              <br />
              <br />
              For current clients, however, I also offer services in Real Estate and in Wills and Estate.

            </p>
          </div>
          <ul className="lg:w-[70%] grid grid-cols-1 items-start justify-center gap-10 2xl:text-xl max-w-3xl">
            {servicesList}
            <hr />
          </ul>
        </div>

        <div className="flex flex-col items-center mt-10">
          <p className="text-center">
            Would like to know more about our services?
          </p>
          <a href="#contactForm" className="mt-5 bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded duration-200">
            Contact Jane Rukaria Law
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;