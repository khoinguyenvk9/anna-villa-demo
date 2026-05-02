'use client';

import {Link, usePathname, useRouter} from '@/i18n/routing';
import {useTranslations, useLocale} from 'next-intl';
import {Button} from '@/components/ui/button';
import {Globe, Menu, X} from 'lucide-react';
import {useState, useEffect} from 'react';
import {cn} from '@/lib/utils';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'vi' : 'en';
    router.replace(pathname, {locale: nextLocale});
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/villas', label: t('villas') },
    { href: '/gallery', label: t('gallery') },
    { href: '/amenities', label: t('amenities') },
    { href: '/location', label: t('location') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500",
      isScrolled 
        ? "bg-white/80 backdrop-blur-xl py-4 shadow-lg border-b border-sky-100/30" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex flex-col">
          <span className={cn(
            "text-2xl font-bold tracking-tighter font-headline-lg italic transition-colors duration-300",
            isScrolled ? "text-sky-600" : "text-white"
          )}>
            Anna Villa
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.4em] font-bold transition-opacity duration-300",
            isScrolled ? "text-sky-400 opacity-100" : "text-white/60 opacity-0 group-hover:opacity-100"
          )}>
            Luxury Retreat
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={cn(
                "relative text-sm font-semibold font-label-md transition-all duration-300 hover:text-sky-500 py-1",
                "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full",
                isScrolled ? "text-slate-600" : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLocale}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 text-xs font-bold",
              isScrolled 
                ? "border-slate-200 text-slate-600 hover:bg-slate-50" 
                : "border-white/20 text-white hover:bg-white/10"
            )}
          >
            <Globe className="w-3.5 h-3.5" />
            {t('switchLocale')}
          </button>
          
          <Link href="/contact">
            <Button className={cn(
              "hidden md:flex h-auto px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300",
              isScrolled 
                ? "bg-primary-container text-white shadow-md hover:shadow-xl hover:-translate-y-0.5" 
                : "bg-white text-primary hover:bg-sky-50 shadow-xl"
            )}>
              {t('bookNow')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full p-12 pt-24 gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-bold font-headline-lg text-slate-800 hover:text-sky-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-slate-100 my-4" />
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full py-6 rounded-2xl text-lg font-bold">
              {t('bookNow')}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
