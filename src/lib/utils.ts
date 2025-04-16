import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const randomBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};  
