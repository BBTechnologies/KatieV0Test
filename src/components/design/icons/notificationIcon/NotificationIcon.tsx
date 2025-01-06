'use client';

import React from 'react';
import { Icon, IconProps } from '../basicIcon/Icon';

import './notificationIcon.scss';

export interface NotificationIconProps {
  icon?: IconProps;
  customCssClass?: string;
  text: string;
}

export const NotificationIcon: React.FC<NotificationIconProps> = (
  {
    icon,
    customCssClass,
    text
  }
) => (
  <span className={ `notificationIcon ${ customCssClass || '' }` }>
    {
      icon
        && <Icon { ...icon } customCssClass={ customCssClass } />
    }
    {
      text
    }
  </span>
);
