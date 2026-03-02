import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPaperPlane, faUser, faPhone, faScissors, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { EMAIL_CONFIG } from '../lib/emailConfig';
import { WHATSAPP_NUMBER } from '../lib/contact';
import emailjs from '@emailjs/browser';

type Message = {
  id: number;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
};

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: "Hello! I'm your AI beauty assistant. ✨ How can I help you today?",
      timestamp: new Date(),
    }
  ]);
  const [step, setStep] = useState(0); // 0: Name, 1: Service, 2: Contact, 3: Email, 4: Results, 5: Sent
  const [details, setDetails] = useState({ name: '', service: '', contact: '', email: '' });
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const addMessage = (text: string, type: 'bot' | 'user') => {
    setMessages(prev => [...prev, { id: Date.now(), text, type, timestamp: new Date() }]);
  };

  const handleAction = (type: 'wa' | 'email') => {
    setIsTyping(true);
    
    if (type === 'email') {
      addMessage("Sending your inquiry automatically...", 'bot');
      
      const templateParams = {
        to_email: EMAIL_CONFIG.TO_EMAIL,
        from_name: details.name,
        from_email: details.email,
        phone: details.contact,
        service: details.service,
        message: `Inquiry for ${details.service} from ${details.name}.`,
      };

      emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      ).then(
        () => {
          setIsTyping(false);
          addMessage("✅ Inquiry sent successfully! We'll be in touch soon.", 'bot');
          setStep(5);
        },
        (error) => {
          setIsTyping(false);
          console.error('EmailJS Error:', error);
          addMessage("❌ Automatic sending failed. Opening your mail app instead...", 'bot');
          
          const emailSubject = encodeURIComponent(`New Beauty Inquiry: ${details.name}`);
          const emailBody = encodeURIComponent(
            `Name: ${details.name}\nService: ${details.service}\nPhone: ${details.contact}\nEmail: ${details.email}`
          );
          window.location.href = `mailto:${EMAIL_CONFIG.TO_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
          setStep(5);
        }
      );
    } else {
      setIsTyping(false);
      const whatsappMessage = encodeURIComponent(
        `*New Inquiry from ButyParlar AI*%0A%0A` +
        `👤 *Name:* ${details.name}%0A` +
        `💇 *Service:* ${details.service}%0A` +
        `📱 *Phone:* ${details.contact}%0A` +
        `📧 *Email:* ${details.email}%0A%0A` +
        `_Sent via AI Beauty Assistant_`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
      addMessage("✅ WhatsApp inquiry opened! Please press send in the app.", 'bot');
      setStep(5);
    }
  };

  const processStep = (input: string) => {
    const text = input.trim();
    if (!text) return;

    addMessage(text, 'user');
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (step === 0) {
        setDetails(prev => ({ ...prev, name: text }));
        addMessage(`Nice to meet you, ${text}! Which service are you interested in? (Hair, Makeup, Spa, etc.)`, 'bot');
        setStep(1);
      } else if (step === 1) {
        setDetails(prev => ({ ...prev, service: text }));
        addMessage("Great choice! Please provide your phone number so we can reach out to you.", 'bot');
        setStep(2);
      } else if (step === 2) {
        setDetails(prev => ({ ...prev, contact: text }));
        addMessage("Almost there! Finally, what is your email address?", 'bot');
        setStep(3);
      } else if (step === 3) {
        setDetails(prev => ({ ...prev, email: text }));
        addMessage("Thank you! I've prepared your details. Click below to confirm via WhatsApp or Email.", 'bot');
        setStep(4);
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-pearl-100 overflow-hidden animate-scale-in origin-bottom-right flex flex-col">
          <div className="bg-[#075e54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 relative">
                <span className="text-xl">🤵</span>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#075e54]"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm">ButyParlar AI Assistant</h3>
                <p className="text-[10px] opacity-80">Online | Replies instantly</p>
              </div>
            </div>
            <button onClick={toggleChat} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>
          </div>

          <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-[#e5ddd5] custom-scrollbar flex flex-col">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                  m.type === 'bot'
                    ? 'bg-white rounded-tl-none self-start mr-auto'
                    : 'bg-[#dcf8c6] rounded-tr-none self-end ml-auto'
                }`}
              >
                <p className="text-black">{m.text}</p>
                <p className="text-[10px] opacity-40 text-right mt-1">
                  {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))}
            {isTyping && (
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] self-start mr-auto animate-pulse">
                <p className="italic text-xs text-pearl-400">AI is typing...</p>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-pearl-100">
            {step === 4 ? (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleAction('wa')}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-2xl font-bold hover:bg-[#128c7e] transition-colors shadow-lg"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                  <span>Send to WhatsApp</span>
                </button>
                <button
                  onClick={() => handleAction('email')}
                  className="flex items-center justify-center gap-2 w-full bg-accent text-white py-3 rounded-2xl font-bold hover:bg-accent-dark transition-colors shadow-lg"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
              </div>
            ) : step === 5 ? (
              <div className="flex flex-col gap-2">
                <p className="text-center text-xs font-semibold text-green-600 mb-2">Inquiry Processed! ✨</p>
                <button 
                  onClick={() => {
                    setStep(0);
                    setMessages([{ id: Date.now(), type: 'bot', text: "Hello again! I'm ready for another inquiry. What is your name?", timestamp: new Date() }]);
                  }}
                  className="w-full bg-pearl-100 text-black py-3 rounded-2xl font-bold hover:bg-pearl-200 transition-colors"
                >
                  Start New Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  processStep(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <div className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-pearl-400">
                    {step === 0 && <FontAwesomeIcon icon={faUser} className="w-3 h-3" />}
                    {step === 1 && <FontAwesomeIcon icon={faScissors} className="w-3 h-3" />}
                    {step === 2 && <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />}
                    {step === 3 && <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />}
                  </div>
                  <input
                    type={step === 3 ? "email" : "text"}
                    required
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={
                      step === 0 ? "Enter your name..." :
                      step === 1 ? "Which service?" :
                      step === 2 ? "Enter phone number..." :
                      "Enter your email..."
                    }
                    className="w-full pl-9 pr-4 py-3 rounded-2xl border border-pearl-100 bg-pearl-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#075e54]/20 focus:border-[#075e54] transition-all text-black"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-11 h-11 bg-[#075e54] text-white rounded-full flex items-center justify-center hover:bg-[#128c7e] transition-colors disabled:opacity-50"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                </button>
              </form>
            )}
            <p className="text-center text-[10px] text-pearl-400 mt-2">ButyParlar AI - Trusted Booking Assistant</p>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-soft group"
      >
        {showNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
          </span>
        )}
        
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} className="w-7 h-7" />
        ) : (
          <svg viewBox="0 0 448 512" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.8 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        )}
        
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-pearl-100 whitespace-nowrap pointer-events-none">
            Chat with AI Assistant 🤖
          </span>
        )}
      </button>
    </div>
  );
}
