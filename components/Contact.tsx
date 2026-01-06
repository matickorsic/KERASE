import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div className="space-y-8">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Kontaktirajte nas</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-primary">Stopimo v stik</h2>
              <p className="mt-4 text-lg text-slate-600">
                Imate vprašanje ali potrebujete ponudbo za polaganje keramike? Pokličite nas ali nam pišite. Z veseljem vam bomo svetovali.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:+38640992974" className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                <div className="bg-white p-3 rounded-lg shadow-sm text-accent group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Telefon</h4>
                  <p className="text-slate-600">+386 40 992 974</p>
                  <p className="text-sm text-slate-400 mt-1">Pon - Pet: 8:00 - 18:00</p>
                </div>
              </a>

              <a href="mailto:info@kerase.si" className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                <div className="bg-white p-3 rounded-lg shadow-sm text-accent group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-slate-600">info@kerase.si</p>
                  <p className="text-sm text-slate-400 mt-1">Odgovorimo v 24 urah</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 group">
                <div className="bg-white p-3 rounded-lg shadow-sm text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Lokacija</h4>
                  <p className="text-slate-600">Avče 106</p>
                  <p className="text-slate-600">5213 Kanal</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               {/* Social placeholders */}
               <a href="#" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-accent hover:text-white transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
               <a href="#" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-accent hover:text-white transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-primary mb-6">Pošljite povpraševanje</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ime</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Janez Novak" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefon</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="040 123 456" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="janez@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Sporočilo</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Zanima me polaganje keramike v kopalnici..."></textarea>
              </div>
              <Button type="submit" className="w-full shadow-lg shadow-accent/20">
                Pošlji sporočilo
              </Button>
              <p className="text-xs text-center text-slate-400 mt-4">
                S klikom na gumb se strinjate z našo politiko zasebnosti.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;