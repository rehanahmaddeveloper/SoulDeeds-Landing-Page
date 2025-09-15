
"use client";

import React, { useState } from 'react';

// Renders the logo. The user should place their 'logo.png' in the project's public directory.
const Logo: React.FC = () => (
  <div className="flex items-center">
    <img src="/logo.png" alt="Soul Deeds Logo" className="h-9 w-auto" />
  </div>
);

// Hamburger Icon for opening the mobile menu
const HamburgerIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="lg:hidden p-2 rounded-md text-gray-700 hover:text-soul-purple focus:outline-none" 
      aria-label="Open menu"
      aria-expanded="false"
    >
        <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
);

// Close Icon for closing the mobile menu
const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="p-2 rounded-md text-gray-700 hover:text-soul-purple focus:outline-none" 
      aria-label="Close menu"
      aria-expanded="true"
    >
        <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12" />
        </svg>
    </button>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'Projects', 'Founders', 'How It Works'];
  
  return (
    <>
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" aria-label="Soul Deeds Home Page">
            <Logo />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-gray-600 hover:text-soul-purple transition-colors font-medium">{link}</a>
            ))}
          </nav>
          <button className="hidden lg:block bg-soul-purple text-white font-semibold px-6 py-2 rounded-lg hover:bg-soul-purple-dark transition-colors shadow-sm">
            Join the Waitlist
          </button>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
              <HamburgerIcon onClick={() => setIsMenuOpen(true)} />
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel - with a solid white background */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out bg-white ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog" 
        aria-modal="true"
        aria-hidden={!isMenuOpen}
      >
          <div className="w-full h-full flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-6 border-b">
                  <a href="#" aria-label="Soul Deeds Home Page">
                      <Logo />
                  </a>
                  <CloseIcon onClick={() => setIsMenuOpen(false)} />
              </div>

              {/* Mobile Menu Body */}
              <div className="flex-grow flex flex-col justify-between p-6">
                  <nav className="flex flex-col space-y-6">
                      {navLinks.map(link => (
                          <a key={link} href="#" className="text-gray-700 hover:text-soul-purple text-2xl font-medium">{link}</a>
                      ))}
                  </nav>
                  <button className="w-full bg-soul-purple text-white font-semibold px-6 py-4 rounded-lg hover:bg-soul-purple-dark transition-colors shadow-sm mt-8 text-lg">
                      Join the Waitlist
                  </button>
              </div>
          </div>
      </div>
    </>
  );
};

export default Header;
