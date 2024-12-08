import React from 'react'
import ui from "../images/ruler&pen.png"
import android from "../images/android.png"
import code from "../images/code.png"
import javascript from "../images/javascript.png"
import slider from "../images/slider.svg"
import git from "../images/git-repo.svg"
import { useEffect } from "react";

function Experience() {
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
   
    <div className="flex flex-col xl:px-48 px-6 font-sans mt-20 xl:mt-40 text-white justify-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700  ">
       <div className='flex flex-col items-center  '>
        <div className='text-xl xl:text-4xl font-bold text-[#9D9BB6] mb-4 xl:mb-6 '>
            What I have done recently
        </div>
        <div className='text-4xl xl:text-8xl font-bold'>
            Experience
        </div>

       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-20 gap-8 xl:py-4  px-4    ">
       


  <div className="border-blue-500 border py-20 px-10  rounded-lg drop-shadow-lg flex items-center justify-center flex-col text-white text-xl font-bold  hover:shadow-[0_10px_20px_rgba(44,130,255,0.7)]">
      <img src={ui} alt="ui" />
      <div>UI & UX Designing</div>
      <p className="text-base text-center mt-2 font-medium text-[#9D9BB6]">
        I create visually appealing and user-friendly designs, focusing on intuitive user experiences.
      </p>
      <p className="text-xs text-center mt-2 text-gray-300">Since 2023</p>
    </div>

    <div className="border-white border py-20 px-10 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold flex-col hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
  <img src={git} alt="ui"></img>
  <div>Version Control</div>
  <p className="text-base text-center mt-2 font-medium text-[#9D9BB6]">
      I use Git for version control and GitHub to host and manage my code repositories.
    </p>
    <p className="text-xs text-center mt-2 text-gray-300">Since 2023</p>
  </div>
       

    <div className="border-blue-500 border py-20 px-10 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold flex-col hover:shadow-[0_10px_20px_rgba(44,130,255,0.7)]">
  <img src={code} alt="ui"></img>
  <div>Web Development</div>
  <p className="text-base text-center mt-2 font-medium text-[#9D9BB6]">
  I use React, Tailwind CSS, Node.js, and MongoDB for web development.
    </p>
    <p className="text-xs text-center mt-2 text-gray-300">Since 2024</p>
  </div>

  <div className="border-white border py-20 px-10 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold flex-col hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
  <img src={javascript} alt="ui"></img>
  <div>MERN Stack</div>
  <p className="text-base text-center mt-2 font-medium text-[#9D9BB6]">
  I learned to build web applications using the MERN stack (MongoDB, Express.js, React, Node.js) during my mentorship.
    </p>
    <p className="text-xs text-center mt-2 text-gray-300">Since 2024</p>
  </div>

       


  <div className="border-blue-500 border py-20 px-10 rounded-lg drop-shadow-lg flex items-center justify-center flex-col text-white text-xl font-bold hover:shadow-[0_10px_20px_rgba(44,130,255,0.7)]">
  <img src={android} alt="ui"></img>
  <div>Cloud Computing</div>
  <p className="text-base text-center mt-2 font-medium text-[#9D9BB6]">
  I have experience deploying and managing scalable applications on AWS.
    </p>
    <p className="text-xs text-center mt-2 text-gray-300">Since 2024</p>
  </div>
  
  
  <div className="border-white border py-20 px-10 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold flex-col hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)]">
  <img src={slider} alt="ui"></img>
  <div>Web Scraping</div> <p className="text-base text-center mt-2 font-medium text-[#9D9BB6]">
  I learned web scraping using Python and libraries like BeautifulSoup and Scrapy.
    </p>
    <p className="text-xs text-center mt-2 text-gray-300">Since 2024</p>
  
  </div>
  



  
</div>

   
      
    </div>
  )
}

export default Experience
