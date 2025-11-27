import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DeliveryCountries from './components/DeliveryCountries';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DeliveryCountries />
        <About />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;