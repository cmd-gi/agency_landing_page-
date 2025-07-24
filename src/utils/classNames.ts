import { ClassValue, clsx } from 'clsx';

export function classNames(...classes: ClassValue[]): string {
  return clsx(...classes);
}
