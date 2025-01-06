'use client';

import React, { useContext, useMemo } from 'react';
import { Simulate } from 'react-dom/test-utils';
import {
  getAllChildPropValues, getChildItemsByTypeAndValueFromItem,
  getFirstChildOfTypeAndValueFromItem,
  getItemFromPath,
  PropArrayItemType
} from '../bubbleNavigatorUtilities';
import { BubbleItem } from '../bubbleNavigator.interface';
import { GenericFunction } from '../../../../interfaces';
import { BubbleNavigatorContext } from '../bubbleNavigatorContext/BubbleNavigatorContext';
import { BubbleStatusSummaryList } from './bubbleStatusSummaryList/BubbleStatusSummaryList';

import './bubbleStatusSummary.scss';

interface BubbleStatusSummaryInterface {
  childItem: BubbleItem;
  onStatusClick?: GenericFunction;
}

export const BubbleStatusSummary: React.FC<BubbleStatusSummaryInterface> = (
  {
    childItem,
    onStatusClick
  }
) => {
  const bubbleNavigatorContext = useContext(BubbleNavigatorContext);

  // TODO: Find alternate solution. This renders too many objects and crashes the browser
  const nestedChildStatuses = useMemo(() => getAllChildPropValues({ prop: 'status', parentItem: childItem }), [childItem]);

  const alertStatuses = useMemo(() => getChildItemsByTypeAndValueFromItem(
    { prop: 'status', value: 'alert', parentItem: childItem }
  ), [childItem]);

  const defCon3Statuses = useMemo(() => getChildItemsByTypeAndValueFromItem(
    { prop: 'status', value: 'defCon3', parentItem: childItem }
  ), [childItem]);

  if (!Array.isArray(alertStatuses) || !Array.isArray(defCon3Statuses)) {
    // An error has occurred.
    return null;
  }

  if (!bubbleNavigatorContext) {
    return null;
  }

  const { bubbleNavigatorContext: bubblesData } = bubbleNavigatorContext;

  const handleStatusClick = (nestedChildStatus: PropArrayItemType) => {
    const { path } = nestedChildStatus;
    const statusChildItem = getItemFromPath({ bubblesData: bubblesData as BubbleItem[], path });

    if (onStatusClick) {
      onStatusClick({
        childItem: statusChildItem,
        path
      });
    }
  };

  return (
    <div className="bubbleStatusSummary">
      <BubbleStatusSummaryList
        {
          ...{
            onStatusClick: handleStatusClick,
            parentItem: childItem,
            statusType: 'alert',
            statuses: alertStatuses
          }
        }
      />
      <BubbleStatusSummaryList
        {
          ...{
            onStatusClick: handleStatusClick,
            parentItem: childItem,
            statusType: 'defCon3',
            statuses: defCon3Statuses
          }
        }
      />
    </div>
  );
};
