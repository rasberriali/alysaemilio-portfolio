import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768); // Tracks if the screen is large

  // Handle window resize events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close the menu if the screen is large
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  return (
    <nav className="min-h-24 w-full bg-[#181824] flex justify-between items-center px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans z-50 sticky top-0 ">
      {/* Logo */}
      <a href="#home" className="cursor-pointer h-30 w-20 ">
        <img src={logo} alt="logo"></img>
      </a>

      {/* Mobile hamburger icon */}
      <div
        className="sm:hidden cursor-pointer"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen ? 'true' : 'false'}   
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Navbar items */}
      <div
        className={`flex flex-col sm:flex-row font-medium z-50  xl:text-xl    text-white sm:gap-8 sm:items-center absolute sm:relative sm:block top-16 sm:top-auto right-6 sm:right-auto cursor-pointer
          ${isMenuOpen ? 'bg-[#181824] px-4 text-sm   text-white brounded-lg shadow-lg' : 'hidden sm:flex'}`}
      >
       
        <a href="#home" className="p-2 hover:text-blue-700">Home</a>
        <a href="#about" className="p-2 hover:text-blue-700 ">About</a>
        <a href="#project"  className="p-2 hover:text-blue-700">Project</a>
        <a href="#contact"  className="p-2 hover:text-blue-700">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
