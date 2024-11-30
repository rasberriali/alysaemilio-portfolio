import React from 'react'
import ui from "../images/ruler&pen.png"
import android from "../images/android.png"
import code from "../images/code.png"
import javascript from "../images/javascript.png"
import slider from "../images/slider.svg"
import git from "../images/git-repo.svg"

function Experience() {
  return (
   
    <div className="flex flex-col xl:px-48 px-6 font-sans mt-20 xl:mt-40 text-white justify-center  ">
       <div className='flex flex-col items-center  '>
        <div className='text-sm xl:text-3xl font-bold text-[#9D9BB6] mb-4 xl:mb-6 '>
            What I have done recently
        </div>
        <div className='text-4xl xl:text-8xl font-bold'>
            Experience
        </div>

       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-20 gap-8 p-4">
  <div className="border-blue-500 border py-20 px-5 rounded-lg drop-shadow-lg  flex items-center justify-center flex-col text-white text-xl font-bold">
    <img src={ui} alt="ui"></img>
    <div>UI & UX Desining</div>
    <p className="text-sm text-center mt-2 font-medium">
      I create visually appealing and user-friendly designs, focusing on intuitive user experiences.
    </p>
    <p className="text-xs text-center mt-1 text-gray-300">Since 2022</p>
  </div>
  <div className="border-white border py-20 px-5 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold flex-col">
  <img src={android} alt="ui"></img>
  <div>Cloud Computing</div>
  <p className="text-sm text-center mt-2 font-medium">
      I am skilled in deploying and managing scalable applications on cloud platforms like AWS and Azure.
    </p>
    <p className="text-xs text-center mt-1 text-gray-300">Since 2024</p>
  </div>
  <div className="border-blue-500 border py-20 px-5 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold flex-col">
  <img src={code} alt="ui"></img>
  <div>Web Development</div>
  <p className="text-sm text-center mt-2 font-medium">
      I am skilled in deploying and managing scalable applications on cloud platforms like AWS and Azure.
    </p>
    <p className="text-xs text-center mt-1 text-gray-300">Since 2022</p>
  </div>
  <div className="border-white border py-20 px-5 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold flex-col">
  <img src={javascript} alt="ui"></img>
  <div>MERN Stack</div>
  <p className="text-sm text-center mt-2 font-medium">
      I specialize in creating responsive and dynamic web applications using modern frameworks like React.
    </p>
    <p className="text-xs text-center mt-1 text-gray-300">Since 2021</p>
  </div>
  <div className="border-blue-500 border py-20 px-5 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold flex-col">
  <img src={slider} alt="ui"></img>
  <div>Web Scraping</div> <p className="text-sm text-center mt-2 font-medium">
      I develop full-stack applications with MongoDB, Express.js, React, and Node.js, focusing on efficiency and scalability.
    </p>
    <p className="text-xs text-center mt-1 text-gray-300">Since 2022</p>
  
  </div>
  <div className="border-white border py-20 px-5 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold flex-col">
  <img src={git} alt="ui"></img>
  <div>Version Control</div>
  <p className="text-sm text-center mt-2 font-medium">
      I extract valuable data from websites efficiently using tools like BeautifulSoup and Puppeteer.
    </p>
    <p className="text-xs text-center mt-1 text-gray-300">Since 2023</p>
  </div>
</div>

   
      
    </div>
  )
}

export default Experience
