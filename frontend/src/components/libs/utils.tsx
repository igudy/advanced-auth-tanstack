import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ClassNames = string | number | boolean | undefined | null;

// type ClassNames to represent the valid types for class names.
// The ...inputs parameter is annotated with ClassNames[], ensuring that the function accepts an array of values that match the defined types.
// The return type of the function is explicitly set to string to indicate that the function returns a string (class names).
export function cn(...inputs: ClassNames[]): string {
  return twMerge(clsx(inputs));
}
