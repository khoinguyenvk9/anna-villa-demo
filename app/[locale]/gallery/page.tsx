import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';

export default function GalleryPage({params}: {params: Promise<{locale: string}>}) {
  return (
    <GalleryContent params={params} />
  );
}

async function GalleryContent({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Gallery');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/40 z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf1zgNv_gRxeS1fnfgtsBunUEyg7Tqx2gJ_SsWedowb7-px5Ycs5AdjH65D5HEl5530gFANmxVpvNCmsJbh_MrsoD5nP41OkeEbqRG0W7NwH1X9skFwDGK30Dv6QvO2NWISCxrNfLg26blDcXIZ0yOt8lR4jiM-d-15D89NkxqxWPmZl0lgWxbMWUXpEusCcf3abzY08g_ytGZZz5938MW4nvxQxyHHQ_fn1CO6KXZGilWG7pIzmrchIa0NHmv0BGcSZ-eAukip2mA"
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

        {/* Category Navigation */}
        <section className="py-12 bg-surface-container-lowest sticky top-[72px] z-40 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center flex-wrap gap-8">
            <button className="font-label-md text-primary border-b-2 border-primary pb-2 px-4 transition-all">
              {t('filters.all')}
            </button>
            <button className="font-label-md text-on-surface-variant hover:text-primary pb-2 px-4 transition-all">
              {t('filters.interior')}
            </button>
            <button className="font-label-md text-on-surface-variant hover:text-primary pb-2 px-4 transition-all">
              {t('filters.exterior')}
            </button>
            <button className="font-label-md text-on-surface-variant hover:text-primary pb-2 px-4 transition-all">
              {t('filters.area')}
            </button>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              {
                id: 'grandLounge',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo8poetfZUkCkPUTvl2Pn6xXO4nP5uqdWVrTGH-lYvRwu9Y73AQRQTkNFeHnvyCOhlvu49rTDeslpHKeCiuUZ28vO47Ae1WhDztu8Zt6fV2hBO8F-aPrxtGii3aKYCFoKq9RQz5CcaLZBH-5dK37E1PoGuFpb7fiHu_BL3675uxuE5DJk_7sSHsxL4McP9qpGByg2YJnAWhVtRqwIFnZKIHz3mSVWTt8cL-f7QvDP3nTwaivXNxZIN7Vepw-NnpmM7OFQ0rIMsxBKw',
                category: 'filters.interior'
              },
              {
                id: 'infinityHorizon',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX_H5KH7IPk9fx_zpJnFFaO53rFr_CERp1EL8-FnMoMPJihe8Brwvd44Jwuqn-ygge08DPfoSauGeMU_KcO1LNXHKG_lwdXaasaZDLT6qG2S5z5VH4WpH-rF5UirOGIgaWYRwsRh4qKwu5omApSvBYQ7dSaxuDt_aikhNvJn4fuKqyEFBCbqmdXvql7FnQwh2VScD42Kod4Se9stZtPen9FzMSFYe7xKylhdckwKgXjLty03M2nbRI4qW0Ow2JahFhg2onNa-_Shre',
                category: 'filters.exterior'
              },
              {
                id: 'azureSuite',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe9rAlZV6uUaRaN8yk833cBZMoG9OaD5E8JF_44GMUHtdQfeQIJpcUVUFToSOaxI6YkZXPUIhr9zJgZisuS5GhXRFkPRIR452KUhXeAvXJ0HDXrlIhr9SZECCNn6ki-HHp0P_Iaj8Km76k_yNeu0kzb0JM9EaP2_L8iy7gxsvu7PwazRA2cO2-cX0DPbR_gV1E89O3nsrJzWLzznzyHVZKwg_UbTloTm3HcYXuwbglL-RjUwbt2VnhRx4qveso6lKFMycXBKheLS3n',
                category: 'filters.interior'
              },
              {
                id: 'secretGardens',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgEQtytvtpYlnmilNHIqHfCE7jhV-zWmgiSgF80ncBl_O6740MBhN6GVy9BiukWSKQduIddIzp8pvLag4XMxqywK1o9ZVevAmvImlS-UqgfoQUXhHTb0WEhLazJRqS7bTMtw2Y5mX1P0zO_r4kMp2HvkI9qcp1Ptt4aCjMPqTWL8TXwIb9ZTccTcx2jwUY93Iz5f1ChwXZFzeS6hKk2ZIv3i6ZclCCewkTnLLSGdHGlRJfINn6dKzVt-cPt8Ct-3M_wFOJWnZgufZ4',
                category: 'filters.exterior'
              },
              {
                id: 'coastalSerenity',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ4lJNhUdPnEOXDFB5-_XD5MBvfPnLo66Yj8ljCFkVYkhhonSV5V-oZI4yuz71ilGqMN3L76s82sEq7ARyGc4gikha-wonC0XKTrPqXJ5mCdUEPoUFaMB1A9qKD4lLoguYZ9jEszzsYgXt05AqEjILF3qsehYFkQeWSFt-X_XjszyflHS50xiKCIoQig7FEW4kxlhA7ziqvmxwJE3AY3xTF2qu3uszYzzbkBNBgvw9lNKC-cyxRmeUoJWkUAdpnqUW6Ycj7S3KSCO9',
                category: 'filters.area'
              },
              {
                id: 'gourmetSpace',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYdnk7voI5TixyLR9PiG0RkrKtfQC6zH6-ZO_lvmAcDvn5XPu4VCf73QSqpZm31lkrFXn1nj38Z-2dUu9nYyvM_Y39Dw3-OspN6HfiLAIDES3g0QqMWHZXGM4gtYr6L4kvgvmmNza7ou9rNfncfe64I4bddQxfxgKsHvysQ_LsIglj0mA4shl42z4r2JUJYrBzqCWDI0_cwMznvO_clP3QjuITjybOFlPqk4IcYyv7idwk9JwVSH0dvGvVYYAgjYtpyjO5nuVBipXV',
                category: 'filters.interior'
              }
            ].map((item) => (
              <div key={item.id} className="relative group overflow-hidden bg-surface-container border border-outline-variant/20 cursor-pointer rounded-xl break-inside-avoid">
                <Image
                  src={item.src}
                  alt={t(`items.${item.id}`)}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="font-label-md text-[10px] text-primary-fixed uppercase tracking-widest mb-2">
                    {t(item.category)}
                  </span>
                  <h3 className="font-headline-md text-white text-2xl">{t(`items.${item.id}`)}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-container py-24 text-on-primary">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="font-display-xl text-5xl md:text-7xl mb-8">{t('cta.title')}</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Button className="bg-on-primary text-primary px-12 py-6 font-label-md uppercase tracking-widest hover:bg-opacity-90 transition-all w-full md:w-auto rounded-full text-lg">
                {t('cta.dates')}
              </Button>
              <Button variant="outline" className="border-white/30 text-white px-12 py-6 font-label-md uppercase tracking-widest hover:bg-white hover:text-primary transition-all w-full md:w-auto rounded-full text-lg">
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
