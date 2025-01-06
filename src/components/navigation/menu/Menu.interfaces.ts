import { ReactElement, ReactNode } from 'react';
import { GenericFunction } from '../../../interfaces';

export type MenuItemIconStates = {
  open: string,
  closed: string
}

export type MenuItemIconPropTypes = string | ReactElement | MenuItemIconStates;

export type MenuItemIconsPropTypes = {
  left?: MenuItemIconPropTypes,
  right?: MenuItemIconPropTypes
};

export interface MenuButtonPropTypes {
  url?: string;
  isOpen?: boolean;
  icons?: MenuItemIconsPropTypes;
  label: string | ReactElement | ReactNode;
  hideLabel?: boolean;
  onSelect?: GenericFunction;
  hideItem?: boolean;
  isActive?: boolean;
  customCssClass?: string;
  route?: string;
  path?: number[];
  id: string;
}

export interface MenuItemPropTypes extends MenuButtonPropTypes {
  menuItems?: MenuItemPropTypes[];
}
