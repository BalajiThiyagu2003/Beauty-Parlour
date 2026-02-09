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
  { icon: faWind, title: 'Threading', description: 'Precision brow and face threading for clean, defined looks.', category: 'girls' as Category, image: images.modernGirl1 },
  { icon: faFire, title: 'Waxing', description: 'Full body waxing with premium wax for smooth, long-lasting results.', category: 'girls' as Category, image: images.serviceSkin },
  { icon: faStar, title: 'Bleach & Cleanup', description: 'Face bleach and deep cleanup for even, radiant skin.', category: 'girls' as Category, image: images.serviceSkin },
  { icon: faBrush, title: 'Henna / Mehndi', description: 'Traditional and contemporary mehndi designs for hands and feet.', category: 'girls' as Category, image: images.modernGirl2 },
  { icon: faLeaf, title: 'Hair Spa', description: 'Nourishing hair spa and treatments for healthy, shiny hair.', category: 'girls' as Category, image: images.serviceHair },
  { icon: faGem, title: 'Body Massage', description: 'Relaxing body massage and aromatherapy for total wellness.', category: 'girls' as Category, image: images.serviceSpa },
  { icon: faPalette, title: 'Party Makeup', description: 'Stunning party and evening makeup that lasts all night.', category: 'girls' as Category, image: images.serviceMakeup },
  { icon: faHandSparkles, title: 'Nail Art', description: 'Creative nail art, extensions, and premium polish.', category: 'girls' as Category, image: images.serviceNails },
  { icon: faBolt, title: 'Keratin & Smoothing', description: 'Keratin treatments and hair smoothing for frizz-free shine.', category: 'girls' as Category, image: images.serviceHair },
];

const boysServices = [
  { icon: faCut, title: "Men's Haircut", description: 'Sharp cuts, fades, and modern styles by expert barbers.', category: 'boys' as Category, image: images.serviceHair },
  { icon: faWind, title: 'Beard Trim & Shape', description: 'Beard grooming, trim, and shape for a polished look.', category: 'boys' as Category, image: images.serviceHair },
  { icon: faFaceSmile, title: "Men's Facial", description: 'Deep cleansing and facials designed for men\'s skin.', category: 'boys' as Category, image: images.serviceSkin },
  { icon: faSprayCanSparkles, title: 'Hair Colour (Men)', description: 'Natural greys coverage and subtle colour for men.', category: 'boys' as Category, image: images.serviceHair },
  { icon: faLeaf, title: 'Scalp Treatment', description: 'Scalp detox and nourishing treatments for healthy hair.', category: 'boys' as Category, image: images.serviceHair },
  { icon: faCut, title: 'Hair Styling (Men)', description: 'Styling, blow-dry, and grooming for events and daily wear.', category: 'boys' as Category, image: images.serviceHair },
  { icon: faShirt, title: 'Grooming Package', description: 'Haircut, beard, facial combo for a complete groomed look.', category: 'boys' as Category, image: images.serviceHair },
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
      className="group bg-royal-card border border-royal-border rounded-xl overflow-hidden hover:border-gold-600/50 hover-lift transition-all duration-300 animate-scale-in"
      style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-royal-darker">
        <img src={service.image} alt="" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-royal-dark/50 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gold-gradient/30 border border-gold-600/50 flex items-center justify-center text-gold-400 animate-pulse-glow">
            <FontAwesomeIcon icon={service.icon} className="w-7 h-7" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-display text-lg font-semibold text-white mb-2">{service.title}</h2>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.description}</p>
        <Link to="/appointment">
          <Button variant="outline" size="sm" className="w-full sm:w-auto">Book now</Button>
        </Link>
      </div>
    </div>
  ));

export function ServicesPage() {
  const [tab, setTab] = useState('girls');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <RevealSection className="text-center mb-12">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient mb-4 animate-fade-in-up">Our Services</h1>
        <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          For girls & boys — hair, skin, nails, makeup & grooming. Choose a category and book.
        </p>
      </RevealSection>

      <RevealSection>
        <Tabs.Root value={tab} onValueChange={setTab} className="w-full">
          <Tabs.List className="flex flex-wrap gap-2 p-1 bg-royal-card rounded-xl w-full max-w-lg mx-auto mb-12 border border-royal-border">
            <Tabs.Trigger
              value="girls"
              className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-sm data-[state=active]:bg-gold-gradient data-[state=active]:shadow data-[state=active]:text-royal-dark text-gray-400 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faUserLarge} className="w-4 h-4" />
              Girls
            </Tabs.Trigger>
            <Tabs.Trigger
              value="boys"
              className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-sm data-[state=active]:bg-gold-gradient data-[state=active]:shadow data-[state=active]:text-royal-dark text-gray-400 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
              Boys
            </Tabs.Trigger>
            <Tabs.Trigger
              value="both"
              className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-sm data-[state=active]:bg-gold-gradient data-[state=active]:shadow data-[state=active]:text-royal-dark text-gray-400 transition-all duration-300"
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

      <RevealSection className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Ready to book? Choose a service and pick your slot.</p>
        <Link to="/appointment">
          <Button size="lg">Book Appointment</Button>
        </Link>
      </RevealSection>
    </div>
  );
}
