'use client';

export const CURRENT_DOMAIN = typeof window !== 'undefined' && window.location.hostname;

export const CURRENT_PORT = typeof window !== 'undefined' && window.location.port;

export const USER_LANGUAGES = (typeof navigator !== 'undefined' && navigator.languages) || ['en-AU'];

export const USER_LOCALE = USER_LANGUAGES[0];

export const USER_LANGUAGE_CODE = USER_LOCALE.substring(0, 2);

export const USER_COUNTRY_CODE = USER_LOCALE.substring(3);

// export default {
//   CURRENT_DOMAIN,
//   CURRENT_PORT,
//   USER_LANGUAGES,
//   USER_LOCALE,
//   USER_LANGUAGE_CODE,
//   USER_COUNTRY_CODE,
// };
