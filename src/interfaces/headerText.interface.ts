import React from 'react';
import { NotificationIconProps } from '../components/design/icons/notificationIcon/NotificationIcon';
import { ButtonProps } from '../components/form/buttons/button.interface';
import { IconProps } from '../components/design/icons/basicIcon/Icon';

export interface HeaderTextInterface {
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  text?: string;
  notificationIcon?: NotificationIconProps;
  buttons?: ButtonProps[],
  children?: React.ReactNode
}
