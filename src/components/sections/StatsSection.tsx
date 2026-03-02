import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';

const stats = [
  { value: 50, suffix: '+', label: 'Salons' },
  { value: 12, suffix: '+', label: 'Cities' },
  { value: 2, suffix: ' Lac+', label: 'Customers' },
  { value: 500, suffix: '+', label: 'Stylists' },
];

export function StatsSection() {
  const { ref, inView } = useInView();
  const count1 = useCountUp(stats[0].value, 1600, inView);
  const count2 = useCountUp(stats[1].value, 1400, inView);
  const count3 = useCountUp(stats[2].value, 1400, inView);
  const count4 = useCountUp(stats[3].value, 1800, inView);
  const counts = [count1, count2, count3, count4];

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-pearl-50 border-y border-pearl-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center reveal-stagger" style={{ opacity: 1 }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black animate-pulse-glow">
                {counts[i]}
                <span className="text-black">{stat.suffix}</span>
              </div>
              <div className="text-black font-semibold mt-1 text-sm sm:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
