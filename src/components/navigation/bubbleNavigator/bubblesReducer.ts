/* eslint-disable no-console */
import { BubbleFilter, BubbleItem } from './bubbleNavigator.interface';

export interface BubbleNavigatorState {
  bubblesData?: BubbleItem[],
  filteredData?: BubbleItem[],
  activeFilters?: BubbleFilter[],
  activeItem?: BubbleItem | BubbleItem[],
  activeParentItem?: BubbleItem | BubbleItem[],
  initialised: boolean
}

export const InitialBubbleState = {
  bubblesData: [],
  filteredData: [],
  activeItem: [],
  activeParentItem: [],
  activeFilters: [] as BubbleFilter[],
  activePath: [] as string[],
  initialised: false
};

export const BubbleNavigatorReducer = (
  state: BubbleNavigatorState,
  action: {
    type: string;
    childItem?: BubbleItem;
    parentItem?: BubbleItem | BubbleItem[];
    bubblesData?: BubbleItem[];
    filters?: BubbleFilter[]
  }
): BubbleNavigatorState => {
  switch (action.type) {
  case 'init':
    return {
      ...state,
      initialised: true,
      bubblesData: action.bubblesData,
      filteredData: action.bubblesData,
      activeItem: action.bubblesData
    };
  case 'resetFilters':
    return {
      ...state,
      filteredData: state.filteredData
    };
  case 'applyFilters':
    // TODO
    return state;
  case 'filterData':
    // TODO
    return state;
  case 'drillDown':
    return {
      ...state,
      activeItem: action.childItem
    };
  case 'drillUp':
    return {
      ...state,
      activeItem: action.parentItem
    };
  default:
    return state;
  }
};
