import React from 'react';
import { Hammer } from 'lucide-react';
import { LegalPage } from '../types';

interface FooterProps {
  onOpenLegal: (page: LegalPage) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-700 pb-8">
          
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-slate-700 text-white p-1.5 rounded">
                <Hammer className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                KERASE<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Kvalitetno polaganje keramike, vinila in laminata. Zanesljivost in natančnost sta naši vrlini.
            </p>
            <p className="text-sm">
              Simo Evdjić s.p.<br/>
              Avče 106<br/>
              5213 Kanal
            </p>
          </div>

          <div className="col-span-1 md:col-start-3 md:text-right">
             <h4 className="text-white font-bold mb-4">Pravno</h4>
             <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => onOpenLegal(LegalPage.COMPANY_INFO)}
                    className="text-sm hover:text-accent transition-colors text-left md:text-right w-full"
                  >
                    Podatki o podjetju
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenLegal(LegalPage.PRIVACY)}
                    className="text-sm hover:text-accent transition-colors text-left md:text-right w-full"
                  >
                    Politika zasebnosti
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenLegal(LegalPage.TERMS)}
                    className="text-sm hover:text-accent transition-colors text-left md:text-right w-full"
                  >
                    Splošni pogoji
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenLegal(LegalPage.COOKIES)}
                    className="text-sm hover:text-accent transition-colors text-left md:text-right w-full"
                  >
                    Piškotki
                  </button>
                </li>
             </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} KeraSe. Vse pravice pridržane.</p>
          <p className="mt-2 md:mt-0">Oblikovano z ljubeznijo do detajlov.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;