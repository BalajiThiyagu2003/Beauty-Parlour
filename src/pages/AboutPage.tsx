import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faAward, faUsers } from '@fortawesome/free-solid-svg-icons';
import { RevealSection } from '../components/sections/RevealSection';
import { images } from '../lib/images';

export function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <RevealSection className="text-center mb-14">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-black mb-4 uppercase tracking-tighter">About ButyParlar</h1>
        <p className="text-black max-w-2xl mx-auto text-lg">
          We are passionate about helping you look and feel your best. Our story, values, and team drive everything we do.
        </p>
      </RevealSection>

      <RevealSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="font-display text-3xl font-bold text-black mb-6">Our Story</h2>
          <p className="text-black mb-4 text-lg">
            ButyParlar started with a simple belief: everyone deserves access to quality beauty and parlour services in a welcoming environment.
            We combine traditional care with modern techniques to deliver results you’ll love.
          </p>
          <p className="text-black text-lg">
            Today we continue to grow with our community, always putting your experience and satisfaction first.
          </p>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-pearl-200 shadow-xl aspect-[4/3] max-h-[400px]">
          <img src={images.about} alt="ButyParlar team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-accent/10" />
        </div>
      </RevealSection>

      <RevealSection className="py-16 bg-white rounded-[40px] border border-pearl-200 px-8 mb-16 shadow-xl shadow-pearl-100/50">
        <h2 className="font-display text-3xl font-bold text-black text-center mb-12 uppercase tracking-tight">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 text-accent mb-6 transform group-hover:rotate-12 transition-transform duration-300">
              <FontAwesomeIcon icon={faHeart} className="w-10 h-10" />
            </div>
            <h3 className="font-display text-xl font-bold text-black mb-3">Care</h3>
            <p className="text-black">We treat every client with warmth and attention to detail.</p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 text-accent mb-6 transform group-hover:-rotate-12 transition-transform duration-300">
              <FontAwesomeIcon icon={faAward} className="w-10 h-10" />
            </div>
            <h3 className="font-display text-xl font-bold text-black mb-3">Quality</h3>
            <p className="text-black">We use proven methods and quality products for lasting results.</p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 text-accent mb-6 transform group-hover:rotate-12 transition-transform duration-300">
              <FontAwesomeIcon icon={faUsers} className="w-10 h-10" />
            </div>
            <h3 className="font-display text-xl font-bold text-black mb-3">Community</h3>
            <p className="text-black">We grow with our clients and neighbourhood.</p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="text-center">
        <Link to="/appointment">
          <span className="btn-primary inline-flex text-lg px-12 py-4">Book your visit</span>
        </Link>
      </RevealSection>
    </div>
  );
}
