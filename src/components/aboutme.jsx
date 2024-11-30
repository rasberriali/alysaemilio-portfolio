import React from "react";
import react from "../images/react.png";
import ccc from "../images/c++.png";
import figma from "../images/figma_logo.png";
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

// Reusable Grid Item Component
const GridItem = ({ color, imageSrc, alt }) => (
  <div className={`p-2 ${color} flex items-center justify-center`}>
    <img src={imageSrc} alt={alt} className="xl:h-12 xl:w-12 h-10 w-10" />
  </div>
);

function Aboutme() {
  return (
    <div className="text-white h-full">
    <div className="flex flex-row  px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans mt-60 xl:mt-96 ">
      {/* Introduction Section */}
      <div className="flex py-8 px-4  ">
        <div className=" flex flex-col items-start  text-white ">
          <h1 className="xl:text-4xl text-xl font-bold mb-4 text-[#9D9BB6]">INTRODUCTION</h1>
          <h2 className="xl:text-9xl text-4xl  font-extrabold mb-8  ">Overview.</h2>
          <p className="xl:text-xl  text-lg text-[#9D9BB6]"style={{ lineHeight: '1.6'}}>
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients
            to create efficient, scalable, and user-friendly solutions that
            solve real-world problems. Let's work together to bring your ideas
            to life!
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
          <p className="xl:text-xl text-sm flex  px-4 xl:p-2 text-[#9D9BB6] "style={{ lineHeight: '1.7' }}>
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
           UI designer, and Mobile developer. I jhave honed my skills in Web Development
            and advance i have core understanding of advance UI design principles. 
             Here are the major skiills i have. Hi, my name is Jayjay  Dinero Dinero,
              i am a Fullstack web developer, UI designer, and Mobile developer.</p>
              <p className="mt-10 xl:text-xl text-sm  px-4 xl:p-2   text-[#9D9BB6]"style={{ lineHeight: '1.7'}}>
                Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
           UI designer, and Mobile developer. I jhave honed my skills in Web Development
            and advance i have core understanding of advance UI design principles. 
             Here are the major skiills i have. Hi, my name is Jayjay  Dinero Dinero,
              i am a Fullstack web developer, UI designer, and Mobile developer.

          </p>
        </div>
        </div>
      
    </div>
  );
}

export default Aboutme;
