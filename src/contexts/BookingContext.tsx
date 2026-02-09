import { createContext, useContext, useState, type ReactNode } from 'react';

export interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

interface BookingContextValue {
  bookingDetails: BookingDetails | null;
  setBookingDetails: (d: BookingDetails | null) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) return { bookingDetails: null, setBookingDetails: () => {} };
  return ctx;
}

/** Build WhatsApp message from booking details */
export function formatBookingMessage(d: BookingDetails): string {
  const lines = [
    'Hi, I would like to book an appointment at ButyParlar.',
    '',
    '*Booking Details*',
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Email: ${d.email}`,
    `Service: ${d.service}`,
    `Date: ${d.date}`,
    `Time: ${d.time}`,
  ];
  if (d.notes.trim()) lines.push(`Notes: ${d.notes}`);
  return lines.join('\n');
}
