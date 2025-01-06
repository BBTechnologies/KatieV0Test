'use client';

import React, { MouseEvent } from 'react';
import { SimpleButton } from '../../../form/buttons/SimpleButton';
import { StatusInterface } from '../statusIndicators.interface';
import { dateToShortReadableDateTime } from '../../../../helpers/dateHelpers';

import './statusLight.scss';

interface StatusLightInterface extends StatusInterface {
  size?: 's' | 'm' | 'l';
  includeDueDate?: boolean;
  onClick?: (event: MouseEvent, status: string) => void;
}

export const StatusLight: React.FC<StatusLightInterface> = (
  {
    size = 'm',
    id,
    description,
    status,
    indicator,
    dueAt,
    includeDueDate = true,
    onClick
  }
) => {
  const formattedDueDateTime = `Due at ${ dueAt ? dateToShortReadableDateTime(dueAt) : 'TBD' }`;
  const title = `${ description }. ${ includeDueDate ? formattedDueDateTime : '' }`;

  if (onClick) {
    return (
      <SimpleButton
        cssClass={ `statusLight statusLight_${ size } ${ indicator }` }
        title={ title }
        hideLabel
        label={ status }
        id={ id }
        onClickHandler={ (event) => onClick(event, status) }
      />
    );
  }

  return (
    <span
      className={ `statusLight statusLight_${ size } ${ indicator }` }
      title={ title }
      id={ id }
    >
      <span className="sr-only">{ status }</span>
    </span>
  );
};
