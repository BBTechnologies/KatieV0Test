import { RefObject, useEffect, useCallback } from 'react';

type EventTypes = KeyboardEvent;

export const usePopupKeys = (
  elementRef: RefObject<HTMLElement>,
  elementHandler?: (event: EventTypes) => void
) => {
  // Note: Popups should always close on escape key presses
  const KeyHandler = useCallback(
    (event: KeyboardEvent) => {
      if (elementHandler && event.key === 'Escape') {
        return elementHandler(event);
      }
      return event;
    },
    [elementHandler]
  );

  useEffect(() => {
    const listener = (event: EventTypes) => {
      if (!elementRef.current || elementRef.current.contains(event.target as Node)) {
        // TODO: Placeholder: Add any inner key handlers generic to popups
      }
      KeyHandler(event);
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [elementRef, KeyHandler]);

  return {};
};
