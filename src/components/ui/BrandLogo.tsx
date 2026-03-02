import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  link?: boolean;
}

/**
 * ButyParlar brand logo – consistent mark across the site
 */
export function BrandLogo({ className = 'w-10 h-10', link = false }: BrandLogoProps) {
  const logo = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Outer Ring */}
      <circle cx="50" cy="50" r="48" stroke="url(#logo-gradient)" strokeWidth="4" />
      
      {/* Stylized 'B' with floral curves */}
      <path
        d="M35 25V75M35 25H55C65 25 70 32 70 40C70 48 65 50 55 50M35 50H58C68 50 75 58 75 67C75 76 68 75 58 75H35"
        stroke="url(#logo-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Decorative floral swirl */}
      <path
        d="M65 20C75 25 80 40 75 55C70 70 55 80 40 75"
        stroke="url(#logo-accent-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />

      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4AF37" /> {/* Gold */}
          <stop offset="0.5" stopColor="#E6BE8A" /> {/* Rose Gold */}
          <stop offset="1" stopColor="#B8860B" /> {/* Dark Gold */}
        </linearGradient>
        <linearGradient id="logo-accent-gradient" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD700" />
          <stop offset="1" stopColor="#B8860B" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (link) {
    return <Link to="/" aria-label="ButyParlar Home" className="inline-block">{logo}</Link>;
  }
  return logo;
}
