import { cn } from '../../lib/utils';

const DEFAULT_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30',
];

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
  slots?: string[];
  className?: string;
}

export function TimePicker({ value, onChange, slots = DEFAULT_SLOTS, className }: TimePickerProps) {
  return (
    <div className={cn('bg-royal-card rounded-xl border border-royal-border shadow-sm overflow-hidden', className)}>
      <div className="p-3 border-b border-royal-border bg-royal-dark/50">
        <span className="text-sm font-medium text-gray-300">Select time</span>
      </div>
      <div className="p-3 grid grid-cols-4 sm:grid-cols-4 gap-2 max-h-[220px] overflow-y-auto">
        {slots.map((slot) => {
          const selected = value === slot;
          return (
            <button
              key={slot}
              type="button"
              onClick={() => onChange(slot)}
              className={cn(
                'py-2.5 px-3 rounded-lg text-sm font-medium transition-colors',
                selected
                  ? 'bg-gold-gradient text-royal-dark'
                  : 'bg-royal-dark text-gray-300 hover:bg-royal-border border border-royal-border'
              )}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}
