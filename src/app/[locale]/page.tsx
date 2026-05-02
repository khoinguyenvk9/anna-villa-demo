import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';

export default function HomePage({params}: {params: Promise<{locale: string}>}) {
  // We can't use await params here directly in the function body if we want to call unstable_setRequestLocale early,
  // but next-intl documentation suggests passing locale to it.
  
  return (
    <HomePageContent params={params} />
  );
}

async function HomePageContent({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFhNgr0qXaq6eaerxD9nux_SESEtDCTg4pTi3bpiwsxSyuCaG5c1cwNQGqbNkuvs0YO3J7gtOxtWThK9NvV-1xdjcEfuZYcVBhhCC3sE7fP5MalGUlbtXLXfXCKhIHX8qVTjIxfl2mZwiUBxwtYH1XG32_jNm1m1zyrgFePjXF9IhYh8FnJNs1JhSVZJ-k7D4Js_NW2mieTxWt_riAOU1W1GALtXkBjJyIudAC1X9xwOj21mKmUzRBZXgrrj5UIdx_7LimOS93gkjb"
              alt="Villa Exterior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/80"></div>
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
              <Button className="bg-primary-container text-white px-10 py-6 uppercase tracking-widest hover:shadow-xl transition-all w-full md:w-auto rounded-lg text-lg">
                {t('hero.checkAvailability')}
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-6 uppercase tracking-widest transition-all w-full md:w-auto rounded-lg text-lg">
                {t('hero.exploreEstate')}
              </Button>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="py-24 px-12 md:px-24 bg-surface-container-lowest overflow-hidden">
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfUPRJnHJh49PzkYtygu_FXfLwwHkz3Ke4-hKIdb9c9cqSPF9-RhdmLe8zSohhGInx4HH3Us1CvpH3CbKhH1ce0-lqzvw0najy52YTeoGJqqNgOcaIWwjt920o7wdn9_uAMf9PYy3bRcWFGacYQ4zi8e0jR_ZL2QbFA0TmZS6vKc3OWzc0NPwTwWBfMf1Suco2jC09ZgYDsG_RcYPzRykcEEFv8cMthz2n3VMt3H695s5p0yvkelW538nwmyU9TwQGBK_7qRkjrRSf"
                  alt="Interior View"
                  fill
                  className="object-cover shadow-2xl rounded-xl"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square bg-primary -z-10 hidden md:block rounded-xl"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

