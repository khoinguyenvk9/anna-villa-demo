import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';

export default function ContactPage({params}: {params: Promise<{locale: string}>}) {
  return (
    <ContactContent params={params} />
  );
}

async function ContactContent({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Contact');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxnhIDkuEaVU_-nKnt5OdLHGqOFHz11qZ7_7AU9J5QoLQ9n1Pffw84DjJFT9I77cRO5zZ1w3lOxLxxzKo85E49sIC75vc7IUyNfmBn9m6vZL2Xnau8Ch6TIbv7ozii62Z5miZ1xCJ5E6mHk-u58L_-s8GbxG2Ytx9-aXplITkRBUC7Dc_MURNokeP94SPUxYQ0KtE6NRo_xakML9cI6xF2V6Zfs57MByDH54-JncbPHcSrEj1CCGb8CDlFQwxkljZBJCEpDFCVQWu2"
              alt="Coastal Cliff View"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/60"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-display-xl text-5xl md:text-7xl text-white mb-4">{t('hero.tagline')}</h1>
            <p className="font-body-lg text-white/90 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
          </div>
        </section>

        {/* Booking & Contact Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Details & Rates */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <span className="font-label-md text-primary uppercase tracking-widest block mb-4">{t('concierge.tagline')}</span>
                <h2 className="font-headline-lg text-4xl text-on-surface mb-8">{t('concierge.title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <div>
                      <p className="font-label-md text-primary uppercase mb-1">{t('concierge.address')}</p>
                      <p className="text-on-surface-variant">742 Ocean Drive, Sapphire Bay, SC 90210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <div>
                      <p className="font-label-md text-primary uppercase mb-1">{t('concierge.reservations')}</p>
                      <p className="text-on-surface-variant">stay@annavilla.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">call</span>
                    <div>
                      <p className="font-label-md text-primary uppercase mb-1">{t('concierge.directLine')}</p>
                      <p className="text-on-surface-variant">+1 (555) 890-2400</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low p-8 border border-outline-variant rounded-xl">
                <h3 className="font-headline-md text-2xl text-primary mb-6">{t('rates.title')}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-outline-variant pb-3">
                    <span className="text-on-surface">{t('rates.summer')}</span>
                    <span className="font-bold text-primary">$2,450 / night</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant pb-3">
                    <span className="text-on-surface">{t('rates.springAutumn')}</span>
                    <span className="font-bold text-primary">$1,850 / night</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant pb-3">
                    <span className="text-on-surface">{t('rates.winter')}</span>
                    <span className="font-bold text-primary">$1,200 / night</span>
                  </div>
                  <p className="text-xs italic text-on-surface-variant pt-4">{t('rates.disclaimer')}</p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-12 shadow-xl border border-outline-variant rounded-xl">
              <h3 className="font-headline-md text-3xl text-primary mb-8">{t('form.title')}</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-primary uppercase">{t('form.fullName')}</label>
                    <input className="bg-surface border-b border-outline py-3 px-4 focus:ring-0 focus:border-primary outline-none text-body-md transition-all rounded-lg" placeholder={t('form.placeholderName')} type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-primary uppercase">{t('form.email')}</label>
                    <input className="bg-surface border-b border-outline py-3 px-4 focus:ring-0 focus:border-primary outline-none text-body-md transition-all rounded-lg" placeholder={t('form.placeholderEmail')} type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-primary uppercase">{t('form.checkIn')}</label>
                    <input className="bg-surface border-b border-outline py-3 px-4 focus:ring-0 focus:border-primary outline-none text-body-md transition-all rounded-lg" type="date" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-primary uppercase">{t('form.checkOut')}</label>
                    <input className="bg-surface border-b border-outline py-3 px-4 focus:ring-0 focus:border-primary outline-none text-body-md transition-all rounded-lg" type="date" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-primary uppercase">{t('form.numGuests')}</label>
                  <select className="bg-surface border-b border-outline py-3 px-4 focus:ring-0 focus:border-primary outline-none text-body-md transition-all appearance-none rounded-lg">
                    <option>1-2 Guests</option>
                    <option>3-4 Guests</option>
                    <option>5-8 Guests (Full Villa)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-primary uppercase">{t('form.requests')}</label>
                  <textarea className="bg-surface border-b border-outline py-3 px-4 focus:ring-0 focus:border-primary outline-none text-body-md transition-all resize-none rounded-lg" placeholder={t('form.placeholderRequests')} rows={4}></textarea>
                </div>
                <Button className="w-full bg-primary text-white font-label-md py-6 uppercase tracking-widest rounded-lg hover:bg-surface-tint transition-all active:opacity-70">
                  {t('form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[500px] relative">
          <div className="absolute inset-0 bg-surface-container-highest flex items-center justify-center">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIOb_xJGDLiXmzoPGoyTbL-pvRJ-QhAOhf_28fqp7axlk2JhpDhNjI00_7RFtdrtlzpz_DFfx3M7bm_n4vrz2OZkV_3nDx_aKw9fXoBUx-la2aeDTDuOcm9l45nm6VroF9NYCIw9WMBeMSMo1WFBMJhg4nxA5IQGtJcJgd1nzfiVx9XZhOTieVoIjvVlHbH4l08ZMcrc2QleGBD1c_qWmD0yBmike9ibwBKAGSu1viEht_FrD3-3uxUPXddZNB7QFAIbDZVeA87el-"
              alt="Artistic Map"
              fill
              className="object-cover grayscale opacity-50 contrast-125"
            />
            <div className="absolute z-10 bg-primary-container text-white p-8 border border-white/20 max-w-sm rounded-xl">
              <h4 className="font-headline-md text-2xl text-white mb-2">Our Location</h4>
              <p className="text-sm text-white/80 leading-relaxed">Nestled in the exclusive enclave of Sapphire Bay, Anna Villa offers unparalleled privacy while remaining just 20 minutes from the vibrant city center.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
