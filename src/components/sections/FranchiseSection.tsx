import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faChartLine } from '@fortawesome/free-solid-svg-icons';

export function FranchiseSection() {
  return (
    <section className="py-16 sm:py-20 bg-royal-darker border-y border-royal-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gold-gradient mb-4">
              Join the growth story: Own a Salon
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Tap into the salon industry’s growth with our proven model that ensures swift and sustainable success. 
              Be part of a trusted brand and a supportive network.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 border border-gold-600/40 flex items-center justify-center">
                  <FontAwesomeIcon icon={faStore} className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Multiple locations</div>
                  <div className="text-sm text-gray-400">Scale with support</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient/20 border border-gold-600/40 flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartLine} className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Proven ROI</div>
                  <div className="text-sm text-gray-400">Tried business model</div>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-medium rounded-lg px-6 py-3 text-base bg-gold-gradient text-royal-dark hover:opacity-95 transition-opacity"
            >
              Enquire now
            </Link>
          </div>
          <div className="bg-royal-card rounded-2xl p-8 border border-royal-border">
            <h3 className="font-display text-lg font-semibold text-gold-400 mb-4">Why franchise with us?</h3>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>• Training and ongoing support</li>
              <li>• Brand recognition and marketing</li>
              <li>• Standardized processes and quality</li>
              <li>• Access to premium products</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
