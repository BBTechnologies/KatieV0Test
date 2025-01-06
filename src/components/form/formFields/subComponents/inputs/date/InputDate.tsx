'use client';

import React from 'react';
import { InputText, InputTextProps } from '../text/InputText';
import { NativeDateCalendarPopupTrigger } from './NativeDateCalendarPopupTrigger';

interface InputDateProps extends InputTextProps {
  minDate?: string;
  maxDate?: string;
}

export const InputDate: React.FC<InputDateProps> = (props) => {
  const {
    minDate,
    maxDate,
    field: { id },
    validation,
    customContent
  } = props;

  const minDateValue = minDate ? new Date(minDate) : undefined;
  const maxDateValue = maxDate ? new Date(maxDate) : undefined;

  const IsDateEntryComplete = (dateString: string) => {
    const refDate = new Date(dateString);
    return refDate.getFullYear() >= 1000;
  };

  // Note as the timestamp gets smaller the length of time between now and then
  // increases. So minDate uses a greater than check because it had to come before
  // and maxDate uses a less than check because it had to come after
  // For validity checks return true if it is invalid

  const isInValidMaxDate = (dateString: string) => {
    if (!maxDateValue) { return false; }
    if (!IsDateEntryComplete) { return true; }

    const dateStringDate = new Date(dateString);
    const dateStringTimestamp = dateStringDate.getTime();

    const compareDateTimestamp = maxDateValue.getTime();

    return dateStringTimestamp > compareDateTimestamp;
  };

  const isInValidMinDate = (dateString: string) => {
    if (!minDateValue) { return false; }
    if (!IsDateEntryComplete) { return true; }

    const dateStringDate = new Date(dateString);
    const dateStringTimestamp = dateStringDate.getTime();

    const compareDateTimestamp = minDateValue.getTime();

    return dateStringTimestamp < compareDateTimestamp;
  };

  // Use the min max logic above but allow them to override with custom logic if they prefer
  const customValidation = {
    minDate: isInValidMinDate,
    maxDate: isInValidMaxDate,
    ...validation,
    valueAsDate: true
  };

  return (
    <InputText
      { ...props }
      type="search"
      validation={ customValidation }
      customContent={
        {
          ...customContent,
          postField: <NativeDateCalendarPopupTrigger dateInputElementId={ id } />
        }
      }
    />
  );
};
