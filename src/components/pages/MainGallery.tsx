'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/shared/Lightbox';

interface GalleryItem {
  id: string;
  src: string;
  category: string;
}

interface MainGalleryProps {
  items: GalleryItem[];
  translations: {
    filters: {
      all: string;
      interior: string;
      exterior: string;
      area: string;
    };
    items: Record<string, string>;
  };
}

export default function MainGallery({ items, translations }: MainGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  const images = filteredItems.map(item => item.src);

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setIsOpen(true);
  };

  const filters = [
    { id: 'all', label: translations.filters.all },
    { id: 'interior', label: translations.filters.interior },
    { id: 'exterior', label: translations.filters.exterior },
    { id: 'area', label: translations.filters.area },
  ];

  return (
    <>
      {/* Category Navigation */}
      <section className="py-12 bg-surface-container-lowest sticky top-[72px] z-40 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center flex-wrap gap-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`font-label-md transition-all pb-2 px-4 border-b-2 ${
                activeFilter === filter.id 
                  ? 'text-primary border-primary' 
                  : 'text-on-surface-variant hover:text-primary border-transparent'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="relative group overflow-hidden bg-surface-container border border-outline-variant/20 cursor-pointer rounded-xl break-inside-avoid"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={translations.items[item.id] || item.id}
                width={600}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="font-label-md text-[10px] text-primary-fixed uppercase tracking-widest mb-2">
                  {translations.filters[item.category as keyof typeof translations.filters] || item.category}
                </span>
                <h3 className="font-headline-md text-white text-2xl">
                  {translations.items[item.id] || item.id}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox 
        images={images} 
        initialIndex={initialIndex} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
