import React, { useState } from 'react';
import { Menu, X, Hammer, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Domov', href: '#home' },
    { name: 'Storitve', href: '#services' },
    { name: 'Galerija', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Remove the # to get the ID
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // If we have scroll-padding-top in CSS, scrollIntoView works great.
      // However, calculating manually ensures precise control if needed.
      // We will rely on CSS scroll-padding-top for standard behavior, 
      // but triggering via JS allows us to control the behavior cleanly.
      
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed w-full z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')} 
              className="flex items-center gap-2 group"
            >
              <div className="bg-primary text-white p-2 rounded group-hover:bg-accent transition-colors duration-300">
                <Hammer className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-slate-800">
                KERASE<span className="text-accent">.</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 hover:text-accent font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+38640992974"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+386 40 992 974</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-accent hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+38640992974"
              className="block w-full mt-4 text-center px-4 py-3 bg-primary text-white rounded-md font-medium"
            >
              Pokličite nas
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;