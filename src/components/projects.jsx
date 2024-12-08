import React from 'react'
import mcbook from "../images/mcbook.png"
import mcbook2 from "../images/mcbook2.png"
import monitor from "../images/monitor.png"
import { useEffect } from 'react'
import github from "../images/github.png"

function Projects() {
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
    <div className="text-white h-full">
        <div className="flex  flex-col px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans mt-40 xl:mt-48 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ">
        <div className=" flex flex-col items-start  text-white px-4 ">
          <h1 className="xl:text-4xl text-xl font-bold mb-4 text-[#9D9BB6]">MY WORK</h1>
          <h2 className="xl:text-9xl text-4xl  font-extrabold mb-8  ">Projects.</h2>
          <div className='flex xl:w-2/3 text-[#9D9BB6] xl:text-lg '>
          <p>
          I have worked on a variety of
           projects that showcase my skills
            and experience. Each project includes 
            a link to the code repository. These 
            projects highlight my current work and
             knowledge with different technologies.


          </p>
        </div>
        </div>

        <div className=" flex flex-row items-start  text-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-20 gap-8 p-4">

        <div className=" bg-[#151030] p-6 rounded-2xl drop-shadow-lg  transform hover:rotate-3 flex items-start justify-center flex-col text-white text-xl font-bold  hover:shadow-[0_10px_20px_rgba(44,130,255,0.7)]">
        <div className="relative">
  {/* Mcbook Image */}
  <img src={mcbook} alt="mcbook" className="rounded-2xl w-full" />

  {/* GitHub Image with Background */}
  <a
   href="https://github.com/rasberriali/AirQualityMonitoring" 
   target="_blank" 
   rel="noopener noreferrer"  
    className="absolute xl:-top-0 xl:right-10 -top-2 right-6 transform translate-x-4 translate-y-4 bg-slate-900 p-2 rounded-full shadow-lg"
  >
    <img 
      src={github} 
      alt="GitHub" 
      className="w-6 h-6" 
    />
  </a>
</div>


     
        <div className='mt-4 font-extrabold text-2xl'>AiRizz</div>
       
            <p className="text-base text-start mt-2 font-medium text-[#9D9BB6]">
            I designed here the UI/UX for air quality monitoring and contributed to the backend using DynamoDB, APIs, and Lambda.
            </p>
            <div className='flex flex-row gap-3'>
                <p className="text-xs text-center mt-1 text-[#46AEF0] 29CD83">#DynamoDB</p>
                <p className="text-xs text-center mt-1 text-[#29CD83]">#Express.Js</p>
                <p className="text-xs text-center mt-1 text-[#D53B6A]">#React</p>
                <p className="text-xs text-center mt-1 text-[#7031ef]">#Node.Js</p>
                </div>

        </div>

        <div className=" bg-[#151030] p-6 rounded-2xl drop-shadow-lg transform hover:rotate-3 flex items-start justify-center flex-col text-white text-xl font-bold  hover:shadow-[0_10px_20px_rgba(44,130,255,0.7)]">
        <div className="relative">
        <img src={mcbook2} alt="mcbook2" className='rounded-2xl'/>
        
  {/* GitHub Image with Background */}
  <a 
   href="https://github.com/rasberriali/dotGenerate" 
   target="_blank" 
   rel="noopener noreferrer"  
    className="absolute xl:-top-0 xl:right-10 -top-2 right-6 transform translate-x-4 translate-y-4 bg-slate-900 p-2 rounded-full shadow-lg"
  >
    <img 
      src={github} 
      alt="GitHub" 
      className="w-6 h-6" 
    />
  </a>
</div>


     
        <div className='mt-4 font-extrabold text-2xl'>BAGA.Net</div>
       
            <p className="text-base text-start mt-2 font-medium text-[#9D9BB6]">
            I design and develop the frontend for BAGA.NET, an ongoing thesis project.
            </p>
            <div className='flex flex-row gap-3'>
            <p className="text-xs text-center mt-1 text-[#46AEF0] 29CD83">#DynamoDB</p>
                <p className="text-xs text-center mt-1 text-[#29CD83]">#Express.Js</p>
                <p className="text-xs text-center mt-1 text-[#D53B6A]">#React</p>
                <p className="text-xs text-center mt-1 text-[#7031ef]">#Node.Js</p>
                </div>

        </div>

        <div className=" bg-[#151030] p-6 rounded-2xl drop-shadow-lg transform hover:rotate-3 flex items-start justify-center flex-col text-white text-xl font-bold  hover:shadow-[0_10px_20px_rgba(44,130,255,0.7)]">
        <div className="relative">
        <img src={monitor} alt="monitor" className='rounded-2xl'/>
        
  {/* GitHub Image with Background */}
  <a 
    href="https://github.com/rasberriali/dotGenerate" 
    target="_blank" 
    rel="noopener noreferrer"  
     className="absolute xl:-top-0 xl:right-10 -top-2 right-6 transform translate-x-4 translate-y-4 bg-slate-900 p-2 rounded-full shadow-lg"
   >
    <img 
      src={github} 
      alt="GitHub" 
      className="w-6 h-6" 
    />
  </a>
</div>


     
        <div className='mt-4 font-extrabold text-2xl'>dotGenerate</div>
       
            <p className="text-base text-start mt-2 font-medium text-[#9D9BB6]"> 
            This is a simple personal project, created to enhance my MERN stack skills and perform CRUD functionalities. It generates project ideas to inspire developers.
            </p>
            <div className='flex flex-row gap-3'>
                <p className="text-xs text-center mt-1 text-[#46AEF0] 29CD83">#MongoDB</p>
                <p className="text-xs text-center mt-1 text-[#29CD83]">#Express.Js</p>
                <p className="text-xs text-center mt-1 text-[#D53B6A]">#React</p>
                <p className="text-xs text-center mt-1 text-[#7031ef]">#Node.Js</p>
                </div>

        </div>

        
        </div>
        </div>
            
        </div>
    </div>

  )
}

export default Projects     
