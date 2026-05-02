import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';

export default function LocationPage({params}: {params: Promise<{locale: string}>}) {
  return (
    <LocationContent params={params} />
  );
}

async function LocationContent({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Location');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[716px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW3QeK05haiqwPClxEUuYfxiBxOqRBMsZMeLR15TO7BjZGIm3K05DdXbISxJFt4ynwz_bkSAwPnTuFcF_KHPNCgKhqHtgmSAMK6oQKG12Kaa04HiBcxAetPzO_6rZYolPg-2T0QMSN5BgX-2NYcNGI8z_LBrKFhWFPHZmYY6at7XhbCIk_mzosbq345Ciobz-S4ymgEvF4WbnKRKUa-UIQtL8fecJcQ1bNSRus-9VJOmZuNwozAkinocZ9KuaN542v5uSEcrDm0pnV"
            alt="Aerial Resort View"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-display-xl font-bold text-5xl md:text-7xl mb-6">{t('hero.title')}</h1>
            <p className="font-body-lg text-white opacity-90 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
          </div>
        </section>

        {/* Map & Directions Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Interactive Map Mockup */}
            <div className="lg:col-span-8 h-[600px] bg-surface-container-low relative overflow-hidden border border-outline-variant group rounded-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv-I5F2ySmpWUzD6vI8bFgQr_Gk3BlpVALZVGfXbibRpReDLMAo5knScc3MIFpo9pBVgHemGOzLITZRsqRk09rEWUmgsnc-QngViiwpUNOg68-HBvoPNxDxSyqRi5jEEBxV7T0TqyAuYV0o_rCTKPOySnior6cftfDc4llrDnrs3hVxLPOP6SPXKbk0vn1IAm3U24UgJFN4nNXNQGFWr2MZNF_5JwnVON6Pv_6wVP9tspvCqBZeqOOLI0CMFT7MjTwHUGNb5R8SRjc"
                alt="Map View"
                fill
                className="object-cover filter grayscale transition-transform duration-700 group-hover:scale-105"
              />
              {/* Custom Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-primary text-white p-3 rounded-full shadow-lg border-2 border-white mb-2">
                  <span className="material-symbols-outlined">villa</span>
                </div>
                <div className="bg-primary text-white px-4 py-1.5 font-label-md text-[10px] tracking-widest uppercase rounded-full">Anna Villa</div>
              </div>
            </div>

            {/* Directions & Location Info */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-12">
              <div>
                <h2 className="text-3xl text-primary mb-4">{t('destination.title')}</h2>
                <p className="text-on-surface-variant leading-relaxed">{t('destination.address')}</p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary-container text-white flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined">flight</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-primary uppercase mb-1">{t('destination.fromAirport')}</h4>
                    <p className="text-on-surface-variant text-sm">{t('destination.airportDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary-container text-white flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined">directions_car</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-primary uppercase mb-1">{t('destination.byLand')}</h4>
                    <p className="text-on-surface-variant text-sm">{t('destination.landDesc')}</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="h-auto w-full py-8 border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest transition-all rounded-lg">
                {t('destination.cta')}
              </Button>
            </div>
          </div>
        </section>

        {/* Area Highlights (Bento Grid) */}
        <section className="bg-primary-container py-24 text-white">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">{t('highlights.title')}</h2>
              <p className="text-white/80 max-w-2xl mx-auto">{t('highlights.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
              {/* Water Park */}
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden border border-white/5 group rounded-xl min-h-[300px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQU_iJ9YYYWc7P7-3tjuYsacgLsptzqgUwT27BFsDuY3piKy2hkfuEt0LspFjnGdc-aPt8R8UVAobwL4k-Ll8oNdPgSGH4Vsjc61R6U7xkDXl9vU2i1jnUj3mtW3Vz1n6g-AtAKVaONjgs0cXUpr-S7mfAxxnIW1SMOd_1fElyRJEvI3ninZzL83yoHQI2f1FHjxKaa7ubM6njeT9XS8E4qKjnhoB-Sj9Dt6XD8-bh_QE7MBuP21-bzopwVxhPRMQBU6mejrF3Elc"
                  alt="Water Park"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl mb-2">{t('highlights.waterPark.title')}</h3>
                  <p className="text-white/80 max-w-sm text-sm">{t('highlights.waterPark.description')}</p>
                </div>
              </div>
              {/* Theme Park */}
              <div className="md:col-span-2 md:row-span-1 relative overflow-hidden border border-white/5 group rounded-xl min-h-[250px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbyDkwQi_iNpJbZ0L-M2STQJAuho1vyvV3M8m79Ara-Zm36HC_-2W-vgcEsWdL6szAgcBnMmETfla9Ac2DeyBJevfIJib1Oeqx3DbeRoqTMi-S0BvrBz8RAtSAy5Xs4hka39gXiKtTdRt-Icou-VO5rD7uzI_PsiCdOxv9tEjtZT-BTjCVCezk7pvZ4TBYAKk1c7_3tuvkV5WxmBhd5BG0QXHgk8KX4ofjZ465HjnUTcZG3rI_bYm1SD8rryhRGWVJLPm_7M8_eOVg"
                  alt="Theme Park"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl mb-1">{t('highlights.themePark.title')}</h3>
                  <p className="text-white/80 text-sm">{t('highlights.themePark.description')}</p>
                </div>
              </div>
              {/* PGA Golf */}
              <div className="md:col-span-1 md:row-span-1 relative overflow-hidden border border-white/5 group rounded-xl min-h-[200px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn7Z4yzPMA1nE0ZYz5TjlV557VO52OMvCEYdRimD-iYBbSgAxkqxcEF9Q0fmDWkJzgWMMS6o8ZySS8RSG8VizYxVHHA2vIa6oChUSss5o2vDi_NEh1t3eiI4Unq3omd46_R7GzNAYhGJ4iYHLDScJ8e02SG570hZRFSn4MJwa51-DiT_eQPQtFDK5EI3JPP7bOVfU_RulNmbeDCKhiuHVGu392RNKXb4yUhaA4tEyuDGm0hjnRgum6_NtQMxZYsUSjjZgh-DdfpUAi"
                  alt="Golf Course"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-label-md text-white tracking-[0.2em] uppercase bg-primary/80 px-4 py-2 rounded text-xs">{t('highlights.golf')}</h3>
                </div>
              </div>
              {/* Bikini Beach */}
              <div className="md:col-span-1 md:row-span-1 relative overflow-hidden border border-white/5 group rounded-xl min-h-[200px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBifRkkbUd3ioZRy3GDzvHvJiZz-vWW8rv9LhST0RphI8DfJpG-2-omXS8xk2oGY39g1RNWnpEX-u7MjOy1rz-LTLYFs0tr4gVVlo8Nl9tlaHS_wjX3-4HiGLrzF59tDZwJ8lZKXLYbni9hPl_TvC9Jl-7KwBjVdpxpme1WBzzTwKnJv_n3qhm4QL31lNfS1olm6TAwcpFXz5snhqWtR2SEUPuhoeQizwSqLg9gPXE9D_HPNqeKP9Kch-eB39gv2B-mmQoytNE_OsJV"
                  alt="Bikini Beach"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-label-md text-white tracking-[0.2em] uppercase bg-primary/80 px-4 py-2 rounded text-xs">{t('highlights.beach')}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concierge Assistance */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-surface-container-low border border-outline-variant p-12 text-center shadow-sm rounded-xl">
            <span className="material-symbols-outlined text-secondary text-5xl mb-6">explore</span>
            <h2 className="text-3xl text-primary mb-4">{t('concierge.title')}</h2>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">{t('concierge.description')}</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Button className="bg-primary text-white px-10 py-6 uppercase tracking-widest hover:opacity-90 transition-opacity rounded-lg">
                {t('concierge.contact')}
              </Button>
              <Button variant="outline" className="border-primary text-primary px-10 py-6 uppercase tracking-widest hover:bg-surface-container transition-colors rounded-lg">
                {t('concierge.map')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
