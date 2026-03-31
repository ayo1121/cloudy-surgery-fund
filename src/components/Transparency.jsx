import React from 'react';
import { motion } from 'framer-motion';
import cloudyPre1 from '../assets/cloudy/cloudy_pre_1.jpg';
import cloudyPre2 from '../assets/cloudy/cloudy_pre_2.jpg';
import cloudyPre3 from '../assets/cloudy/cloudy_pre_3.jpg';

const Transparency = ({ current, goal }) => {
  const gallery = [cloudyPre1, cloudyPre2, cloudyPre3];

  return (
    <section className="py-24 px-6 bg-dark-800/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Trust & Transparency</h2>
          <p className="text-gray-400">100% of donations are used directly for Cloudy’s medical expenses.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] bg-dark-700/30 rounded-[32px] border border-white/5 overflow-hidden"
              >
                  <img src={gallery[0]} alt="Cloudy" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {gallery.slice(1).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square bg-dark-700/30 rounded-2xl border border-white/5 overflow-hidden"
                >
                  <img src={img} alt={`Cloudy profile ${i+1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              Cloudy - Before the emergency
            </p>
          </div>
          
          <div className="space-y-8 flex flex-col justify-center">
            <div className="bg-dark-900/50 p-10 rounded-[40px] border border-white/5 space-y-8 shadow-2xl relative overflow-hidden group">
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-400 font-medium">Surgery Goal</span>
                  <span className="text-2xl font-black text-white">${goal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-400 font-medium">Raised So Far</span>
                  <span className="text-2xl font-black text-brand-primary">${current.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Remaining</span>
                  <span className="text-2xl font-black text-orange-400 font-mono">${(goal - current).toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="bg-brand-primary/10 border border-brand-primary/20 p-4 rounded-2xl flex items-start gap-4">
                  <div className="bg-brand-primary/20 p-2 rounded-lg text-brand-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Direct to Vet</p>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      All donations go exclusively to fund Cloudy’s veterinary consultation and surgery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
