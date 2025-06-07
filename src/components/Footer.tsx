import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-cream py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-cursive text-2xl text-gold mb-4">TennFlow</h3>
            <p className="mb-4">Your AI-powered guide to Tennessee's finest local businesses</p>
          </div>
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="/businesses" className="hover:text-gold transition-colors">Business Directory</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gold mb-4">Contact</h4>
            <p className="mb-2">Chattanooga, Tennessee</p>
            <p className="mb-2">info@tennflow.com</p>
            <p>(252) 621-2040</p>
          </div>
        </div>
        <div className="border-t border-gold/30 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TennFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
