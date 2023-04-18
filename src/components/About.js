import React from "react";

const About = () => {
  return (
    <div className="bg-[#2A2742] text-center md:p-[100px] py-32 px-1 space-y-10">
      <div>
        <p className="text-white font-raleway text-[48px] font-[700]">
          ABOUT US
        </p>
      </div>
      <div>
        <p className="text-white font-DMsans text-[21px] font-[500]">
          We at SkyGoal Tech are both skilled and enthusiastic about providing
          tech solutions from conception to completion, assisting in the
          transformation of creative ideas into long-term and sustainable
          solutions, all while staying under budget and with a comprehensive
          grasp of the agility required.
        </p>
      </div>
      <div>
        <button className="bg-[#D94B62] text-white px-10 py-4 rounded-md text-[21px] font-[500] font-DMsans">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
