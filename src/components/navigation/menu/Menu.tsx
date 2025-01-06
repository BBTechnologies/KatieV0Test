'use client';

import React, { useState } from 'react';
import { MenuButtonPropTypes, MenuItemPropTypes } from './Menu.interfaces';
import { SubMenuItems } from './subMenuItems/SubMenuItems';

import './menu.scss';

export interface MenuProps {
  wrapper?: {
    customCssClass?: string
  },
  id?: string,
  layout?: 'horizontal' | 'vertical',
  behaviour?: 'hamburger' | 'floating',
  activeRoute?: string,
  menuItems: MenuButtonPropTypes[]
}

export const Menu: React.FC<MenuProps> = (
  {
    wrapper = {
      customCssClass: ''
    },
    id = 'mainMenu',
    activeRoute = '',
    menuItems,
    behaviour = 'hamburger',
    layout = 'vertical'
  }
) => {
  const [menuItemsState, setMenuItemsState] = useState(menuItems);

  const applyOpenAndActiveClasses = (menuItem: MenuItemPropTypes, itemPath: number[]) => {
    const newState = !menuItem.isOpen;

    const adjustedMenuState = [...menuItemsState];
    // Break up the itemPath segments and make sure all the parents are open as well
    for (let i = 0; i < itemPath.length; i += 1) {
      adjustedMenuState[itemPath[i]].isOpen = newState;
    }
    setMenuItemsState(adjustedMenuState);
  };

  const handleMenuButtonClick = (event: React.UIEvent, menuItem: MenuItemPropTypes, itemPath : number[]) => {
    if (menuItem.onSelect) {
      menuItem.onSelect(event);
    }
    applyOpenAndActiveClasses(menuItem, itemPath);
  };

  return (
    <nav id={ id } className={ `menuWrapper ${ behaviour } ${ layout } ${ wrapper.customCssClass }` }>
      <div className={ `menu ${ layout === 'horizontal' ? 'hoverBehaviours' : '' }` }>
        {
          menuItemsState.length
          && (
            <SubMenuItems
              menuId={ id }
              activeRoute={ activeRoute }
              onMenuButtonClick={ handleMenuButtonClick }
              subMenuItems={ menuItemsState }
              subMenuId={ `${ id }_subMenu_1` }
              level={ 1 }
              isHoverTrigger={ layout === 'horizontal' }
            />
          )
        }
      </div>
    </nav>
  );
};

export default Menu;
