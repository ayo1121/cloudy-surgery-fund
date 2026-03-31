import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyHeader = ({ current, goal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const percentage = Math.min(Math.round((current / goal) * 100), 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-0 left-0 right-0 z-50 glass py-3 px-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="bg-brand-primary/20 p-2 rounded-lg">
              <span className="text-brand-primary font-bold text-sm">SURGERY FUND</span>
            </div>
            <div className="hidden sm:block">
              <div className="h-2 w-32 bg-dark-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-primary transition-all duration-500" 
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
            <span className="text-sm font-bold text-white">
              ${current.toLocaleString()} <span className="text-gray-500 font-normal">raised</span>
            </span>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-brand-primary/90 transition-all active:scale-95"
          >
            Donate Now
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
