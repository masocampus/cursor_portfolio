'use client';

import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoText: string;
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logoText, items }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background/70 backdrop-blur-sm'}`}>
      <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold">{logoText}</div>
        
        {/* 모바일 메뉴 버튼 */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18"/>
            )}
          </svg>
        </button>
        
        {/* 데스크톱 메뉴 */}
        <ul className="hidden md:flex space-x-6">
          {items.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <ul className="py-4 px-6 space-y-4">
            {items.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="block py-2 hover:text-blue-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar; 