import React from 'react';
import { CheckCircle2, Building2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 -right-4 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-60" />
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80" 
              alt="International Business Deal" 
              className="relative rounded-xl shadow-2xl z-10 w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-8 -right-8 z-20 hidden md:block">
              <div className="glass-dark p-8 rounded-xl shadow-2xl border-t-4 border-accent-500 max-w-sm">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-white/10 p-2 rounded-full text-white backdrop-blur-sm">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <p className="text-white font-serif font-bold text-lg">Fray International</p>
                    <p className="text-accent-300 text-xs uppercase tracking-wider">Group Headquarters</p>
                  </div>
                </div>
                <p className="text-brand-100 text-sm italic">"Commitment to quality is our global language."</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-6">
              Excellence in Global Trade
            </h3>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Fray International Group is a premier trading house dedicated to bridging the gap between quality manufacturers and businesses worldwide. We have established a reputation for reliability and premium quality in office and educational supplies.
            </p>
            
            <p className="text-slate-600 mb-8">
              We actively trade and distribute products across <strong>Asia, The Middle East, and Europe</strong>, ensuring seamless supply chain solutions for our partners.
            </p>

            <div className="space-y-4">
              {[
                "Authorized distributors of premium Toners & Cartridges",
                "Wide network across 9+ key international markets",
                "Specialized in bulk corporate & educational supplies",
                "End-to-end export documentation handling",
                "Customer-centric approach led by industry experts"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 mt-1 flex-shrink-0" />
                  <span className="ml-3 text-brand-900 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact" className="text-brand-800 font-bold hover:text-brand-600 inline-flex items-center gap-2 group border-b-2 border-brand-200 pb-1 hover:border-brand-600 transition-all">
                Start Trading With Us
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;