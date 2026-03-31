import React from 'react';
import { Heart } from 'lucide-react'; // Example of a safe import if needed, but the current code uses text markers

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-dark-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-2">
          <div className="text-xl font-black gradient-text">SAVE CLOUDY’S EYE</div>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
            From the bottom of our hearts, thank you for your generosity and support. 
            Every donation, share, and prayer brings us closer to surgery.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            {['TikTok', 'Instagram', 'Twitter'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-90"
              >
                <div className="text-[10px] font-bold uppercase">{social[0]}</div>
              </a>
            ))}
          </div>
          <div className="text-[10px] text-gray-700 font-medium uppercase tracking-widest">
            © 2026 SURGERY FUND CAMPAIGN
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
