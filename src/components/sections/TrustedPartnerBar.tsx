import { RevealSection } from './RevealSection';
import { images } from '../../lib/images';

const brandedPartners = [
  { name: 'L\'Oréal', image: images.brandLoreal, tagline: 'Professional hair & beauty' },
  { name: 'Olaplex', image: images.brandOlaplex, tagline: 'Bond-building hair care' },
  { name: 'Matrix', image: images.brandMatrix, tagline: 'Salon-quality colour' },
  { name: 'Maybelline', image: images.brandMaybelline, tagline: 'Makeup & beauty' },
  { name: 'Nivea', image: images.brandNivea, tagline: 'Skincare experts' },
  { name: 'Garnier', image: images.brandGarnier, tagline: 'Natural care' },
];

export function TrustedPartnerBar() {
  return (
    <section className="py-10 sm:py-12 bg-royal-dark border-y border-royal-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealSection className="text-center mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-gold-500 mb-1 animate-fade-in-up">
            Trusted Partner
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-gold-gradient animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Brands We Use & Trust
          </h2>
        </RevealSection>
        <RevealSection stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {brandedPartners.map((partner, i) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center p-4 rounded-xl bg-royal-card border border-royal-border hover:border-gold-600/50 hover-lift transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${i * 0.06}s`, animationFillMode: 'both' }}
            >
              <div
                className="partner-logo w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white/5 border border-royal-border flex items-center justify-center p-2 mb-3 overflow-hidden group-hover:animate-shimmer relative"
                data-state="loaded"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="partner-img max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const wrap = e.currentTarget.closest('.partner-logo');
                    if (wrap) wrap.setAttribute('data-state', 'error');
                  }}
                />
                <span className="partner-fallback absolute inset-0 hidden items-center justify-center text-gold-500 text-xs font-medium text-center p-1">
                  {partner.name}
                </span>
              </div>
              <span className="font-medium text-white text-sm text-center">{partner.name}</span>
              <span className="text-gray-500 text-xs text-center mt-0.5">{partner.tagline}</span>
            </div>
          ))}
        </RevealSection>
      </div>
    </section>
  );
}
