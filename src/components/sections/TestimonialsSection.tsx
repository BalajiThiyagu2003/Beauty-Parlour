import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const testimonials = [
  {
    quote: "After lockdown I was worried about visiting a salon but the safety measures at ButyParlar were thorough and professional. I felt safe — towels and gowns were fresh, and the chair was sanitized. This was my first visit and I'm definitely coming back.",
    name: 'Divya Raj',
    role: 'Entrepreneur',
  },
  {
    quote: "I wanted to experiment with a stylish hair colour. The stylist listened to my needs and suggested a colour that matched my skin tone. The final look was exactly what I imagined. Thanks to ButyParlar I didn't burn a hole in my pocket. Highly recommended.",
    name: 'Angel Davis',
    role: 'HR Professional',
  },
  {
    quote: "ButyParlar works magic with my haircut every time. The stylist was well trained and knew exactly what my hair needs. He chose a cut that keeps my length and my hair always feels full of volume and bouncy. Love my look and get lots of compliments.",
    name: 'Chitra Shyam',
    role: 'Home-maker',
  },
];

const AUTOPLAY_MS = 5000;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-royal-dark border-y border-royal-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gold-gradient text-center mb-4">
          Join Our Happy Clients
        </h2>
        <p className="text-gray-400 text-center mb-10 text-sm sm:text-base">
          See what our customers say about their experience.
        </p>

        <div className="relative bg-royal-card rounded-2xl border border-royal-border shadow-lg p-8 sm:p-10 min-h-[240px]">
          <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-6 left-6 w-8 h-8 text-gold-600/60" aria-hidden />
          <div className="relative">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`transition-opacity duration-300 ${i === active ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
                style={i === active ? {} : { visibility: 'hidden' as const }}
              >
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed pl-6">
                  {t.quote}
                </p>
                <div className="mt-6 pl-6">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-gold-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-royal-border">
            <button
              type="button"
              onClick={() => go(-1)}
              className="p-2 rounded-full text-gray-400 hover:text-gold-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? 'bg-gold-500' : 'bg-royal-border hover:bg-gold-600/50'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="p-2 rounded-full text-gray-400 hover:text-gold-400 transition-colors"
              aria-label="Next testimonial"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/feedback">
            <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10 transition-colors">
              Share your feedback
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
