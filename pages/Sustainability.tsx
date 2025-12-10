
import React from 'react';
import { Page } from '../types';

interface SustainabilityProps {
  setPage: (page: Page) => void;
}

const Sustainability: React.FC<SustainabilityProps> = ({ setPage }) => {
  return (
    <div className="animate-fadeIn py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-brand-charcoal mb-4">Sustainability & Our Planet</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At BINBLOQ, our mission extends beyond fresh homes. We are committed to creating products that are kind to the earth, reducing chemical pollution and plastic waste one household at a time.
          </p>
        </section>
        
        {/* Graphic Section */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="bg-brand-beige p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-charcoal mb-8">Reducing Our Chemical Footprint</h2>
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              {/* Chemical Sprays */}
              <div className="text-center p-6 bg-red-100/50 border-2 border-dashed border-red-300 rounded-lg">
                <div className="text-5xl mb-4">👎</div>
                <h3 className="text-xl font-bold text-red-800">Chemical Sprays</h3>
                <p className="text-red-700 mt-2">Harmful VOCs, aerosol pollutants, and single-use plastic bottles.</p>
              </div>

              {/* Arrow */}
              <div className="text-4xl font-bold text-brand-green hidden md:block">→</div>
              <div className="text-4xl font-bold text-brand-green md:hidden">↓</div>


              {/* BINBLOQ */}
              <div className="text-center p-6 bg-green-100/50 border-2 border-dashed border-green-300 rounded-lg">
                 <div className="text-5xl mb-4">👍</div>
                <h3 className="text-xl font-bold text-green-800">BINBLOQ</h3>
                <p className="text-green-700 mt-2">100% natural, reusable, biodegradable, and zero plastic waste.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SDG 12 Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-charcoal mb-4">Supporting SDG 12</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            BINBLOQ directly supports the United Nations' Sustainable Development Goal 12: <span className="font-bold text-brand-green-dark">Responsible Consumption and Production</span>. By providing a reusable and natural alternative to disposable chemical products, we empower consumers to make more sustainable choices, reduce waste, and promote a circular economy.
          </p>
        </section>

        {/* Impact Statement */}
        <section className="max-w-4xl mx-auto">
          <blockquote className="bg-green-50 border-l-4 border-brand-green p-8 rounded-r-lg text-center">
            <p className="text-xl md:text-2xl italic text-brand-charcoal leading-relaxed">
              "If 1% of Indian households adopt BINBLOQ, we can reduce the consumption of millions of chemical freshener bottles a year."
            </p>
          </blockquote>
        </section>

        {/* CTA */}
        <section className="text-center mt-20">
            <button
              onClick={() => setPage('buy')}
              className="bg-brand-green text-white font-bold py-4 px-10 rounded-full hover:bg-brand-green-dark transition-transform transform hover:scale-105 duration-300 shadow-lg text-lg"
            >
              Join the Movement
            </button>
        </section>
      </div>
    </div>
  );
};

export default Sustainability;
