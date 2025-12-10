import React from 'react';
import { Page } from '../types';
import LeafIcon from '../components/icons/LeafIcon';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-cover bg-center"
        style={{backgroundImage: "url('https://picsum.photos/seed/leavesbg/1920/1080')"}}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <div className="inline-flex items-center justify-center mb-4">
            <LeafIcon className="w-12 h-12 md:w-16 md:h-16 mr-4" />
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              BINBLOQ — A Natural Way to Kill Bad Odour
            </h1>
          </div>
          <p className="text-lg md:text-xl font-light text-stone-200 mb-8">
            60-Day Odour Control | 100% Natural | Zero Chemicals
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setPage('buy')}
              className="bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:bg-brand-green-dark transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              Buy BINBLOQ Kit
            </button>
            <button 
              onClick={() => setPage('product')}
              className="bg-white text-brand-green-dark font-bold py-3 px-8 rounded-full hover:bg-stone-200 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Product Intro Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">Eliminate Odour, Naturally.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              BINBLOQ is a revolutionary odour–eliminating stretch band crafted from a powerful blend of natural ingredients: bayleaf, cinnamon, neem, clove, camphor, and activated charcoal. Unlike conventional air fresheners that merely mask smells, BINBLOQ targets and neutralizes odour molecules at their source, leaving your space genuinely fresh and clean. It’s the sustainable, chemical-free solution for a healthier home.
            </p>
        </div>
      </section>

      {/* Impact Teaser Section */}
       <section className="py-20 bg-brand-beige" style={{backgroundImage: "url('https://picsum.photos/seed/charcoal-texture/1920/1080')", backgroundSize: 'cover', backgroundBlendMode: 'overlay'}}>
        <div className="container mx-auto px-6 text-center bg-brand-beige/90 py-12 rounded-xl">
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">Clean Homes, Cleaner Planet</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Every BINBLOQ band helps reduce our reliance on harmful chemical sprays and single-use plastics. Discover how our commitment to sustainability makes a difference.
            </p>
            <button 
              onClick={() => setPage('sustainability')}
              className="bg-transparent border-2 border-brand-green text-brand-green font-bold py-3 px-8 rounded-full hover:bg-brand-green hover:text-white transition-all duration-300"
            >
              Our Green Commitment
            </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
