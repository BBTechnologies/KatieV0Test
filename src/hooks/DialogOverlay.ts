import { useCallback, useEffect, useRef } from 'react';

interface DialogOverlayHook {
  customCssClass?: string;
  parentNode?: HTMLElement;
  isVisible?: boolean;
  id?: string;
}

interface OverlayDivElement extends HTMLDivElement {
  showOverlay: () => void;
  hideOverlay: () => void;
}

export const useDialogOverlay = (
  {
    customCssClass,
    parentNode,
    id = 'dialogOverlay'
  }: DialogOverlayHook
) => {
  const overlayNode = useRef<OverlayDivElement | null>(null);

  const createOverlay = useCallback(() => {
    const existingOverlay = document.getElementById(id);
    const parentDomElement = parentNode || document.body;

    if (!existingOverlay) {
      // Create a new div if it doesn't exist
      const newOverlay = document.createElement('div');
      newOverlay.classList.add('dialogOverlay');
      if (customCssClass) {
        newOverlay.classList.add(customCssClass);
      }
      newOverlay.id = id;
      parentDomElement.append(newOverlay);

      overlayNode.current = newOverlay as OverlayDivElement; // Assign the created element to the ref
    } else {
      overlayNode.current = existingOverlay as OverlayDivElement; // Assign the existing element to the ref
    }

    // Add custom show and hide events
    if (overlayNode.current) {
      const showEvent = new CustomEvent('show');
      const hideEvent = new CustomEvent('hide');

      // Dispatch custom events
      overlayNode.current.addEventListener('show', () => {
        overlayNode.current?.classList.add('isVisible');
      });

      overlayNode.current.addEventListener('hide', () => {
        overlayNode.current?.classList.remove('isVisible');
      });

      // Functions to trigger the events
      overlayNode.current.showOverlay = () => {
        overlayNode.current?.dispatchEvent(showEvent);
      };

      overlayNode.current.hideOverlay = () => {
        overlayNode.current?.dispatchEvent(hideEvent);
      };
    }

    return overlayNode.current;
  }, [customCssClass, id, parentNode]);

  const removeOverlay = useCallback(() => {
    if (overlayNode.current) {
      overlayNode.current.remove();
      overlayNode.current = null;
    }
  }, []);

  useEffect(() => () => {
    // Clean up overlay on component unmount
    removeOverlay();
  }, [removeOverlay]);

  return { createOverlay, removeOverlay };
};

export default useDialogOverlay;
