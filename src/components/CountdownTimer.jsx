import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Chhath Puja 2025 starts on October 25, 2025 at 6:00 AM IST
    // Chhath Puja 2025 ends on October 28, 2025 at 9:00 AM IST
    const targetDate = new Date('2025-10-28T09:00:00+05:30');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-medium text-xs">
      Chhath Puja begins in <strong>{timeLeft.days}</strong>day <strong>{String(timeLeft.hours).padStart(2, '0')}</strong>:<strong>{String(timeLeft.minutes).padStart(2, '0')}</strong>:<strong>{String(timeLeft.seconds).padStart(2, '0')}</strong>
    </span>
  );
};

export default CountdownTimer;