'use client';

import React, { ReactElement, ReactNode } from 'react';

export interface LogoLinkProps {
  imageUrl?: string;
  svg?: ReactElement | ReactNode;
  size?: 'xs' | 's' | 'm'
  customCssClass?: string;
  label: string;
  url: string;
  hideLabel?: boolean;
}

export const LogoLink: React.FC<LogoLinkProps> = (
  {
    imageUrl,
    svg,
    size = 's',
    customCssClass,
    label,
    url,
    hideLabel = true
  }
) => (
  <a href={ url } title={ label } target="_blank" className={ `logoLink logoLink_${ size } ${ customCssClass || '' }` } rel="noreferrer">
    {
      imageUrl && (
        <img src={ imageUrl }
          className="logoImage"
          alt={ `${ label } logo` }
        />
      )
    }
    {
      svg && <span className="logoSvg">{ svg }</span>
    }
    <span className={ hideLabel ? 'sr-only' : 'logoLabel' }>
      { label }
    </span>
  </a>
);
