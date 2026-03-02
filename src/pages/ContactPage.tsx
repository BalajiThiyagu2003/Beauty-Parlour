import { useState } from 'react';
import * as Label from '@radix-ui/react-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { PHONE_DISPLAY, TEL_HREF } from '../lib/contact';
import { cn } from '../lib/utils';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email address';
    if (!subject.trim()) newErrors.subject = 'Subject is required';
    if (!message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (validate()) {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
      setTouched({});
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-16">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-black mb-4 uppercase tracking-tighter">Contact Us</h1>
        <p className="text-black max-w-2xl mx-auto text-lg">
          Have a question or want to reach out? We’re here to help you shine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="flex gap-5 items-start bg-white p-6 rounded-3xl border border-pearl-200 shadow-lg shadow-pearl-100/50 hover-lift group">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-black text-lg mb-1">Address</h3>
              <p className="text-black text-sm leading-relaxed">
                123 Beauty Street<br />
                Your City, State 12345
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start bg-white p-6 rounded-3xl border border-pearl-200 shadow-lg shadow-pearl-100/50 hover-lift group">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-black text-lg mb-1">Phone</h3>
              <a href={TEL_HREF} className="text-black text-sm hover:text-accent hover:underline font-medium">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="flex gap-5 items-start bg-white p-6 rounded-3xl border border-pearl-200 shadow-lg shadow-pearl-100/50 hover-lift group">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-black text-lg mb-1">Email</h3>
              <a href="mailto:hello@butyparlar.com" className="text-black text-sm hover:text-accent hover:underline font-medium">
                hello@butyparlar.com
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white border-2 border-pearl-200 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-pearl-100/50 space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <Label.Root htmlFor="contact-name" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
                  Name <span className="text-red-500">*</span>
                </Label.Root>
                <input
                  id="contact-name"
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
                <Label.Root htmlFor="contact-email" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
                  Email <span className="text-red-500">*</span>
                </Label.Root>
                <input
                  id="contact-email"
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
              <Label.Root htmlFor="contact-subject" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
                Subject <span className="text-red-500">*</span>
              </Label.Root>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={cn(
                  "w-full px-6 py-4 rounded-2xl border-2 bg-white text-black font-bold placeholder-pearl-300 focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all duration-300",
                  touched.subject && errors.subject ? "border-red-500 ring-4 ring-red-500/10" : "border-pearl-200 focus:border-black"
                )}
                placeholder="How can we help?"
              />
              {touched.subject && errors.subject && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight">{errors.subject}</p>}
            </div>
            <div>
              <Label.Root htmlFor="contact-message" className="block text-sm font-black text-black mb-3 ml-1 uppercase tracking-wider">
                Message <span className="text-red-500">*</span>
              </Label.Root>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={cn(
                  "w-full px-6 py-4 rounded-2xl border-2 bg-white text-black font-bold placeholder-pearl-300 focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all duration-300 resize-none",
                  touched.message && errors.message ? "border-red-500 ring-4 ring-red-500/10" : "border-pearl-200 focus:border-black"
                )}
                placeholder="Your message..."
              />
              {touched.message && errors.message && <p className="mt-2 ml-1 text-xs font-bold text-red-500 uppercase tracking-tight">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="btn-primary w-full py-5 text-xl font-black uppercase tracking-[0.3em] active:scale-[0.98] shadow-2xl shadow-accent/30 border-2 border-black"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
