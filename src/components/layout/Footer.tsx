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
    <footer className="bg-royal-darker border-t border-royal-border text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <BrandLogo />
              <span className="font-display text-lg font-semibold text-gold-gradient">ButyParlar</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Your trusted beauty and parlour destination. We bring out the best in you.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-gray-400 hover:text-gold-300 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 text-gold-400" />
                <span>123 Beauty Street, Your City</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-4 text-gold-400" />
                <a href={TEL_HREF} className="hover:text-gold-300">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 text-gold-400" />
                <a href="mailto:hello@butyparlar.com" className="hover:text-gold-300">hello@butyparlar.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-royal-border text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ButyParlar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
