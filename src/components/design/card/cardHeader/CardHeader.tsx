'use client';

import React from 'react';
import { CardHeaderItemProps, CardHeaderItem } from './CardHeaderItem';

import './cardHeader.scss';

export interface CardHeaderProps {
  cardId?: string;
  headerItems: CardHeaderItemProps[]
}

export const CardHeader: React.FC<CardHeaderProps> = (
  {
    cardId,
    headerItems
  }
) => (
  <div className="cardHeader">
    {
      headerItems.map((headerItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardHeaderItem key={ `${ cardId }_headerItem_${ index }` } { ...headerItem } />
      ))
    }
  </div>
);
