"use client";

import { useEffect, useState } from "react";

export const Hour = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const chileTime = new Intl.DateTimeFormat("es-CL", {
        timeZone: "America/Santiago",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

      const [hourStr, minuteStr] = chileTime.split(":");
      setHours(Number.parseInt(hourStr, 10));
      setMinutes(Number.parseInt(minuteStr, 10));
    };

    updateTime();

    // Update every minute
    const interval = setInterval(updateTime, 60_000);

    return () => clearInterval(interval);
  }, []);

  if (!(hours || minutes)) {
    return null;
  }

  return (
    <time className="text-neutral-600 text-sm dark:text-neutral-400">
      {String(hours).padStart(2, "0")}
      <span className="animate-doubledot">:</span>
      {String(minutes).padStart(2, "0")} CL
    </time>
  );
};
