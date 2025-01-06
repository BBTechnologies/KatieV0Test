export interface ScrollSettings {
  scrollHeight: number;
  clientHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  clientWidth: number;
  hasVerticalScroller: boolean;
  hasHorizontalScroller: boolean;
  scrollerAtBottom: boolean;
  scrollerAtTop: boolean;
  scrollerAtLeft: boolean;
  scrollerAtRight: boolean;
  event: Event;
}

export const getScrollSettings = (event: Event): ScrollSettings => {
  const domNode = event.target as HTMLElement;

  const {
    scrollHeight,
    clientHeight,
    scrollLeft,
    scrollTop,
    scrollWidth,
    clientWidth
  } = domNode;

  const hasVerticalScroller = scrollHeight > clientHeight;
  const hasHorizontalScroller = scrollWidth > clientWidth;

  const scrollerAtBottom = scrollTop + clientHeight + 100 >= scrollHeight;
  const scrollerAtTop = scrollTop <= 0;
  const scrollerAtLeft = scrollLeft <= 0;
  const scrollerAtRight = scrollLeft + clientWidth + 100 >= scrollWidth;

  return {
    scrollHeight,
    scrollLeft,
    clientHeight,
    clientWidth,
    hasVerticalScroller,
    hasHorizontalScroller,
    scrollTop,
    scrollWidth,
    scrollerAtBottom,
    scrollerAtTop,
    scrollerAtLeft,
    scrollerAtRight,
    event
  } as ScrollSettings;
};
