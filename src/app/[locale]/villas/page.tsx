import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';

export default function VillaDetailsPage({params}: {params: Promise<{locale: string}>}) {
  return (
    <VillaDetailsContent params={params} />
  );
}

async function VillaDetailsContent({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('VillaDetails');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 flex-grow">
        {/* Hero Section */}
        <section className="relative h-[716px] mb-12 rounded-3xl overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiOFFZARNCKT2fOP9ILldnUN2mxzvDi5Ghh-k6YsV_S4h1KYnnMoVN0iNp666lEIjDskAAeh9xnGEC_JaJ7ytdWEIyHEHYgbLcAhOo1ew7rbMrCFVtDKHZlmAjSp6S1XzzAxg_15i1J6HaCrFyCA-hW-jnwyHPgaCmeC7q3QbH7hgGr4FJgedYTuUE63S8M5SRc3RTfI400ysvf8_Xz8NINbCXDBHA3ZDCalzcfSI7mZnSg_miyScRxOdVbkEl6QXYX2VH_LNMWitk"
            alt="Villa Sapphire Exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-12">
            <div className="glass-panel max-w-2xl p-8 rounded-2xl border border-white/20">
              <h1 className="font-headline-lg text-4xl md:text-5xl text-slate-800 mb-4">
                {t('hero.title')}
              </h1>
              <div className="flex flex-wrap gap-6 text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">group</span>
                  <span className="font-label-md">{t('hero.guests', {count: 8})}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">bed</span>
                  <span className="font-label-md">{t('hero.bedrooms', {count: 4})}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">bathtub</span>
                  <span className="font-label-md">{t('hero.bathrooms', {count: 5})}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">square_foot</span>
                  <span className="font-label-md">{t('hero.area', {size: 450})}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            {/* Description */}
            <section>
              <h2 className="font-headline-md text-3xl text-slate-800 mb-6">{t('description.title')}</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                {t('description.paragraph1')}
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed mt-4">
                {t('description.paragraph2')}
              </p>
            </section>

            {/* Gallery Bento Grid */}
            <section>
              <h2 className="font-headline-md text-2xl text-slate-800 mb-8">{t('gallery.title')}</h2>
              <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZXqN91H3P3-Vjgalhy31nNmS3sEzCX_AsaIRNrTCA7GyangDApYY9BPr3uFofCcIGQwFmHAUxjp-dnRtyB09DShLVpZNvH1JRvOgRHE-LTCSXijQ3PsWwL5qc6ouqqdvVvIDE9PboZrJprGUJncrWezDQQntLVzSbVVkUsASMsrFUDqjZ1Fmr8IBszHd0ed8dKOzOYvmd2ibMH5pd8LjhgGZ39iXg6o5SvNcLnX6YQNeXhSKErTndONHbb7bIoeNUrg7aP7Cm_Ail"
                    alt="Living Area"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-XigCexmh-DkcfCWL5gC0k6wXFIwUeQlXx4XvKi-iZsH8MEkUY_X9YYYsxmAT_s1N6VG6d1Hobu8DHiRyZXiYhGQcRs3dcaitwpyOgBCA6lPU2HcIpO5Q8pPpDE3tUzvS0Aha3v9rKueOMeCBZFG6rxE95O4CJf4w9J3-qtkYj7jhSjA-jbOG70tBAoxzv1jo65VytGIz7eDqTkXrkrT6BM7e76yCKk9gOkczJZUfToiIBdlNicJeq2AW_KmKZyBfxrnvZu0gTQU3"
                    alt="Bedroom View"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWEiD4AWQnp9a3bJaZ3YEtUVeO66Ia8bO_AChHKS-wAlsZu_tapZuthymVmTJDG_ZDzXdU0E13pNXAe8FiiXEz7PH6F_YHnbUDTa9gi8lSSUglZ9MRCu6eEhLW60-VRPFjSdTNWysup4KsoN47SKzaKYNGhuODc0KoYbVoMUlre8Ph7ZUKYFgNSuh6A_HNT847uiqW8ExYZ9MB_s0XrdAxIhZmLFX1wNodHjoPXF5Tzajgi4ZW6hhC6HKpZ001gbLfLy0pKMSDUeRt"
                    alt="Kitchen"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlTEaW6HbcDCD8lbc7ydfXHMk4-LHuoZBDRAX94DAu4ll0DTFlkZkeoAjmGPdjE9oxxJWUvqLS-17kJvUuvpQ6fzzL7ysMoLJ6d7YAlLPN2AraBcQSfWsb7Y6Pgk0ErVi9CnZqI1PZK4ylL4wpum4gvtoEv4xvAK5nvL28tiMWfFO7s6JdZbFF6bFhs-MCyWSFghUqEprLAHsleenbt_i-SlHY3EzNNTaFKqdxTFP6aZVGZrytHQCoF9v-0bP0Nv6q2riUnRphg3Cq"
                    alt="Bathroom"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </section>

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
                  <span className="text-3xl font-headline-md text-slate-800">{t('booking.price', {price: '1,850'})}</span>
                  <span className="text-slate-500 font-label-md">{t('booking.perNight')}</span>
                </div>
                <div className="flex items-center text-sky-600 gap-1">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="font-bold">4.9</span>
                  <span className="text-slate-400 font-normal">({t('booking.reviews', {count: 12})})</span>
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
                    <span className="text-slate-800 font-medium">4 Adults, 2 Children</span>
                    <span className="material-symbols-outlined text-slate-400">keyboard_arrow_down</span>
                  </div>
                </div>
                <div className="pt-4 space-y-4">
                  <div className="flex justify-between text-slate-600">
                    <span>$1,850 x 7 nights</span>
                    <span>$12,950</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>{t('booking.serviceFee')}</span>
                    <span>$450</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>{t('booking.tax')}</span>
                    <span>$120</span>
                  </div>
                  <hr className="border-outline-variant/30" />
                  <div className="flex justify-between text-slate-800 font-bold text-xl">
                    <span>{t('booking.total')}</span>
                    <span>$13,520</span>
                  </div>
                </div>
                <Button className="w-full bg-primary-container text-on-primary py-8 rounded-xl font-headline-md text-lg hover:shadow-xl transition-all active:scale-[0.98]">
                  {t('booking.confirm')}
                </Button>
              </form>
              <p className="text-center text-slate-400 text-xs mt-6">{t('booking.noPayment')}</p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
