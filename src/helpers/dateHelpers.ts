/* eslint-disable no-console */

// Returns format 2022-09-06 for the 6th of September 2022
export const dateToShortIsoString = (date: Date | string): string | null => {
  const newDate = new Date(date);
  if (Number.isNaN(newDate.getDate())) {
    console.error('Invalid date format');
    return null;
  }

  newDate.setTime(newDate.getTime() - newDate.getTimezoneOffset() * 60000);
  return newDate.toISOString().substring(0, 10);
};

// https://stackoverflow.com/questions/7445328/check-if-a-string-is-a-date-value
export const isValidDate = (dateString: string | number | null | undefined, minDate?: string): boolean => {
  if (!dateString) {
    return false;
  }

  const newDate = new Date(dateString);
  const isValidMinDate = !minDate || newDate.getTime() >= new Date(minDate).getTime();

  const isValidDate = newDate.toString() !== 'Invalid Date'
    && !Number.isNaN(newDate.getDate())
    && isValidMinDate;

  return isValidDate;
};

// Returns format 06 Sep 2022
export const dateToShortReadableDate = (date: Date | string | number): string | null => {
  const newDate = new Date(date);
  if (Number.isNaN(newDate.getDate())) {
    console.error('Invalid date format');
    return null;
  }

  return newDate.toUTCString().substring(5, 16);
};

// Returns format Sep
export const dateToShortReadableMonth = (date: Date | string | number): string | null => {
  const newDate = new Date(date);
  if (Number.isNaN(newDate.getDate())) {
    console.error('Invalid date format');
    return null;
  }

  return newDate.toUTCString().substring(8, 11);
};

export const timeStampToShortReadableDate = (timestamp: string | number): string | number | null | undefined => {
  const newDate = new Date(timestamp);
  if (!Number.isNaN(newDate.getDate())) {
    return dateToShortReadableDate(newDate);
  }
  return timestamp;
};

export const dateToReadableTime = (date: Date | string | number): string | null => {
  const newDate = new Date(date);
  if (Number.isNaN(newDate.getDate())) {
    console.error('Invalid date format');
    return null;
  }

  const readableTime = newDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).replace(/^0|\s+/g, '');

  return readableTime;
};

export const dateToShortReadableDateTime = (date: Date | string | number): string | null => {
  const readableDate = dateToShortReadableDate(date);
  const readableTime = dateToReadableTime(date);
  return `${ readableDate } ${ readableTime }`;
};

export const getLastDateOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
