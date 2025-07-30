import { clsx } from 'clsx';

// Define ClassValue type similar to what clsx expects
type ClassValue = string | number | boolean | undefined | null | Record<string, any> | ClassValue[];

export function classNames(...classes: ClassValue[]): string {
  return clsx(...classes);
}
