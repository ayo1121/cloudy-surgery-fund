import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Send, Copy, Check } from 'lucide-react';

const HowToHelp = () => {
  const [copied, setCopied] = useState(false);
  const whishNumber = "+961 76 513 591"; // Placeholder for the user's Whish number

  const handleCopy = () => {
    navigator.clipboard.writeText(whishNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-to-help" className="py-24 px-6 bg-dark-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How to Help Cloudy</h2>
          <p className="text-gray-400">Direct donation options for immediate impact.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Wish Donation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-800 border border-white/5 p-10 rounded-[40px] flex flex-col group hover:border-brand-primary/50 transition-all duration-500 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Smartphone size={80} />
             </div>
             
             <div className="w-16 h-16 rounded-[24px] bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-8">
                <Smartphone size={32} />
             </div>
             
             <h3 className="text-2xl font-black text-white mb-4 italic uppercase tracking-tight">Whish <span className="font-light">Money</span></h3>
             <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                Send your donation via Whish Money to Cloudy’s medical fund. 
                Fastest way to help us reach the surgery goal in Lebanon.
             </p>

             <div className="space-y-4 pt-6 mt-auto">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] px-1">Receiver Number</div>
                <div className="flex items-center gap-3 p-4 bg-dark-900 rounded-2xl border border-white/5 group/copy hover:border-brand-primary/30 transition-all">
                  <span className="font-mono text-white text-lg flex-grow tracking-wider">{whishNumber}</span>
                  <button 
                    onClick={handleCopy}
                    className={`p-3 rounded-xl transition-all ${copied ? 'bg-green-500 text-white' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
             </div>
          </motion.div>

          {/* PayPal / Alternate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-dark-800 border border-white/5 p-10 rounded-[40px] flex flex-col items-center text-center group hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-[24px] bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8">
               <Send size={32} />
            </div>
            
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Other <span className="font-light">Methods</span></h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
               If you wish to donate via PayPal or other international transfers, please message us directly on TikTok.
            </p>
            
            <button className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 uppercase tracking-widest text-sm">
               Contact on TikTok
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
