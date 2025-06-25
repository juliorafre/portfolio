import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const randomBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const range = (start: number, end: number, step = 1) => {
  const output: number[] = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const formatDate = (date: string | Date) => {
  if (!date) return '';

  let dateObj: Date;

  if (typeof date === 'string') {
    // Check if it's a date-only string (YYYY-MM-DD format)
    const dateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (dateOnlyRegex.test(date)) {
      // For date-only strings, create date in local timezone to avoid UTC conversion issues
      const [year, month, day] = date.split('-').map(Number);
      dateObj = new Date(year, month - 1, day); // month is 0-indexed
    } else {
      // For other string formats (with time), use regular Date constructor
      dateObj = new Date(date);
    }
  } else {
    // For Date objects, use as-is
    dateObj = date;
  }

  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};


/**
 * Formats the distance from a given date to now in a human-readable format
 * @param date - The date to compare with now (can be Date object, string, or number)
 * @param options - Configuration options for formatting
 * @returns A human-readable string representing the time distance
 * 
 * @example
 * formatDistanceToNow(new Date()) // "just now"
 * formatDistanceToNow(new Date(Date.now() - 1000 * 60 * 5)) // "5 minutes ago"
 * formatDistanceToNow(new Date(Date.now() + 1000 * 60 * 30)) // "in 30 minutes"
 */
export const formatDistanceToNow = (
  date: Date | string | number,
  options: {
    addSuffix?: boolean;
    includeSeconds?: boolean;
    locale?: 'en' | 'es';
  } = {}
): string => {
  const {
    addSuffix = true,
    includeSeconds = false,
    locale = 'en'
  } = options;

  const now = new Date();
  const targetDate = new Date(date);

  // Validate date
  if (isNaN(targetDate.getTime())) {
    return 'Invalid date';
  }

  const diffInMs = now.getTime() - targetDate.getTime();
  const absDiffInMs = Math.abs(diffInMs);
  const isFuture = diffInMs < 0;

  // Time units in milliseconds
  const units = {
    year: 365 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };

  // Localization
  const translations = {
    en: {
      justNow: 'just now',
      ago: 'ago',
      in: 'in',
      year: 'year',
      years: 'years',
      month: 'month',
      months: 'months',
      week: 'week',
      weeks: 'weeks',
      day: 'day',
      days: 'days',
      hour: 'hour',
      hours: 'hours',
      minute: 'minute',
      minutes: 'minutes',
      second: 'second',
      seconds: 'seconds',
    },
    es: {
      justNow: 'ahora mismo',
      ago: 'hace',
      in: 'en',
      year: 'año',
      years: 'años',
      month: 'mes',
      months: 'meses',
      week: 'semana',
      weeks: 'semanas',
      day: 'día',
      days: 'días',
      hour: 'hora',
      hours: 'horas',
      minute: 'minuto',
      minutes: 'minutos',
      second: 'segundo',
      seconds: 'segundos',
    },
  };

  const t = translations[locale];

  // Handle "just now" case
  if (!includeSeconds && absDiffInMs < units.minute) {
    return t.justNow;
  }

  if (includeSeconds && absDiffInMs < 10 * 1000) {
    return t.justNow;
  }

  // Find the appropriate unit
  for (const [unitName, unitMs] of Object.entries(units)) {
    if (absDiffInMs >= unitMs || unitName === 'second') {
      const value = Math.floor(absDiffInMs / unitMs);

      // Skip seconds if includeSeconds is false and we're under a minute
      if (unitName === 'second' && !includeSeconds) {
        return t.justNow;
      }

      // Get the correct translation key
      const isPlural = value !== 1;
      const unitKey = unitName as keyof typeof t;
      const pluralKey = `${unitName}s` as keyof typeof t;
      const unitText = isPlural ? t[pluralKey] : t[unitKey];

      if (!addSuffix) {
        return `${value} ${unitText}`;
      }

      // Add suffix based on whether it's past or future
      if (locale === 'es') {
        return isFuture
          ? `${t.in} ${value} ${unitText}`
          : `${t.ago} ${value} ${unitText}`;
      } else {
        return isFuture
          ? `${t.in} ${value} ${unitText}`
          : `${value} ${unitText} ${t.ago}`;
      }
    }
  }

  return t.justNow;
};

/**
 * A simpler version that returns relative time in a more compact format
 * @param date - The date to compare with now
 * @returns A compact relative time string
 * 
 * @example
 * formatDistanceToNowCompact(new Date()) // "now"
 * formatDistanceToNowCompact(new Date(Date.now() - 1000 * 60 * 5)) // "5m"
 * formatDistanceToNowCompact(new Date(Date.now() - 1000 * 60 * 60 * 2)) // "2h"
 */
export const formatDistanceToNowCompact = (date: Date | string | number): string => {
  const now = new Date();
  const targetDate = new Date(date);

  if (isNaN(targetDate.getTime())) {
    return 'Invalid';
  }

  const diffInMs = Math.abs(now.getTime() - targetDate.getTime());

  const units = [
    { name: 'y', ms: 365 * 24 * 60 * 60 * 1000 },
    { name: 'mo', ms: 30 * 24 * 60 * 60 * 1000 },
    { name: 'w', ms: 7 * 24 * 60 * 60 * 1000 },
    { name: 'd', ms: 24 * 60 * 60 * 1000 },
    { name: 'h', ms: 60 * 60 * 1000 },
    { name: 'm', ms: 60 * 1000 },
    { name: 's', ms: 1000 },
  ];

  if (diffInMs < 1000) {
    return 'now';
  }

  for (const unit of units) {
    if (diffInMs >= unit.ms) {
      const value = Math.floor(diffInMs / unit.ms);
      return `${value}${unit.name}`;
    }
  }

  return 'now';
};
