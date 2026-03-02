import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { BrandLogo } from '../ui/BrandLogo';
import { PHONE_DISPLAY, TEL_HREF } from '../../lib/contact';

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/appointment', label: 'Book Appointment' },
  { path: '/feedback', label: 'Feedback' },
  { path: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-pearl-50 border-t border-pearl-200 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <BrandLogo />
              <span className="font-display text-2xl font-bold text-black uppercase tracking-tighter">ButyParlar</span>
            </Link>
            <p className="text-black/70 max-w-xs leading-relaxed">
              Your trusted beauty and parlour destination. We specialize in bringing out the royal elegance in every client.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-black uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-4">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-black/80 hover:text-accent font-medium transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-black uppercase tracking-wider mb-6">Contact info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                </div>
                <span className="text-black/80 font-medium">123 Beauty Street, Your City</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                </div>
                <a href={TEL_HREF} className="text-black/80 hover:text-accent font-medium">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                </div>
                <a href="mailto:hello@butyparlar.com" className="text-black/80 hover:text-accent font-medium">hello@butyparlar.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-pearl-200 text-center text-sm font-medium text-black/50">
          © {new Date().getFullYear()} ButyParlar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
