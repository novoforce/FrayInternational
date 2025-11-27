import React from 'react';
import { Plane, Ship } from 'lucide-react';

const countries = [
  { name: 'UAE', code: 'ae' },
  { name: 'Oman', code: 'om' },
  { name: 'Saudi Arabia', code: 'sa' },
  { name: 'Germany', code: 'de' },
  { name: 'Spain', code: 'es' },
  { name: 'India', code: 'in' },
  { name: 'China', code: 'cn' },
  { name: 'Thailand', code: 'th' },
  { name: 'Indonesia', code: 'id' }
];

const DeliveryCountries: React.FC = () => {
  return (
    <section id="delivery" className="py-24 bg-brand-600 relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-800 to-brand-950 opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
             <Plane className="text-accent-400 w-5 h-5 animate-pulse" />
             <span className="text-accent-400 font-bold tracking-widest uppercase text-xs">Global Logistics</span>
             <Ship className="text-accent-400 w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            We Will Deliver
          </h2>
          <p className="text-lg text-brand-100/80">
            Our established logistics network ensures seamless delivery of bulk orders to these key destinations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {countries.map((country) => (
            <div 
              key={country.code}
              className="group bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300 border border-white/10 flex flex-col items-center justify-center gap-4"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md border-4 border-white/20 group-hover:border-accent-400 transition-colors">
                <img 
                  src={`https://flagcdn.com/w160/${country.code}.png`}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-white group-hover:text-accent-300 transition-colors tracking-wide">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryCountries;