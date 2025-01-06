'use client';

import React, { useContext } from 'react';
import { GenericFunction } from '../../../../interfaces/generic.interface';
import { Bubble } from '../bubble/Bubble';
import { ParentReturnButton } from '../parentReturnButton/ParentReturnButton';
import { BubbleItem } from '../bubbleNavigator.interface';
import {BubbleNavigatorContext} from "../bubbleNavigatorContext/BubbleNavigatorContext";

interface BubbleBranchProps {
  childItem: BubbleItem;
  handleBubbleClick?: GenericFunction;
}

// Big bubble on the inside for full branch object.
// Small bubbles on the outside representing the values.

export const BubbleBranch: React.FC<BubbleBranchProps> = (
  {
    childItem,
    handleBubbleClick
  }
) => {
  const bubbleNavigatorContext = useContext(BubbleNavigatorContext);

  if (!bubbleNavigatorContext) {
    return null;
  }

  const { bubbleNavigatorContext: bubblesData } = bubbleNavigatorContext;

  const {
    childItems
  } = childItem;

  const numChildren = childItems.length;

  return (
    <div className="bubbleBranch">
      {
        bubblesData
        && (
          <ParentReturnButton {
            ...{
              childItem,
              onBubbleClick: handleBubbleClick
            }
          }
          />
        )
      }

      <div className="bubbleDiagram">
        <div className="parentBubble">
          <Bubble {
            ...{
              childItem,
              isParentBubble: true,
              onBubbleClick: handleBubbleClick
            }
          }
          />
        </div>

        <div className={ `childBubbles childBubbles_${ numChildren }` }>
          {
            childItems.map((childBubble) => (
              <Bubble
                key={ childBubble.name }
                {
                  ...{
                    childItem: childBubble,
                    onBubbleClick: handleBubbleClick
                  }
                }
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
