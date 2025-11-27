import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    // Aerial view of container ship
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop",
    title: "Global Maritime Logistics",
  },
  {
    // Warehouse with shelving
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    title: "Premium Inventory",
  },
  {
    // Office Stationery
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    title: "Office Solutions",
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Carousel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          />
          {/* Overlay - Left weighted for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-transparent to-brand-950/10" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-accent-500/20 text-white backdrop-blur-md transition-all hidden md:block group"
      >
        <ChevronLeft size={32} className="group-hover:text-accent-400 transition-colors" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-accent-500/20 text-white backdrop-blur-md transition-all hidden md:block group"
      >
        <ChevronRight size={32} className="group-hover:text-accent-400 transition-colors" />
      </button>

      {/* Content - Left Aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start text-left pt-16">
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-2xl">
          Fray International <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-200 via-accent-400 to-accent-200 animate-gradient-x">
            Group
          </span>
        </h1>
        
        {/* Quote Left-Sided with Accent Border */}
        <div className="max-w-2xl border-l-4 border-accent-500 pl-6 mb-10 bg-brand-950/20 backdrop-blur-sm py-4 pr-4 rounded-r-lg">
          <p className="text-2xl md:text-3xl font-serif italic text-white/95 leading-relaxed drop-shadow-lg">
            "Beyond borders, delivering <span className="text-accent-400">excellence</span>."
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a href="#delivery" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-accent-600 text-white font-bold text-lg hover:bg-accent-500 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] group">
            Where We Deliver
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#products" className="inline-flex justify-center items-center px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/20 transition-colors">
            View Products
          </a>
        </div>

        {/* Quick Stats Grid - Aligned Left */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="flex items-center gap-4 bg-brand-950/30 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-brand-950/50 transition-colors text-left group">
            <div className="p-3 bg-brand-800/80 rounded-lg text-accent-400 border border-brand-700/50 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">9+</p>
              <p className="text-sm text-brand-100">Key Markets</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-brand-950/30 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-brand-950/50 transition-colors text-left group">
            <div className="p-3 bg-brand-800/80 rounded-lg text-accent-400 border border-brand-700/50 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">Premium</p>
              <p className="text-sm text-brand-100">Quality Assurance</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 bg-brand-950/30 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-brand-950/50 transition-colors text-left group">
            <div className="p-3 bg-brand-800/80 rounded-lg text-accent-400 border border-brand-700/50 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">Global</p>
              <p className="text-sm text-brand-100">Logistics Network</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent-500 w-8 shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;