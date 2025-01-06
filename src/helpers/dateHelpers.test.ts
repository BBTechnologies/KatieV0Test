import {
  dateToShortIsoString,
  isValidDate,
  dateToShortReadableDate,
  dateToShortReadableMonth,
  timeStampToShortReadableDate
} from './dateHelpers';

describe('DateToShortIsoString: Format DateString into YYYY-MM-DD string', () => {
  it('should return the date in YYYY-MM-DD format', () => {
    const date = new Date('2024-06-05T00:00:00Z');
    const result = dateToShortIsoString(date);

    expect(result).toEqual('2024-06-05');
  });

  it('should handle invalid dates', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    dateToShortIsoString(new Date(undefined as unknown as string));

    expect(consoleSpy).toHaveBeenCalledWith('Invalid date format');
  });
});

describe('IsValidDate: Check if the date string is valid and the year is above a minimum threshold.', () => {
  it('should return true for a valid date string above the minimum year', () => {
    const dateString = '2024-06-05';
    const minDate = '2020-01-01';

    expect(isValidDate(dateString, minDate)).toBeTruthy();
  });

  it('should correctly validate date without minDate', () => {
    const dateString = '2020-01-01';

    expect(isValidDate(dateString)).toBeTruthy();
  });

  it('should return false for NaN date without minDate', () => {
    const dateString = NaN;

    expect(isValidDate(dateString as unknown as string)).toBeFalsy();
  });

  it('should return false for NaN date', () => {
    const dateString = NaN;
    const minDate = '2020-01-01';

    expect(isValidDate(dateString as unknown as string, minDate)).toBeFalsy();
  });

  it('should return false for undefined date without minDate', () => {
    const dateString = undefined;

    expect(isValidDate(dateString as unknown as string)).toBeFalsy();
  });

  it('should return false for undefined date', () => {
    const dateString = undefined;
    const minDate = '2020-01-01';

    expect(isValidDate(dateString as unknown as string, minDate)).toBeFalsy();
  });

  it('should return false for date with 0 without minDate', () => {
    const dateString = 0;

    expect(isValidDate(dateString as unknown as string)).toBeFalsy();
  });

  it('should return false for date with 0', () => {
    const dateString = 0;
    const minDate = '2020-01-01';

    expect(isValidDate(dateString as unknown as string, minDate)).toBeFalsy();
  });

  it('should return false for nullish date without minDate', () => {
    const dateString = null;

    expect(isValidDate(dateString as unknown as string)).toBeFalsy();
  });

  it('should return false for nullish date', () => {
    const dateString = null;
    const minDate = '2020-01-01';

    expect(isValidDate(dateString as unknown as string, minDate)).toBeFalsy();
  });

  it('should return false for a valid date string below the minimum year', () => {
    const dateString = '2019-12-31';
    const minDate = '2020-01-01';

    expect(isValidDate(dateString, minDate)).toBeFalsy();
  });

  it('should return false for an invalid date string', () => {
    const dateString = 'invalid-date';
    const minDate = '2020-01-01';

    expect(isValidDate(dateString, minDate)).toBeFalsy();
    expect(isValidDate(undefined as unknown as string, minDate)).toBeFalsy();
  });

  it('should return true for a valid date string exactly on the minimum year', () => {
    const dateString = '2020-01-01';
    const minDate = '2020-01-01';

    expect(isValidDate(dateString, minDate)).toBeTruthy();
  });

  it('should handle leap year dates correctly', () => {
    const dateString = '2024-02-29';
    const minDate = '2020-01-01';

    expect(isValidDate(dateString, minDate)).toBeTruthy();
  });
});

describe('DateToShortReadableDate', () => {
  it('should return the date in DD MMM YYYY format', () => {
    const date = new Date('2024-06-05T00:00:00Z');
    const result = dateToShortReadableDate(date);

    expect(result).toEqual('05 Jun 2024');
  });

  it('should handle different dates correctly', () => {
    const date1 = new Date('2023-01-01T00:00:00Z');
    const date2 = new Date('1999-12-31T23:59:59Z');

    expect(dateToShortReadableDate(date1)).toEqual('01 Jan 2023');
    expect(dateToShortReadableDate(date2)).toEqual('31 Dec 1999');
  });

  it('should handle leap year dates correctly', () => {
    const date = new Date('2024-02-29T00:00:00Z');
    const result = dateToShortReadableDate(date);

    expect(result).toEqual('29 Feb 2024');
  });

  it('should handle invalid date', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    dateToShortReadableDate(new Date(undefined as unknown as string));

    expect(consoleSpy).toHaveBeenCalledWith('Invalid date format');
  });
});

describe('DateToShortReadableMonth', () => {
  it('should return the date in MMM format', () => {
    const date = new Date('2024-06-05T00:00:00Z');
    const result = dateToShortReadableMonth(date);

    expect(result).toEqual('Jun');
  });

  it('should handle different dates correctly', () => {
    const date1 = new Date('2023-01-01T00:00:00Z');
    const date2 = new Date('1999-12-31T23:59:59Z');

    expect(dateToShortReadableMonth(date1)).toEqual('Jan');
    expect(dateToShortReadableMonth(date2)).toEqual('Dec');
  });

  it('should handle leap year dates correctly', () => {
    const date = new Date('2024-02-29T00:00:00Z');
    const result = dateToShortReadableMonth(date);

    expect(result).toEqual('Feb');
  });

  it('should handle invalid date', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    dateToShortReadableMonth(new Date(undefined as unknown as string));

    expect(consoleSpy).toHaveBeenCalledWith('Invalid date format');
  });
});

describe('TimeStampToShortReadableDate', () => {
  it('should return the date in DD MMM YYYY format for a valid timestamp', () => {
    const timestamp = 1717545600000; // 2024-06-05T00:00:00Z

    const result = timeStampToShortReadableDate(timestamp);
    expect(result).toEqual('05 Jun 2024');
  });

  it('should handle different timestamps correctly', () => {
    const timestamp1 = 1672531200000; // 2023-01-01T00:00:00Z
    const timestamp2 = 946684799000; // 1999-12-31T23:59:59Z

    expect(timeStampToShortReadableDate(timestamp1)).toEqual('01 Jan 2023');
    expect(timeStampToShortReadableDate(timestamp2)).toEqual('31 Dec 1999');
  });

  it('should handle invalid timestamps gracefully', () => {
    const result = timeStampToShortReadableDate(undefined as unknown as number);

    expect(result).toBeFalsy();
  });
});
