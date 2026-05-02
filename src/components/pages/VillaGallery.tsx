'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/shared/Lightbox';
import {getAssetPath} from '@/lib/utils';

interface VillaGalleryProps {
  id: string;
  gallery: string[];
  title: string;
  lightboxTitle: string;
}

export default function VillaGallery({ id, gallery, title, lightboxTitle }: VillaGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const images = gallery.map((img) => getAssetPath(`/images/villa/${id}/${img}`));

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setIsOpen(true);
  };

  return (
    <section>
      <h2 className="font-headline-md text-2xl text-slate-800 mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((img, index) => (
          <div 
            key={index} 
            className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-sm group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={getAssetPath(`/images/villa/${id}/${img}`)}
              alt={`${lightboxTitle} Gallery ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">View Detail</span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox 
        images={images} 
        initialIndex={initialIndex} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </section>
  );
}
