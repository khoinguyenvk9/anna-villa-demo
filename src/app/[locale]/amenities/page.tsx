import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/routing';
import {getAssetPath} from '@/lib/utils';

export default function AmenitiesPage({params}: {params: Promise<{locale: string}>}) {
  return (
    <AmenitiesContent params={params} />
  );
}

async function AmenitiesContent({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Amenities');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Full width and bleed into Navbar */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={getAssetPath("/images/villa/019/_THP0931.webp")}
              alt="Curated Amenities"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-inverse-surface/40"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <span className="font-semibold text-sm text-primary-fixed mb-4 block uppercase tracking-[0.3em]">{t('hero.tagline')}</span>
            <h1 className="text-display-xl font-bold text-white mb-6 md:text-7xl">{t('hero.title')}</h1>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
          </div>
        </section>

        {/* Intro Content */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h2 className="text-4xl text-primary mb-6">{t('intro.title')}</h2>
            <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              {t('intro.description')}
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-2xl">concierge</span>
                <span className="font-bold text-xs uppercase tracking-widest">{t('intro.concierge')}</span>
              </div>
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-2xl">cleaning_services</span>
                <span className="font-bold text-xs uppercase tracking-widest">{t('intro.housekeeping')}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 relative h-[500px]">
            <Image
              src={getAssetPath("/images/villa/019/_THP1082.webp")}
              alt="Outdoor Lounge"
              fill
              className="object-cover shadow-2xl rounded-lg"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary-container p-10 text-white hidden lg:block max-w-xs border border-white/10 rounded-lg">
              <p className="font-serif italic text-xl mb-4 text-on-primary">"{t('intro.testimonial')}"</p>
              <cite className="font-bold text-xs uppercase text-primary-fixed">— {t('intro.author')}</cite>
            </div>
          </div>
        </section>

        {/* Main Amenities Grid */}
        <section className="bg-surface-container-low py-24">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl text-primary mb-4">{t('signature.title')}</h2>
              <div className="h-1 w-24 bg-primary-container mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Private Pool */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 flex flex-col group rounded-lg overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={getAssetPath("/images/villa/019/main.webp")}
                    alt="Private Pool"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl text-primary">{t('signature.pool.title')}</h3>
                    <span className="material-symbols-outlined text-primary">pool</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant mb-6">{t('signature.pool.description')}</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.pool.feature1')}</li>
                    <li className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.pool.feature2')}</li>
                    <li className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.pool.feature3')}</li>
                  </ul>
                </div>
              </div>

              {/* Golf Course Access */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 flex flex-col group rounded-lg overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={getAssetPath("/images/villa/057/_THP0722-HDR.webp")}
                    alt="Golf Access"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl text-primary">{t('signature.golf.title')}</h3>
                    <span className="material-symbols-outlined text-primary">golf_course</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant mb-6">{t('signature.golf.description')}</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.golf.feature1')}</li>
                    <li className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.golf.feature2')}</li>
                    <li className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.golf.feature3')}</li>
                  </ul>
                </div>
              </div>

              {/* Beach Access */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 flex flex-col group rounded-lg overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={getAssetPath("/images/villa/019/_THP0889-HDR.webp")}
                    alt="Beach Access"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl text-primary">{t('signature.beach.title')}</h3>
                    <span className="material-symbols-outlined text-primary">beach_access</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant mb-6">{t('signature.beach.description')}</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.beach.feature1')}</li>
                    <li className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.beach.feature2')}</li>
                    <li className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.beach.feature3')}</li>
                  </ul>
                </div>
              </div>

              {/* Fully Equipped Kitchen */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 flex flex-col group lg:col-span-2 md:flex-row rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden">
                  <Image
                    src={getAssetPath("/images/villa/057/_THP0636.webp")}
                    alt="Gourmet Kitchen"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-12 md:w-1/2 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl text-primary">{t('signature.kitchen.title')}</h3>
                    <span className="material-symbols-outlined text-primary">restaurant</span>
                  </div>
                  <p className="text-body-lg text-on-surface-variant mb-8">{t('signature.kitchen.description')}</p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.kitchen.feature1')}</div>
                    <div className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.kitchen.feature2')}</div>
                    <div className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.kitchen.feature3')}</div>
                    <div className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">check</span> {t('signature.kitchen.feature4')}</div>
                  </div>
                  <Link href="/contact">
                    <Button variant="outline" className="border-primary text-primary self-start hover:bg-primary hover:text-white transition-colors uppercase rounded-lg">
                      {t('signature.kitchen.cta')}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* BBQ Area */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 flex flex-col group rounded-lg overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={getAssetPath("/images/villa/057/_THP0868.webp")}
                    alt="BBQ Lounge"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl text-primary">{t('signature.bbq.title')}</h3>
                    <span className="material-symbols-outlined text-primary">outdoor_grill</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant mb-6">{t('signature.bbq.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bespoke Services Bento */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-4xl text-primary text-center mb-16">{t('bespoke.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 bg-primary-container p-12 text-on-primary flex flex-col justify-end relative overflow-hidden group rounded-lg min-h-[400px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <Image
                  src={getAssetPath("/images/villa/019/_THP1053.webp")}
                  alt="Spa Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <span className="font-bold text-xs text-primary-fixed mb-4 block uppercase tracking-widest">{t('bespoke.spa.tagline')}</span>
                <h3 className="text-3xl mb-4">{t('bespoke.spa.title')}</h3>
                <p className="text-body-md opacity-90 mb-8 max-w-sm">{t('bespoke.spa.description')}</p>
                <button className="text-primary-fixed font-bold text-xs uppercase border-b border-primary-fixed pb-1">{t('bespoke.spa.cta')}</button>
              </div>
            </div>
            <div className="bg-surface-container p-8 flex flex-col justify-center items-center text-center rounded-lg">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">directions_car</span>
              <h3 className="font-bold text-xs text-primary mb-2 uppercase tracking-widest">{t('bespoke.transport.title')}</h3>
              <p className="text-xs text-on-surface-variant">{t('bespoke.transport.description')}</p>
            </div>
            <div className="bg-surface-container p-8 flex flex-col justify-center items-center text-center rounded-lg">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">child_care</span>
              <h3 className="font-bold text-xs text-primary mb-2 uppercase tracking-widest">{t('bespoke.nanny.title')}</h3>
              <p className="text-xs text-on-surface-variant">{t('bespoke.nanny.description')}</p>
            </div>
            <div className="md:col-span-2 bg-primary-fixed p-12 flex flex-col justify-between rounded-lg min-h-[250px]">
              <div>
                <h3 className="text-3xl text-on-primary-fixed mb-4">{t('bespoke.experiences.title')}</h3>
                <p className="text-on-primary-fixed-variant max-w-md">{t('bespoke.experiences.description')}</p>
              </div>
              <Link href="/contact">
                <Button className="bg-primary text-white font-bold text-xs py-4 px-10 self-start uppercase rounded-lg">
                  {t('bespoke.experiences.cta')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-container py-24 px-6 md:px-12 text-center text-white">
          <h2 className="font-display-xl text-5xl md:text-7xl mb-8">Ready for Your Unforgettable Stay?</h2>
          <p className="text-body-lg text-white/90 max-w-2xl mx-auto mb-12">Experience the pinnacle of coastal luxury at Anna Villa. Our team is ready to curate every detail of your visit.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button className="h-auto bg-on-primary text-primary font-bold text-xs py-5 px-12 uppercase rounded-lg hover:bg-primary-fixed transition-colors">Reserve Your Dates</Button>
            </Link>
            <Button variant="ghost" className="h-auto border border-white/40 text-white font-bold text-xs py-5 px-12 uppercase rounded-lg hover:bg-white/10 transition-colors">Download Villa Guide</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
