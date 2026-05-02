import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/routing';
import {getAssetPath} from '@/lib/utils';

export default async function HomePageContent({locale}: {locale: string}) {
  setRequestLocale(locale);
  
  const t = await getTranslations('HomePage');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={getAssetPath("/images/banner/487105868_1181169880371349_2751562795418342011_n.jpg")}
              alt="Villa Exterior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/60"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <span className="font-label-md text-primary-container uppercase tracking-[0.3em] block mb-6">
              {t('hero.tagline')}
            </span>
            <h1 className="font-display-xl text-5xl md:text-7xl text-white mb-8">
              {t('hero.title')}
            </h1>
            <p className="font-body-lg text-white/90 mb-10 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full md:w-auto">
                <Button className="h-auto bg-primary-container text-white px-10 py-5 uppercase tracking-widest hover:shadow-xl transition-all w-full rounded-lg text-lg">
                  {t('hero.checkAvailability')}
                </Button>
              </Link>
              <Link href="/villas" className="w-full md:w-auto">
                <Button variant="ghost" className="h-auto border border-white/30 text-white hover:bg-white/10 hover:text-white px-10 py-5 uppercase tracking-widest transition-all w-full rounded-lg text-lg">
                  {t('hero.exploreEstate')}
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="py-24 px-6 md:px-24 bg-surface-container-lowest overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">
                {t('about.tagline')}
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-primary mb-8">
                {t('about.title')}
              </h2>
              <div className="w-16 h-px bg-primary-container mb-8"></div>
              <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
                {t('about.description2')}
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-primary font-body-md">
                  <span className="material-symbols-outlined text-primary-container">square_foot</span>
                  {t('about.amenity1')}
                </li>
                <li className="flex items-center gap-3 text-primary font-body-md">
                  <span className="material-symbols-outlined text-primary-container">bed</span>
                  {t('about.amenity2')}
                </li>
                <li className="flex items-center gap-3 text-primary font-body-md">
                  <span className="material-symbols-outlined text-primary-container">water_drop</span>
                  {t('about.amenity3')}
                </li>
              </ul>
            </div>
            <div className="md:col-span-7 relative order-1 md:order-2">
              <div className="aspect-[4/5] relative z-10">
                <Image
                  src={getAssetPath("/images/villa/019/_THP1093-HDR.webp")}
                  alt="Interior View"
                  fill
                  className="object-cover shadow-2xl rounded-xl"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square bg-primary -z-10 hidden md:block rounded-xl"></div>
            </div>
          </div>
        </section>

        {/* Featured Villa Collection */}
        <section className="py-24 px-6 md:px-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">{t('villas.tagline')}</span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-primary">{t('villas.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                { id: '019', src: '/images/villa/019/main.webp' },
                { id: '057', src: '/images/villa/057/main.webp' }
              ].map((villa) => (
                <div key={villa.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={getAssetPath(villa.src)}
                      alt={t(`villas.items.${villa.id}.title`)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-headline-md text-2xl text-primary mb-2">{t(`villas.items.${villa.id}.title`)}</h3>
                    <p className="text-slate-500 font-label-md mb-4">{t(`villas.items.${villa.id}.info`)}</p>
                    <p className="font-label-md text-primary-container mb-6 font-bold">{t('villas.priceFrom', { price: t(`villas.items.${villa.id}.price`) })}</p>
                    <Link href={`/villas/${villa.id}`}>
                      <Button variant="outline" className="w-full py-6 border-outline text-primary font-label-md uppercase tracking-widest hover:bg-primary-container hover:text-white hover:border-primary-container transition-all rounded-lg">
                        {t('villas.viewDetails')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature Experiences */}
        <section className="py-24 px-6 md:px-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">{t('experiences.tagline')}</span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-primary">{t('experiences.title')}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { id: 'pool', src: '/images/villa/019/main.webp' },
                { id: 'golf', src: '/images/villa/057/_THP0722-HDR.webp' },
                { id: 'chef', src: '/images/villa/057/_THP0636.webp' }
              ].map((exp) => (
                <div key={exp.id} className="group bg-surface-container-lowest border border-outline-variant p-2 transition-all hover:shadow-xl rounded-lg">
                  <div className="aspect-[16/10] relative overflow-hidden mb-6 rounded-lg">
                    <Image
                      src={getAssetPath(exp.src)}
                      alt={t(`experiences.${exp.id}.title`)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="px-6 pb-8">
                    <h3 className="font-headline-md text-2xl text-primary mb-3">{t(`experiences.${exp.id}.title`)}</h3>
                    <p className="font-body-md text-on-surface-variant">{t(`experiences.${exp.id}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 md:px-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[400px]">format_quote</span>
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <span className="font-label-md text-primary-container uppercase tracking-widest mb-12 block">{t('testimonials.tagline')}</span>
            <div className="mb-16">
              <h3 className="font-headline-lg text-3xl md:text-5xl mb-8 italic">"{t('testimonials.quote')}"</h3>
              <div className="flex flex-col items-center">
                <span className="font-headline-md text-2xl text-primary-fixed-dim">{t('testimonials.author')}</span>
                <span className="font-label-md uppercase opacity-60 tracking-widest mt-2">{t('testimonials.location')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="grid md:grid-cols-2 h-auto md:h-[600px]">
          <div className="relative bg-surface-dim flex items-center justify-center min-h-[400px]">
            <Image
              src={getAssetPath("/images/villa/019/_THP0932-HDR.webp")}
              alt="Prime Location Map"
              fill
              className="object-cover grayscale opacity-50"
            />
            <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 border border-white/20 shadow-2xl max-w-xs text-center rounded-lg">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">location_on</span>
              <h4 className="font-headline-md text-2xl text-primary mb-2">Prime Location</h4>
              <p className="font-body-md text-on-surface-variant text-sm">Secluded on the Southern Peninsula, just 20 minutes from the Private Aerodrome.</p>
            </div>
          </div>
          <div className="bg-primary-container flex flex-col justify-center px-6 md:px-24 py-16">
            <h2 className="font-headline-lg text-4xl md:text-6xl text-white mb-6">{t('cta.title')}</h2>
            <p className="font-body-lg text-surface-container-lowest mb-10 text-lg">{t('cta.subtitle')}</p>
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="font-label-md text-primary-fixed-dim uppercase block mb-1">{t('cta.direct')}</span>
                <p className="font-headline-md text-3xl text-white">{t('cta.phone')}</p>
              </div>
              <Button className="h-auto bg-primary text-white font-label-md py-6 uppercase tracking-widest hover:shadow-xl transition-all w-full mt-6 rounded-lg text-lg">
                {t('cta.inquiry')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
