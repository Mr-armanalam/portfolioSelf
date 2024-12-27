import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setWithExpiry (key:string, value:string, ttl:string) {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl, // `ttl` is time-to-live in milliseconds
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getWithExpiry (key:string) {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}
