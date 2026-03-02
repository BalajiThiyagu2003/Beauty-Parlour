import { useState } from 'react';
import * as Label from '@radix-ui/react-label';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Toast from '@radix-ui/react-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { cn } from '../lib/utils';

export function FeedbackPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email address';
    if (!rating) newErrors.rating = 'Please select a rating';
    if (!message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, rating: true, message: true });
    if (validate()) {
      setToastOpen(true);
      setName('');
      setEmail('');
      setRating('');
      setMessage('');
      setErrors({});
      setTouched({});
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-16">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-black mb-4 uppercase tracking-tighter">Feedback</h1>
        <p className="text-black text-lg max-w-2xl mx-auto">
          We’d love to hear from you. Your feedback helps us improve our services and your experience.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10 bg-white border-2 border-pearl-200 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-pearl-100/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <Label.Root htmlFor="fb-name" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
              Name <span className="text-red-500">*</span>
            </Label.Root>
            <input
              id="fb-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={cn(
                "w-full px-6 py-4 rounded-2xl border-2 bg-white text-black font-bold placeholder-pearl-300 focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all duration-300",
                touched.name && errors.name ? "border-red-500 ring-4 ring-red-500/10" : "border-pearl-200 focus:border-black"
              )}
              placeholder="Your name"
            />
            {touched.name && errors.name && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight">{errors.name}</p>}
          </div>
          <div>
            <Label.Root htmlFor="fb-email" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
              Email <span className="text-red-500">*</span>
            </Label.Root>
            <input
              id="fb-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "w-full px-6 py-4 rounded-2xl border-2 bg-white text-black font-bold placeholder-pearl-300 focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all duration-300",
                touched.email && errors.email ? "border-red-500 ring-4 ring-red-500/10" : "border-pearl-200 focus:border-black"
              )}
              placeholder="you@example.com"
            />
            {touched.email && errors.email && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight">{errors.email}</p>}
          </div>
        </div>

        <div>
          <Label.Root className="block text-sm font-black text-black mb-5 ml-1 uppercase tracking-wider">
            How would you rate your experience? <span className="text-red-500">*</span>
          </Label.Root>
          <RadioGroup.Root
            value={rating}
            onValueChange={setRating}
            className="flex flex-wrap gap-4"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <RadioGroup.Item
                key={value}
                value={String(value)}
                id={`rating-${value}`}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 group",
                  rating === String(value)
                    ? "border-black bg-black text-white shadow-xl scale-110"
                    : "border-pearl-200 bg-white text-black hover:border-black"
                )}
              >
                <RadioGroup.Indicator className="hidden" />
                <FontAwesomeIcon 
                  icon={rating && Number(rating) >= value ? faStar : faStarRegular} 
                  className={cn(
                    "w-5 h-5",
                    rating === String(value) ? "text-accent" : "text-black/20 group-hover:text-black/40"
                  )} 
                />
                <span className="text-sm font-black">{value}</span>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
          {touched.rating && errors.rating && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight">{errors.rating}</p>}
        </div>

        <div>
          <Label.Root htmlFor="fb-message" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
            Your feedback <span className="text-red-500">*</span>
          </Label.Root>
          <textarea
            id="fb-message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={cn(
              "w-full px-6 py-4 rounded-2xl border-2 bg-white text-black font-bold placeholder-pearl-300 focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all duration-300 resize-none",
              touched.message && errors.message ? "border-red-500 ring-4 ring-red-500/10" : "border-pearl-200 focus:border-black"
            )}
            placeholder="Tell us what you liked or what we can improve..."
          />
          {touched.message && errors.message && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="btn-primary w-full py-5 text-xl font-black uppercase tracking-[0.3em] active:scale-[0.98] shadow-2xl shadow-accent/30 border-2 border-black"
        >
          <FontAwesomeIcon icon={faCheck} className="mr-3" />
          SUBMIT FEEDBACK
        </button>
      </form>

      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className="bg-white border-2 border-accent/20 text-black rounded-[2.5rem] shadow-2xl p-8 animate-scale-in"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <FontAwesomeIcon icon={faCheck} className="w-6 h-6" />
            </div>
            <div>
              <Toast.Title className="font-display font-black text-xl uppercase tracking-tighter">Thank you!</Toast.Title>
              <Toast.Description className="text-black/60 font-bold">
                Your feedback has been submitted. We appreciate your time.
              </Toast.Description>
            </div>
          </div>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-10 right-10 flex flex-col gap-2 max-w-md z-[100]" />
      </Toast.Provider>
    </div>
  );
}
