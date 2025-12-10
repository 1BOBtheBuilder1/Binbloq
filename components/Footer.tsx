
import React from 'react';
import { Page } from '../types';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import LeafIcon from './icons/LeafIcon';

interface FooterProps {
  setPage: (page: Page) => void;
}


const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setPage('home')}
          >
            <LeafIcon className="w-7 h-7 text-brand-green" />
            <span className="text-xl font-bold text-brand-charcoal">BINBLOQ</span>
          </div>

          <div className="text-center">
            <p className="font-semibold text-brand-green-dark">Fresh Homes. Clean Planet.</p>
            <p className="text-sm text-gray-600 mt-1">Email for bulk orders: <a href="mailto:sales@binbloq.com" className="hover:underline">sales@binbloq.com</a></p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-stone-200 pt-4">
          &copy; {new Date().getFullYear()} BINBLOQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
