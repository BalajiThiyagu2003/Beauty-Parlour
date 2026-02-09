import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  link?: boolean;
}

/**
 * ButyParlar brand logo – consistent mark across the site
 */
export function BrandLogo({ className = 'w-10 h-10', link = true }: BrandLogoProps) {
  const logo = (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="24" cy="24" r="22" fill="url(#brand-gradient)" stroke="#b8860b" strokeWidth="1.5" />
      <path
        d="M24 14c-2 0-4 1.5-5 3.5l-2 4c-.5 1 .2 2 1.3 2h11.4c1.1 0 1.8-1 1.3-2l-2-4C28 15.5 26 14 24 14z"
        fill="#fdf8e8"
      />
      <ellipse cx="24" cy="28" rx="6" ry="4" fill="#fdf8e8" />
      <path d="M18 32v4c0 1 1 2 2 2h8c1 0 2-1 2-2v-4" fill="#fdf8e8" />
      <defs>
        <linearGradient id="brand-gradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0e0a8" />
          <stop offset="0.5" stopColor="#d4a72a" />
          <stop offset="1" stopColor="#b8860b" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (link) {
    return <Link to="/" aria-label="ButyParlar Home">{logo}</Link>;
  }
  return logo;
}
