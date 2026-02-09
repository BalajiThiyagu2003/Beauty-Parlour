import { useState, useEffect } from 'react';
import * as Label from '@radix-ui/react-label';
import * as Select from '@radix-ui/react-select';
import * as Toast from '@radix-ui/react-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/ui/Button';
import { Calendar } from '../components/ui/Calendar';
import { TimePicker } from '../components/ui/TimePicker';
import { addDays, format } from 'date-fns';
import { useBooking } from '../contexts/BookingContext';

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
  const [toastOpen, setToastOpen] = useState(false);

  const minDate = addDays(new Date(), 1);
  const { setBookingDetails } = useBooking();

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
    if (!service || !time || !selectedDate) return;
    setToastOpen(true);
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setSelectedDate(null);
    setTime('');
    setNotes('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient mb-4">Book an Appointment</h1>
        <p className="text-gray-300">
          Fill in your details and choose a convenient date and time. We’ll confirm your booking shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-royal-card border border-royal-border rounded-xl p-6 sm:p-8 space-y-6">
          <div>
            <Label.Root htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full name *
            </Label.Root>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <Label.Root htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email *
            </Label.Root>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <Label.Root htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone *
            </Label.Root>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              placeholder="+1 234 567 890"
            />
          </div>
          <div>
            <Label.Root className="block text-sm font-medium text-gray-300 mb-1">
              Service *
            </Label.Root>
            <Select.Root value={service} onValueChange={setService}>
              <Select.Trigger
                className="inline-flex w-full items-center justify-between rounded-lg border border-royal-border bg-royal-dark px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 data-[placeholder]:text-gray-500"
              >
                <Select.Value placeholder="Select a service" />
                <Select.Icon>
                  <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="overflow-hidden bg-royal-card rounded-lg border border-royal-border shadow-lg"
                  position="popper"
                  sideOffset={4}
                >
                  {serviceOptions.map((opt) => (
                    <Select.Item
                      key={opt}
                      value={opt}
                      className="px-4 py-2 text-white data-[highlighted]:bg-royal-border outline-none cursor-pointer"
                    >
                      <Select.ItemText>{opt}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Label.Root className="block text-sm font-medium text-gray-300 mb-2">
              Date *
            </Label.Root>
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              minDate={minDate}
            />
          </div>
          <div>
            <Label.Root className="block text-sm font-medium text-gray-300 mb-2">
              Time *
            </Label.Root>
            <TimePicker value={time} onChange={setTime} />
          </div>
        </div>

        <div className="bg-royal-card border border-royal-border rounded-xl p-6 sm:p-8">
          <Label.Root htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-1">
            Notes (optional)
          </Label.Root>
          <textarea
            id="notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
            placeholder="Any special requests or allergies..."
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={!service || !time || !selectedDate}
        >
          <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
          Confirm Booking
        </Button>
      </form>

      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className="bg-royal-card border border-gold-600/50 text-white rounded-lg shadow-lg p-4"
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-gold-400" />
            <Toast.Title className="font-semibold">Booking request sent</Toast.Title>
          </div>
          <Toast.Description>
            We’ll confirm your appointment by email or phone shortly.
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 max-w-md z-[100]" />
      </Toast.Provider>
    </div>
  );
}
