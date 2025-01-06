'use client';

import React from 'react';
import { GenericFunction } from '../../../../interfaces/generic.interface';
import { BubbleItem } from '../bubbleNavigator.interface';
import { Icon } from '../../../design/icons/basicIcon/Icon';
import { getAllChildPropValues } from '../bubbleNavigatorUtilities';
import { BubbleStatusSummary } from '../bubbleStatusSummary/BubbleStatusSummary';
import { StatusLight } from '../../../design/statusIndicators/statusLight/StatusLight';

interface BubbleProps {
  childItem: BubbleItem;
  isParentBubble?: boolean;
  onBubbleClick?: GenericFunction;
}

export const Bubble: React.FC<BubbleProps> = (
  {
    childItem,
    isParentBubble = false,
    onBubbleClick
  }
) => {
  const {
    name,
    id,
    label,
    description,
    path,
    childItems
  } = childItem;

  const noDrillDown = childItems.length === 0;

  const handleBubbleClick = () => {
    if (onBubbleClick) {
      onBubbleClick({
        childItem,
        path
      });
    }
  };

  return (
    <div className={ `bubble ${ noDrillDown ? 'noDrillDown' : '' }` }>
      {
        isParentBubble
          ? (
            <div
              className="parentBubbleContent"
              title={ description }
              id={ `${ name }_${ path.join('_') }` }
            >
              <span className="labelText">{ label }</span>
            </div>
          )
          : (
            <>
              <button
                title={ description }
                id={ id }
                type="button"
                onClick={ handleBubbleClick }
                className="bubbleButton"
              >
                {
                  noDrillDown && <Icon icon="externalLink" />
                }
                <span className="labelText">{ label }</span>
              </button>
              <BubbleStatusSummary childItem={ childItem } />
            </>
          )
      }
    </div>
  );
};
