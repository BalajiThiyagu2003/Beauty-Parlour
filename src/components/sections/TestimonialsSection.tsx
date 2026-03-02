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
    <section className="py-20 bg-white border-y border-pearl-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-black text-center mb-4 uppercase tracking-tighter">
          Our Happy Clients
        </h2>
        <p className="text-black/70 text-center mb-12 text-lg font-medium">
          Real experiences from those who trust ButyParlar.
        </p>

        <div className="relative bg-white rounded-[40px] border border-pearl-200 shadow-2xl shadow-pearl-100/50 p-8 sm:p-14 min-h-[300px] overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px]" />
          <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-10 left-10 w-12 h-12 text-accent/10" aria-hidden />
          <div className="relative z-10">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`transition-all duration-700 transform ${i === active ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 pointer-events-none translate-x-12'}`}
                style={i === active ? {} : { visibility: 'hidden' as const }}
              >
                <p className="text-black text-lg sm:text-xl font-medium leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 rounded-full bg-accent" />
                  <div>
                    <div className="font-bold text-black text-lg">{t.name}</div>
                    <div className="text-sm text-accent font-bold uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-pearl-100">
            <button
              type="button"
              onClick={() => go(-1)}
              className="w-12 h-12 rounded-full border border-pearl-200 flex items-center justify-center text-black hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-accent' : 'w-2 bg-pearl-200 hover:bg-pearl-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="w-12 h-12 rounded-full border border-pearl-200 flex items-center justify-center text-black hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/feedback">
            <span className="btn-secondary px-8 py-3 text-sm">
              Share your feedback
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
