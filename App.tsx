import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { LegalPage } from './types';

function App() {
  const [activeModal, setActiveModal] = useState<LegalPage>(LegalPage.NONE);

  const openLegal = (page: LegalPage) => {
    setActiveModal(page);
  };

  const closeLegal = () => {
    setActiveModal(LegalPage.NONE);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer onOpenLegal={openLegal} />
      
      <LegalModal type={activeModal} onClose={closeLegal} />
    </div>
  );
}

export default App;