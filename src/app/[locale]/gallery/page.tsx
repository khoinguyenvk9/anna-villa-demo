import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';
import MainGallery from '@/components/pages/MainGallery';
import {getAssetPath} from '@/lib/utils';
import Image from 'next/image';

export default async function GalleryPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Gallery');

  const galleryItems = [
    // Villa 019 Highlights
    { id: 'grandLounge', src: getAssetPath('/images/villa/019/_THP0874-HDR.webp'), category: 'interior' },
    { id: 'infinityHorizon', src: getAssetPath('/images/villa/019/main.webp'), category: 'exterior' },
    { id: 'azureSuite', src: getAssetPath('/images/villa/019/_THP1032-HDR.webp'), category: 'interior' },
    { id: 'secretGardens', src: getAssetPath('/images/villa/019/_THP1146.webp'), category: 'exterior' },
    { id: 'coastalSerenity', src: getAssetPath('/images/villa/019/_THP0900-HDR.webp'), category: 'area' },
    
    // Villa 057 Highlights
    { id: 'jungleOasis', src: getAssetPath('/images/villa/057/main.webp'), category: 'exterior' },
    { id: 'emeraldSuite', src: getAssetPath('/images/villa/057/_THP0531-HDR.webp'), category: 'interior' },
    { id: 'tropicalDining', src: getAssetPath('/images/villa/057/_THP0636.webp'), category: 'interior' },
    { id: 'verdantView', src: getAssetPath('/images/villa/057/_THP0722-HDR.webp'), category: 'area' },
    { id: 'sunsetTerrace', src: getAssetPath('/images/villa/057/_THP0547-HDR.webp'), category: 'exterior' },
  ];

  const translations = {
    filters: {
      all: t('filters.all'),
      interior: t('filters.interior'),
      exterior: t('filters.exterior'),
      area: t('filters.area'),
    },
    items: {
      grandLounge: t('items.grandLounge'),
      infinityHorizon: t('items.infinityHorizon'),
      azureSuite: t('items.azureSuite'),
      secretGardens: t('items.secretGardens'),
      coastalSerenity: t('items.coastalSerenity'),
      jungleOasis: t('items.jungleOasis'),
      emeraldSuite: t('items.emeraldSuite'),
      tropicalDining: t('items.tropicalDining'),
      verdantView: t('items.verdantView'),
      sunsetTerrace: t('items.sunsetTerrace'),
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Full width and bleed into Navbar */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/40 z-10"></div>
          <Image
            src={getAssetPath("/images/villa/019/_THP0932-HDR.webp")}
            alt="Atmosphere & Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 text-center px-4 max-w-4xl">
            <span className="font-label-md text-primary-fixed-dim uppercase tracking-[0.3em] mb-4 block">
              {t('hero.tagline')}
            </span>
            <h1 className="font-display-xl text-5xl md:text-7xl text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="font-body-lg text-white/90 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        <MainGallery items={galleryItems} translations={translations} />

        {/* CTA Section */}
        <section className="bg-primary-container py-24 text-on-primary">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="font-display-xl text-5xl md:text-7xl mb-8">{t('cta.title')}</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Button className="h-auto bg-on-primary text-primary px-12 py-6 font-label-md uppercase tracking-widest hover:bg-opacity-90 transition-all w-full md:w-auto rounded-full text-lg">
                {t('cta.dates')}
              </Button>
              <Button variant="outline" className="h-auto border-white/30 text-white px-12 py-6 font-label-md uppercase tracking-widest hover:bg-white hover:text-primary transition-all w-full md:w-auto rounded-full text-lg">
                {t('cta.brochure')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
