import React, { useEffect } from 'react';
import Typed from "typed.js"; // Import Typed.js
import user from "../images/user.png";
import eye from "../images/eye.png";

function HeroSection() {
  useEffect(() => {
    // Initialize Typed.js with loop
    const options = {
      strings: ["Alysa Emilio"], // Text to type
      typeSpeed: 120,           // Typing speed
      backSpeed: 50,            // Backspacing speed
      loop: true,               // Enable looping
      showCursor: true,         // Show cursor
      cursorChar: "|",          // Cursor character
    };

    const typed = new Typed(".typed-text", options);

    // IntersectionObserver for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
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

    return () => {
      typed.destroy(); // Clean up Typed instance on component unmount
    };
  }, []);

  return (
    <section className="flex flex-col  xl:justify-center xl:-mt-40  -mt-0  xl:pt-0 pt-40  min-h-svh items-center px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans  bg-grid-pattern bg-grid-size bg-[#1A1A29] text-white">
      <div className="min-h-[400px] flex flex-col gap-6 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <h1 className="text-2xl xl:text-3xl sm:text-4xl font-semibold">
          Hello, I'm
        </h1>
        {/* Typing animation with gradient color */}
        <h2 className="text-5xl sm:text-6xl md:text-9xl font-bold">
  <span className="typed-text bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
    Your Text Here
  </span>
</h2>

        <p className="text-lg text-[#9D9BB6]  xl:text-xl sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
          Freelancer, Computer Engineer & Aspiring FullStack Web Developer.
          I self-paced and passionate about what I do.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          {/* About Me Button */}
          <a href="#about" className="flex items-center bg-[#7562E0] hover:bg-[#5a49c9] transition-all duration-300 rounded-lg py-4 px-6 sm:px-8">
            <span className="text-sm xl:text-base font-semibold">About Me</span>
            <img src={user} alt="About Me" className="h-5 w-5 ml-2" />
          </a>

          {/* Resume Button */}
          <a href="#contact" className="flex items-center bg-transparent border border-[#7562E0] hover:bg-[#2f2f40] transition-all duration-300 rounded-lg py-2 px-6 sm:px-8">
            <span className="text-sm xl:text-base font-semibold">Resume</span>
            <img src={eye} alt="Resume" className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
