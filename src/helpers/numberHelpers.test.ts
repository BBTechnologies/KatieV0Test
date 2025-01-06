/**
 * @jest-environment jsdom
 */

import {
  getRandomNumberBelow,
  formatDigitalTime,
  getRandomBetweenInclusive,
  getRandomBetweenExclusive,
  hashCode,
  roundToDecimal,
  formatNumberToMinDigits
} from './numberHelpers';

describe('GetRandomNumberBelow', () => {
  it('Returns a random number below a number', () => {
    expect(getRandomNumberBelow(5)).toBeLessThan(5);
  });
  it('Returns zero if the max is zero', () => {
    expect(getRandomNumberBelow(0)).toEqual(0);
  });
  it('Returns zero if the max is one', () => {
    expect(getRandomNumberBelow(1)).toEqual(0);
  });
});

describe('GetRandomBetweenInclusive', () => {
  it('Returns a random number below or including a number', () => {
    const testValue = getRandomBetweenInclusive(1, 5);
    expect(testValue).toBeGreaterThan(0);
    expect(testValue).toBeLessThan(6);
  });
  it('Returns zero if the range is zero', () => {
    const testValue = getRandomBetweenInclusive(0, 0);
    expect(testValue).toEqual(0);
  });
  it('Returns one if the range is one', () => {
    const testValue = getRandomBetweenInclusive(1, 1);
    expect(testValue).toEqual(1);
  });
});

describe('GetRandomBetweenExclusive', () => {
  it('Returns a random number between but not including the bounds', () => {
    const testValue = getRandomBetweenExclusive(1, 3);
    expect(testValue).toEqual(2);
  });
  it('Returns zero if the range is zero', () => {
    const testValue = getRandomBetweenExclusive(0, 0);
    expect(testValue).toEqual(0);
  });
  it('Returns one if the range is one', () => {
    const testValue = getRandomBetweenExclusive(1, 1);
    expect(testValue).toEqual(1);
  });
  it('Returns half way between if the range size is zero', () => {
    const testValue = getRandomBetweenExclusive(1, 2);
    expect(testValue).toEqual(1.5);
    const testValue2 = getRandomBetweenExclusive(3, 4);
    expect(testValue2).toEqual(3.5);
  });
});

describe('HashCode', () => {
  it('Turns a string into a hashcode', () => {
    expect(hashCode('fred')).toEqual(3151467);
  });
  it('Returns zero for an empty string', () => {
    expect(hashCode('')).toEqual(0);
  });
});

describe('RoundToDecimal', () => {
  it('Can format 1.23456789 to any number of decimal points', () => {
    expect(roundToDecimal(1.23456789, 3)).toEqual(1.235);
    expect(roundToDecimal(1.23456789, 2)).toEqual(1.23);
    expect(roundToDecimal(1.23456789, 1)).toEqual(1.2);
  });
});

describe('FormatNumberToMinDigits', () => {
  it('Can be used to pad numbers to the left', () => {
    expect(formatNumberToMinDigits(1, 2)).toEqual('01');
    expect(formatNumberToMinDigits(10, 2)).toEqual('10');
    expect(formatNumberToMinDigits(10, 3)).toEqual('010');
  });
  it('Can be used to pad numbers to the right', () => {
    expect(formatNumberToMinDigits(1, 2, 'right')).toEqual('10');
    expect(formatNumberToMinDigits(10, 2, 'right')).toEqual('10');
    expect(formatNumberToMinDigits(10, 3, 'right')).toEqual('100');
  });
  it('Can pad with any character', () => {
    expect(formatNumberToMinDigits(1, 2, 'left', 'A')).toEqual('A1');
    expect(formatNumberToMinDigits(10, 2, 'left', 'A')).toEqual('10');
    expect(formatNumberToMinDigits(10, 3, 'left', 'A')).toEqual('A10');

    expect(formatNumberToMinDigits(1, 2, 'right', 'A')).toEqual('1A');
    expect(formatNumberToMinDigits(10, 2, 'right', 'A')).toEqual('10');
    expect(formatNumberToMinDigits(10, 3, 'right', 'A')).toEqual('10A');
  });
});

describe('FormatDigitalTime', () => {
  it('Handles milliseconds of 0 value', () => {
    expect(formatDigitalTime(0)).toEqual('00:00:00');
  });

  it('Handles milliseconds of 1 hour value', () => {
    const oneHour = 1 * 1000 * 60 * 60;
    expect(formatDigitalTime(oneHour)).toEqual('01:00:00');
  });

  it('Handles milliseconds of 1 hour and 1 minute value', () => {
    const oneHourOneMinute = 1 * 1000 * 60 * 60 + 1 * 1000 * 60;
    expect(formatDigitalTime(oneHourOneMinute)).toEqual('01:01:00');
  });

  it('Handles milliseconds of 1 hour, 1 minute and 1 second value', () => {
    const oneHourOneMinuteOneSecond = 1 * 1000 * 60 * 60 + 1 * 1000 * 60 + 1 * 1000;
    expect(formatDigitalTime(oneHourOneMinuteOneSecond)).toEqual('01:01:01');
  });

  it('Handles milliseconds of 11 hour, 11 minute and 11 second value', () => {
    const elevenHourElevenMinuteElevenSecond = 11 * 1000 * 60 * 60 + 11 * 1000 * 60 + 11 * 1000;
    expect(formatDigitalTime(elevenHourElevenMinuteElevenSecond)).toEqual('11:11:11');
  });
});
