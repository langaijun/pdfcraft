/**
 * Internationalization utilities
 * Re-exports all i18n configuration and utilities
 */

export {
  locales,
  defaultLocale,
  localeConfig,
  isRTL,
  isValidLocale,
  getLocaleFromPath,
  getLocalizedPath,
  type Locale,
} from './config';

export {
  isRTLLocale,
  getDirection,
  getRTLClasses,
  flipPosition,
  getLogicalProperty,
  getIconRotation,
} from './rtl';

export {
  loadMessages,
  loadEnglishMessages,
  getNestedValue,
  getTranslationWithFallback,
  mergeWithFallback,
  createTranslator,
  hasTranslation,
  getMissingKeys,
  type NestedMessages,
} from './fallback';

// Legacy exports for backward compatibility（仅中英）
export const SUPPORTED_LOCALES = ['zh', 'en'] as const;
export const DEFAULT_LOCALE = 'zh';
export const LOCALE_CONFIG = {
  en: { name: 'English', nativeName: 'English', direction: 'ltr' as const },
  zh: { name: '中文', nativeName: '简体中文', direction: 'ltr' as const },
};
