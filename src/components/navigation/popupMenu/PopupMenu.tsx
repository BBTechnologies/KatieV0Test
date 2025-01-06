'use client';

import React, { useRef, useState } from 'react';
import { Menu, MenuProps } from '../menu/Menu';
import { ButtonProps } from '../../form/buttons/button.interface';
import { UserPicButton, UserPicButtonProps } from '../../form/buttons/userPicButton/UserPicButton';
import {
  NotificationsButton,
  NotificationsButtonProps
} from '../../form/buttons/notificationsButton/NotificationsButton';
import { SimpleButton } from '../../form/buttons/SimpleButton';
import { useOnClickOutside, usePopupKeys } from '../../../hooks';

import './popupMenu.scss';

type DefaultPopupMenuTriggerProps = Omit<ButtonProps, 'onClickHandler'>
type UserPicPopupMenuTriggerProps = Omit<UserPicButtonProps, 'onClickHandler'>
type NotificationsPopupMenuTriggerProps = Omit<NotificationsButtonProps, 'onClickHandler'>

interface PopupMenuProps extends MenuProps {
  activeRoute?: string;
  triggerSettings: {
    default?: DefaultPopupMenuTriggerProps,
    userSettings?: UserPicPopupMenuTriggerProps,
    notificationsSettings?: NotificationsPopupMenuTriggerProps
  },
  popDirection?: {
    y?: 'up' | 'down',
    x?: 'left' | 'right'
  };
  id: string;
}

export const PopupMenu: React.FC<PopupMenuProps> = (
  props
) => {
  const [isMenuShowing, setIsMenuShowing] = useState<boolean>(false);

  const menuHolder = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuHolder, () => setIsMenuShowing(false));
  usePopupKeys(menuHolder, () => setIsMenuShowing(false));

  const {
    triggerSettings,
    id = 'popupMenu',
    popDirection = { x: 'right', y: 'down' },
    ...rest
  } = props;

  const toggleMenuShowing = () => {
    setIsMenuShowing(!isMenuShowing);
  };

  const cssClass = `
    popupMenu 
    ${ isMenuShowing ? 'open' : '' }
    popDirection_${ popDirection.x || 'right' }_${ popDirection.y || 'down' }
  `;

  return (
    <div id={ id } className={ cssClass } ref={ menuHolder }>
      { triggerSettings.userSettings && <UserPicButton { ...triggerSettings.userSettings } onClickHandler={ toggleMenuShowing } /> }

      { triggerSettings.notificationsSettings
        && <NotificationsButton { ...triggerSettings.notificationsSettings } onClickHandler={ toggleMenuShowing } /> }

      { triggerSettings.default && <SimpleButton { ...triggerSettings.default } onClickHandler={ toggleMenuShowing } /> }

      <Menu { ...rest } id={ `${ id }MenuItems` } />
    </div>
  );
};

export default PopupMenu;
