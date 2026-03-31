import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 px-6 bg-dark-900">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Cloudy’s Journey
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Posterior lens luxation occurs when the lens of the eye detaches and falls back into the vitreous cavity. 
              This is a painful condition that causes serious discomfort and high pressure in the eye.
            </p>
            <p className="font-semibold text-gray-200">
              Without immediate surgery, there is a very high risk of permanent blindness, glaucoma, 
              and severe chronic pain for Cloudy.
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-dark-800 rounded-3xl p-8 border border-white/5 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
             <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
             </div>
          </div>
          <h3 className="text-xl font-bold mb-4 text-white">Why it's urgent</h3>
          <ul className="space-y-3">
            {[
              "Immediate risk of blindness",
              "Severe intraocular pressure",
              "Chronic, unbearable pain",
              "Risk of secondary glaucoma"
            ].map((risk, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {risk}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
