import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';
import {notFound} from 'next/navigation';
import {routing, Link} from '@/i18n/routing';
import VillaGallery from '@/components/pages/VillaGallery';
import {getAssetPath} from '@/lib/utils';

const VILLA_DATA = {
  '019': {
    id: '019',
    guests: 8,
    bedrooms: 4,
    bathrooms: 5,
    area: 450,
    price: '1,850',
    gallery: [
      '_THP0874-HDR.webp', '_THP0889-HDR.webp', '_THP0900-HDR.webp', '_THP0931.webp', 
      '_THP0932-HDR.webp', '_THP0957.webp', '_THP1032-HDR.webp', '_THP1037-HDR.webp', 
      '_THP1051.webp', '_THP1053.webp', '_THP1062-HDR.webp', '_THP1082.webp', 
      '_THP1093-HDR.webp', '_THP1143.webp', '_THP1146.webp'
    ]
  },
  '057': {
    id: '057',
    guests: 10,
    bedrooms: 5,
    bathrooms: 6,
    area: 600,
    price: '2,100',
    gallery: [
      '_THP0531-HDR.webp', '_THP0547-HDR.webp', '_THP0636.webp', '_THP0656.webp', 
      '_THP0661.webp', '_THP0689-HDR.webp', '_THP0722-HDR.webp', '_THP0741.webp', 
      '_THP0754-HDR.webp', '_THP0868.webp'
    ]
  }
};

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const id of Object.keys(VILLA_DATA)) {
      params.push({locale, id});
    }
  }
  return params;
}

export default async function VillaDetailsPage({params}: {params: Promise<{locale: string, id: string}>}) {
  const {locale, id} = await params;
  if (!VILLA_DATA[id as keyof typeof VILLA_DATA]) notFound();
  
  return (
    <VillaDetailsContent locale={locale} id={id as keyof typeof VILLA_DATA} />
  );
}

async function VillaDetailsContent({locale, id}: {locale: string, id: keyof typeof VILLA_DATA}) {
  setRequestLocale(locale);
  const data = VILLA_DATA[id];
  const t = await getTranslations('VillaDetails');
  const vt = await getTranslations('HomePage.villas');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Full width and bleed into Navbar */}
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
          <Image
            src={getAssetPath(`/images/villa/${id}/main.webp`)}
            alt={vt(`items.${id}.title`)}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex flex-col justify-end p-6 md:p-12">
            <div className="glass-panel max-w-2xl p-8 rounded-2xl border border-white/20">
              <h1 className="font-headline-lg text-4xl md:text-5xl text-slate-800 mb-4">
                {vt(`items.${id}.title`)}
              </h1>
              <div className="flex flex-wrap gap-6 text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">group</span>
                  <span className="font-label-md">{t('hero.guests', {count: data.guests})}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">bed</span>
                  <span className="font-label-md">{t('hero.bedrooms', {count: data.bedrooms})}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">bathtub</span>
                  <span className="font-label-md">{t('hero.bathrooms', {count: data.bathrooms})}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">square_foot</span>
                  <span className="font-label-md">{t('hero.area', {size: data.area})}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-16">
              {/* Description */}
              <section>
                <h2 className="font-headline-md text-3xl text-slate-800 mb-6">{t('description.title')}</h2>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  {vt(`items.${id}.description`)}
                </p>
              </section>

              {/* Gallery Grid */}
              <VillaGallery 
                id={id} 
                gallery={data.gallery} 
                title={t('gallery.title')} 
                lightboxTitle={vt(`items.${id}.title`)} 
              />

              {/* Amenities */}
              <section>
                <h2 className="font-headline-md text-2xl text-slate-800 mb-8">{t('amenities.title')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    {icon: 'pool', label: 'pool'},
                    {icon: 'restaurant', label: 'kitchen'},
                    {icon: 'concierge', label: 'butler'},
                    {icon: 'wifi', label: 'wifi'},
                    {icon: 'skillet', label: 'chef'},
                    {icon: 'local_parking', label: 'parking'},
                    {icon: 'ac_unit', label: 'ac'},
                    {icon: 'fitness_center', label: 'gym'}
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center p-6 bg-surface-container-low rounded-2xl group hover:bg-primary-container transition-colors duration-300">
                      <span className="material-symbols-outlined text-4xl text-sky-600 mb-4 group-hover:text-white">{item.icon}</span>
                      <span className="font-label-md text-slate-700 group-hover:text-white text-center">{t(`amenities.${item.label}`)}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Booking Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 glass-panel p-8 rounded-3xl border border-sky-100 shadow-[0_40px_100px_rgba(0,74,153,0.08)]">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="text-3xl font-headline-md text-slate-800">{t('booking.price', {price: data.price})}</span>
                    <span className="text-slate-500 font-label-md">{t('booking.perNight')}</span>
                  </div>
                </div>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="block font-label-md text-slate-700">{t('booking.checkInOut')}</label>
                    <div className="flex bg-white rounded-xl border border-outline-variant overflow-hidden">
                      <div className="flex-1 p-4 border-r border-outline-variant">
                        <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">{t('booking.arrive')}</span>
                        <input className="w-full border-none p-0 focus:ring-0 text-slate-800 font-medium" type="text" defaultValue="Oct 12, 2024" />
                      </div>
                      <div className="flex-1 p-4">
                        <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">{t('booking.depart')}</span>
                        <input className="w-full border-none p-0 focus:ring-0 text-slate-800 font-medium" type="text" defaultValue="Oct 19, 2024" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label-md text-slate-700">{t('booking.guests')}</label>
                    <div className="bg-white rounded-xl border border-outline-variant p-4 flex justify-between items-center">
                      <span className="text-slate-800 font-medium">{data.guests} Guests</span>
                      <span className="material-symbols-outlined text-slate-400">keyboard_arrow_down</span>
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button className="h-auto w-full bg-primary-container text-on-primary py-8 rounded-xl font-headline-md text-lg hover:shadow-xl transition-all active:scale-[0.98]">
                      {t('booking.confirm')}
                    </Button>
                  </Link>
                </form>
                <p className="text-center text-slate-400 text-xs mt-6">{t('booking.noPayment')}</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Similar Villas Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mt-32 mb-16">
          <h2 className="font-headline-md text-4xl text-slate-800 mb-12">{t('similar.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
            {Object.keys(VILLA_DATA)
              .filter((villaId) => villaId !== id)
              .map((villaId) => (
                <div key={villaId} className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-sky-100/30">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={getAssetPath(`/images/villa/${villaId}/main.webp`)}
                      alt={vt(`items.${villaId}.title`)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-10">
                    <h3 className="font-headline-lg text-3xl text-primary mb-2">{vt(`items.${villaId}.title`)}</h3>
                    <p className="text-slate-500 font-label-md mb-6">{vt(`items.${villaId}.info`)}</p>
                    <Link href={`/villas/${villaId}`}>
                      <Button variant="outline" className="w-full py-6 border-outline text-primary font-label-md uppercase tracking-widest hover:bg-primary-container hover:text-white hover:border-primary-container transition-all rounded-lg">
                        {vt('viewDetails')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
