import { USER_COUNTRY_CODE, USER_LOCALE } from '../constants/appEnvironment';
import { IntlCountryCurrencyMap, IntlCurrencies } from './Internationalization/Currencies';

export const USER_CURRENCY = IntlCountryCurrencyMap[USER_COUNTRY_CODE] || 'AUD';

export const intlCurrencyFormatter = (): Intl.NumberFormat => new Intl.NumberFormat(USER_LOCALE, { style: 'currency', currency: USER_CURRENCY });

export const intlNumberFormatter = (): Intl.NumberFormat => new Intl.NumberFormat(USER_LOCALE);

/**
 * Returns a decimal number in the correct internationalized format based on the user's locale
 *
 * @param decimalNumber - The decimal number to be formatted
 * @returns A formatted number as a string
 */
export const formatNumberForLocale = (decimalNumber: number): string => intlNumberFormatter().format(decimalNumber);

/**
 * Returns a decimal number in the correct internationalized currency format based on the user's locale
 *
 * @param value - The decimal number to be formatted
 * @returns A formatted number with currency symbol as a string
 */
export const formatAsCurrencyForLocale = (value: number): string => {
  try {
    return `${ value < 0 ? '-' : '' }${ intlCurrencyFormatter().format(Math.abs(value)) }`;
  } catch (e) {
    /* eslint-disable-next-line */
    console.log('formatAsCurrencyForLocale error', e);
    return `${ value < 0 ? '-' : '' }$${ Math.abs(value).toFixed(2) }`;
  }
};

export const getNumberAbbreviation = (value: number): string => {
  if (value >= 1000 && value < 1000000) {
    return 'k';
  }
  if (value >= 1000000) {
    return 'm';
  }
  return '';
};

export const formatRoundedNumberWithAbbreviation = (value: number): string => {
  if (value >= 1000 && value < 1000000) {
    return `${ Math.round(value / 1000).toFixed(0) }k`;
  }
  if (value >= 1000000) {
    return `${ Math.round(value / 1000000).toFixed(0) }m`;
  }
  return value.toFixed(2);
};

export const formatNumberWithAbbreviation = (value: number, precision?: number | undefined): string => {
  if (value >= 1000 && value < 1000000) {
    return `${ (value / 1000).toFixed(typeof precision !== 'undefined' ? precision : 2) }k`;
  }
  if (value >= 1000000) {
    return `${ (value / 1000000).toFixed(typeof precision !== 'undefined' ? precision : 2) }m`;
  }
  return value.toFixed(typeof precision !== 'undefined' ? precision : 2);
};

export const formatNumberForChartAxis = (value: number, maxValue: number): string => {
  if (maxValue >= 1000 && maxValue < 1000000) {
    return `${ Math.round(value / 1000).toFixed(0) }k`;
  }
  if (maxValue >= 1000000) {
    return `${ Math.round(value / 1000000).toFixed(0) }m`;
  }
  return value.toFixed(2);
};

export const formatAsSimpleCurrencyForChartAxis = (value: number, maxValue: number): string => {
  const formattedAmount = formatNumberForChartAxis(value, maxValue);
  return `$${ formattedAmount }`;
};

export const formatAsInternationalCurrencyForChartAxis = (value: number, maxValue: number): string => {
  const { symbol } = IntlCurrencies[USER_COUNTRY_CODE] || { symbol: '$' };
  const formattedAmount = formatNumberForChartAxis(value, maxValue);
  return `${ symbol }${ formattedAmount }`;
};

export const formatAsCurrencyWithAbbreviation = (value: number): string => {
  const { symbol } = IntlCurrencies[USER_COUNTRY_CODE] || { symbol: '$' };
  const formattedAmount = formatNumberWithAbbreviation(value);
  return `${ symbol }${ formattedAmount }`;
};
/**
 * Takes a file size in bytes from a file input field and formats it into user-friendly sizes.
 * https://www.gbmb.org/mb-to-bytes
 *
 * @param fileSize - The file size number in bytes to be formatted
 * @returns A formatted number with user-friendly units
 */
export const formatFileSize = (fileSize: number): string => {
  if (fileSize < 1024) {
    return `${ fileSize } bytes`;
  }
  if (fileSize >= 1024 && fileSize < 1048576) {
    return `${ (fileSize / 1024).toFixed(1) } KB`;
  }
  if (fileSize >= 1048576 && fileSize < 1e9) {
    return `${ (fileSize / 1048576).toFixed(1) } MB`;
  }
  return `${ (fileSize / 1e9).toFixed(1) } GB`;
};

export default {
  formatNumberForLocale,
  formatAsCurrencyForLocale
};
