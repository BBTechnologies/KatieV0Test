import React, { useContext } from 'react';
import { GenericFunction } from '../../../../interfaces/generic.interface';
import { SimpleButton } from '../../../form/buttons/SimpleButton';
import { BubbleItem } from '../bubbleNavigator.interface';
import { getParentItemFromPath } from '../bubbleNavigatorUtilities';
import { BubbleNavigatorContext } from '../bubbleNavigatorContext/BubbleNavigatorContext';

interface ParentReturnButtonProps {
  childItem?: BubbleItem;
  onBubbleClick?: GenericFunction;
}

export const ParentReturnButton: React.FC<ParentReturnButtonProps> = (
  {
    childItem,
    onBubbleClick
  }
) => {
  const bubbleNavigatorContext = useContext(BubbleNavigatorContext);

  if (!childItem || !childItem.path || !bubbleNavigatorContext?.bubbleNavigatorContext) {
    return null;
  }

  const { bubbleNavigatorContext: bubblesData } = bubbleNavigatorContext;

  const parentItem: BubbleItem | BubbleItem[] = getParentItemFromPath(
    {
      bubblesData,
      path: childItem.path
    }
  );

  if (Array.isArray(parentItem) || childItem.path.length === 1) {
    // The parent is the root tree so don't render a return button
    return null;
  }

  const {
    id,
    label,
    description,
    path
  } = parentItem as BubbleItem;

  const handleParentReturnButtonClick = () => {
    if (onBubbleClick) {
      onBubbleClick({
        parentItem,
        path
      });
    }
  };

  return (
    <div className="parentReturnButton">
      <SimpleButton
        cssClass="button primary compact"
        label={ label }
        title={ description }
        id={ id }
        onClickHandler={ handleParentReturnButtonClick }
        leftIcon={{ icon: 'arrow-up' }}
      />
    </div>
  );
};
