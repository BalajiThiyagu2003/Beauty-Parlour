import { Link, useLocation } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { cn } from '../../lib/utils';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/appointment', label: 'Book Appointment' },
  { path: '/feedback', label: 'Feedback' },
  { path: '/contact', label: 'Contact' },
];

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-pearl-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="ButyParlar Home">
          <BrandLogo />
          <span className="font-display text-2xl font-bold text-black uppercase tracking-tighter">Beauty & Parlour</span>
        </Link>

        <NavigationMenu.Root className="hidden md:flex items-center gap-2">
          <NavigationMenu.List className="flex items-center gap-2">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    'px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300',
                    location.pathname === item.path
                      ? 'bg-accent text-white shadow-lg shadow-accent/20'
                      : 'text-black hover:bg-pearl-100 hover:text-accent'
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <button
          type="button"
          className="md:hidden p-3 rounded-full text-black hover:bg-pearl-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-pearl-100 bg-white px-4 py-6 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-6 py-4 rounded-2xl text-base font-bold uppercase tracking-wide transition-all',
                location.pathname === item.path 
                  ? 'bg-accent text-white shadow-md' 
                  : 'text-black hover:bg-pearl-50'
              )}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
