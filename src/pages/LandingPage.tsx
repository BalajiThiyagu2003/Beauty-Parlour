import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faWandMagicSparkles,
  faQuoteLeft,
  faCut,
  faSprayCanSparkles,
  faSpa,
} from '@fortawesome/free-solid-svg-icons';
import { StatsSection } from '../components/sections/StatsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FranchiseSection } from '../components/sections/FranchiseSection';
import { TrustedPartnerBar } from '../components/sections/TrustedPartnerBar';
import { RevealSection } from '../components/sections/RevealSection';
import { images } from '../lib/images';

const whyUs = [
  {
    icon: faWandMagicSparkles,
    title: 'Quality care',
    text: 'Expert stylists and premium products for lasting results.',
  },
  {
    icon: faCalendarCheck,
    title: 'Easy booking',
    text: 'Book your slot online in a few clicks.',
  },
  {
    icon: faQuoteLeft,
    title: 'Client first',
    text: 'Your satisfaction and comfort are our priority.',
  },
];

const servicePreview = [
  { icon: faCut, title: 'Haircut & Styling', path: '/services', image: images.serviceHair },
  { icon: faSprayCanSparkles, title: 'Hair Colour', path: '/services', image: images.serviceHair },
  { icon: faSpa, title: 'Bridal & Events', path: '/services', image: images.serviceBridal },
];

const modernGirlsRef = [
  { image: images.modernGirl1, caption: 'Salon style' },
  { image: images.modernGirl2, caption: 'Makeup looks' },
  { image: images.modernGirl3, caption: 'Professional' },
  { image: images.modernGirl4, caption: 'Everyday glam' },
  { image: images.modernGirl5, caption: 'Special occasions' },
];

export function LandingPage() {
  return (
    <div>
      {/* Hero – Royal theme: dark background, gold gradient heading, royal image */}
      <section className="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-royal-dark">
        {/* Gold gradient frame / outer glow */}
        <div className="absolute inset-0 bg-gold-gradient opacity-[0.06]" aria-hidden />
        <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 animate-fade-in-up text-gold-gradient uppercase tracking-tight">
              Beauty & Parlour
            </h1>
            <p className="font-elegant text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Professional beauty & styling delivered by certified experts with world-class products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <Link to="/appointment">
                <span className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-gold-gradient text-white shadow-lg hover:opacity-95 transition-opacity">
                  <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                  Book Appointment
                </span>
              </Link>
              <Link to="/about">
                <span className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10 transition-colors">
                  Know More
                </span>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end items-center min-h-[50vh] lg:min-h-[70vh] animate-float">
            <img
              src={images.hero}
              alt=""
              className="max-h-[60vh] lg:max-h-[75vh] w-auto object-contain object-center drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats - Green Trends style count-up */}
      <StatsSection />

      {/* Trusted Partner / Brand bar */}
      <TrustedPartnerBar />

      {/* Why Choose Us – Royal theme */}
      <section className="py-16 sm:py-20 bg-royal-darker border-y border-royal-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gold-gradient mb-3">
              Why Choose Us?
            </h2>
            <p className="font-elegant text-gray-300 max-w-xl mx-auto text-lg">
              With years of experience, we offer personalized services and uncompromised quality.
            </p>
          </RevealSection>
          <RevealSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="bg-royal-card rounded-xl p-6 border border-royal-border text-center hover:border-gold-600/50 hover-lift transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-gradient/20 border border-gold-600/40 text-gold-400 mb-4 animate-pulse-glow">
                  <FontAwesomeIcon icon={item.icon} className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Our Services – Royal theme */}
      <section className="py-16 sm:py-20 bg-royal-dark border-y border-royal-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gold-gradient mb-3">
              Our Services
            </h2>
            <p className="font-elegant text-gray-300 max-w-xl mx-auto text-lg">
              Hair, skin, bridal and more — all delivered by trained experts.
            </p>
          </RevealSection>
          <RevealSection stagger className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { ...servicePreview[0], image: images.serviceHair },
              { ...servicePreview[1], image: images.serviceSkin },
              { ...servicePreview[2], image: images.serviceBridal },
            ].map((s, i) => (
              <Link
                key={s.title}
                to={s.path}
                className="group bg-royal-card rounded-xl overflow-hidden border border-royal-border hover:border-gold-600/50 hover-lift transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-royal-darker">
                  <img src={s.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90" />
                  <div className="absolute inset-0 bg-royal-dark/60 flex items-center justify-center">
                    <FontAwesomeIcon icon={s.icon} className="w-10 h-10 text-gold-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-gold-300 transition-colors">
                    {s.title}
                  </h3>
                  <span className="text-gold-500 text-sm mt-1 inline-block">View all services →</span>
                </div>
              </Link>
            ))}
          </RevealSection>
          <RevealSection className="text-center mt-10">
            <Link to="/services">
              <span className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10 transition-colors">
                View all services
              </span>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* Modern Girls Reference – style inspiration */}
      <section className="py-16 sm:py-20 bg-royal-darker border-y border-royal-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gold-gradient mb-3">
              Style Inspiration
            </h2>
            <p className="font-elegant text-gray-300 max-w-xl mx-auto text-lg">
              Modern looks for every occasion — get inspired by our reference styles.
            </p>
          </RevealSection>
          <RevealSection stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {modernGirlsRef.map((item, i) => (
              <div
                key={item.caption}
                className="group rounded-xl overflow-hidden border border-royal-border hover:border-gold-600/50 hover-lift transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-royal-card">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/90 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 right-2 text-center text-sm font-medium text-white drop-shadow">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Franchise CTA - Green Trends style */}
      <FranchiseSection />

      {/* Final CTA – Royal theme */}
      <section className="py-16 sm:py-20 bg-royal-darker border-t border-royal-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <RevealSection>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gold-gradient mb-4">
              Looking for the perfect style?
            </h2>
            <p className="text-gray-300 mb-8">
              Book a service today and get styled by our experts at a location near you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/appointment">
                <span className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-gold-gradient text-white hover:opacity-95 transition-opacity">
                  Book Now
                </span>
              </Link>
              <Link to="/contact">
                <span className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10 transition-colors">
                  Contact Us
                </span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
