import React from 'react';

const Buy: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
  };

  return (
    <div className="animate-fadeIn py-16 md:py-24 bg-brand-beige">
      <div className="container mx-auto px-6">
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-brand-charcoal mb-4">Get Your BINBLOQ Kit</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Start your journey to a fresher, cleaner, and more sustainable home today. Choose your preferred way to order.
          </p>
        </section>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Order & Payment Options */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Purchase Options</h2>
            
            <div className="space-y-4 mb-8">
              <button className="w-full bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-colors duration-300">Order Now</button>
              <button className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300">Pre-Book</button>
            </div>
            
            <div className="mt-8 text-center bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-brand-green-dark">Delivery Timeline: 3–5 Business Days Shipping</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Contact To Purchase</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-green focus:border-brand-green" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-green focus:border-brand-green" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea id="message" name="message" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-green focus:border-brand-green" placeholder="Inquiry about bulk orders, etc."></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-colors duration-300">Submit Inquiry</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
