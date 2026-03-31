import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';
import cloudyCondition from '../assets/cloudy/cloudy_condition.jpg';

const Hero = ({ current, goal }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video rounded-[32px] overflow-hidden bg-dark-800 border border-white/5 shadow-2xl group"
        >
          <img 
            src={cloudyCondition} 
            alt="Cloudy with Posterior Lens Luxation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 right-4 bg-red-500/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white uppercase tracking-widest font-bold border border-white/20">
            Emergency Surgery Fund
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Help Save <span className="gradient-text">Cloudy’s Eye</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium"
          >
            Cloudy is suffering from Posterior Lens Luxation. 
            We need $1,200 for urgent surgery to save his sight and stop the pain.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('how-to-help').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center gap-2"
          >
            Donate Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-lg mx-auto pt-8"
        >
          <ProgressBar current={current} goal={goal} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
