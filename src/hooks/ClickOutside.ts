import { useEffect, useCallback } from 'react';

type EventTypes = MouseEvent | TouchEvent | FocusEvent;

export const useOnClickOutside = (
  elementRef: React.RefObject<HTMLElement>,
  elementHandler?: (event: EventTypes) => void
) => {
  const ClickHandler = useCallback(
    (event: EventTypes) => {
      if (elementHandler) {
        return elementHandler(event);
      }
      return event;
    },
    [elementHandler]
  );

  useEffect(() => {
    const listener = (event: EventTypes) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!elementRef.current || elementRef.current.contains(event.target as Node)) {
        return;
      }
      ClickHandler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    document.addEventListener('focusin', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      document.removeEventListener('focusin', listener);
    };
  }, [elementRef, ClickHandler]);

  return {};
};

export default useOnClickOutside;
