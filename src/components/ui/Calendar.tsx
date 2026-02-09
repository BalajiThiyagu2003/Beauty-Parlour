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
    <div className={cn('bg-royal-card rounded-xl border border-royal-border shadow-sm overflow-hidden', className)}>
      <div className="flex items-center justify-between p-3 border-b border-royal-border bg-royal-dark/50">
        <button
          type="button"
          onClick={() => setViewDate(subMonths(viewDate, 1))}
          className="p-2 rounded-lg text-gray-400 hover:text-gold-400 hover:bg-royal-border transition-colors"
          aria-label="Previous month"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
        </button>
        <span className="font-semibold text-white">
          {format(viewDate, 'MMMM yyyy')}
        </span>
        <button
          type="button"
          onClick={() => setViewDate(addMonths(viewDate, 1))}
          className="p-2 rounded-lg text-gray-400 hover:text-gold-400 hover:bg-royal-border transition-colors"
          aria-label="Next month"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
        </button>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-7 gap-1 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <div key={d} className="text-xs font-medium text-gold-500 py-1">
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
                    'aspect-square flex items-center justify-center text-sm rounded-lg transition-colors',
                    !currentMonth && 'text-gray-500',
                    currentMonth && !selected && !today && 'text-white hover:bg-royal-border',
                    today && !selected && 'font-semibold text-gold-400 bg-royal-border',
                    selected && 'bg-gold-gradient text-royal-dark font-semibold',
                    disabled && 'opacity-40 cursor-not-allowed'
                  )}
                >
                  {format(d, 'd')}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
