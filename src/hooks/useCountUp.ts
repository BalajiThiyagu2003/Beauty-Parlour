import { useEffect, useState } from 'react';

export function useCountUp(end: number, durationMs = 1500, startOn = true): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOn) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, durationMs, startOn]);

  return count;
}
