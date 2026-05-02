import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import {Mail, MapPin, Phone, Share2, Globe, Heart, MessageSquare} from 'lucide-react';

export default async function Footer() {
  const t = await getTranslations('Footer');
  const navT = await getTranslations('Navigation');

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex flex-col">
              <span className="text-4xl font-bold tracking-tighter font-headline-lg italic text-sky-400">
                Anna Villa
              </span>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-slate-500">
                Luxury Retreats
              </span>
            </Link>
            <p className="text-slate-400 font-body-md leading-relaxed max-w-sm">
              {t('tagline')}
            </p>
            <div className="flex gap-5">
              {[
                { Icon: Globe, href: '#' },
                { Icon: Share2, href: '#' },
                { Icon: Heart, href: '#' },
                { Icon: MessageSquare, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all duration-300 group"
                >
                  <social.Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm uppercase tracking-widest font-bold text-sky-500">{t('quickLinks')}</h4>
            <ul className="space-y-4">
              {[
                { label: navT('home'), href: '/' },
                { label: navT('villas'), href: '/villas' },
                { label: navT('gallery'), href: '/gallery' },
                { label: navT('amenities'), href: '/amenities' },
                { label: navT('location'), href: '/location' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-sky-500 transition-all duration-300 group-hover:w-3"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm uppercase tracking-widest font-bold text-sky-500">{t('destinations')}</h4>
            <ul className="space-y-4 text-slate-400">
              {['Amalfi Coast', 'Santorini', 'Bali', 'NovaWorld Phan Thiet'].map((dest) => (
                <li key={dest} className="hover:text-white transition-colors cursor-default">{dest}</li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-sm uppercase tracking-widest font-bold text-sky-500">{t('connect')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-slate-400">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-sm">742 Ocean Drive, Sapphire Bay, SC 90210</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-sm">+1 (555) 890-2400</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-sm">stay@annavilla.com</span>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{t('newsletter')}</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-sky-500/50 transition-colors"
                />
                <button className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors whitespace-nowrap">
                  {t('subscribe')}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © 2026 Anna Villa Luxury Retreats. {t('allRightsReserved')}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{t('privacyPolicy')}</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{t('termsOfService')}</a>
          </div>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </footer>
  );
}
