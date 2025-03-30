'use client';

import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface FooterProps {
  name: string;
  year?: number;
  socialLinks?: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ name, year = new Date().getFullYear(), socialLinks = [] }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {year} {name}. 모든 권리 보유.</p>
          </div>
          
          {socialLinks.length > 0 && (
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 