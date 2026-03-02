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
    <section className="py-10 sm:py-12 bg-white border-y border-pearl-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealSection className="text-center mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-1 animate-fade-in-up">
            Our Trusted Partners
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-black animate-fade-in-up uppercase tracking-widest" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Brands We Use & Trust
          </h2>
        </RevealSection>
        <RevealSection stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {brandedPartners.map((partner, i) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center p-4 rounded-3xl bg-white border border-pearl-200 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${i * 0.06}s`, animationFillMode: 'both' }}
            >
              <div
                className="partner-logo w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-pearl-100 flex items-center justify-center p-3 mb-4 overflow-hidden relative"
                data-state="loaded"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="partner-img max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-110"
                  onError={(e) => {
                    const wrap = e.currentTarget.closest('.partner-logo');
                    if (wrap) wrap.setAttribute('data-state', 'error');
                  }}
                />
                <span className="partner-fallback absolute inset-0 hidden items-center justify-center text-accent text-xs font-bold text-center p-1 uppercase">
                  {partner.name}
                </span>
              </div>
              <span className="font-bold text-black text-sm text-center uppercase tracking-tighter">{partner.name}</span>
              <span className="text-black/60 text-[10px] text-center mt-1 uppercase font-semibold">{partner.tagline}</span>
            </div>
          ))}
        </RevealSection>
      </div>
    </section>
  );
}
