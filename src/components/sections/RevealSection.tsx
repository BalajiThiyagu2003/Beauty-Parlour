import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/utils';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export function RevealSection({ children, className, stagger }: RevealSectionProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        stagger ? 'reveal-stagger' : 'reveal',
        inView && 'revealed',
        className
      )}
    >
      {children}
    </div>
  );
}
