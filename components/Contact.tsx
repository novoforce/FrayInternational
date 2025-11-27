import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: 'Toners & Cartridges',
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 to-brand-900/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Request a Product Quote</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card bg-white/10 p-10 text-white shadow-2xl relative overflow-hidden rounded-xl border-0">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl" />
              
              <h4 className="text-2xl font-serif font-bold mb-8 text-accent-100">Contact Information</h4>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-accent-400 border border-white/5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg font-serif">Headquarters</p>
                    <p className="text-brand-100 text-sm leading-relaxed mt-1">International Trade Tower<br />Business Bay, Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-accent-400 border border-white/5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg font-serif">Sales Office</p>
                    <p className="text-brand-100 text-sm mt-1">+971 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-accent-400 border border-white/5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg font-serif">Email</p>
                    <p className="text-brand-100 text-sm mt-1">sales@frayinternational.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                 <Globe className="text-accent-400 w-5 h-5"/>
                 <h5 className="font-bold text-white">Global Reach</h5>
              </div>
              <p className="text-sm text-brand-100">
                We actively export to UAE, Oman, Saudi Arabia, Germany, Spain, India, China, Thailand, and Indonesia.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center p-12 glass-card bg-white/95 rounded-xl text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Inquiry Received</h3>
                <p className="text-green-800">Thank you for contacting Fray International Group. Our trading team will review your requirement and get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-green-700 font-bold border-b-2 border-green-200 hover:border-green-600 transition-all">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card bg-white/90 p-8 md:p-10 rounded-xl shadow-xl border border-white/50">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="group">
                    <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 focus:border-brand-600 focus:bg-white outline-none transition-all placeholder-slate-400 rounded-xl"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 focus:border-brand-600 focus:bg-white outline-none transition-all placeholder-slate-400 rounded-xl"
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 focus:border-brand-600 focus:bg-white outline-none transition-all placeholder-slate-400 rounded-xl"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-2">Product Interest</label>
                    <select
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 focus:border-brand-600 focus:bg-white outline-none transition-all text-slate-700 rounded-xl"
                      value={formData.productInterest}
                      onChange={(e) => setFormData({...formData, productInterest: e.target.value})}
                    >
                      <option>Toners & Cartridges</option>
                      <option>Office Stationery</option>
                      <option>School Stationery</option>
                      <option>Paper Products</option>
                      <option>Multiple Products / General</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                   <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-2">Destination Country</label>
                   <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 focus:border-brand-600 focus:bg-white outline-none transition-all placeholder-slate-400 rounded-xl"
                      placeholder="e.g. Oman, Saudi Arabia, Thailand..."
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    />
                </div>

                <div className="mb-10">
                  <label className="block text-xs font-bold text-brand-800 uppercase tracking-wider mb-2">Inquiry Details</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 border border-slate-200 focus:border-brand-600 focus:bg-white outline-none transition-all placeholder-slate-400 resize-none rounded-xl"
                    placeholder="Please describe quantity, specific brands, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-600 text-white font-bold tracking-wide uppercase hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20 rounded-full"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;