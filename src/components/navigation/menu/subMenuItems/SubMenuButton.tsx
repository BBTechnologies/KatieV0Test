'use client';

import React, { useRef } from 'react';
import { MenuButtonPropTypes } from '../Menu.interfaces';
import { GenericFunction } from '../../../../interfaces';
import { ActiveSubMenuItem } from './ActiveSubMenuItem';
import { MenuItemContent } from '../menuItemContent/MenuItemContent';

interface SubMenuButtonProps {
  subMenuItem: MenuButtonPropTypes;
  activeRoute: string;
  isHoverTrigger: boolean;
  subMenuId: string
  hasSubmenu?: boolean;
  path: number[];
  onMenuButtonClick: GenericFunction;
}

export const SubMenuButton: React.FC<SubMenuButtonProps> = (
  {
    subMenuItem,
    isHoverTrigger,
    subMenuId,
    hasSubmenu,
    path,
    activeRoute,
    onMenuButtonClick
  }
) => {
  const {
    url, icons, isActive, isOpen, id, customCssClass, route
  } = subMenuItem;

  const subMenuButton = useRef(null);

  const hasRightIcon = icons && icons.right;
  const hasLeftIcon = icons && icons.left;

  if (isActive || (route && activeRoute === route)) {
    return (
      <ActiveSubMenuItem
        subMenuItem={ subMenuItem }
        icons={ icons }
      />
    );
  }

  const ariaProperties = hasSubmenu ? {
    'aria-expanded': isOpen,
    'aria-controls': subMenuId
  } : {};

  const triggerCssClass = `
    menuTrigger 
    ${ url ? 'withLink' : '' } 
    ${ hasLeftIcon ? 'hasLeftIcon' : '' } 
    ${ hasRightIcon ? 'hasRightIcon' : '' }
    ${ customCssClass || '' }
  `;

  return (
    <button
      ref={ subMenuButton }
      { ...ariaProperties }
      id={ id }
      type="button"
      className={ triggerCssClass }
      onClick={ (e) => onMenuButtonClick(e, subMenuItem, path) }
      data-path={ path }
    >
      <MenuItemContent
        itemDefinition={
          {
            ...subMenuItem
          }
        }
        isHoverTrigger={ isHoverTrigger }
      />
    </button>
  );
};
