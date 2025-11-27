import React from 'react';
import { Printer, BookOpen, PenTool, ScrollText, Globe2, Container } from 'lucide-react';

const products = [
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Toners & Cartridges",
    description: "High-yield, premium quality toners and cartridges compatible with major global printer brands for business efficiency."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Office Stationery",
    description: "Complete range of corporate essentials including organizers, files, writing instruments, and desk accessories."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "School Stationery",
    description: "Comprehensive educational supplies from notebooks and geometry sets to art materials for institutions."
  },
  {
    icon: <ScrollText className="w-8 h-8" />,
    title: "Paper Products",
    description: "Premium A4 paper, continuous computer paper, thermal rolls, and specialized printing materials."
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Global Trading",
    description: "Expert import/export services connecting manufacturers to markets in Asia, Europe, and the Middle East."
  },
  {
    icon: <Container className="w-8 h-8" />,
    title: "Supply Chain",
    description: "Reliable logistics partners ensuring your bulk orders reach China, Dubai, India, USA, Spain, or Germany on time."
  }
];

const Services: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-slate-50 to-brand-50 relative">
      {/* Background blobs for glass effect context */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3">What We Offer</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">Premium Products & Services</h3>
          <p className="text-lg text-slate-600">
            FrayInternational specializes in sourcing and delivering high-quality office and educational supplies to the global market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(128,0,32,0.1)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-400 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-16 h-16 rounded-full bg-white shadow-sm text-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-800 group-hover:text-accent-400 transition-all duration-300 border border-brand-100">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-900 mb-3 font-serif">
                {item.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;