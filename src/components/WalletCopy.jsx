import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const WalletCopy = ({ address, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex items-center justify-between p-4 bg-dark-800 border border-white/10 rounded-2xl hover:border-brand-primary/50 transition-all duration-300">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">{label}</span>
        <span className="text-sm font-mono text-gray-300 truncate max-w-[200px] sm:max-w-none">
          {address}
        </span>
      </div>
      <button
        onClick={handleCopy}
        className={`p-3 rounded-xl transition-all duration-300 ${
          copied ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        {copied ? <Check size={20} /> : <Copy size={20} />}
      </button>
      
      {copied && (
        <div className="absolute -top-8 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg animate-in fade-in slide-in-from-bottom-1">
          Copied!
        </div>
      )}
    </div>
  );
};

export default WalletCopy;
