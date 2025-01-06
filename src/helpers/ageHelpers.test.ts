import {
  getMinAge,
  getMaxAge,
  getMinAndMaxAges,
  validateBirthdate,
  isDateEntryComplete,
  getAgeInWeeks,
  getAgeInYears
} from './ageHelpers';

import { dateToShortIsoString } from './dateHelpers';

describe('AgeHelpers', () => {
  describe('GetMinAge', () => {
    it('Gets a date counting back from today if no reference date is provided', () => {
      const todayMinus10 = new Date();
      todayMinus10.setDate(todayMinus10.getDate() - 10);

      const result = getMinAge({ minAgeInDays: 10 });

      expect(result.minDate.getDate()).toEqual(todayMinus10.getDate());
      expect(result.minDate.getMonth()).toEqual(todayMinus10.getMonth());
      expect(result.minDate.getFullYear()).toEqual(todayMinus10.getFullYear());
      expect(result.isoMinDate).toEqual(dateToShortIsoString(todayMinus10));
    });

    it('Gets a date counting back from a reference date if provided', () => {
      const refDate = new Date(2000, 10, 20); // Nov 20, 2000

      const result = getMinAge({ minAgeInDays: 10, refDate });

      expect(result.minDate.getDate()).toEqual(10);
      expect(result.minDate.getMonth()).toEqual(10); // November is month 10 in JavaScript Date (0-based)
      expect(result.minDate.getFullYear()).toEqual(2000);
      expect(result.isoMinDate).toEqual(dateToShortIsoString(new Date('2000-11-10')));
    });
  });

  describe('GetMaxAge', () => {
    it('Gets a date counting back from today if no reference date is provided', () => {
      const todayMinus10 = new Date();
      todayMinus10.setDate(todayMinus10.getDate() - 10);

      const result = getMaxAge({ maxAgeInDays: 10 });

      expect(result.maxDate.getDate()).toEqual(todayMinus10.getDate());
      expect(result.maxDate.getMonth()).toEqual(todayMinus10.getMonth());
      expect(result.maxDate.getFullYear()).toEqual(todayMinus10.getFullYear());
      expect(result.isoMaxDate).toEqual(dateToShortIsoString(todayMinus10));
    });

    it('Gets a date counting back from a reference date if provided', () => {
      const refDate = new Date(2000, 10, 20); // Nov 20, 2000

      const result = getMaxAge({ maxAgeInDays: 10, refDate });

      expect(result.maxDate.getDate()).toEqual(10);
      expect(result.maxDate.getMonth()).toEqual(10);
      expect(result.maxDate.getFullYear()).toEqual(2000);
      expect(result.isoMaxDate).toEqual(dateToShortIsoString(new Date('2000-11-10')));
    });
  });

  describe('GetMinAndMaxAges', () => {
    it('Combines the outcomes of GetMinAge and GetMaxAge', () => {
      const result = getMinAndMaxAges({ minAgeInDays: 10, maxAgeInDays: 100 });

      expect(result.minDate).toBeDefined();
      expect(result.maxDate).toBeDefined();
    });
  });

  describe('ValidateBirthdate', () => {
    it('Validates as true if neither min nor max are provided', () => {
      const result = validateBirthdate({ birthdateString: '2024-03-12' });
      expect(result.minDateValid).toBeTruthy();
      expect(result.maxDateValid).toBeTruthy();
    });

    it('Validates as true if only a min is provided which is after the birthdateString', () => {
      const testMin = new Date('2024-03-12');
      const result = validateBirthdate({
        birthdateString: '2020-03-12',
        minDateTimestamp: testMin.getTime()
      });
      expect(result.minDateValid).toBeTruthy();
      expect(result.maxDateValid).toBeTruthy();
    });

    it('Validates as false if only a min is provided which is before the birthdateString', () => {
      const testMin = new Date('2014-03-12');
      const result = validateBirthdate({
        birthdateString: '2020-03-12',
        minDateTimestamp: testMin.getTime()
      });
      expect(result.minDateValid).toBeFalsy();
      expect(result.maxDateValid).toBeTruthy();
    });

    it('Validates as true if only a max is provided which is before the birthdateString', () => {
      const testMax = new Date('2000-03-12');
      const result = validateBirthdate({
        birthdateString: '2020-03-12',
        maxDateTimestamp: testMax.getTime()
      });
      expect(result.minDateValid).toBeTruthy();
      expect(result.maxDateValid).toBeTruthy();
    });

    it('Validates as false if only a max is provided which is after the birthdateString', () => {
      const testMax = new Date('2024-03-12');
      const result = validateBirthdate({
        birthdateString: '2020-03-12',
        maxDateTimestamp: testMax.getTime()
      });
      expect(result.minDateValid).toBeTruthy();
      expect(result.maxDateValid).toBeFalsy();
    });

    it('Validates as true if both min and max are provided and the birthdateString is between them', () => {
      const testMin = new Date('2024-03-12');
      const testMax = new Date('2014-03-12');

      const result = validateBirthdate({
        birthdateString: '2020-03-12',
        minDateTimestamp: testMin.getTime(),
        maxDateTimestamp: testMax.getTime()
      });
      expect(result.minDateValid).toBeTruthy();
      expect(result.maxDateValid).toBeTruthy();
    });

    it('Validates as max false if both min and max are provided and the birthdateString is older', () => {
      const testMin = new Date('2024-03-12');
      const testMax = new Date('2014-03-12');

      const result = validateBirthdate({
        birthdateString: '2010-03-12',
        minDateTimestamp: testMin.getTime(),
        maxDateTimestamp: testMax.getTime()
      });
      expect(result.minDateValid).toBeTruthy();
      expect(result.maxDateValid).toBeFalsy();
    });

    it('Validates as min false if both min and max are provided and the birthdateString is younger', () => {
      const testMin = new Date('2020-03-12');
      const testMax = new Date('2010-03-12');

      const result = validateBirthdate({
        birthdateString: '2024-03-12',
        minDateTimestamp: testMin.getTime(),
        maxDateTimestamp: testMax.getTime()
      });
      expect(result.minDateValid).toBeFalsy();
      expect(result.maxDateValid).toBeTruthy();
    });
  });

  describe('IsDateEntryComplete', () => {
    it('Returns false if the fullYear has not been completed', () => {
      const result = isDateEntryComplete({ dateString: '0000-10-10' });
      expect(result).toBeFalsy();
    });

    it('Returns true if the fullYear has been completed', () => {
      const result = isDateEntryComplete({ dateString: '2000-10-10' });
      expect(result).toBeTruthy();
    });
  });

  describe('GetAgeInWeeks', () => {
    it('Converts an ageInDays to weeks', () => {
      const result = getAgeInWeeks({ ageInDays: 70 });
      expect(result).toEqual(10);
    });

    it('Rounds to the closest number of weeks', () => {
      const result1 = getAgeInWeeks({ ageInDays: 65 });
      const result2 = getAgeInWeeks({ ageInDays: 69 });
      expect(result1).toEqual(9);
      expect(result2).toEqual(10);
    });
  });

  describe('GetAgeInYears', () => {
    it('Converts an ageInDays to years', () => {
      const result = getAgeInYears({ ageInDays: 3650 });
      expect(result).toEqual(10);
    });

    it('Rounds to the closest number of years', () => {
      const result1 = getAgeInYears({ ageInDays: 3300 });
      const result2 = getAgeInYears({ ageInDays: 3600 });
      expect(result1).toEqual(9);
      expect(result2).toEqual(10);
    });
  });
});
