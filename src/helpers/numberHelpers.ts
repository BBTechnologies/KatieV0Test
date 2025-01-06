/**
 * Returns a random number between zero and the maximum provided.
 *
 * @param max - The maximum number for the range
 * @returns a random number smaller than or equal to the maximum
 */
export const getRandomNumberBelow = (max: number): number => Math.floor(Math.random() * max);

/**
 * Returns a random number between a startNum and endNum where the possible result could include the bounds of the range.
 *
 * @param startNum - The minimum number for the range
 * @param endNum - The maximum number for the range
 * @returns a random number within and including the bounds of the range
 */
export const getRandomBetweenInclusive = (startNum: number, endNum: number): number => {
  const rangeSize = endNum - startNum + 1;
  return Math.floor(Math.random() * rangeSize) + startNum;
};

/**
 * Returns a random number between a startNum and endNum where the possible result cannot include the bounds of the range.
 *
 * @param startNum - The minimum number for the range
 * @param endNum - The maximum number for the range
 * @returns a random number within but not including the bounds of the range
 */
export const getRandomBetweenExclusive = (startNum: number, endNum: number): number => {
  const rangeSize = endNum - startNum - 1;

  if (rangeSize === 0) {
    return startNum + 0.5;
  }

  if (rangeSize < 0) {
    return startNum;
  }
  return Math.floor(Math.random() * rangeSize) + startNum + 1;
};

/**
 * Takes a string and hashes it. This is useful for faking a UID.
 *
 * @param pString - A string of text.
 * @returns a hash of the string.
 */
export const hashCode = (pString: string): number => {
  let hash = 0;
  let i;
  let chr;

  for (i = 0; i < pString.length; i += 1) {
    chr = pString.charCodeAt(i);
    // The bitwise operations used below are required to achieve the hashed formatting.
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + chr;
    // eslint-disable-next-line no-bitwise
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

/**
 * Rounds a number to the specified number of decimal points.
 *
 * @param num - The number to round
 * @param numDecimalPoints - The number of decimal places to round it to.
 * @returns A rounded number.
 */
export const roundToDecimal = (num: number, numDecimalPoints: number): number => {
  if (numDecimalPoints === 0) {
    return Math.trunc(num);
  }

  const roundingFactor = 10 ** numDecimalPoints;
  return Math.round(num * roundingFactor) / roundingFactor;
};

/**
 * Converts a number to a string with the specified number of digits.
 *
 * @param num - The number to round
 * @param numDigits - The number of digits it needs to be padded to in total.
 * @param padDirection - Whether to pad it to the left eg 005 or right eg 500. Default is left.
 * @param padCharacter - The character to use for the padding. Default is '0'.
 * @returns The number with padding applied to the left or right.
 */
export const formatNumberToMinDigits = (num: number, numDigits: number, padDirection: 'left' | 'right' = 'left', padCharacter: string = '0'): string => {
  const numberAsString = num.toString();
  const numberAsStringLength = numberAsString.length;
  const requiredPaddingLength = numDigits - numberAsStringLength;

  if (numberAsStringLength === numDigits) {
    return numberAsString;
  }

  if (numberAsStringLength > numDigits) {
    return padDirection === 'right'
      ? numberAsString.substring(0, numDigits)
      : numberAsString.substring(numberAsStringLength - numDigits);
  }

  let padding = new Array(requiredPaddingLength).fill(padCharacter).join('');
  if (padding.length > requiredPaddingLength) {
    padding = padding.substring(0, requiredPaddingLength);
  }
  return padDirection === 'right' ? `${ numberAsString }${ padding }` : `${ padding }${ numberAsString }`;
};

/**
 * Formats time from milliseconds to a digital clock format (HH:MM:SS).
 *
 * @param milliseconds - Time in milliseconds.
 * @returns A string representing the time in HH:MM:SS format.
 */
export const formatDigitalTime = (milliseconds: number): string => {
  const hours = Math.floor(milliseconds / 1000 / 60 / 60);
  const minutes = Math.floor((milliseconds - hours * 1000 * 60 * 60) / 1000 / 60);
  const seconds = Math.floor((milliseconds - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);

  const formattedHours = formatNumberToMinDigits(hours, 2);
  const formattedMinutes = formatNumberToMinDigits(minutes, 2);
  const formattedSeconds = formatNumberToMinDigits(seconds, 2);

  return `${ formattedHours }:${ formattedMinutes }:${ formattedSeconds }`;
};

export default {
  formatNumberToMinDigits,
  formatDigitalTime,
  getRandomBetweenInclusive,
  getRandomNumberBelow,
  getRandomBetweenExclusive,
  hashCode,
  roundToDecimal
};
