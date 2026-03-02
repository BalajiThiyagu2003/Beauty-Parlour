import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faChartLine } from '@fortawesome/free-solid-svg-icons';

export function FranchiseSection() {
  return (
    <section className="py-20 bg-pearl-50 border-y border-pearl-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-black mb-6 uppercase tracking-tighter">
              Join our legacy: Own a Salon
            </h2>
            <p className="text-black text-lg leading-relaxed mb-8 max-w-xl">
              Tap into the beauty industry’s growth with our proven model that ensures swift and sustainable success. 
              Be part of a trusted brand and a supportive partner network.
            </p>
            <div className="flex flex-wrap gap-8 mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <FontAwesomeIcon icon={faStore} className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-bold text-black text-lg">Multiple locations</div>
                  <div className="text-sm text-black/60 uppercase font-semibold">Scale with support</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <FontAwesomeIcon icon={faChartLine} className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-bold text-black text-lg">Proven ROI</div>
                  <div className="text-sm text-black/60 uppercase font-semibold">Tried business model</div>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="btn-primary px-10 py-4 text-lg inline-flex"
            >
              Enquire now
            </Link>
          </div>
          <div className="bg-white rounded-[40px] p-10 border border-pearl-200 shadow-xl shadow-pearl-100/50 transform rotate-2">
            <h3 className="font-display text-xl font-bold text-black mb-6 uppercase tracking-wider">Why franchise with us?</h3>
            <ul className="space-y-4">
              {['Training and ongoing support', 'Brand recognition and marketing', 'Standardized processes and quality', 'Access to premium products'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black font-medium">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
