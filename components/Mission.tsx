import React from 'react';
import { Target, Lightbulb, HeartHandshake } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section className="py-24 bg-brand-50/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-100/40 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/40 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">Our Core Values</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-6">Driven by Purpose</h3>
          <p className="text-slate-600 text-lg">
            At Fray International Group, we don't just trade products; we build lasting partnerships founded on trust, quality, and global connectivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-brand-900/5 hover:shadow-xl hover:shadow-brand-900/10 transition-all duration-300 group hover:-translate-y-2 border border-white/50">
            <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-colors duration-300">
              <Target className="w-8 h-8 text-brand-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Our Mission</h4>
            <p className="text-slate-600 leading-relaxed">
              To be the premier global bridge for high-quality office and educational supplies, ensuring that every shipment empowers businesses and institutions with reliability, efficiency, and excellence across borders.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-brand-900/5 hover:shadow-xl hover:shadow-brand-900/10 transition-all duration-300 group hover:-translate-y-2 border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent-500 transition-colors duration-300">
                <Lightbulb className="w-8 h-8 text-accent-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Our Vision</h4>
              <p className="text-slate-600 leading-relaxed">
                To set the gold standard in international trading logistics, creating a seamless, borderless marketplace where premium stationery and paper products are accessible to every growing economy we serve.
              </p>
            </div>
          </div>

          {/* Promise Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-brand-900/5 hover:shadow-xl hover:shadow-brand-900/10 transition-all duration-300 group hover:-translate-y-2 border border-white/50">
            <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-colors duration-300">
              <HeartHandshake className="w-8 h-8 text-brand-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-bold text-brand-900 mb-4 font-serif">Our Promise</h4>
            <p className="text-slate-600 leading-relaxed">
              We pledge unwavering integrity in every transaction. From the moment you request a quote to the final delivery, Fray International Group is dedicated to transparency, timely execution, and your long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
