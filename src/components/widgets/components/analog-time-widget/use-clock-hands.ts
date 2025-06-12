import { useEffect, useRef } from 'react';

const useClockHands = () => {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourAngle = (hours * 30) + (minutes * 0.5);
      const minuteAngle = minutes * 6;
      const secondAngle = seconds * 6;

      if (hourRef.current) hourRef.current.style.transform = `rotate(${hourAngle}deg)`;
      if (minuteRef.current) minuteRef.current.style.transform = `rotate(${minuteAngle}deg)`;
      if (secondRef.current) secondRef.current.style.transform = `rotate(${secondAngle}deg)`;
    }

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { hourRef, minuteRef, secondRef };
};

export default useClockHands;