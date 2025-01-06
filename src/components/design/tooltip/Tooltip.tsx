'use client';

import React, {
  useState, useRef, useEffect, useCallback, ReactNode, ReactElement
} from 'react';
import { useOnClickOutside } from '../../../hooks/ClickOutside';
import { Icon } from '../icons/basicIcon/Icon';
import { useOnEdgeProximityDetect } from '../../../hooks/EdgeProximityDetect';
import './tooltip.scss';

// Define the props for Tooltip
export interface TooltipProps {
  triggerId?: string;
  icon?: ReactElement | string;
  customCssClass?: string;
  children: ReactNode;
  containsBlockElements?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = (
  {
    triggerId,
    icon = 'info',
    customCssClass,
    containsBlockElements = false,
    children
  }
) => {
  const [isOpen, setIsOpen] = useState(false);

  const tooltipElement = useRef<HTMLDivElement | HTMLSpanElement>(null);
  const triggerElement = useRef<HTMLButtonElement>(null);
  const contentElement = useRef<HTMLDivElement | HTMLSpanElement>(null);

  const iconIsElement = React.isValidElement(icon);

  useOnClickOutside(tooltipElement, () => setIsOpen(false));

  useOnEdgeProximityDetect({
    triggerRef: triggerElement,
    wrapperRef: tooltipElement,
    contentRef: contentElement,
    requiresRecalc: isOpen
  });

  // Handle special key presses
  const handleSpecialKeyPresses = useCallback(
    (event: KeyboardEvent) => {
      // Escape key
      if (event.key === 'Escape' || event.keyCode === 27) {
        triggerElement.current?.click();
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    if (tooltipElement.current) {
      tooltipElement.current.addEventListener('keydown', handleSpecialKeyPresses as EventListener);
    }
  }, [handleSpecialKeyPresses]);

  if (containsBlockElements) {
    return (
      <div
        role="tooltip"
        ref={ tooltipElement as React.RefObject<HTMLDivElement> }
        className={ `tooltip tooltip_block ${ isOpen ? 'isOpen' : '' } ${ customCssClass || '' }` }
      >
        <button
          aria-label="Toggle tooltip open state"
          ref={ triggerElement }
          type="button"
          onClick={ () => setIsOpen(!isOpen) }
          className="button icon_only"
          { ...(triggerId ? { id: triggerId, 'aria-describedby': `${ triggerId }_content` } : {}) }
        >
          { iconIsElement ? icon : <Icon icon={ icon.toString() } /> }
        </button>
        <div
          ref={ contentElement as React.RefObject<HTMLDivElement> }
          className="content"
          { ...(triggerId ? { id: `${ triggerId }_content` } : {}) }
        >
          { children }
        </div>
      </div>
    );
  }

  return (
    <span
      ref={ tooltipElement as React.RefObject<HTMLSpanElement> }
      className={ `tooltip ${ isOpen ? 'isOpen' : '' } ${ customCssClass || '' }` }
    >
      <button
        ref={ triggerElement }
        type="button"
        onClick={ () => setIsOpen(!isOpen) }
        className="button icon_only"
        { ...(triggerId ? { id: triggerId } : {}) }
      >
        { iconIsElement ? icon : <Icon icon={ icon.toString() } /> }
        <span className="sr-only">{ children }</span>
      </button>
      <span aria-hidden role="presentation" ref={ contentElement as React.RefObject<HTMLSpanElement> } className="content">
        { children }
      </span>
    </span>
  );
};

export default Tooltip;
