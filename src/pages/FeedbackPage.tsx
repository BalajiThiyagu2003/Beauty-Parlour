import { useState } from 'react';
import * as Label from '@radix-ui/react-label';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Toast from '@radix-ui/react-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Button } from '../components/ui/Button';

export function FeedbackPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToastOpen(true);
    setName('');
    setEmail('');
    setRating('');
    setMessage('');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient mb-4">Feedback</h1>
        <p className="text-gray-300">
          We’d love to hear from you. Your feedback helps us improve our services.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-royal-card border border-royal-border rounded-xl p-6 sm:p-8">
        <div>
          <Label.Root htmlFor="fb-name" className="block text-sm font-medium text-gray-300 mb-1">
            Name *
          </Label.Root>
          <input
            id="fb-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <Label.Root htmlFor="fb-email" className="block text-sm font-medium text-gray-300 mb-1">
            Email *
          </Label.Root>
          <input
            id="fb-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <Label.Root className="block text-sm font-medium text-gray-300 mb-2">
            How would you rate your experience? *
          </Label.Root>
          <RadioGroup.Root
            value={rating}
            onValueChange={setRating}
            className="flex gap-2 flex-wrap"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <RadioGroup.Item
                key={value}
                value={String(value)}
                id={`rating-${value}`}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-royal-border bg-royal-dark data-[state=checked]:border-gold-500 data-[state=checked]:bg-gold-500/20 cursor-pointer"
              >
                <RadioGroup.Indicator className="hidden" />
                {rating && Number(rating) >= value ? (
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-gold-400" />
                ) : (
                  <FontAwesomeIcon icon={faStarRegular} className="w-5 h-5 text-gold-500" />
                )}
                <span className="text-sm font-medium text-gray-300">{value}</span>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </div>
        <div>
          <Label.Root htmlFor="fb-message" className="block text-sm font-medium text-gray-300 mb-1">
            Your feedback *
          </Label.Root>
          <textarea
            id="fb-message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
            placeholder="Tell us what you liked or what we can improve..."
          />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <FontAwesomeIcon icon={faCheck} className="mr-2" />
          Submit Feedback
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
            <Toast.Title className="font-semibold">Thank you</Toast.Title>
          </div>
          <Toast.Description>
            Your feedback has been submitted. We appreciate your time.
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 max-w-md z-[100]" />
      </Toast.Provider>
    </div>
  );
}
