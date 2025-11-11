
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto px-6 md:px-10 lg:px-20 py-4 mt-4 bg-black/30 backdrop-blur-lg rounded-full border border-white/10">
        <div className="flex justify-between items-center">
          <a href="#hero" className="font-poppins text-xl font-bold tracking-wider">
            <img src="public\Hero\Frame 107.png" alt="Logo" className='w-[150px]' />
          </a>
          <ul className="hidden md:flex items-center space-x-8 text-sm">
            <li><a href="#work" className="hover:text-[#9B30FF] transition-colors duration-300">Work</a></li>
            <li><a href="#about" className="hover:text-[#9B30FF] transition-colors duration-300">About</a></li>
            <li><a href="#contact" className="hover:text-[#9B30FF] transition-colors duration-300">Contact</a></li>
          </ul>
          <a href="#contact" className="hidden md:inline-block px-5 py-2 text-sm bg-[#32E875] text-black rounded-full font-semibold hover:bg-white transition-colors duration-300">
            Let's Talk
          </a>
          <div className="md:hidden">
            {/* Mobile menu icon can be added here */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </nav>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10">
        <div className="h-full bg-linear-to-r from-[#9B30FF] to-[#32E875]" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </header>
  );
};

export default Header;
