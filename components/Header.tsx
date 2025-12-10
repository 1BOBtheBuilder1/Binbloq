
import React, { useState } from 'react';
import { Page } from '../types';
import LeafIcon from './icons/LeafIcon';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setPage: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ page, currentPage, setPage, children, onClick }) => {
  const isActive = currentPage === page;
  return (
    <a
      href={`#${page}`}
      onClick={(e) => {
        e.preventDefault();
        setPage(page);
        if (onClick) onClick();
      }}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'text-brand-green-dark font-bold'
          : 'text-brand-charcoal hover:text-brand-green'
      }`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'product', label: 'Product' },
    { page: 'why', label: 'Why BINBLOQ' },
    { page: 'sustainability', label: 'Sustainability' },
    { page: 'buy', label: 'Buy Now' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setPage('home')}
        >
          <LeafIcon className="w-8 h-8 text-brand-green" />
          <span className="text-2xl font-bold text-brand-charcoal">BINBLOQ</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map(item => (
            <NavLink key={item.page} page={item.page} currentPage={currentPage} setPage={setPage}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-charcoal focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center py-4">
            {navItems.map(item => (
              <NavLink key={item.page} page={item.page} currentPage={currentPage} setPage={setPage} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
