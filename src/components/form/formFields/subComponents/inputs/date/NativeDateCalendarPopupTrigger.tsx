'use client';

import React from 'react';
import { SimpleButton } from '../../../../buttons/SimpleButton';
import { GenericFunction } from '../../../../../../interfaces';

interface NativeDateCalendarPopupTriggerProps {
  dateInputElementId: string;
  onPopupOpen?: GenericFunction;
}

export const NativeDateCalendarPopupTrigger: React.FC<NativeDateCalendarPopupTriggerProps> = (
  {
    dateInputElementId,
    onPopupOpen = () => {}
  }
) => {
  const ShowCalendarPopup = (event: KeyboardEvent | MouseEvent) => {
    event.preventDefault();
    const dateInputElement: HTMLInputElement | null = document.getElementById(dateInputElementId) as HTMLInputElement;

    if (dateInputElement && typeof dateInputElement.showPicker === 'function') {
      dateInputElement.showPicker();
      onPopupOpen();
    }
  };

  return (
    <SimpleButton
      hideLabel
      title="Open calendar popup. Click elsewhere or use esc key to close."
      label="Open calendar popup"
      id={ `${ dateInputElementId }_calendarTrigger` }
      onClickHandler={ ShowCalendarPopup }
      rightIcon={{ icon: 'calendar' }}
    />
  );
};
