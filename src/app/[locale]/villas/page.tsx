import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/routing';

export default async function VillasListingPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('HomePage.villas');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Consistency with other pages */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/villa/019/main.webp"
              alt="Villa Collection"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <span className="font-label-md text-primary-container uppercase tracking-[0.3em] block mb-4">
              {t('tagline')}
            </span>
            <h1 className="font-display-xl text-5xl md:text-7xl text-white mb-6">
              {t('title')}
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { id: '019', src: '/images/villa/019/main.webp' },
              { id: '057', src: '/images/villa/057/main.webp' }
            ].map((villa) => (
              <div key={villa.id} className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-sky-100/30">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={villa.src}
                    alt={t(`items.${villa.id}.title`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-10">
                  <h3 className="font-headline-lg text-3xl text-primary mb-4">{t(`items.${villa.id}.title`)}</h3>
                  <p className="text-slate-600 font-body-md mb-6 line-clamp-2">{t(`items.${villa.id}.description`)}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
                    <div>
                      <p className="text-slate-500 font-label-md mb-1">{t(`items.${villa.id}.info`)}</p>
                      <p className="text-2xl font-bold text-primary-container">{t('priceFrom', { price: t(`items.${villa.id}.price`) })}</p>
                    </div>
                    <Link href={`/villas/${villa.id}`}>
                      <Button className="h-auto px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest">
                        {t('viewDetails')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
