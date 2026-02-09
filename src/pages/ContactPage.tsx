import { useState } from 'react';
import * as Label from '@radix-ui/react-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/ui/Button';
import { PHONE_DISPLAY, TEL_HREF } from '../lib/contact';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient mb-4">Contact Us</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a question or want to reach out? We’re here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-gradient/20 border border-gold-600/40 flex items-center justify-center text-gold-400">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-1">Address</h3>
              <p className="text-gray-400 text-sm">
                123 Beauty Street<br />
                Your City, State 12345
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-gradient/20 border border-gold-600/40 flex items-center justify-center text-gold-400">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-1">Phone</h3>
              <a href={TEL_HREF} className="text-gray-400 text-sm hover:text-gold-300 hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-gradient/20 border border-gold-600/40 flex items-center justify-center text-gold-400">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-1">Email</h3>
              <a href="mailto:hello@butyparlar.com" className="text-gray-400 text-sm hover:text-gold-300 hover:underline">
                hello@butyparlar.com
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-royal-card border border-royal-border rounded-xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label.Root htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name *
                </Label.Root>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label.Root htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email *
                </Label.Root>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <Label.Root htmlFor="contact-subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject *
              </Label.Root>
              <input
                id="contact-subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <Label.Root htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1">
                Message *
              </Label.Root>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-royal-border bg-royal-dark text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                placeholder="Your message..."
              />
            </div>
            <Button type="submit" size="lg">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
