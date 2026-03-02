import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCut,
  faSprayCanSparkles,
  faHandSparkles,
  faFaceSmile,
  faSpa,
  faPalette,
  faUser,
  faUserLarge,
  faChild,
  faFire,
  faStar,
  faWind,
  faShirt,
  faBrush,
  faGem,
  faLeaf,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/ui/Button';
import { RevealSection } from '../components/sections/RevealSection';
import { images } from '../lib/images';

type Category = 'girls' | 'boys' | 'both';

const girlsServices = [
  { icon: faCut, title: 'Haircut & Styling', description: 'Trendy cuts, layers, and styling for every hair type.', category: 'girls' as Category, image: images.serviceHair },
  { icon: faSprayCanSparkles, title: 'Hair Colour', description: 'Full colour, highlights, balayage, and colour correction.', category: 'girls' as Category, image: images.serviceHair },
  { icon: faHandSparkles, title: 'Manicure & Pedicure', description: 'Nail care, gel polish, and nail art for hands and feet.', category: 'girls' as Category, image: images.serviceNails },
  { icon: faFaceSmile, title: 'Skincare & Facials', description: 'Cleansing, facials, and treatments for glowing skin.', category: 'girls' as Category, image: images.serviceSkin },
  { icon: faSpa, title: 'Bridal & Events', description: 'Complete bridal makeup, hairstyling, and special occasion packages.', category: 'girls' as Category, image: images.serviceBridal },
  { icon: faPalette, title: 'Makeup', description: 'Everyday, party, and professional makeup application.', category: 'girls' as Category, image: images.serviceMakeup },
  { icon: faWind, title: 'Threading', description: 'Precision brow and face threading for clean, defined looks.', category: 'girls' as Category, image: images.serviceSkin },
  { icon: faFire, title: 'Waxing', description: 'Full body waxing with premium wax for smooth, long-lasting results.', category: 'girls' as Category, image: images.serviceSkin },
  { icon: faStar, title: 'Bleach & Cleanup', description: 'Face bleach and deep cleanup for even, radiant skin.', category: 'girls' as Category, image: images.serviceSkin },
  { icon: faBrush, title: 'Henna / Mehndi', description: 'Traditional and contemporary mehndi designs for hands and feet.', category: 'girls' as Category, image: images.serviceBridal },
  { icon: faLeaf, title: 'Hair Spa', description: 'Nourishing hair spa and treatments for healthy, shiny hair.', category: 'girls' as Category, image: images.serviceHair },
  { icon: faGem, title: 'Body Massage', description: 'Relaxing body massage and aromatherapy for total wellness.', category: 'girls' as Category, image: images.serviceSpa },
  { icon: faPalette, title: 'Party Makeup', description: 'Stunning party and evening makeup that lasts all night.', category: 'girls' as Category, image: images.serviceMakeup },
  { icon: faHandSparkles, title: 'Nail Art', description: 'Creative nail art, extensions, and premium polish.', category: 'girls' as Category, image: images.serviceNails },
  { icon: faBolt, title: 'Keratin & Smoothing', description: 'Keratin treatments and hair smoothing for frizz-free shine.', category: 'girls' as Category, image: images.serviceHair },
];

const boysServices = [
  { icon: faCut, title: "Men's Haircut", description: 'Sharp cuts, fades, and modern styles by expert barbers.', category: 'boys' as Category, image: images.serviceMensHair },
  { icon: faWind, title: 'Beard Trim & Shape', description: 'Beard grooming, trim, and shape for a polished look.', category: 'boys' as Category, image: images.serviceMensBeard },
  { icon: faFaceSmile, title: "Men's Facial", description: 'Deep cleansing and facials designed for men\'s skin.', category: 'boys' as Category, image: images.serviceSkin },
  { icon: faSprayCanSparkles, title: 'Hair Colour (Men)', description: 'Natural greys coverage and subtle colour for men.', category: 'boys' as Category, image: images.serviceMensHair },
  { icon: faLeaf, title: 'Scalp Treatment', description: 'Scalp detox and nourishing treatments for healthy hair.', category: 'boys' as Category, image: images.serviceMensHair },
  { icon: faCut, title: 'Hair Styling (Men)', description: 'Styling, blow-dry, and grooming for events and daily wear.', category: 'boys' as Category, image: images.serviceMensHair },
  { icon: faShirt, title: 'Grooming Package', description: 'Haircut, beard, facial combo for a complete groomed look.', category: 'boys' as Category, image: images.serviceMensBeard },
];

const bothServices = [
  { icon: faCut, title: 'Haircut & Styling', description: 'Classic cuts and styling for every preference.', category: 'both' as Category, image: images.serviceHair },
  { icon: faSprayCanSparkles, title: 'Hair Colour', description: 'Expert colour and highlights for all.', category: 'both' as Category, image: images.serviceHair },
  { icon: faFaceSmile, title: 'Skincare & Facials', description: 'Facials tailored to your skin type.', category: 'both' as Category, image: images.serviceSkin },
];

const serviceList = (list: typeof girlsServices) =>
  list.map((service, i) => (
    <div
      key={service.title}
      className="group bg-white border border-pearl-200 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover-lift transition-all duration-300 animate-scale-in"
      style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-pearl-100">
        <img src={service.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-accent">
            <FontAwesomeIcon icon={service.icon} className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="font-display text-xl font-semibold text-black mb-2">{service.title}</h2>
        <p className="text-black text-sm mb-6 line-clamp-2 leading-relaxed">{service.description}</p>
        <Link to="/appointment">
          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white rounded-full">Book now</Button>
        </Link>
      </div>
    </div>
  ));

export function ServicesPage() {
  const [tab, setTab] = useState('girls');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <RevealSection className="text-center mb-12">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-black mb-4 animate-fade-in-up uppercase tracking-tighter">Our Services</h1>
        <p className="text-black max-w-2xl mx-auto animate-fade-in-up text-lg" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          For girls & boys — hair, skin, nails, makeup & grooming. Choose a category and book.
        </p>
      </RevealSection>

      <RevealSection>
        <Tabs.Root value={tab} onValueChange={setTab} className="w-full">
          <Tabs.List className="flex flex-wrap gap-2 p-1.5 bg-pearl-100 rounded-full w-full max-w-lg mx-auto mb-16 border border-pearl-200 shadow-inner">
            <Tabs.Trigger
              value="girls"
              className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-sm data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:shadow-lg text-pearl-500 hover:text-accent transition-all duration-300"
            >
              <FontAwesomeIcon icon={faUserLarge} className="w-4 h-4" />
              Girls
            </Tabs.Trigger>
            <Tabs.Trigger
              value="boys"
              className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-sm data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:shadow-lg text-pearl-500 hover:text-accent transition-all duration-300"
            >
              <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
              Boys
            </Tabs.Trigger>
            <Tabs.Trigger
              value="both"
              className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-sm data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:shadow-lg text-pearl-500 hover:text-accent transition-all duration-300"
            >
              <FontAwesomeIcon icon={faChild} className="w-4 h-4" />
              Both
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="girls" className="outline-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceList(girlsServices)}
            </div>
          </Tabs.Content>

          <Tabs.Content value="boys" className="outline-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceList(boysServices)}
            </div>
          </Tabs.Content>

          <Tabs.Content value="both" className="outline-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceList(bothServices)}
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </RevealSection>

      <RevealSection className="mt-20 text-center bg-white p-12 rounded-3xl border border-pearl-200">
        <p className="text-black mb-6 text-lg">Ready to experience the best grooming? Choose a service and pick your slot.</p>
        <Link to="/appointment">
          <span className="btn-primary inline-flex text-lg px-12 py-4">Book Appointment</span>
        </Link>
      </RevealSection>
    </div>
  );
}
