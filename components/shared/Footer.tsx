import {getTranslations} from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('Footer');

  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full">
        <div className="col-span-1 md:col-span-1">
          <span className="text-3xl font-bold text-sky-600 font-headline-lg mb-6 block italic">Anna Villa</span>
          <p className="font-body-md text-slate-500">{t('tagline')}</p>
        </div>
        <div>
          <h4 className="font-headline-md text-lg mb-6 text-slate-800">{t('quickLinks')}</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-sky-500 hover:underline decoration-sky-500/30 underline-offset-4 transition-all" href="#">{t('privacyPolicy')}</a></li>
            <li><a className="text-slate-500 hover:text-sky-500 hover:underline decoration-sky-500/30 underline-offset-4 transition-all" href="#">{t('termsOfService')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline-md text-lg mb-6 text-slate-800">{t('destinations')}</h4>
          <ul className="space-y-4 text-slate-500">
            <li>Amalfi Coast</li>
            <li>Santorini</li>
            <li>Bali</li>
            <li>Costa Rica</li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline-md text-lg mb-6 text-slate-800">{t('followUs')}</h4>
          <div className="flex gap-4">
            {/* Social icons placeholder */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-slate-200 text-center">
        <p className="font-serif text-slate-500 text-sm">© 2024 Anna Villa Luxury Retreats. {t('allRightsReserved')}</p>
      </div>
    </footer>
  );
}
