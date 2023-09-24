import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncate = (input: string, count: number): string => {
  if (input.length <= count) {
    return input
  }

  return input.slice(0, count) + "..."
}
