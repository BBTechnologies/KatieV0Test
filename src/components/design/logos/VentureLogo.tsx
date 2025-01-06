'use client';

import React from 'react';
import { VentureDefinition } from '../../../constants/ventures';

import './ventureLogos.scss';

export interface VentureLogoProps {
  ventureDefinition: VentureDefinition;
  ventureKey: string;
  size?: 'icon' | 'full';
  customCssClass?: string;
}

export const VentureLogo: React.FC<VentureLogoProps> = (
  {
    ventureKey,
    ventureDefinition,
    size = 'full',
    customCssClass
  }
) => {
  const { logo: { icon, full }, name, sites: { public: { name: publicSiteName, url } } } = ventureDefinition;

  const cssClass = `ventureLogo ventureLogo_${ size } ${ ventureKey }Logo ${ customCssClass || '' }`;

  return (
    <a href={ url } title={ name } target="_blank" className={ cssClass } rel="noreferrer">
      {
        size === 'icon'
          ? icon
          : full
      }

      <span className="sr-only">
        Visit { publicSiteName }
      </span>
    </a>
  );
};
