import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
  className?: string;
}

export function TimePicker({ value, onChange, className }: TimePickerProps) {
  // Parse existing value or default
  const parseValue = (val: string) => {
    if (!val) return { hour: '09', period: 'AM' };
    const [h, rest] = val.split(':');
    const period = rest.split(' ')[1];
    return { hour: h, period };
  };

  const { hour: initialHour, period: initialPeriod } = parseValue(value);
  const [selectedHour, setSelectedHour] = useState(initialHour);
  const [period, setPeriod] = useState(initialPeriod);

  const hours = ['12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];
  
  useEffect(() => {
    // Standardize to 30 min intervals as before for simplicity, or just use the selected hour
    // The previous implementation used fixed slots. We'll stick to a clean hour selector if that's what "clock type" implies.
    // Let's assume the user wants to pick the hour and we default to :00 or :30.
    // For now, let's just make it a clean hour + AM/PM selector that looks like a real clock.
    onChange(`${selectedHour}:00 ${period}`);
  }, [selectedHour, period]);

  return (
    <div className={cn('bg-white rounded-[2rem] border-2 border-pearl-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden h-full flex flex-col', className)}>
      <div className="p-6 border-b border-pearl-100 bg-white flex items-center justify-between">
        <div className="flex items-center gap-3 text-black">
          <FontAwesomeIcon icon={faClock} className="w-5 h-5 opacity-20" />
          <span className="font-display font-extrabold uppercase tracking-[0.2em] text-sm">Select Time</span>
        </div>
        <div className="flex bg-pearl-100 p-1 rounded-full">
          {['AM', 'PM'].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPeriod(p)}
              className={cn(
                'px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300',
                period === p ? 'bg-black text-white shadow-lg' : 'text-black/40 hover:text-black'
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-grow flex items-center justify-center p-8 relative min-h-[320px]">
        {/* Clock Face */}
        <div className="w-64 h-64 rounded-full border-4 border-pearl-100 relative bg-pearl-50/30 flex items-center justify-center">
          {/* Central Point */}
          <div className="w-3 h-3 bg-black rounded-full z-20" />
          
          {/* Radial Numbers */}
          {hours.map((h, i) => {
            const angle = (i * 30) - 90; // 30 degrees per hour, starting from top (12)
            const rad = angle * (Math.PI / 180);
            const x = Math.cos(rad) * 100;
            const y = Math.sin(rad) * 100;
            const isSelected = selectedHour === h;

            return (
              <button
                key={h}
                type="button"
                onClick={() => setSelectedHour(h)}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={cn(
                  'absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 z-10',
                  isSelected 
                    ? 'bg-black text-white font-black shadow-2xl scale-125' 
                    : 'text-black/60 font-bold hover:bg-black/5 hover:text-black'
                )}
              >
                {h}
              </button>
            );
          })}

          {/* Clock Hand Line */}
          <div 
            className="absolute h-1 bg-black/10 origin-left z-0 transition-all duration-700 rounded-full"
            style={{ 
              width: '90px', 
              left: '50%',
              top: '50%',
              transform: `rotate(${hours.indexOf(selectedHour) * 30 - 90}deg)` 
            }}
          />
        </div>
      </div>

      <div className="p-6 bg-pearl-50 border-t border-pearl-100 text-center">
        <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.3em]">Selected slot</span>
        <div className="text-3xl font-display font-black text-black mt-1">
          {selectedHour}:00 <span className="text-accent uppercase">{period}</span>
        </div>
        <p className="text-[10px] font-bold text-accent mt-1">All appointments are 1 hour slots</p>
      </div>
    </div>
  );
}
