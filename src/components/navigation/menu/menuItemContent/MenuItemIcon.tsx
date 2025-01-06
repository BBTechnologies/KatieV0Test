'use client';

import React, { ReactNode } from 'react';
import { MenuItemIconPropTypes, MenuItemIconStates } from '../Menu.interfaces';
import { Icon } from '../../../design/icons/basicIcon/Icon';

interface MenuItemIconProps {
  icon: MenuItemIconPropTypes;
  isOpen?: boolean;
  isHoverTrigger?: boolean;
}

export const MenuItemIcon: React.FC<MenuItemIconProps> = (
  {
    icon,
    isOpen = false,
    isHoverTrigger
  }
) => {
  const stateBasedIcons = typeof icon !== 'string';

  const RenderIcon = (icon: string, hoverState?: boolean) => (
    <Icon customCssClass={ hoverState ? 'hover' : '' } icon={ icon } />
  );

  if (typeof icon === 'string') {
    return <Icon icon={ icon } />;
  }

  if (stateBasedIcons) {
    const { open, closed } = icon as MenuItemIconStates;

    if (isHoverTrigger) {
      return (
        <span className="menuIconsHoverWrapper">
          { RenderIcon(open, true) }
          { RenderIcon(closed) }
        </span>
      );
    }

    if (open && closed) {
      if (isOpen) {
        return RenderIcon(open, true);
      }
      return RenderIcon(closed);
    }
  }

  return icon as ReactNode;
};
