import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, goal, className = "" }) => {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-medium text-gray-400">Progress</span>
        <span className="text-xl font-bold text-white">${current.toLocaleString()} <span className="text-gray-500 font-normal text-sm">/ ${goal.toLocaleString()}</span></span>
      </div>
      <div className="h-4 w-full bg-dark-700 rounded-full overflow-hidden border border-white/5 shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary relative"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[shimmer_2s_linear_infinite]" />
        </motion.div>
      </div>
      <div className="mt-2 text-right">
        <span className="text-xs font-bold text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded-full">
          {percentage}% Funded
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
