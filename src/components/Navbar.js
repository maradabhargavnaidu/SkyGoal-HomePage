import React from "react";
import SkyGoalLogo from "../assets/skygoal-Logo 2.png";
const Navbar = () => {
  return (
    <div className="shadow-sm shadow-gray-300 font-semibold">
      <div className="container mx-auto flex justify-between items-center px-3">
        <div>
          <img src={SkyGoalLogo} alt="Logo" />
        </div>
        <ul className="md:flex items-center text-[#00000099] space-x-12 cursor-pointer hidden">
          <li className="hover:text-[#2A2742]">Home</li>
          <li className="hover:text-[#2A2742]">About Us</li>
          <li className="hover:text-[#2A2742]">Solutions</li>
          <li className="hover:text-[#2A2742]">Our Team</li>
          <li className="hover:text-[#2A2742]">Portfolio</li>
          <li className="hover:text-[#2A2742]">Careers</li>
          <li className="hover:text-[#2A2742]">Contact Us</li>
        </ul>
        <div>
          <button className="bg-[#2A2742] text-white px-4 py-2 rounded-md">
            Get Instant Call Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
