'use client';

import React from 'react';
import { ButtonProps } from '../button.interface';
import { SimpleButton } from '../SimpleButton';
import { Icon } from '../../../design/icons/basicIcon/Icon';
import { getInitialsOrAcronym } from '../../../../helpers/stringHelpers';

import './userPicButton.scss';

export interface UserPicButtonProps extends ButtonProps {
  user: {
    imageUrl?: string;
    fullName?: string;
  }
}

export const UserPicButton: React.FC<UserPicButtonProps> = (props) => {
  const {
    user, ...buttonProps
  } = props;

  return (
    <SimpleButton { ...buttonProps } hideLabel cssClass="button icon_only userPicButton">
      <span title={ user.fullName || 'User profile' } className="userPicFallbacks">
        <span
          style={
            {
              backgroundImage: `url(${ user.imageUrl })`
            }
          }
          className="userPic"
        />
        {
          user.fullName
          && (
            <span className="userInitials">
              { getInitialsOrAcronym(user.fullName) }
            </span>
          )
        }
        <Icon icon="user" customCssClass="userPicFallbackIcon" />
      </span>
    </SimpleButton>
  );
};
