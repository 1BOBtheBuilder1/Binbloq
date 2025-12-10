import React from 'react';
import { Page } from '../types';
import CheckIcon from '../components/icons/CheckIcon';

interface WhyBinbloqProps {
  setPage: (page: Page) => void;
}

const WhyBinbloq: React.FC<WhyBinbloqProps> = ({ setPage }) => {

  const comparisonData = [
    { feature: 'Method', binbloq: 'Neutralizes Odour', others: 'Masks Odour' },
    { feature: 'Chemicals', binbloq: '100% Natural', others: 'Chemical-based' },
    { feature: 'Duration', binbloq: 'Up to 60 Days', others: 'Hours to Days' },
    { feature: 'Reusability', binbloq: 'Reusable with scent pods', others: 'Single-Use' },
    { feature: 'Safety', binbloq: 'Safe for Pets & Kids', others: 'Harmful if Inhaled/Ingested' },
    { feature: 'Waste', binbloq: 'Minimal, Biodegradable', others: 'Aerosol Cans, Plastic Waste' },
  ];
  
  const benefits = [
    'Chemical-free',
    'Affordable',
    'Reusable',
    'Safe & Sustainable',
    'Domestically Manufactured'
  ];

  return (
    <div className="animate-fadeIn py-16 md:py-24 bg-brand-beige">
      <div className="container mx-auto px-6">
        
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-brand-charcoal mb-4">Why BINBLOQ is Different</h1>
          <p className="text-2xl text-brand-green-dark bg-green-100 py-4 px-6 rounded-lg inline-block">
            We don’t mask odour — we neutralize it at the source.
          </p>
           <p className="text-lg text-gray-700 leading-relaxed mt-6">
            While companies like CERO exist with similar goals, their solutions are often expensive and geared towards industrial use. BINBLOQ is designed specifically for households, offering an affordable, effective, and truly natural alternative to conventional fresheners.
          </p>
        </section>

        {/* Comparison Grid */}
        <section className="mb-20">
          <div className="overflow-x-auto">
            <div className="min-w-full bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="grid grid-cols-3 font-bold text-lg bg-gray-50 rounded-t-xl">
                <div className="p-4">Feature</div>
                <div className="p-4 text-brand-green-dark border-l">BINBLOQ</div>
                <div className="p-4 text-gray-600 border-l">Sprays / Naphthalene Balls</div>
              </div>
              {comparisonData.map((row, index) => (
                <div key={index} className={`grid grid-cols-3 ${index < comparisonData.length - 1 ? 'border-b' : ''}`}>
                  <div className="p-4 font-semibold">{row.feature}</div>
                  <div className="p-4 text-brand-green-dark border-l bg-green-50">{row.binbloq}</div>
                  <div className="p-4 text-gray-600 border-l">{row.others}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center text-brand-charcoal mb-10">The BINBLOQ Advantage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map(benefit => (
                <div key={benefit} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <CheckIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
        </section>
        
         {/* CTA */}
        <section className="text-center mt-16">
            <button
              onClick={() => setPage('buy')}
              className="bg-brand-green text-white font-bold py-4 px-10 rounded-full hover:bg-brand-green-dark transition-transform transform hover:scale-105 duration-300 shadow-lg text-lg"
            >
              Make the Switch
            </button>
        </section>

      </div>
    </div>
  );
};

export default WhyBinbloq;
