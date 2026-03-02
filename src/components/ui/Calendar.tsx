import { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isBefore,
  isAfter,
  isToday,
} from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { cn } from '../../lib/utils';

interface CalendarProps {
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

export function Calendar({ value, onChange, minDate, maxDate, className }: CalendarProps) {
  const [viewDate, setViewDate] = useState(value || new Date());

  const start = startOfWeek(startOfMonth(viewDate), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(viewDate), { weekStartsOn: 0 });
  const weeks: Date[][] = [];
  let day = start;
  while (day <= end) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(day);
      day = addDays(day, 1);
    }
    weeks.push(week);
  }

  const isDisabled = (d: Date) => {
    if (minDate && isBefore(d, minDate)) return true;
    if (maxDate && isAfter(d, maxDate)) return true;
    return false;
  };

  return (
    <div className={cn('bg-white rounded-[2rem] border-2 border-pearl-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden', className)}>
      <div className="flex items-center justify-between p-6 border-b border-pearl-100 bg-white">
        <button
          type="button"
          onClick={() => setViewDate(subMonths(viewDate, 1))}
          className="w-10 h-10 flex items-center justify-center rounded-full text-black hover:bg-accent hover:text-white transition-all duration-300"
          aria-label="Previous month"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
        </button>
        <div className="text-center">
          <span className="block font-display font-extrabold text-black uppercase tracking-[0.2em] text-sm">
            {format(viewDate, 'MMMM')}
          </span>
          <span className="block font-display font-bold text-black/40 text-[10px] tracking-[0.3em]">
            {format(viewDate, 'yyyy')}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setViewDate(addMonths(viewDate, 1))}
          className="w-10 h-10 flex items-center justify-center rounded-full text-black hover:bg-accent hover:text-white transition-all duration-300"
          aria-label="Next month"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
        </button>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-7 gap-2 text-center">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
            <div key={d} className="text-[10px] font-black text-black/30 py-4 tracking-widest">
              {d}
            </div>
          ))}
          {weeks.map((week) =>
            week.map((d) => {
              const disabled = isDisabled(d);
              const selected = value && isSameDay(d, value);
              const currentMonth = isSameMonth(d, viewDate);
              const today = isToday(d);
              return (
                <button
                  key={d.toISOString()}
                  type="button"
                  disabled={disabled}
                  onClick={() => !disabled && onChange(d)}
                  className={cn(
                    'aspect-square flex flex-col items-center justify-center text-sm rounded-2xl transition-all duration-500 relative group',
                    !currentMonth && 'text-black/10',
                    currentMonth && !selected && !today && 'text-black font-bold hover:bg-accent/10 hover:text-accent hover:scale-110',
                    today && !selected && 'font-black text-accent bg-accent/5 ring-2 ring-accent/20',
                    selected && 'bg-black text-white font-black shadow-2xl shadow-black/30 scale-110 translate-y-[-4px]',
                    disabled && 'opacity-10 cursor-not-allowed grayscale'
                  )}
                >
                  <span className="relative z-10">{format(d, 'd')}</span>
                  {selected && (
                    <div className="absolute inset-0 bg-black rounded-2xl animate-pulse -z-0 opacity-10" />
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
