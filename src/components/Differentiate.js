import React from "react";
import Vector from "../assets/Vector-2.png";

const Differentiate = () => {
  return (
    <div className="bg-[#2A2742] px-3">
      <div className="container mx-auto py-20">
        <div className="space-y-20">
          <p className="text-center tracking-[0.445rem] text-white font=[500] text-[28px] font-DMsans text-[#00000099]">
            OUR DIFFERENTIATION POINTS
          </p>
        </div>
        <div>
          <p className="text-center font-raleway font-[700] text-[48px] text-white">
            WHAT DIFFERENTIATE US?
          </p>
        </div>
        <div className="grid-cols-4 grid-rows-2 gap-4 md:grid justify-center py-10 font-DMsans font-[500] text-[20px] flex flex-col ">
          <div className=" flex items-center flex-col text-center bg-white rounded-lg justify-center">
            <img
              src={Vector}
              alt="small-logo"
              className="bg-green-600 py-2 px-1 rounded-full block"
            />
            <p>Customers Satisfaction is our first priority.</p>
          </div>
          <div className=" flex items-center flex-col text-center bg-white rounded-lg justify-center">
            <img
              src={Vector}
              alt="small-logo"
              className="bg-green-600 py-2 px-1 rounded-full block"
            />
            <p>Focused on High Quality</p>
          </div>
          <div className=" flex items-center flex-col text-center bg-white rounded-lg justify-center">
            <img
              src={Vector}
              alt="small-logo"
              className="bg-green-600 py-2 px-1 rounded-full block"
            />
            <p>Use of latest technologies</p>
          </div>
          <div className=" flex items-center flex-col text-center bg-white rounded-lg justify-center">
            <img
              src={Vector}
              alt="small-logo"
              className="bg-green-600 py-2 px-1 rounded-full block"
            />
            <p>Customized solutions.</p>
          </div>
          <div className=" flex items-center flex-col text-center bg-white rounded-lg justify-center">
            <img
              src={Vector}
              alt="small-logo"
              className="bg-green-600 py-2 px-1 rounded-full block"
            />
            <p>Transparency with the clients</p>
          </div>
          <div className=" flex items-center flex-col text-center bg-white rounded-lg justify-center">
            <img
              src={Vector}
              alt="small-logo"
              className="bg-green-600 py-2 px-1 rounded-full block"
            />
            <p>End-to-end business solutions</p>
          </div>
          <div className="flex items-center flex-col text-center rounded-lg bg-white justify-center">
            <img
              src={Vector}
              alt="small-logo"
              className="bg-green-600 py-2 px-1 rounded-full block"
            />
            <p>24/7 at your service</p>
          </div>
          <div className="md:h-[150px] flex items-center flex-col text-center rounded-lg bg-white justify-center">
            <img
              src={Vector}
              alt="small-logo"
              className="bg-green-600 py-2 px-1 rounded-full block"
            />
            <p>On-time delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differentiate;
