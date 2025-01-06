import { useCallback, useEffect, useState } from 'react';

interface UseTabbableInputGroupProps {
  groupWrappingElementRef: React.RefObject<HTMLElement>;
}

export const useTabbableInputGroup = (
  {
    groupWrappingElementRef
  }: UseTabbableInputGroupProps
) => {
  const cancelEvent = (event: KeyboardEvent) => {
    event.preventDefault();
    event.returnValue = false;
  };

  const handleBlur = useCallback((event: FocusEvent) => {
    const { target } = event;
    if (target instanceof Element) {
      document.querySelector(`label[for="${ target.id }"]`)?.classList.remove('focus');
    }
  }, []);

  const handleFocus = useCallback((event: FocusEvent) => {
    const { target } = event;
    if (target instanceof Element) {
      document.querySelector(`label[for="${ target.id }"]`)?.classList.add('focus');
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent, radioIndex: number) => {
    const { target, code, shiftKey } = event;

    const groupDomElement = groupWrappingElementRef.current;

    if (groupDomElement) {
      const allInputsInGroup = groupDomElement.querySelectorAll('input[type="radio"]');
      const numRadios = allInputsInGroup.length;

      // Convert NodeList to an array using Array.from
      const tabbableInputsArray = Array.from(allInputsInGroup);

      if (target instanceof Element) {
        // Remove the focus class from the labels

        const targetIsFirstInput = radioIndex === 0;
        const targetIsLastInput = radioIndex === numRadios - 1;
        let nextTargetIndex = radioIndex;

        // Handle tabbing logic
        if (code === 'Tab') {
          if (shiftKey) { // Tabbing backwards
            if (!targetIsFirstInput) { // Prevent leaving group unless it is from the first element
              cancelEvent(event);
              nextTargetIndex = radioIndex - 1;
            }
          } else if (!targetIsLastInput) { // Prevent leaving group unless it is from the last element
            cancelEvent(event);
            nextTargetIndex = radioIndex + 1;
          }

          const nextTargetInput = tabbableInputsArray[nextTargetIndex] as HTMLElement;
          const nextTargetLabel = document.querySelector(`label[for="${ nextTargetInput.id }"]`);
          nextTargetInput.focus();
          nextTargetLabel?.classList.add('focus');
        } else if (document.activeElement === target) {
          // The input has focus so make sure the label has the focus class
        }
      }
    }
  }, [groupWrappingElementRef]);

  useEffect(() => {
    const groupElementRef = groupWrappingElementRef.current;

    if (groupElementRef) {
      const radioInputs = groupElementRef.querySelectorAll('input[type="radio"]');
      radioInputs.forEach((radioInput, index) => (radioInput as HTMLInputElement).addEventListener('keydown', (event) => handleKeyDown(event, index)));
      radioInputs.forEach((radioInput) => (radioInput as HTMLInputElement).addEventListener('focusin', handleFocus));
      radioInputs.forEach((radioInput) => (radioInput as HTMLInputElement).addEventListener('focusout', handleBlur));

      // Cleanup the event listener when component unmounts or when the ref changes
      return () => {
        radioInputs.forEach((radioInput, index) => (radioInput as HTMLInputElement).removeEventListener('keydown', (event) => handleKeyDown(event, index)));
        radioInputs.forEach((radioInput) => (radioInput as HTMLInputElement).removeEventListener('focusin', handleFocus));
        radioInputs.forEach((radioInput) => (radioInput as HTMLInputElement).removeEventListener('focusout', handleBlur));
      };
    }
    return () => {};
  }, [groupWrappingElementRef, handleBlur, handleFocus, handleKeyDown]);

  return {};
};
