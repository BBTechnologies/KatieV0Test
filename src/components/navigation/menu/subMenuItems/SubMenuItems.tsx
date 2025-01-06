'use client';

import React from 'react';
import { GenericFunction } from '../../../../interfaces';
import { MenuItemPropTypes } from '../Menu.interfaces';
import { GetSubMenuCssClass } from '../menuUtilities';
import { SubMenuButton } from './SubMenuButton';

interface SubMenuItemsProps {
  menuId: string;
  activeRoute: string;
  subMenuItems?: MenuItemPropTypes[];
  subMenuIsOpen?: boolean;
  isHoverTrigger?: boolean;
  subMenuId: string;
  level: number;
  path?: number[];
  onMenuButtonClick: GenericFunction;
}

export const SubMenuItems: React.FC<SubMenuItemsProps> = (
  {
    menuId,
    activeRoute,
    subMenuItems,
    subMenuIsOpen = false,
    isHoverTrigger = true,
    subMenuId,
    level = 0,
    path = [],
    onMenuButtonClick = () => {}
  }
) => {
  if (!subMenuItems || !subMenuItems.length) {
    return '';
  }

  const nextLevel = parseInt(String(level), 10) + 1;

  const wrapperCssClass = `
    noBullet 
    subMenuItems 
    subMenuItems_level${ level } 
    ${ subMenuIsOpen ? 'isOpen' : '' }
    ${ isHoverTrigger ? 'hoverTrigger' : '' }
    `;

  return (
    <ul className={ wrapperCssClass } id={ subMenuId }>
      {
        subMenuItems.map((subMenuItem, index) => {
          const {
            menuItems, hideItem, isOpen, isActive
          } = subMenuItem;
          const hasSubmenu = menuItems && menuItems.length > 0;

          const subMenuId = `${ menuId }_subMenu_${ nextLevel }_${ index }`;
          const subMenuCssClass = GetSubMenuCssClass({ level, subMenuItem });
          const itemPath = [...path, index];

          if (hideItem) {
            return null;
          }

          return (
            <li key={ subMenuId } className={ subMenuCssClass }>
              <span className="menuItem">
                <SubMenuButton
                  {
                    ...{
                      subMenuItem,
                      subMenuId,
                      hasSubmenu,
                      activeRoute,
                      path: itemPath,
                      onMenuButtonClick,
                      isHoverTrigger
                    }
                  }
                />
              </span>

              <SubMenuItems
                {
                  ...{
                    menuId,
                    subMenuId,
                    activeRoute,
                    subMenuItems: menuItems,
                    subMenuIsOpen: isOpen || isActive,
                    level: nextLevel,
                    path: itemPath,
                    onMenuButtonClick
                  }
                }
              />
            </li>
          );
        })
      }
    </ul>
  );
};
