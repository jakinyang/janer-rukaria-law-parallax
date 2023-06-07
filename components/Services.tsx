import React from "react";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col w-full pt-10 md:pt-80 px-5 md:px-40 items-center">
      <h2 className="font-serif font-semibold text-3xl md:text-5xl">Our Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center mt-10 gap-5 md:p-10 2xl:text-xl">
        <div className="bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl  rounded-xl flex flex-col items-center p-5 md:p-10 2xl:p-14 text-center">
          <div>
            <img
              src="/../images/icons8-passion-64.png"
              alt=""
              className="w-14"
            />
          </div>
          <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
            <p>Service Number One</p>
          </div>
          <div className="text-gray-800 font-novatest">
            Im baby church-key schlitz paleo slow-carb shoreditch, pabst
            crucifix fixie solarpunk fam. Bruh brunch tofu raw denim scenester
            keffiyeh kitsch gentrify shoreditch before they sold out bicycle
            rights knausgaard pug shabby chic venmo.
            <br />
            Yes plz brunch drinking vinegar crucifix butcher pinterest subway
            tile slow-carb.
          </div>
        </div>
        <div className="bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 md:p-10 2xl:p-14 text-center">
          <div>
            <img src="/../images/collaboration.png" alt="" className="w-14" />
          </div>
          <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
            <p>Service Number Two</p>
          </div>
          <div className="text-gray-800 font-novatest">
            Im baby church-key schlitz paleo slow-carb shoreditch, pabst
            crucifix fixie solarpunk fam. Bruh brunch tofu raw denim scenester
            keffiyeh kitsch gentrify shoreditch before they sold out bicycle
            rights knausgaard pug shabby chic venmo.
            <br />
            Yes plz brunch drinking vinegar crucifix butcher pinterest subway
            tile slow-carb.
          </div>
        </div>
        <div className="bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 md:p-10 2xl:p-14 text-center">
          <div>
            <img src="/../images/curious.png" alt="" className="w-14" />
          </div>
          <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
            <p>Service Number Three</p>
          </div>
          <div className="text-gray-800 font-novatest">
            Im baby church-key schlitz paleo slow-carb shoreditch, pabst
            crucifix fixie solarpunk fam. Bruh brunch tofu raw denim scenester
            keffiyeh kitsch gentrify shoreditch before they sold out bicycle
            rights knausgaard pug shabby chic venmo.
            <br />
            Yes plz brunch drinking vinegar crucifix butcher pinterest subway
            tile slow-carb.
          </div>
        </div>
        <div className="bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 md:p-10 2xl:p-14 text-center">
          <div>
            <img src="/../images/curious.png" alt="" className="w-14" />
          </div>
          <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
            <p>Service Number Four</p>
          </div>
          <div className="text-gray-800 font-novatest">
            Im baby church-key schlitz paleo slow-carb shoreditch, pabst
            crucifix fixie solarpunk fam. Bruh brunch tofu raw denim scenester
            keffiyeh kitsch gentrify shoreditch before they sold out bicycle
            rights knausgaard pug shabby chic venmo.
            <br />
            Yes plz brunch drinking vinegar crucifix butcher pinterest subway
            tile slow-carb.
          </div>
        </div>
        <div className="bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 md:p-10 2xl:p-14 text-center">
          <div>
            <img
              src="/../images/icons8-passion-64.png"
              alt=""
              className="w-14"
            />
          </div>
          <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
            <p>Service Number Five</p>
          </div>
          <div className="text-gray-800 font-novatest">
            Im baby church-key schlitz paleo slow-carb shoreditch, pabst
            crucifix fixie solarpunk fam. Bruh brunch tofu raw denim scenester
            keffiyeh kitsch gentrify shoreditch before they sold out bicycle
            rights knausgaard pug shabby chic venmo.
            <br />
            Yes plz brunch drinking vinegar crucifix butcher pinterest subway
            tile slow-carb.
          </div>
        </div>
        <div className="bg-white bg-opacity-90 hover:bg-opacity-100 shadow-xl rounded-xl flex flex-col items-center p-5 md:p-10 2xl:p-14 text-center">
          <div>
            <img src="/../images/collaboration.png" alt="" className="w-14" />
          </div>
          <div className="mt-3 mb-5 font-bookmania2 text-xl text-gray-800 font-semibold">
            <p>Service Number Six</p>
          </div>
          <div className="text-gray-800 font-novatest">
            Im baby church-key schlitz paleo slow-carb shoreditch, pabst
            crucifix fixie solarpunk fam. Bruh brunch tofu raw denim scenester
            keffiyeh kitsch gentrify shoreditch before they sold out bicycle
            rights knausgaard pug shabby chic venmo.
            <br />
            Yes plz brunch drinking vinegar crucifix butcher pinterest subway
            tile slow-carb.
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
