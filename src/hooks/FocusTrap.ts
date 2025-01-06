/* eslint-disable prefer-destructuring */
import {
  RefObject, useCallback, useEffect, useRef
} from 'react';

type EventTypes = KeyboardEvent;

export const useFocusTrap = (
  elementRef: RefObject<HTMLElement>,
  elementHandler: (event: EventTypes) => void
) => {
  const focusableElementsSelector = `
    a[href],
    area[href],
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    iframe,
    object,
    embed,
    [tabindex]:not([tabindex="-1"]),
    [contenteditable]
  `;

  const firstFocusableElement = useRef<HTMLElement | null>(null);
  const lastFocusableElement = useRef<HTMLElement | null>(null);

  const KeyHandler = useCallback(
    (event: KeyboardEvent) => {
      const { activeElement } = document;

      if (elementHandler && event.key === 'Escape') {
        return elementHandler(event);
      }

      // If a keyboard event happens elsewhere in the dom close the dialog
      // This could be achieved if the user focuses the address bar and tabs into the document.
      if (elementRef.current && !elementRef.current.contains(activeElement)) {
        return elementHandler(event);
      }

      if (event.key === 'Tab') {
        if (event.shiftKey) {
          // If Shift + Tab is pressed and focus is on the first focusable element, move to the last focusable element
          if (activeElement === firstFocusableElement.current) {
            event.preventDefault();
            lastFocusableElement.current?.focus();
          }
        } else if (activeElement === lastFocusableElement.current) {
          // If Tab is pressed and focus is on the last focusable element, move to the first focusable element
          event.preventDefault();
          firstFocusableElement.current?.focus();
        }
      }

      return event;
    },
    [elementHandler, elementRef]
  );

  useEffect(() => {
    // Get all focusable elements in the dialog
    if (elementRef.current) {
      const focusableElements = Array.from(
        elementRef.current.querySelectorAll(focusableElementsSelector)
      ) as HTMLElement[];

      if (focusableElements.length > 0) {
        firstFocusableElement.current = focusableElements[0];
        lastFocusableElement.current = focusableElements[focusableElements.length - 1];
      }
    }

    const listener = (event: EventTypes) => {
      KeyHandler(event);
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [elementRef, focusableElementsSelector, KeyHandler]);
};

export default useFocusTrap;
