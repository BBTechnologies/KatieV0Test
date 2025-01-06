'use client';

import React from 'react';
import { MenuButtonPropTypes } from '../Menu.interfaces';
import { MenuItemIcon } from './MenuItemIcon';

interface MenuItemContentProps {
  itemDefinition: MenuButtonPropTypes,
  renderRightIcon?: boolean,
  isHoverTrigger?: boolean
}

export const MenuItemContent: React.FC<MenuItemContentProps> = (
  {
    itemDefinition,
    renderRightIcon = true,
    isHoverTrigger
  }
) => {
  const {
    icons,
    isOpen,
    label,
    hideLabel
  } = itemDefinition;

  const hasIcons = typeof icons !== 'undefined';

  return (
    <>
      { hasIcons && icons.left && MenuItemIcon({ icon: icons.left, isOpen, isHoverTrigger }) }

      <span className={ `${ hideLabel ? 'sr-only' : 'labelText' }` }>{ label }</span>

      { hasIcons && icons.right && renderRightIcon && MenuItemIcon({ icon: icons.right, isOpen, isHoverTrigger }) }
    </>
  );
};
