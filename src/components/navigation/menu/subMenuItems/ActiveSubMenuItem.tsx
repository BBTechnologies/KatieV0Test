'use client';

import React from 'react';
import { MenuButtonPropTypes, MenuItemIconsPropTypes } from '../Menu.interfaces';
import { MenuItemContent } from '../menuItemContent/MenuItemContent';

interface ActiveSubMenuItemProps {
  subMenuItem: MenuButtonPropTypes,
  icons?: MenuItemIconsPropTypes
}

export const ActiveSubMenuItem: React.FC<ActiveSubMenuItemProps> = (
  {
    subMenuItem,
    icons
  }
) => (
  <span className="activeMenuItem">
    <MenuItemContent
      itemDefinition={
        {
          ...subMenuItem,
          icons,
          isOpen: subMenuItem.isOpen,
          isActive: true
        }
      }
    />
  </span>
);
