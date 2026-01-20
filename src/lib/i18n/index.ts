import { browser } from '$app/environment';
import esTranslations from './es.json';
import enTranslations from './en.json';

// Define supported locales
export type Locale = 'es' | 'en';
export const defaultLocale: Locale = 'es';
export const supportedLocales: Locale[] = ['es', 'en'];

// Translation dictionaries
const translations: Record<Locale, Record<string, unknown>> = {
  es: esTranslations,
  en: enTranslations
};

// Simple reactive store implementation
type Subscriber<T> = (value: T) => void;

function createLocaleStore(initialValue: Locale) {
  let value = initialValue;
  const subscribers = new Set<Subscriber<Locale>>();

  // Initialize from localStorage on browser
  if (browser) {
    const stored = localStorage.getItem('locale') as Locale | null;
    if (stored && supportedLocales.includes(stored)) {
      value = stored;
    }
  }

  return {
    subscribe(callback: Subscriber<Locale>) {
      subscribers.add(callback);
      callback(value);
      return () => subscribers.delete(callback);
    },
    set(newValue: Locale) {
      if (supportedLocales.includes(newValue) && value !== newValue) {
        value = newValue;
        if (browser) {
          localStorage.setItem('locale', newValue);
        }
        subscribers.forEach((callback) => callback(value));
      }
    },
    get() {
      return value;
    }
  };
}

// Create the locale store
export const localeStore = createLocaleStore(defaultLocale);

/**
 * Get the current locale
 */
export function getLocale(): Locale {
  return localeStore.get();
}

/**
 * Set the current locale and persist to localStorage
 */
export function setLocale(locale: Locale): void {
  localeStore.set(locale);
}

/**
 * Get nested value from object using dot notation
 * Example: getNestedValue(obj, 'nav.services') returns obj.nav.services
 */
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

/**
 * Translation function - retrieves translation by key
 * Supports nested keys like 'nav.services'
 * Returns the key itself if translation not found
 */
export function t(key: string, locale?: Locale): string {
  const targetLocale = locale ?? localeStore.get();
  const translation = getNestedValue(translations[targetLocale], key);

  if (typeof translation === 'string') {
    return translation;
  }

  // Fallback to default locale if not found
  if (targetLocale !== defaultLocale) {
    const fallback = getNestedValue(translations[defaultLocale], key);
    if (typeof fallback === 'string') {
      return fallback;
    }
  }

  // Return the key if nothing found
  console.warn(`Translation missing for key: ${key}`);
  return key;
}

/**
 * Get translation object (for arrays or nested objects)
 * Returns undefined if not found
 */
export function tObject<T = unknown>(key: string, locale?: Locale): T | undefined {
  const targetLocale = locale ?? localeStore.get();
  const translation = getNestedValue(translations[targetLocale], key);

  if (translation !== undefined) {
    return translation as T;
  }

  // Fallback to default locale
  if (targetLocale !== defaultLocale) {
    const fallback = getNestedValue(translations[defaultLocale], key);
    if (fallback !== undefined) {
      return fallback as T;
    }
  }

  return undefined;
}
