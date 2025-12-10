import React from 'react';
import { Page } from '../types';
import CharcoalIcon from '../components/icons/CharcoalIcon';
import NeemIcon from '../components/icons/NeemIcon';
import CinnamonIcon from '../components/icons/CinnamonIcon';
import CloveIcon from '../components/icons/CloveIcon';
import LeafIcon from '../components/icons/LeafIcon';
import CamphorIcon from '../components/icons/CamphorIcon';

interface ProductDetailsProps {
  setPage: (page: Page) => void;
}

const IngredientCard: React.FC<{
  icon: React.ReactNode;
  name: string;
  description: string;
}> = ({ icon, name, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="flex justify-center items-center mb-4 text-brand-green w-16 h-16 mx-auto bg-green-100 rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-charcoal mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProductDetails: React.FC<ProductDetailsProps> = ({ setPage }) => {
  const ingredients = [
    { icon: <CharcoalIcon className="w-8 h-8" />, name: 'Charcoal', description: 'Absorbs & traps smell' },
    { icon: <NeemIcon className="w-8 h-8" />, name: 'Neem', description: 'Antibacterial & anti-fungal' },
    { icon: <CinnamonIcon className="w-8 h-8" />, name: 'Cinnamon + Clove', description: 'Natural disinfectants' },
    { icon: <LeafIcon className="w-8 h-8" />, name: 'Bayleaf', description: 'Prevents bacterial build-up' },
    { icon: <CamphorIcon className="w-8 h-8" />, name: 'Camphor', description: 'Freshens air' },
  ];
  
  return (
    <div className="animate-fadeIn py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* What is BINBLOQ? */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl font-extrabold text-brand-charcoal mb-4">What is BINBLOQ?</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            BINBLOQ is a powerful, all-natural odour-eliminating stretch band. Designed for simplicity and effectiveness, it wraps around your dustbin or can be placed in any small space to neutralize unpleasant smells for up to 60 days. It's a fire-and-forget solution for a consistently fresh environment, free from harsh chemicals.
          </p>
        </section>

        <div className="text-center mb-16">
          <img src="https://picsum.photos/seed/binbloq/600/400" alt="BINBLOQ Product" className="mx-auto rounded-xl shadow-2xl"/>
        </div>

        {/* Ingredient Breakdown */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-brand-charcoal mb-12">The Power of Nature: Ingredient Breakdown</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {ingredients.map(ing => <IngredientCard key={ing.name} {...ing} />)}
          </div>
        </section>

        {/* Specs & Kit */}
        <section className="grid md:grid-cols-2 gap-12 bg-brand-beige p-8 md:p-12 rounded-2xl">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-6">Product Specs</h2>
            <ul className="space-y-4 text-lg text-gray-800">
              <li className="flex items-center"><span className="font-bold w-32">Lasts:</span> Up to 60 days</li>
              <li className="flex items-center"><span className="font-bold w-32">Price:</span> ₹150 per Kit</li>
              <li className="flex items-start">
                <span className="font-bold w-32 flex-shrink-0">Production Cost:</span>
                <div>
                  <span>~ ₹135</span>
                  <ul className="text-sm text-gray-600 list-disc list-inside ml-2 mt-1">
                    <li>Band: ₹48</li>
                    <li>Gloves: ₹25</li>
                    <li>Liner: ₹20</li>
                    <li>Scent Pods: ₹42</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-center"><span className="font-bold w-32">Properties:</span> Reusable & Washable</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-6">What the KIT Includes</h2>
            <ul className="space-y-4 text-lg text-gray-800 list-disc list-inside">
              <li>BINBLOQ Band</li>
              <li>Waterproof Gloves</li>
              <li>Leak-proof Liner</li>
              <li>Scent Flavouring Pods</li>
            </ul>
          </div>
        </section>

         {/* CTA */}
         <section className="text-center mt-20">
            <button
              onClick={() => setPage('buy')}
              className="bg-brand-green text-white font-bold py-4 px-10 rounded-full hover:bg-brand-green-dark transition-transform transform hover:scale-105 duration-300 shadow-lg text-lg"
            >
              Order Your Kit Today
            </button>
        </section>

      </div>
    </div>
  );
};

export default ProductDetails;
