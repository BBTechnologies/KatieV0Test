'use client';

import React from 'react';

import './card.scss';
import { CardHeaderProps, CardHeader } from './cardHeader/CardHeader';

export interface CardProps {
  id: string;
  header?: CardHeaderProps;
  footer?: string | React.ReactElement;
  customCssClass?: string;
  restrictHeight?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'auto';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'auto';
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = (
  {
    id,
    header,
    children,
    footer,
    customCssClass,
    restrictHeight,
    size = 's'
  }
) => {
  const cardId = id || `card_${ Date.now() }`;
  const heightCssClass = restrictHeight ? `card_height_${ restrictHeight }` : '';
  const sizeCssClass = `card_${ size }`;

  return (
    <div id={ cardId } className={ `card ${ sizeCssClass } ${ heightCssClass } ${ customCssClass || '' }` }>
      {
        header && <CardHeader { ...header } cardId={ cardId } />
      }

      <section className="cardContent">
        { children }
      </section>
      {
        footer
        && (
          <footer className="cardFooter">
            { footer }
          </footer>
        )
      }

    </div>
  );
};
