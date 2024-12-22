import React from 'react';
import js1 from "../images/js1.jpg"
import Mern from "../images/Mern.jpg"
import js2 from "../images/js2.png"
import { useEffect } from 'react'

function Certificates() {
   useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              // Remove the "opacity-0" and "translate-y-10" class only when it enters the viewport
            } else {
              // Add the classes back when it goes out of view to animate again
              entry.target.classList.remove("opacity-100", "translate-y-0");
              entry.target.classList.add("opacity-0", "translate-y-10");
            }
          });
        },
        { threshold: 0.1 }
      );
  
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.observe(element);
      });
    }, []);

  return (
    <div className="flex flex-col xl:px-48 px-6 font-sans mt-20 xl:mt-52 text-white justify-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
      <div className='flex flex-col items-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700'>
        <div className='text-xl xl:text-4xl font-bold text-[#9D9BB6] mb-4 xl:mb-6'>
          What I Achieve so far
        </div>
        <div className='text-4xl xl:text-8xl font-bold'>
          CERTIFICATES
        </div>
      </div>

    
      <div className='flex justify-center items-center  mt-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700  '>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12 ">
          
          <div className='bg-none border rounded-md p-6  flex flex-col hover:'>
            <div className='text-2xl '> Javascript Essentials 1
            </div>
            <div className='text-lg mt-4'>Statement of Achievement </div>
            <div className='text-sm  '>Cisco Networking Academy </div>
            


            <div className="bg-blue-700 hover:bg-blue-600 p-2 rounded-md mt-8 flex w-24 justify-center cursor-pointer"
            onClick={() => (window.location = js1)}>View</div>
          </div>

          <div className='bg-none border rounded-md p-6   flex flex-col'>
            <div className='text-2xl '> Javascript Essentials 2
            </div>
            <div className='text-lg mt-4'>Statement of Achievement </div>
            <div className='text-sm  '>Cisco Networking Academy </div>
            


            <div className="bg-blue-700 hover:bg-blue-600 p-2 rounded-md mt-8 flex w-24 justify-center cursor-pointer"
            onClick={() => (window.location = js2)}>View</div>
          </div>

          <div className='bg-none border rounded-md p-6   flex flex-col'>
            <div className='text-2xl '> Intro to MERN Stack
            </div>
            <div className='text-lg mt-4'>Statement of Achievement </div>
            <div className='text-sm  '>Cisco Networking Academy </div>
            


            <div className="bg-blue-700 hover:bg-blue-600 p-2 rounded-md mt-8 flex w-24 justify-center cursor-pointer"
            onClick={() => (window.location = Mern)}>View</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Certificates;
