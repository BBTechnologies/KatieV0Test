import { MenuItemPropTypes } from './Menu.interfaces';

export const GetSubMenuCssClass = (
  {
    level,
    subMenuItem
  } :
  {
    level: number,
    subMenuItem: MenuItemPropTypes
  }
) => {
  const { isOpen, menuItems, customCssClass } = subMenuItem;

  const cssClasses = ['subMenu', `level_${ level }`];

  if (customCssClass) {
    cssClasses.push(customCssClass);
  }

  if (menuItems && menuItems.length > 0) {
    cssClasses.push('hasSubmenu');
    if (isOpen) {
      cssClasses.push('open');
    } else {
      cssClasses.push('closed');
    }
  }
  return cssClasses.join(' ');
};
