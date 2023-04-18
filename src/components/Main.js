import React from "react";
import Hero from "../assets/hero.png";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row container mx-auto mt-5 items-center space-between px-3">
      <div className="flex-[1] flex-col flex space-y-8">
        <div>
          <p className="text-[48px] font-[700] text-[#2A2742] font-raleway">
            We Take Your Business Online with Next Gen Technologies.
          </p>
        </div>
        <div>
          <p className="text-[#00000099] text-[20px] font-[500] font-DMsans">
            Skygoal.tech is a solution provider for digital transformation. We
            help you to deliver next generation products, services and ideas.
            Our collaborative method of delivery with our extended team of
            partners enables us to ensure that we understand what is required by
            you
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-5 text-[20px] font-[500] items-start">
          <button className="bg-[#D94B62] text-white px-4 py-4 rounded-md">
            Our Services
          </button>
          <button className="bg-[#2A2742] text-white px-4 py-4 rounded-md">
            Get Instant Call Back
          </button>
        </div>
      </div>
      <div className="flex-[0.8]">
        <img src={Hero} alt="hero" className="" />
      </div>
    </div>
  );
};

export default Main;
