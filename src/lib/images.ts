/**
 * Hero: Royal theme. Service/partner: Unsplash (Unsplash License).
 * Modern girls reference & branded product images for Trusted Partners.
 */
const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&fit=crop`;

/** Clearbit logo API for brand logos (trusted partners) */
const brandLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;

export const images = {
  hero: '/hero-royal.png',
  heroMobile: '/hero-royal.png',
  heroFallback: U('1560066984-138dadb4c035', 1400),
  about: U('1522337360788-8b13dee7a37e', 900),
  serviceHair: U('1595476108010-4f128def2581', 600),
  serviceSkin: U('1570179641594-0d87a3b45178', 600),
  serviceBridal: U('1512496015852-a1c1b5557340', 600),
  serviceMakeup: U('1522337360788-8b13dee7a37e', 600),
  serviceNails: U('1595476108010-4f128def2581', 500),
  serviceSpa: U('1570179641594-0d87a3b45178', 600),
  /* Modern girls / women reference (beauty, lifestyle) */
  modernGirl1: U('1494790108377-768d249a6b82', 600),
  modernGirl2: U('1524504388180-1c735da97452', 600),
  modernGirl3: U('1573496359142-b8d87734a5a2', 600),
  modernGirl4: U('1534528748775-ace87b84aee2', 600),
  modernGirl5: U('1529626455594-4ff0802cfbeb', 600),
  /* Brand logos / product images for Trusted Partners */
  brandLoreal: brandLogo('loreal.com'),
  brandOlaplex: brandLogo('olaplex.com'),
  brandMatrix: brandLogo('matrix.com'),
  brandMaybelline: brandLogo('maybelline.com'),
  brandNivea: brandLogo('nivea.com'),
  brandGarnier: brandLogo('garnier.com'),
  trustedPlaceholder: U('1557804506-669a67965ba0', 120),
} as const;
