import { useState, useEffect } from 'react';

// Custom hook to get the current date and time, and update it every 30 seconds
// Returns a string with the current date in "WEEKDAY, MONTH DAY" format
// Returns a string with the current time in 24-hour format
export function useDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const day = date.toLocaleDateString(Deno.env.get('USER_LOCALE_STRING'), {
    weekday: 'long',
  });
  const dayNumber = date.toLocaleDateString(Deno.env.get('USER_LOCALE_STRING'), { day: 'numeric' });
  const month = date.toLocaleDateString(Deno.env.get('USER_LOCALE_STRING'), {
    month: 'long',
  });

  const dateFormatted = `${day}, ${month} ${dayNumber}`;

  const time = date.toLocaleTimeString(Deno.env.get('USER_LOCALE_STRING'), {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
  });

  return { dateFormatted, time };
}
