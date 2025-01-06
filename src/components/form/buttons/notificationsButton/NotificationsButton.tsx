'use client';

import React from 'react';
import { SimpleButton } from '../SimpleButton';
import { NotificationIcon } from '../../../design/icons/notificationIcon/NotificationIcon';
import { pluralizeIfNeeded } from '../../../../helpers';
import { ButtonProps } from '../button.interface';

import './notificationsButton.scss';

export interface NotificationsButtonProps extends Omit<ButtonProps, 'label'> {
  count?: number;
  label?: string;
}

export const NotificationsButton: React.FC<NotificationsButtonProps> = (props) => {
  const {
    count = 0,
    label = `You have ${ count } ${ pluralizeIfNeeded('notification', count) }`,
    hideLabel = true,
    leftIcon = { icon: 'bell' },
    ...buttonProps
  } = props;

  const buttonCssClass = `button ${ buttonProps.cssClass } ${ hideLabel ? 'icon_only' : '' } notificationsButton`;

  return (
    <SimpleButton
      { ...buttonProps }
      label={ label }
      hideLabel={ hideLabel }
      leftIcon={ leftIcon }
      cssClass={ buttonCssClass }
    >
      { count > 0 && <NotificationIcon text={ `${ count }` } /> }
    </SimpleButton>
  );
};
