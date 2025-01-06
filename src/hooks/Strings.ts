import React, { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { capitalize } from '../helpers/stringHelpers';

export const useFirstCapital = (elementRef: React.RefObject<HTMLInputElement>) => {
  const onInputEvent = useDebouncedCallback(
    (event) => {
      const inputValue = event.target.value;
      if (elementRef && elementRef.current) {
        elementRef.current.value = capitalize(inputValue);
      }
    },
    50,
    { maxWait: 100 }
  );

  useEffect(() => {
    if (elementRef && elementRef.current) {
      elementRef.current.addEventListener('input', onInputEvent);
    }
  }, [elementRef, onInputEvent]);

  return {};
};
