'use client';

import React, { ReactNode } from 'react';
import { StatusInterface } from '../statusIndicators.interface';
import { SimpleButton } from '../../../form/buttons/SimpleButton';
import { dateToShortReadableDateTime } from '../../../../helpers/dateHelpers';

import './statusIconButton.scss';
import { IconProps } from '../../icons/basicIcon/Icon';
import { ButtonProps } from '../../../form/buttons/button.interface';

interface StatusIconLabelInterface extends StatusInterface {
  customIcon?: IconProps;
  iconPosition?: 'left' | 'right';
  label: string | ReactNode;
  customCssClass?: string;
}

export const StatusIconButton: React.FC<StatusIconLabelInterface> = (
  {
    id,
    description,
    status,
    label,
    indicator = 'info',
    dueAt,
    onClick = () => {},
    customIcon,
    customCssClass = '',
    iconPosition = 'left'
  }
) => {
  const formattedDueDateTime = dueAt ? dateToShortReadableDateTime(dueAt) : 'TBD';

  const iconMap: {[index: string]: string} = {
    info: 'info',
    alert: 'notification',
    warn: 'warning',
    defCon3: 'fire',
    success: 'info'
  };

  const getIconProps = (): { leftIcon?: IconProps; rightIcon?: IconProps; } => {
    if (customIcon) {
      if (iconPosition !== 'left') {
        return {
          rightIcon: customIcon
        };
      }
      return {
        leftIcon: customIcon
      };
    }
    return {
      ...(iconPosition === 'left'
        ? {
          leftIcon: {
            icon: iconMap[indicator]
          }
        }
        : {
          rightIcon: {
            icon: iconMap[indicator]
          }
        }
      )
    };
  };

  const buttonProps: ButtonProps = {
    cssClass: `statusIconButton ${ indicator } ${ customCssClass }`,
    title: `${ status }: ${ description }. Due at ${ formattedDueDateTime }`,
    label,
    id,
    onClickHandler: () => onClick(id),
    ...(getIconProps())
  };

  return (
    <SimpleButton { ...buttonProps } />
  );
};
