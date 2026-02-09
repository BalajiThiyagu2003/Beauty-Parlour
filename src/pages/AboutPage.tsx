import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faAward, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/ui/Button';
import { RevealSection } from '../components/sections/RevealSection';
import { images } from '../lib/images';

export function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <RevealSection className="text-center mb-14">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient mb-4">About ButyParlar</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We are passionate about helping you look and feel your best. Our story, values, and team drive everything we do.
        </p>
      </RevealSection>

      <RevealSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white mb-4">Our Story</h2>
          <p className="text-gray-400 mb-4">
            ButyParlar started with a simple belief: everyone deserves access to quality beauty and parlour services in a welcoming environment.
            We combine traditional care with modern techniques to deliver results you’ll love.
          </p>
          <p className="text-gray-400">
            Today we continue to grow with our community, always putting your experience and satisfaction first.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-royal-border shadow-md aspect-[4/3] max-h-[320px]">
          <img src={images.about} alt="ButyParlar team" className="w-full h-full object-cover" />
        </div>
      </RevealSection>

      <RevealSection className="py-12 bg-royal-card rounded-2xl border border-royal-border px-6 mb-16">
        <h2 className="font-display text-2xl font-semibold text-gold-gradient text-center mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-gradient/20 border border-gold-600/40 text-gold-400 mb-4">
              <FontAwesomeIcon icon={faHeart} className="w-7 h-7" />
            </div>
            <h3 className="font-display font-semibold text-white mb-2">Care</h3>
            <p className="text-gray-400 text-sm">We treat every client with warmth and attention to detail.</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-gradient/20 border border-gold-600/40 text-gold-400 mb-4">
              <FontAwesomeIcon icon={faAward} className="w-7 h-7" />
            </div>
            <h3 className="font-display font-semibold text-white mb-2">Quality</h3>
            <p className="text-gray-400 text-sm">We use proven methods and quality products for lasting results.</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-gradient/20 border border-gold-600/40 text-gold-400 mb-4">
              <FontAwesomeIcon icon={faUsers} className="w-7 h-7" />
            </div>
            <h3 className="font-display font-semibold text-white mb-2">Community</h3>
            <p className="text-gray-400 text-sm">We grow with our clients and neighbourhood.</p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="text-center">
        <Link to="/appointment">
          <Button size="lg">Book your visit</Button>
        </Link>
      </RevealSection>
    </div>
  );
}
