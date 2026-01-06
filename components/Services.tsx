import React from 'react';
import { Layers, Bath, Ruler, PaintBucket, Hammer, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Polaganje keramike',
    description: 'Natančno polaganje vseh vrst ploščic (keramika, gres, mozaik) za kopalnice, kuhinje, terase in hodnike.',
    icon: Layers,
  },
  {
    title: 'Adaptacije kopalnic',
    description: 'Celovita prenova kopalnic od odstranitve stare keramike do priprave podlage in končnega polaganja.',
    icon: Bath,
  },
  {
    title: 'Vinilne talne obloge',
    description: 'Strokovno polaganje vinila na klik ali lepljenje. Trpežna in sodobna rešitev za bivalne prostore.',
    icon: PaintBucket,
  },
  {
    title: 'Polaganje laminata',
    description: 'Hitra in kvalitetna montaža laminatnih podov z ustreznim podlaganjem in zaključnimi letvami.',
    icon: Hammer,
  },
  {
    title: 'Priprava podlage',
    description: 'Izravnava tal z izravnalno maso, hidroizolacija v mokrih prostorih in sanacija estrihov.',
    icon: Ruler,
  },
  {
    title: 'Svetovanje',
    description: 'Pomoč pri izbiri materialov, izračunu potrebnih količin in načrtovanju postavitve za najboljši estetski učinek.',
    icon: ShieldCheck,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Naša ponudba</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-primary">Kvalitetne storitve za vaš dom</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Poskrbimo za vse faze dela, od priprave do končnega čiščenja. Uporabljamo le preverjene materiale in sodobne tehnike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-slate-50 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100 hover:border-accent/20"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;