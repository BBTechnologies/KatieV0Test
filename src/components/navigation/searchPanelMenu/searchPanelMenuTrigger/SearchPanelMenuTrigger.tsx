'use client';

import React from 'react';
import { ButtonProps } from '../../../form/buttons/button.interface';
import { SimpleButton } from '../../../form/buttons/SimpleButton';
import { SearchPanelMenuTriggerProps } from '../searchPanelMenu.interface';

export const SearchPanelMenuTrigger: React.FC<SearchPanelMenuTriggerProps> = (
  {
    panel,
    panelNumber,
    onClick = () => {}
  }
) => {
  const { activeActionButtonId, mainActionButtons } = panel;
  let activeActionButton = mainActionButtons.find((actionButton) => actionButton.id === activeActionButtonId);

  if (!activeActionButton) {
    activeActionButton = mainActionButtons[0] as ButtonProps;
  }

  const { id } = activeActionButton;

  return (
    <div className="searchPanelMenuTrigger">
      <SimpleButton
        {
          ...{
            ...activeActionButton,
            cssClass: 'button',
            id: `${ id }MenuTrigger`,
            onClickHandler: () => onClick(panelNumber),
            rightIcon: { icon: 'menu3' }
          }
        }
      />
    </div>
  );
};
