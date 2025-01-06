import { dateToShortIsoString } from './dateHelpers';

interface AgeParams {
  minAgeInDays?: number;
  maxAgeInDays?: number;
  refDate?: Date;
}

interface ValidateBirthdateParams {
  birthdateString: string;
  minDateTimestamp?: number;
  maxDateTimestamp?: number;
}

interface DateEntryParams {
  dateString: string;
}

interface AgeInDaysParams {
  ageInDays: number;
}

export const getMinAge = (
  { minAgeInDays = 0, refDate = new Date() }: AgeParams
) => {
  refDate.setDate(refDate.getDate() - minAgeInDays);

  return {
    minDate: refDate,
    minDateTimestamp: refDate.getTime(),
    isoMinDate: dateToShortIsoString(refDate)
  };
};

export const getMaxAge = (
  { maxAgeInDays = 0, refDate = new Date() }: AgeParams
) => {
  refDate.setDate(refDate.getDate() - maxAgeInDays);

  return {
    maxDate: refDate,
    maxDateTimestamp: refDate.getTime(),
    isoMaxDate: dateToShortIsoString(refDate)
  };
};

export const getMinAndMaxAges = (
  { minAgeInDays = 0, maxAgeInDays = 0, refDate = new Date() }: AgeParams
) => ({
  ...getMinAge({ minAgeInDays, refDate: new Date(refDate.getTime()) }),
  ...getMaxAge({ maxAgeInDays, refDate: new Date(refDate.getTime()) })
});

export const validateBirthdate = (
  { birthdateString, minDateTimestamp, maxDateTimestamp }: ValidateBirthdateParams
) => {
  const birthdate = new Date(birthdateString);
  const birthdateTimestamp = birthdate.getTime();
  const validStates = {
    minDateValid: true,
    maxDateValid: true
  };

  if (minDateTimestamp && birthdateTimestamp > minDateTimestamp) {
    validStates.minDateValid = false;
  }

  if (
    maxDateTimestamp
    && (birthdateTimestamp < maxDateTimestamp
      || (maxDateTimestamp < 0 && maxDateTimestamp > birthdateTimestamp))
  ) {
    validStates.maxDateValid = false;
  }

  return validStates;
};

export const isDateEntryComplete = (
  { dateString }: DateEntryParams
): boolean => {
  const refDate = new Date(dateString);
  return refDate.getFullYear() >= 1000;
};

export const getAgeInWeeks = (
  { ageInDays }: AgeInDaysParams
): number => Math.round(ageInDays / 7);

export const getAgeInYears = (
  { ageInDays }: AgeInDaysParams
): number => Math.round(ageInDays / 365.25);
