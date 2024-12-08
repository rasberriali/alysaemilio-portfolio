import React from "react";
import react from "../images/react.png";
import ccc from "../images/c++.png";
import figma from "../images/figma.png";
// import git from "../images/git.jpg";
import tailwind from "../images/tailwind.png";
import python from "../images/python.png";
import js from "../images/js.png";
import vs from "../images/vs.png";
import css from "../images/css.png";
import mongo from "../images/mongo.png";
import java from "../images/java.png";
import htmll from "../images/html.png";
import mysql from "../images/mysql.png";
import { useEffect } from "react";

// Reusable Grid Item Component
const GridItem = ({ color, imageSrc, alt }) => (
  <div className={`p-2 ${color} flex items-center justify-center`}>
    <img src={imageSrc} alt={alt} className="xl:h-12 xl:w-12 h-10 w-10" />
  </div>
);

function Aboutme() {
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
    <div className="text-white h-full animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 xl:-mt-0 -mt-20  ">
    <div className="flex flex-row  px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans ">
      {/* Introduction Section */}
      <div className="flex py-8 px-4  ">
        <div className=" flex flex-col items-start  text-white ">
          <h1 className="xl:text-4xl text-xl font-bold mb-4 text-[#9D9BB6]">INTRODUCTION</h1>
          <h2 className="xl:text-9xl text-4xl  font-extrabold mb-8  ">Overview.</h2>
          <p className="xl:text-xl  text-xl text-[#9D9BB6]"style={{ lineHeight: '1.6'}}>
          I’m a dedicated and driven web developer
           focused on expanding my skills in cloud 
           computing and full-stack development. Currently, 
           I’m enhancing my expertise in modern cloud technologies 
           and working with the MERN stack (MongoDB, Express, React, Node.js)
            to build dynamic web applications. I’m eager to apply my knowledge
             to impactful web projects, continuously improve my skills, and grow as a developer.
          </p>
        </div>
        </div>
        </div>

      <div className="flex flex-col xl:flex-row items-center xl:items-start  mt-10 gap-20  px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans  text-white h-full ">
        <div className=" xl:w-1/3 w-5/6  ">
        <div className="text-xl font-bold mb-6 flex flex-row justify-center p-2 text-[#9D9BB6] ">Technology Stack</div>
          <div className="grid grid-cols-3 gap-4  ">
            {[
              { color: "", src: htmll, alt: "html" },
              { color: "", src: css, alt: "css" },
              { color: "", src: js, alt: "js" },
              { color: "", src: python, alt: "python" },
              { color: "", src: java, alt: "java" },
              { color: "", src: ccc, alt: "ccc" },
              { color: "", src: tailwind, alt: "tailwind" },
              { color: "", src: mongo, alt: "mongo" },
              { color: "", src: mysql, alt: "mysql" },
              { color: "", src: vs, alt: "vs" },
              { color: "", src: figma, alt: "figma_logo" },
              { color: "", src: react, alt: "React" },
              // { color: "", src: git, alt: "git" },
             
             
            ].map((item, index) => (
              <GridItem
                key={index}
                color={item.color}
                imageSrc={item.src}
                alt={item.alt}
              />
            ))}
          </div>
        </div>

        <div className="text-white  w-full">
          <p className="xl:text-xl text-xl flex  px-4 xl:p-2 text-[#9D9BB6] "style={{ lineHeight: '1.7' }}>
          I am a dedicated web developer focused on both frontend and backend
           development, with expertise in frontend technologies like
            React, HTML, and CSS. Through 2 years of freelancing, I’ve gained
             hands-on experience with Python, Java, Django, and
              Flask, working with backend concepts such as APIs,
               database management, and server-side logic. This
                experience has not only sharpened my technical 
                skills but also improved my ability to communicate
                 effectively with clients, ensuring their needs are met.</p>
              <p className="mt-10 xl:text-xl text-xl  px-4 xl:p-2   text-[#9D9BB6]"style={{ lineHeight: '1.7'}}>
              I am committed to further developing my
               backend knowledge and expanding my
                understanding of cloud computing
                 and scalable application development. 
                 Through self-paced learning, I aim to
                  combine my frontend expertise with 
                  backend skills to contribute to impactful web projects.
          </p>
        </div>
        </div>
      
    </div>
  );
}

export default Aboutme;
