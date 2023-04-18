import React from "react";

const Choose = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center space-y-10">
        <p className="font-DMsans text-[#00000099] font-[500] text-[28px] md:tracking-[0.445em] tracking-[0.350em]">
          WHY CHOOSE US
        </p>
        <p className="font-[700] text-[48px] font-raleway">
          WHY CHOOSE SKYGOALTECH
        </p>
      </div>
      <div>
        <div className="font-DMsans text-[#00000099] text-center py-10">
          <p>
            Do you have an idea, a project, or a plan that needs to be
            developed?
          </p>
          <p>
            The first step is to choose the right company which can help you the
            best of your idea and will be there for you at every step of the
            way, both during and after the project's development. We, Skygoal
            Tech have experienced, skilled and enthusiastic team who is always
            in touch with the client during the development of project. We treat
            each project as if it were our own.
          </p>
          <p>
            We have the best resources capable of delivering the best solutions
            to upgrade your company solutions by using the most recent
            technology.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:space-x-5 py-10 md:flex-row flex-col space-y-10 md:space-y-0 px-5">
        <div className="shadow-sm shadow-gray-400 md:w-[255px]">
          <p className="text-[#407BFF] text-[48px] font-[800]">40+</p>
          <p className="text-[16px] font-[400] text-[#18191F]">Happy Clients</p>
        </div>
        <div className="shadow-sm shadow-gray-400 md:w-[255px]">
          <p className="text-[#FFBD00] text-[48px] font-[800]">540+</p>
          <p className="text-[16px] font-[400] text-[#18191F]">
            Projects Completed
          </p>
        </div>
        <div className="shadow-sm shadow-gray-400 md:w-[255px]">
          <p className="text-[#8500FF] text-[48px] font-[800]">300</p>
          <p className="text-[16px] font-[400] text-[#18191F]">
            Dedicated Members
          </p>
        </div>
        <div className="shadow-sm shadow-gray-400 md:w-[255px]">
          <p className="text-[#2C5170] text-[48px] font-[800]">25+</p>
          <p className="text-[16px] font-[400] text-[#18191F]">Awards Won</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
