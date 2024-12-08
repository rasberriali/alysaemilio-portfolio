import React, { useEffect } from 'react';
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import sms from "../images/sms.png"

function Contact() {
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
    <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans mt-40 xl:mt-48 pb-32">
    {/* Left Section */}
    <div className="xl:w-2/3 xl:p-6 px-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
      <div className="flex flex-col items-center space-y-6">
        {/* Title */}
        <h1 className="text-7xl font-bold text-[#7562E0]">Connect</h1>
  
        {/* Subtitle */}
        <p className="xl:text-xl text-sm font-bold text-[#9D9BB6] text-center">
          I'm currently looking for internship opportunities. If you have any suggestions or feedback, I'd be happy to hear from you!
        </p>
        <div className="flex xl:flex-row flex-col w-1/2 justify-between">
  {/* Email Section */}
  <div className="flex flex-row items-center space-x-2">
    <img src={sms} alt="Email icon" className="h-6 w-6" />
    <div className="text-[#9D9BB6]">alysaemilio@gmail.com</div>
  </div>

  {/* Social Media Icons */}
  <div className="flex flex-row items-center space-x-2">
    <a href="https://www.facebook.com/Alysa.emilio" target="_blank" rel="noopener noreferrer">
      <img src={facebook} alt="Facebook icon" className="h-6 w-6 hover:opacity-80" />
    </a>
    <a href="https://alimango.com" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="GitHub icon" className="h-5 w-5 hover:opacity-80" />
    </a>
  </div>
</div>

      
      </div>
    </div>
  </div>
  
  );
}

export default Contact;
