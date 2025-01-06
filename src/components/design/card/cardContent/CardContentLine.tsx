'use client';

import React, {
  ReactElement,
  ReactNode
} from 'react';
import { Icon, IconProps } from '../../icons/basicIcon/Icon';
import { LogoLink, LogoLinkProps } from '../../logos/LogoLink';
import { OwnerDetailsPopup } from '../../ownerDetailsPopup/OwnerDetailsPopup';
import { GenericFunction } from '../../../../interfaces';
import { StatusIndicatorsInterface } from '../../statusIndicators/statusIndicators.interface';
import { StatusLightsBar } from '../../statusIndicators/statusLightsBar/StatusLightsBar';

import './cardContentLine.scss';

export interface CardContentLineProps {
  id: string;
  icon?: IconProps;
  logo?: LogoLinkProps;
  graphic?: {
    imageUrl: string;
    label: string;
  },
  owner?: {
    name: string;
    email: string;
    phone: string;
  },
  title: string;
  hideTitle?: boolean;
  onLineClick: GenericFunction;
  children: ReactNode | ReactElement;
  statuses?: StatusIndicatorsInterface;
}

export const CardContentLine: React.FC<CardContentLineProps> = (
  {
    id,
    icon,
    logo,
    graphic,
    owner,
    title,
    hideTitle = false,
    onLineClick = () => {},
    children,
    statuses
  }
) => {
  const handleLineClick = () => {
    onLineClick(id);
  };

  return (
    <div id={ id } className="cardContentLine" title={ title }>
      <button type="button" className="cardContentLineButton" onClick={ handleLineClick }>
        { icon && <Icon { ...icon } /> }

        { logo && <LogoLink { ...logo } /> }

        { graphic && <img src={ graphic.imageUrl } className="logoImage" alt={ `${ graphic.label }` } /> }

        <span className={ hideTitle ? 'sr-only' : 'cardContentLineTitle' }>{ title }</span>
      </button>

      <div className="cardContentLineContent">
        {
          children
        }
      </div>

      {
        statuses && <StatusLightsBar { ...statuses } />
      }

      {
        owner && <OwnerDetailsPopup owner={ owner } />
      }
    </div>
  );
};
