import React from 'react';
import { Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white pt-20 pb-10 border-t-4 border-brand-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-brand-900 pb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Globe size={32} className="text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight leading-none">FRAY</span>
                <span className="text-[10px] tracking-[0.2em] text-brand-200 uppercase">International Group</span>
              </div>
            </div>
            <p className="text-brand-100 text-sm leading-relaxed mb-6">
              Leading the way in global trading of premium office supplies, paper products, and educational stationery. Connecting markets from East to West.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-900 text-white hover:bg-brand-600 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-900 text-white hover:bg-brand-600 transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-900 text-white hover:bg-brand-600 transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-900 text-white hover:bg-brand-600 transition-colors"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-brand-100">Explore</h4>
            <ul className="space-y-3 text-brand-200 text-sm">
              <li><a href="#home" className="hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-brand-400 transition-colors">Our Products</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-brand-100">Products</h4>
            <ul className="space-y-3 text-brand-200 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Toners & Cartridges</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Office Stationery</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">School Supplies</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Paper Products</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Bulk Export</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-brand-100">Market Insights</h4>
            <p className="text-brand-200 text-sm mb-4">Subscribe for the latest trends in global stationery trade.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="px-4 py-3 rounded-full bg-brand-900 border border-brand-800 text-white placeholder-brand-300 focus:outline-none focus:border-brand-500 text-sm"
              />
              <button className="px-4 py-2 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-500 transition-colors text-sm uppercase tracking-wide">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-brand-400 text-xs border-t border-brand-900 pt-8">
          <p>&copy; {new Date().getFullYear()} Fray International Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Trade</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;