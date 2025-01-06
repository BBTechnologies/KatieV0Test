import React from 'react';
import parse from 'html-react-parser';

export const richTextParser = (richText: string, supportEscapedCharacters: boolean): string | React.JSX.Element | React.JSX.Element[] => {
  // Adjusts text to replace line breaks with <br/> tags
  const adjustedText = richText.split('\r\n').join('<br/>');
  if (supportEscapedCharacters) {
    return parse(adjustedText);
  }
  return parse(richText);
};

/**
 * Takes a string and returns it with the first character capitalized and the remaining characters as lowercase.
 *
 * @param {string} pString - A string of text.
 * @returns {string} The capitalized string or the unchanged pString if anything other than a string is sent to it.
 */
export const capitalize = (pString: string): string => `${ pString.substring(0, 1).toUpperCase() }${ pString.substring(1).toLowerCase() }`;

/**
 * Capitalizes the first letter of the given string.
 *
 * @param {string} pString - A string of text.
 * @returns {string} The string with the first letter capitalized, or the unchanged pString if it's not a string.
 */
export const capitalizeFirstLetter = (pString: string): string => `${ pString.substring(0, 1).toUpperCase() }${ pString.substring(1) }`;

/**
 * Converts the first letter of the given string to lowercase.
 *
 * @param {string} pString - A string of text.
 * @returns {string} The string with the first letter converted to lowercase, or the unchanged pString if it's not a string.
 */
export const lowerCaseFirstLetter = (pString: string): string => `${ pString.substring(0, 1).toLowerCase() }${ pString.substring(1) }`;

/**
 * Determines if "an" should be used instead of "a" before the given word.
 *
 * @param {string} word - The word to check.
 * @returns {boolean} True if "an" should be used, false otherwise.
 */
export const useAnInsteadOfA = (word: string): boolean => {
  const lettersRequiringAn = ['a', 'e', 'i', 'o', 'u', 'h'];
  const firstLetter = word.substring(0, 1).toLowerCase();
  return lettersRequiringAn.includes(firstLetter);
};

export const splitCamelCase = (pString: string): string => pString
// Single regex to handle all cases: lowercase followed by uppercase/number, or number followed by letter
  .replace(/([a-z])([A-Z0-9])|([0-9])([a-zA-Z])/g, '$1$3 $2$4')
// Insert a space between capital letters and lowercase letters where missing
  .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
// Convert the entire string to lowercase for consistency
  .toLowerCase();

export const pluralize = (pString: string): string => {
  if (pString.endsWith('y')) {
    // If the word ends with 'y', replace 'y' with 'ies'
    return `${ pString.slice(0, -1) }ies`;
  } if (pString.endsWith('s') || pString.endsWith('x') || pString.endsWith('z') || pString.endsWith('ch') || pString.endsWith('sh')) {
    // If the word ends with s, x, z, ch, or sh, add 'es'
    return `${ pString }es`;
  }
  // For other cases, just add 's'
  return `${ pString }s`;
};

export const pluralizeIfNeeded = (pString: string, count: number): string => {
  if (count && count > 1) {
    return pluralize(pString);
  }
  return pString;
};

export const getInitialsOrAcronym = (pString: string): string => {
  return pString.split(' ').map((piece) => capitalize(piece.substring(0, 1))).join('');
};
