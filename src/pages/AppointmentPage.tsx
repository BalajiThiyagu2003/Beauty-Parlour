import { useState, useEffect } from 'react';
import * as Label from '@radix-ui/react-label';
import * as Select from '@radix-ui/react-select';
import * as Toast from '@radix-ui/react-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Calendar } from '../components/ui/Calendar';
import { TimePicker } from '../components/ui/TimePicker';
import { addDays, format } from 'date-fns';
import { useBooking } from '../contexts/BookingContext';
import { cn } from '../lib/utils';

const serviceOptions = [
  'Haircut & Styling',
  'Hair Colour',
  'Manicure & Pedicure',
  'Skincare & Facial',
  'Bridal & Events',
  'Makeup',
];

export function AppointmentPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [toastOpen, setToastOpen] = useState(false);

  const minDate = addDays(new Date(), 1);
  const { setBookingDetails } = useBooking();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Full name is required';
    else if (name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[0-9\s-]{10,15}$/.test(phone.trim())) newErrors.phone = 'Please enter a valid phone number';

    if (!email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email address';

    if (!service) newErrors.service = 'Please select a service';
    if (!selectedDate) newErrors.date = 'Please select a date';
    if (!time) newErrors.time = 'Please select a time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validate();
    }
  }, [name, email, phone, service, selectedDate, time]);

  useEffect(() => {
    const hasAny = name || phone || email || service || selectedDate || time || notes;
    if (!hasAny) {
      setBookingDetails(null);
      return;
    }
    setBookingDetails({
      name,
      phone,
      email,
      service,
      date: selectedDate ? format(selectedDate, 'PPP') : '',
      time,
      notes,
    });
  }, [name, phone, email, service, selectedDate, time, notes, setBookingDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      date: true,
      time: true,
    });
    
    if (validate()) {
      setToastOpen(true);
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setSelectedDate(null);
      setTime('');
      setNotes('');
      setErrors({});
      setTouched({});
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validate();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-black mb-4 uppercase tracking-tighter">Book an Appointment</h1>
        <p className="text-black text-lg">
          Fill in your details and choose a convenient date and time. We’ll confirm your booking shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border-2 border-pearl-200 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-pearl-100/50 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Label.Root htmlFor="name" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
                Full name <span className="text-red-500">*</span>
              </Label.Root>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => handleBlur('name')}
                className={cn(
                  "w-full px-6 py-4 rounded-2xl border-2 bg-white text-black font-bold placeholder-pearl-300 focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all duration-300",
                  touched.name && errors.name ? "border-red-500 ring-4 ring-red-500/10" : "border-pearl-200 focus:border-black"
                )}
                placeholder="Ex: John Doe"
              />
              {touched.name && errors.name && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight animate-in fade-in slide-in-from-top-1">{errors.name}</p>}
            </div>
            <div>
              <Label.Root htmlFor="phone" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
                Phone <span className="text-red-500">*</span>
              </Label.Root>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => handleBlur('phone')}
                className={cn(
                  "w-full px-6 py-4 rounded-2xl border-2 bg-white text-black font-bold placeholder-pearl-300 focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all duration-300",
                  touched.phone && errors.phone ? "border-red-500 ring-4 ring-red-500/10" : "border-pearl-200 focus:border-black"
                )}
                placeholder="+1 234 567 890"
              />
              {touched.phone && errors.phone && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight animate-in fade-in slide-in-from-top-1">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <Label.Root htmlFor="email" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
              Email <span className="text-red-500">*</span>
            </Label.Root>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
              className={cn(
                "w-full px-6 py-4 rounded-2xl border-2 bg-white text-black font-bold placeholder-pearl-300 focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all duration-300",
                touched.email && errors.email ? "border-red-500 ring-4 ring-red-500/10" : "border-pearl-200 focus:border-black"
              )}
              placeholder="you@example.com"
            />
            {touched.email && errors.email && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight animate-in fade-in slide-in-from-top-1">{errors.email}</p>}
          </div>
          <div>
            <Label.Root className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
              Service <span className="text-red-500">*</span>
            </Label.Root>
            <div className="relative group">
              <Select.Root value={service} onValueChange={(val) => { setService(val); setTouched(t => ({ ...t, service: true })); }}>
                <Select.Trigger
                  className={cn(
                    "inline-flex w-full items-center justify-between rounded-2xl border-2 bg-white px-6 py-4 text-black font-bold focus:outline-none focus:ring-4 focus:ring-accent/10 data-[placeholder]:text-pearl-300 transition-all duration-300",
                    touched.service && errors.service ? "border-red-500 ring-4 ring-red-500/10" : "border-pearl-200 focus:border-black"
                  )}
                >
                  <Select.Value placeholder="Select a service" />
                  <Select.Icon>
                    <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-accent" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    className="overflow-hidden bg-white rounded-2xl border-2 border-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-[100]"
                    position="popper"
                    sideOffset={8}
                    style={{ width: 'var(--radix-select-trigger-width)' }}
                  >
                    <Select.Viewport className="p-2">
                      {serviceOptions.map((opt) => (
                        <Select.Item
                          key={opt}
                          value={opt}
                          className="px-4 py-3 text-black font-bold data-[highlighted]:bg-accent data-[highlighted]:text-white rounded-lg outline-none cursor-pointer transition-all uppercase text-xs tracking-widest"
                        >
                          <Select.ItemText>{opt}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
            {touched.service && errors.service && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight animate-in fade-in slide-in-from-top-1">{errors.service}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Label.Root className="block text-sm font-black text-black ml-1 uppercase tracking-wider">
              Select Date <span className="text-red-500">*</span>
            </Label.Root>
            <Calendar
              value={selectedDate}
              onChange={(d) => { setSelectedDate(d); setTouched(t => ({ ...t, date: true })); }}
              minDate={minDate}
              className={cn(
                "w-full transition-all duration-300",
                touched.date && errors.date ? "ring-4 ring-red-500/20 border-red-500" : ""
              )}
            />
            {touched.date && errors.date && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight animate-in fade-in slide-in-from-top-1">{errors.date}</p>}
          </div>
          <div className="space-y-4">
            <Label.Root className="block text-sm font-black text-black ml-1 uppercase tracking-wider">
              Select Time <span className="text-red-500">*</span>
            </Label.Root>
            <TimePicker 
              value={time} 
              onChange={(t) => { setTime(t); setTouched(prev => ({ ...prev, time: true })); }} 
              className={cn(
                "w-full transition-all duration-300",
                touched.time && errors.time ? "ring-4 ring-red-500/20 border-red-500" : ""
              )}
            />
            {touched.time && errors.time && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight animate-in fade-in slide-in-from-top-1">{errors.time}</p>}
          </div>
        </div>

        <div className="bg-white border-2 border-pearl-200 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-pearl-100/50">
          <Label.Root htmlFor="notes" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
            Notes (optional)
          </Label.Root>
          <textarea
            id="notes"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border-2 border-pearl-200 bg-white text-black font-bold placeholder-pearl-300 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-black transition-all duration-300 resize-none"
            placeholder="Any special requests or allergies..."
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full py-6 text-xl font-black uppercase tracking-[0.3em] active:scale-[0.98] shadow-2xl shadow-accent/30 border-2 border-black"
        >
          <FontAwesomeIcon icon={faCalendarCheck} className="mr-3" />
          CONFIRM BOOKING
        </button>
      </form>

      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className="bg-white border-2 border-accent/20 text-black rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-8 flex flex-col gap-3 animate-scale-in"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <FontAwesomeIcon icon={faCheck} className="w-5 h-5" />
            </div>
            <div>
              <Toast.Title className="font-display font-black text-xl uppercase tracking-tighter select-none">Booking request sent</Toast.Title>
              <Toast.Description className="text-black/60 font-bold text-sm select-none">
                We’ll confirm your appointment shortly.
              </Toast.Description>
            </div>
          </div>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-10 right-10 flex flex-col gap-2 max-w-md z-[100]" />
      </Toast.Provider>
    </div>
  );
}
