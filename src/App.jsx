import React, { useState } from 'react';
import StickyHeader from './components/StickyHeader';
import Hero from './components/Hero';
import About from './components/About';
import Transparency from './components/Transparency';
import HowToHelp from './components/HowToHelp';
import Footer from './components/Footer';

function App() {
  // Website reset to $0 progress for Cloudy's campaign
  const [currentAmount, setCurrentAmount] = useState(0);
  const goalAmount = 1200;

  return (
    <div className="bg-dark-900 min-h-screen font-sans">
      <StickyHeader current={currentAmount} goal={goalAmount} />
      
      <main>
        <Hero current={currentAmount} goal={goalAmount} />
        
        <div className="relative">
          {/* Subtle background glow for separation */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] pointer-events-none" />
          
          <About />
          <Transparency current={currentAmount} goal={goalAmount} />
          <HowToHelp />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
