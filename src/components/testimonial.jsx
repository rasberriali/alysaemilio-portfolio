import React from 'react'
import userr from "../images/userr.png"
import man from "../images/man.png"
import woman from "../images/woman.png"
import { useEffect } from "react";

function Testimonial() {
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
    <div className="flex flex-col px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans mt-32 xl:mt-48 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ">
        <div className='bg-[#100D25] '>
        <div className=" flex flex-col xl:items-start  text-white xl:px-16 items-center py-10 bg-[#151030] border-b-0 rounded-b-3xl xl:h-96 h-72 ">
          <h1 className="xl:text-4xl text-xl font-bold mb-4 text-[#9D9BB6]">WHAT OTHERS SAY ABOUT ME</h1>
          <h2 className="xl:text-9xl text-4xl  font-extrabold">Testimonial.</h2>
        </div>
        <div className='grid grid-cols xl:grid-rows-1 xl:grid-cols-3 gap-10 py-20 xl:px-16 px-10 text-white font-medium  -mt-40 '>
            <div className='p-10 bg-[#090325] rounded-lg min-h-64 justify-between flex flex-col'>
                <div className=''>"</div>
                <div className=''> Hello po thank you so much 
                    for accommodating me in my html css project!! Super 
                    approachable and always replies asap🤍 Recommended po
                     especially sa mga computer related projects!.</div> 
                <div className='flex flex-col-2 mt-16 justify-between items-center'>
                    <div className=''>
                    <div className=''><span className='text-blue-700 mr-2'>@</span>Ry</div>
                    <div className=' text-[#9D9BB6] text-sm mt-2'>Client</div></div>
                    <div>
                        <img src={userr} alt="userr" className='h-10 w-10'>
                        </img>
                    </div>
                </div>
                </div>
                <div className='p-10 bg-[#090325] rounded-lg min-h-64 justify-between flex flex-col'>
                <div className=''>"</div>
                <div className=''>
                Highly recommended ❤ smooth transaction and very magaling ❤ 
                The task was finished earlier than expected, super worth it ang bayad!
                </div> 
                <div className='flex flex-col-2 mt-16 justify-between items-center'>
                    <div className=''>
                    <div className=''><span className='text-blue-700 mr-2'>@</span>Michael Acads</div>
                    <div className=' text-[#9D9BB6] text-sm mt-2'>Client</div></div>
                    <div>
                        <img src={man} alt="userr" className='h-10 w-10'>
                        </img>
                    </div>
                </div>
                </div>
                <div className='p-10 bg-[#090325] rounded-lg min-h-64 justify-between flex flex-col'>
                <div className=''>"</div>
                <div className=''> 
                Hello po, I highly recommend Ms. Ali grabe yung patience
                 niya lumalaban, kahit nagsstrugle na sya sa website na
                  pinacomms ko🥹,and expect niyo na budget friendly at
                   high quality ung output, thank you kahit super rush 
                   inaccomodate mo pa rin me, till next transaction po! God bless.</div> 
                <div className='flex flex-col-2 mt-16 justify-between items-center'>
                    <div className=''>
                    <div className=''><span className='text-blue-700 mr-2'>@</span>Ange | Client</div>
                    <div className=' text-[#9D9BB6] text-sm mt-2'>Client</div></div>
                    <div>
                        <img src={woman} alt="man" className='h-10 w-10'>
                        </img>
                    </div>
                </div>
                </div>

        </div>
        </div>
    </div>  
  )
}

export default Testimonial
