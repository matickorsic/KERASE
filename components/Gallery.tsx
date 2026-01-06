import React from 'react';
import { GalleryImage } from '../types';

// Images are loaded from the public/KERASE_SLIKE folder
// Expected filenames: 1.jpg, 2.jpg, ... 6.jpg
const images: GalleryImage[] = [
  { id: 1, url: '/KERASE_SLIKE/1.jpg', alt: 'Prenova kopalnice' },
  { id: 2, url: '/KERASE_SLIKE/2.jpg', alt: 'Priprava podlage in estrih' },
  { id: 3, url: '/KERASE_SLIKE/3.jpg', alt: 'Polaganje keramike velikega formata' },
  { id: 4, url: '/KERASE_SLIKE/4.jpg', alt: 'Detajlno polaganje mozaika' },
  { id: 5, url: '/KERASE_SLIKE/5.jpg', alt: 'Zaključna dela in fugiranje' },
  { id: 6, url: '/KERASE_SLIKE/6.jpg', alt: 'Zunanja terasa in stopnice' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-primary">Galerija referenc</h2>
            <p className="mt-4 text-lg text-slate-600">
              Oglejte si nekaj naših preteklih projektov. Vsak projekt je unikat in prilagojen željam stranke.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Decorative element */}
            <div className="h-px w-32 bg-slate-300 mb-6"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image is missing, to prevent broken UI
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/800x600?text=Slika+v+pripravi';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-slate-500 italic border-2 border-dashed border-slate-300 rounded-lg p-8 bg-slate-50/50">
          <p>Za ogled več referenc nas kontaktirajte ali nas obiščite.</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;