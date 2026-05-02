import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import {Button} from '@/components/ui/button';

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
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3CHIn3E6LFEoXicDEEWMoPS7-MLTMzn-gZwIN_ZeuEuuRzXz-_fEWC2aA2EPBorkdeuKrr71Oy0KHgRGrbHIQOjA_JxD53O2sVJcPoJjxhmduQWQ5bVWQWYz8Qcwpr5U6PUD4QpWYTxi6zPVzN5FnFoqkYdU1d4WgY5TE1gpv1IjxtIovxpBWaDZ2MSsTQNrCbLnt4SqCUqQ4w_jpl-7G3FAZyg5JlLH_F9e7l3asLZAnkuUYwTU6iBaZlpxj63X6Yi7CtTJCYnQ9"
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARfl7ktlXP47Jcb9_zFtvj_L51PWYXOoDmGpiXh3njettTiYLswQyhLK08rNUaffd2AGZJXp6QyKtpRhQSIY7GepIo90bv5g76v6Ei-6zvZ58-qhBKzWnsmM1LB_lMe5Xg0PplL5z-msBZTU8fESd50m3IO_CVhmg_e51vpNjTjW47PofQ2zxuNo0fyOpqOpzzYAgDqFbUu5KzE6iKPSwLhseK2zkzkxRABrupRUCapMp6CwCy-F16kmTlEAvIcxGDSKZns02C6sDl"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoc9BAeWfxlRzCcuNe1J44p06NnkbSWQQmg5V_4GbXOV8f3UnZNB9ZTWmFUihoz35hkzMSuKvoA-c1gwLH4opfqHmO_CeWg4KEk0NYN_9gXC19w74rrbrpSgK5r8bsFK-KoyF5N5AmU-QQDGqoZP6SWbyuH09hMFPm-QWDXdCkS05_6vSgSphFoHb3gTtL4IE_7XNw15frS5WjFojzGZLPkhBCmQKrpzJgo3niyn1q8WPUvQeC8HAloJqg1c-n_7RdVy_DGTHftVx6"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADE0TnVE-nCz1PFHTtTm_rz6DKzUO-PRIM9no_FyRQeD0q9AjHK_53Gwu9DJiouwf4b3OAK7fxiYiWEdMk_PNqZhiQqH5L1Yf72BiyL_RzTTYmfRH6TrWmbQc3jIUlAbMoZyNo3JvbSTIiqe8-n9Y4PvcsTUUhPB8dUB4HrGBS1j9uRwesKisaOkN4PSEIWD8T5XGmv6agrkalW0-XZqquLs8OpmxBPs_FST4kvP3Z22WS96FLbA7McDXS6f-c56v9W7q1s1m_jJNb"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKU34uzapy4U4DWN0Ijwsat0xbesTuu03y_HJW_EDQMQDgp76HHXmeHpN3b_KRfpjqig5qDbb5ztCRl42d6xtHPQxqMljEZJr6TC67c3Yxn581ESjb-PB6JGhMmD7npLZpdouMu3gib6TaBR4BfaktUVcY4h6MuAghmwbC3Ja1VMM1Wt9_Cd_9dj-PTSv736Tm3TtgcdCvMgSenIPodoIacdE6-ScchqFqRNh8dfz2REZTQ42Qi1Czvd_0q6NFueEfWF-WLr3nInAr"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYi9wR218RVesWw1vC-rMKyslCqO4hwVXa0H8kFY9lLZuc2hnoDlWXfYJQCVsqIVOPKXZKkxE0yZzqChDP-6QLjriMKHq2jpFMhb0PhUmREzB3vCRitjOi5TOUQauTB3hbDlprYHW-pWRhfChxNcNJidD9edcM5YIw1BL7WA7RgHZKxdSBpBrK7HE50B39KTezEugm-KjPqp-mDNgysWDiGTXsRaDL5DAcHnx8G-kjlqH9cGgwW-Exelo3fFYWCwqeyyYzUOUalDD"
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
                  <Button variant="outline" className="border-primary text-primary self-start hover:bg-primary hover:text-white transition-colors uppercase rounded-lg">
                    {t('signature.kitchen.cta')}
                  </Button>
                </div>
              </div>

              {/* BBQ Area */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 flex flex-col group rounded-lg overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBugskM1B1OQGuYScPvkjZwoD2IdVeSUq0Rk4Kl5K6IA17w98FIhlYX_wOPqBK_xiVcOVup_3ECk4uOOf6XQ_DtdMgegEJz3nHCwG6jxp_F1aCGPvqtNFmXCCUHuZcUfRyKNMPCQjYc_IAppwlrSFlGCeyD92Hi3QL_Fo9UUrlpG5GiU0nCE62H_HRfECcyuLstCZ2ZyjbO-qFH7ECxdNuWaNxqMIbW1gOGVYuvsSSRvLoDGltNTdiCb6wldEkM-ciJ_a5XCQMH3oC3"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkhLvaYKQ4CWa-UBLGSd09tgoGabDANabClg87r7iS3n99OHVKd3dJJJJlcJC3LsWlw2HZMU7SOrpI7ccMQHZ6Ig2uVyW0_kMYxKcNpQT15XpZExSRAQ63IZky3MuomtfSwzPzsBhIHC_JsCsPHRAfdfeIY4e6usWAizqyrep5V-MlnPBiMew6l_HLKxBoaMpZjJGz6j6FfEWXH-GU3MFLV9qq7QzaPzJhbPmi28lYu5WJSb8iKRNoHu-VbkeZOugzhff3V3avHD_K"
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
              <Button className="bg-primary text-white font-bold text-xs py-4 px-10 self-start uppercase rounded-lg">
                {t('bespoke.experiences.cta')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
