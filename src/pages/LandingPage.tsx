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
      <section className="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-pearl-100">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pearl-100/50" aria-hidden />
        <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 animate-fade-in-up text-accent uppercase tracking-tight">
              Beauty & Parlour
            </h1>
            <p className="font-elegant text-lg sm:text-xl text-black mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Professional beauty & styling delivered by certified experts with world-class products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <Link to="/appointment">
                <span className="btn-primary">
                  <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                  Book Appointment
                </span>
              </Link>
              <Link to="/about">
                <span className="btn-secondary">
                  Know More
                </span>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end items-center min-h-[50vh] lg:min-h-[70vh] animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <img
                src={images.hero}
                alt=""
                className="relative max-h-[60vh] lg:max-h-[75vh] w-auto object-contain object-center drop-shadow-[0_20px_50px_rgba(183,110,121,0.3)] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Green Trends style count-up */}
      <StatsSection />

      {/* Trusted Partner / Brand bar */}
      <TrustedPartnerBar />

      {/* Why Choose Us – Royal theme */}
      <section className="py-16 sm:py-20 bg-white border-y border-pearl-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-accent mb-3 uppercase tracking-wider">
              Why Choose Us?
            </h2>
            <p className="font-elegant text-black max-w-xl mx-auto text-lg">
              With years of experience, we offer personalized services and uncompromised quality.
            </p>
          </RevealSection>
          <RevealSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="bg-pearl-50 rounded-2xl p-8 border border-pearl-100 text-center hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover-lift transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 animate-pulse-glow">
                  <FontAwesomeIcon icon={item.icon} className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-black leading-relaxed">{item.text}</p>
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Our Services – Royal theme */}
      <section className="py-16 sm:py-20 bg-pearl-50 border-y border-pearl-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-accent mb-3 uppercase tracking-wider">
              Our Services
            </h2>
            <p className="font-elegant text-black max-w-xl mx-auto text-lg">
              Hair, skin, bridal and more — all delivered by trained experts.
            </p>
          </RevealSection>
          <RevealSection stagger className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { ...servicePreview[0], image: images.serviceHair },
              { ...servicePreview[1], image: images.serviceSkin },
              { ...servicePreview[2], image: images.serviceBridal },
            ].map((s, i) => (
              <Link
                key={s.title}
                to={s.path}
                className="group bg-white rounded-2xl overflow-hidden border border-pearl-200 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover-lift transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-pearl-100">
                  <img src={s.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-accent font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Discover More
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <FontAwesomeIcon icon={s.icon} className="text-accent" />
                    <h3 className="font-display text-xl font-semibold text-black transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <span className="text-accent/80 text-sm font-medium">View all services →</span>
                </div>
              </Link>
            ))}
          </RevealSection>
          <RevealSection className="text-center mt-12">
            <Link to="/services">
              <span className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-lg shadow-accent/5">
                View All Services
              </span>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* Modern Girls Reference – style inspiration */}
      <section className="py-16 sm:py-20 bg-white border-y border-pearl-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-accent mb-3 uppercase tracking-wider">
              Style Inspiration
            </h2>
            <p className="font-elegant text-black max-w-xl mx-auto text-lg">
              Modern looks for every occasion — get inspired by our reference styles.
            </p>
          </RevealSection>
          <RevealSection stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {modernGirlsRef.map((item, i) => (
              <div
                key={item.caption}
                className="group rounded-2xl overflow-hidden border border-pearl-200 hover:border-accent/30 hover:shadow-xl hover-lift transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-pearl-100">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-0 right-0 text-center text-xs font-semibold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
      <section className="py-20 bg-pearl-50 border-t border-pearl-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <RevealSection>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-accent mb-6 uppercase tracking-wider">
              Looking for the perfect style?
            </h2>
            <p className="text-black text-lg mb-10">
              Book a service today and get styled by our experts at a location near you.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/appointment">
                <span className="btn-primary px-10 py-4">
                  Book Now
                </span>
              </Link>
              <Link to="/contact">
                <span className="btn-secondary px-10 py-4">
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
