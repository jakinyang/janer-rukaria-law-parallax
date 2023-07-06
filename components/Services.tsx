import React from "react";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col w-full pt-10 md:pt-60 px-5 md:px-20 items-center">
      <div className="flex gap-10">
        <div className="w-[30%]">
          <h2 className="font-serif font-semibold text-3xl md:text-5xl">
            Our Services
          </h2>
          {/* <h3 className="text-2xl pt-10 pb-5">
            Why would I need a lawyer to handle my immigration matter?
          </h3> */}
          <p className="text-lg pt-10">
            Our main area of practice is immigration and refugee protection law
            although we also offer our clients services in other areas of law.
          </p>
        </div>
        <div className="w-[70%] grid grid-cols-1 lg:grid-cols-2 items-center justify-center mt-10 gap-10 2xl:text-xl">
          <div className="">
            <hr />
            <div className="mt-3 mb-5 font-bookmania2 text-xl  font-semibold">
              <p>Immigration</p>
            </div>
            <div className=" font-novatest">
              Temporary Visas (student, visitor) / Work permits / Skilled worker
              / Investor / Entrepreneur / Family sponsorship / International
              adoption / Provincial nominee
            </div>
          </div>
          <div className="">
            <hr />
            <div className="mt-3 mb-5 font-bookmania2 text-xl  font-semibold">
              <p>Real Estate</p>
            </div>
            <div className=" font-novatest">
              Im baby church-key schlitz paleo slow-carb shoreditch, pabst
              crucifix fixie solarpunk fam. Im baby church-key schlitz paleo
              slow-carb shoreditch, pabst crucifix fixie solarpunk fam.
            </div>
          </div>
          <div className="">
            <hr />
            <div className="mt-3 mb-5 font-bookmania2 text-xl  font-semibold">
              <p>Uncontested Divorce</p>
            </div>
            <div className=" font-novatest">
              Im baby church-key schlitz paleo slow-carb shoreditch, pabst
              crucifix fixie solarpunk fam. Im baby church-key schlitz paleo
              slow-carb shoreditch, pabst crucifix fixie solarpunk fam.
            </div>
          </div>
          <div className="">
            <hr />
            <div className="mt-3 mb-5 font-bookmania2 text-xl  font-semibold">
              <p>Wills and Estates</p>
            </div>
            <div className=" font-novatest">
              Im baby church-key schlitz paleo slow-carb shoreditch, pabst
              crucifix fixie solarpunk fam. Im baby church-key schlitz paleo
              slow-carb shoreditch, pabst crucifix fixie solarpunk fam.
            </div>
          </div>
          <div className="">
            <hr />
            <div className="mt-3 mb-5 font-bookmania2 text-xl  font-semibold">
              <p>Personal Injury</p>
            </div>
            <div className="pb-10 font-novatest">
              Im baby church-key schlitz paleo slow-carb shoreditch, pabst
              crucifix fixie solarpunk fam. Im baby church-key schlitz paleo
              slow-carb shoreditch, pabst crucifix fixie solarpunk fam.
            </div>
            <hr />
          </div>
          <div className="">
            <hr />
            <div className="mt-3 mb-5 font-bookmania2 text-xl font-semibold">
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
  );
};

export default Services;
