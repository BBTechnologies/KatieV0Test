'use client';

import React from 'react';
import { HeaderTextInterface } from '../../../interfaces/headerText.interface';
import { Icon } from '../icons/basicIcon/Icon';
import { NotificationIcon } from '../icons/notificationIcon/NotificationIcon';
import { SimpleButton } from '../../form/buttons/SimpleButton';

import './headerBar.scss';

export const HeaderBar: React.FC<HeaderTextInterface> = (
  {
    text,
    leftIcon,
    rightIcon,
    buttons,
    notificationIcon,
    children
  }
) => {
  const headerCssClass = `headerBar 
    ${ leftIcon ? 'withLeftIcon' : '' }
    ${ rightIcon ? 'withRightIcon' : '' }
    ${ notificationIcon ? 'withNotification' : '' }
    `;

  return (
    <header className={ headerCssClass }>
      {
        leftIcon && <Icon { ...leftIcon } />
      }

      {
        text && <h2>{ text }</h2>
      }

      { children }

      {
        buttons
        && (
          <div className="headerButtons">
            {
              buttons.map((button) => <SimpleButton key={ button.id } { ...button } />)
            }
          </div>
        )
      }

      {
        rightIcon && <Icon { ...rightIcon } />
      }

      {
        notificationIcon && <NotificationIcon { ...notificationIcon } />
      }
    </header>
  );
};
