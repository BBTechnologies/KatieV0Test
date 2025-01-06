import { useEffect } from 'react';

interface UseOnEdgeProximityDetectProps {
  triggerRef: React.RefObject<HTMLElement>;
  wrapperRef: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLElement>;
  requiresRecalc: boolean;
  preferredPlacement?: 'right-middle' | 'right-top' | 'right-bottom' | 'left-middle' | 'left-top' | 'left-bottom' | 'top-middle' | 'top-top' | 'top-bottom' | 'bottom-middle' | 'bottom-top' | 'bottom-bottom';
}

export const useOnEdgeProximityDetect = (
  {
    triggerRef,
    wrapperRef,
    contentRef,
    requiresRecalc
  }
  :
  UseOnEdgeProximityDetectProps
) => {
  const xAxisOverride = (
    {
      left,
      width,
      clientWidth
    }
    :
    {
      left: number;
      width: number;
      clientWidth: number
    }
  ) => {
    // Too close to left
    if (left < 0) {
      return 'shiftRight';
    }

    // Too close to right
    if (left + width > clientWidth) {
      return 'shiftLeft';
    }
    return '';
  };

  const yAxisOverride = (
    {
      top,
      height,
      clientHeight
    }
    :
    {
      top: number;
      height: number;
      clientHeight: number
    }
  ) => {
    // Too close to top
    if (top - height < 0) {
      return 'shiftDown';
    }

    // Too close to bottom
    if (top + height > clientHeight) {
      return 'shiftUp';
    }
    return '';
  };

  useEffect(() => {
    if (
      wrapperRef.current
      && contentRef.current
      && triggerRef.current
      && document
      && document.body
    ) {
      wrapperRef.current.classList.add('measuring');
      const { clientWidth, clientHeight } = document.body;
      const {
        width, height, top, left
      } = contentRef.current.getBoundingClientRect();

      // Check if it needs x-axis or y-axis adjustment
      const xAxisOverrideCssClass = xAxisOverride({ left, width, clientWidth });
      if (xAxisOverrideCssClass) {
        wrapperRef.current.classList.add(xAxisOverrideCssClass);
      }

      const yAxisOverrideCssClass = yAxisOverride({ top, height, clientHeight });
      if (yAxisOverrideCssClass) {
        wrapperRef.current.classList.add(yAxisOverrideCssClass);
      }

      wrapperRef.current.classList.remove('measuring');
    }
  }, [triggerRef, wrapperRef, contentRef, requiresRecalc]);

  return {};
};
