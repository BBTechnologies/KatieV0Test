'use client';

/* eslint-disable no-console */

import React, { useEffect, useReducer } from 'react';
import { BubbleFilter, BubbleItem, BubbleNavigatorProps } from './bubbleNavigator.interface';
import { BubbleBranch } from './bubbleBranch/BubbleBranch';
import { BubbleNavigatorReducer, InitialBubbleState } from './bubblesReducer';
import { JSONObject } from '../../../interfaces/generic.interface';
import { BubbleNavigatorFilter } from './bubbleNavigatorFilter/BubbleNavigatorFilter';
import { BubbleNavigatorContextProvider } from './bubbleNavigatorContext/BubbleNavigatorContext';

import './bubbleNavigator.scss';

/*
  Receives the full json tree
  Includes a sophisticated filtering capability
  Creates a filtered tree
  Sends filtered tree to the BubbleTree renderer
 */

export const BubbleNavigator: React.FC<BubbleNavigatorProps> = (
  {
    bubblesData,
    filters = []
  }
) => {
  const [state, dispatch] = useReducer(BubbleNavigatorReducer, InitialBubbleState, () => InitialBubbleState);

  const HandleFilterChange = (newFilterState: BubbleFilter[]) => {
    dispatch({ type: 'applyFilters', filters: newFilterState });
  };

  const HandleBubbleNavigation = (
    {
      path,
      childItem,
      parentItem
    }
    :
    {
      path: number[],
      parentItem?: BubbleItem | BubbleItem[],
      childItem?: BubbleItem,
    }
  ) => {
    if (parentItem) {
      if (path.length === 1) {
        // Return to root level
        dispatch({ type: 'drillUp', parentItem: state.filteredData });
      } else {
        dispatch({ type: 'drillUp', parentItem });
      }
    } else if (childItem?.childItems.length === 0) {
      // TODO:
      console.log('This would navigate to url', childItem.url);
    } else {
      dispatch({ type: 'drillDown', childItem });
    }
  };

  useEffect(() => {
    if (!state.initialised) {
      dispatch({ type: 'init', bubblesData, filters });
    }
  }, [filters, bubblesData, state.initialised]);

  const isRootLevel = Array.isArray(state.activeItem);
  const numBubbles = isRootLevel ? state.filteredData?.length : Object.values(state.activeItem as JSONObject).length;
  const navigatorCssClass = `bubbleNavigator mainBubbleCount_${ numBubbles }`;
  const filterOptions = ['label', 'description', 'status'];

  return (
    <BubbleNavigatorContextProvider bubblesData={ bubblesData }>
      <div className={ navigatorCssClass }>
        <BubbleNavigatorFilter { ...{ filterOptions, filters: state.activeFilters, onFilterChange: HandleFilterChange } } />

        <div className="bubbleTree">
          {
            isRootLevel
              ? state.filteredData && state.filteredData.map((childItem) => (
                <BubbleBranch
                  key={ childItem.id }
                  {
                    ...{
                      childItem: childItem as BubbleItem,
                      handleBubbleClick: HandleBubbleNavigation
                    }
                  }
                />
              ))
              : state.activeItem && (
                <BubbleBranch
                  {
                    ...{
                      childItem: state.activeItem as BubbleItem,
                      handleBubbleClick: HandleBubbleNavigation
                    }
                  }
                />
              )
          }
        </div>
      </div>
    </BubbleNavigatorContextProvider>
  );
};
