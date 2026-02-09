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
    <header className="sticky top-0 z-50 bg-royal-dark/98 backdrop-blur border-b border-royal-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="ButyParlar Home">
          <BrandLogo />
          <span className="font-display text-xl font-semibold text-gold-gradient">ButyParlar</span>
        </Link>

        <NavigationMenu.Root className="hidden md:flex items-center gap-1">
          <NavigationMenu.List className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                    location.pathname === item.path
                      ? 'bg-gold-gradient text-white'
                      : 'text-gray-300 hover:text-gold-300'
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
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-gold-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-royal-border bg-royal-darker px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-4 py-3 rounded-md text-sm font-medium',
                location.pathname === item.path ? 'bg-gold-gradient text-white' : 'text-gray-300 hover:text-gold-300'
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
