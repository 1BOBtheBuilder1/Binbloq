
import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import WhyBinbloq from './pages/WhyBinbloq';
import Sustainability from './pages/Sustainability';
import Buy from './pages/Buy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'product':
        return <ProductDetails setPage={setCurrentPage} />;
      case 'why':
        return <WhyBinbloq setPage={setCurrentPage} />;
      case 'sustainability':
        return <Sustainability setPage={setCurrentPage} />;
      case 'buy':
        return <Buy />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
};

export default App;
