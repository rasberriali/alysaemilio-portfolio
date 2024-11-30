import React, { useState, useEffect } from 'react';

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
    <nav className="min-h-24 w-full bg-[#181824] flex justify-between items-center px-4 sm:px-6 md:px-8 xl:px-24 2xl:px-48 font-sans z-50 sticky top-0">
      {/* Logo */}
      <div className="cursor-pointer text-[#7562E0] xl:text-3xl sm:text-base font-bold">Alysa Emilio</div>

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
        className={`flex flex-col sm:flex-row font-medium z-50  text-white sm:gap-8 sm:items-center absolute sm:relative sm:block top-16 sm:top-auto right-6 sm:right-auto cursor-pointer
          ${isMenuOpen ? 'bg-[#181824] px-4 text-sm  text-white brounded-lg shadow-lg' : 'hidden sm:flex'}`}
      >
        <div className="p-2 hover:text-blue-700">Home</div>
        <div className="p-2 hover:text-blue-700">About</div>
        <div className="p-2 hover:text-blue-700">Projects</div>
        <div className="p-2 hover:text-blue-700">Contact</div>
      </div>
    </nav>
  );
}

export default Navbar;
