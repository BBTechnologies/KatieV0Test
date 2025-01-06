'use client';

import React, { ReactElement, ReactNode } from 'react';
import { Icon, IconProps } from '../../icons/basicIcon/Icon';
import { LogoLink, LogoLinkProps } from '../../logos/LogoLink';
import { OwnerDetailsPopup } from '../../ownerDetailsPopup/OwnerDetailsPopup';
import { ButtonProps } from '../../../form/buttons/button.interface';
import { SimpleButton } from '../../../form/buttons/SimpleButton';

export interface CardHeaderItemProps {
  icon?: IconProps;
  logo?: LogoLinkProps;
  graphic?: {
    imageUrl: string;
    label: string;
  },
  owner?: {
    name: string;
    email?: string;
    phone?: string;
  },
  title?: string;
  content?: ReactNode | ReactElement;
  hideTitle?: boolean;
  url?: string;
  actionButton?: ButtonProps;
}

export const CardHeaderItem: React.FC<CardHeaderItemProps> = (
  {
    icon,
    logo,
    graphic,
    owner,
    title,
    content,
    hideTitle = false,
    url,
    actionButton
  }
) => (
  <div className="cardHeaderItem" title={ title }>
    {
      url
        ? (
          <a className="cardHeaderItemLink" href={ url }>
            { icon && <Icon { ...icon } /> }

            { logo && <LogoLink { ...logo } /> }

            { graphic && <img src={ graphic.imageUrl } className="logoImage" alt={ `${ graphic.label }` } /> }

            <span className={ hideTitle ? 'sr-only' : 'cardHeaderItemTitle' }>{ content || title }</span>
          </a>
        )
        : content
    }

    {
      owner && <OwnerDetailsPopup owner={ owner } />
    }

    {
      actionButton && <SimpleButton { ...actionButton } />
    }
  </div>
);
