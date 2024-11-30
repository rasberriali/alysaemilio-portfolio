import React from 'react';
import user from "../images/user.png";
import eye from "../images/eye.png";
import ThreeDModel from './3Dmodel';

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans mt-20">
      {/* Left side content */}
      <div className="w-full md:w-1/2 min-h-96 flex flex-col p-4 gap-4 text-white">
        <div className="font-semibold text-3xl">Hello I'm</div>
        <div className="font-semibold text-7xl">Alysa Emilio</div>
        <div className="font-medium md:text-base xl:text-lg">
          Freelancer, Computer Engineer & Aspiring <br /> FullStack Web Developer. I self-paced and I love<br /> what I do.
        </div>

        <div className="flex flex-row  gap-4 sm:gap-4 ">

          <div className="flex items-center bg-[#7562E0] rounded-lg py-2 px-6 sm:px-6 xs:px-10">
            <div className="text-sm font-semibold ">About me</div>
            <img src={user} alt="user" className="h-4 w-4 ml-2" />
          </div>

          <div className="flex items-center border-[#7562E0] bg-[#1A1A29] border py-2 px-6 rounded-lg">
            <div className="text-sm font-semibold">Resume</div>
            <img src={eye} alt="eye" className="h-4 w-4 ml-2" />
          </div>

        </div>

      </div>

      {/* Right side: 3D model */}
      <div className="w-full md:w-1/2 flex justify-center items-center h-96">
        <ThreeDModel />
      </div>
    </div>
  );
}

export default HeroSection;
