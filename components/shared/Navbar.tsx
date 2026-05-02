'use client';

import {Link} from '../../i18n/routing';
import {useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';

export default function Navbar() {
  const t = useTranslations('Navigation');

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-5 w-full bg-white/60 backdrop-blur-2xl border-b border-sky-100/20 shadow-[0_20px_50px_rgba(0,74,153,0.05)]">
      <div className="text-2xl font-bold tracking-widest text-sky-600 font-headline-lg italic">
        <Link href="/">Anna Villa</Link>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <Link className="text-slate-600 hover:text-sky-500 transition-colors font-label-md" href="/">
          {t('home')}
        </Link>
        <Link className="text-slate-600 hover:text-sky-500 transition-colors font-label-md" href="/villas">
          {t('villas')}
        </Link>
        <Link className="text-slate-600 hover:text-sky-500 transition-colors font-label-md" href="/gallery">
          {t('gallery')}
        </Link>
        <Link className="text-slate-600 hover:text-sky-500 transition-colors font-label-md" href="/amenities">
          {t('amenities')}
        </Link>
        <Link className="text-slate-600 hover:text-sky-500 transition-colors font-label-md" href="/contact">
          {t('contact')}
        </Link>
        <Link className="text-slate-600 hover:text-sky-500 transition-colors font-label-md" href="/location">
          {t('location')}
        </Link>
      </div>
      <Button className="bg-primary-container text-on-primary px-8 py-3 rounded-lg font-label-md hover:shadow-lg transition-all active:scale-95">
        {t('bookNow')}
      </Button>
    </nav>
  );
}
