'use client';

import React from 'react';
import { ButtonProps } from './button.interface';
import { Icon } from '../../design/icons/basicIcon/Icon';

export const SimpleButton: React.FC<ButtonProps> = (
  {
    buttonType = 'button',
    leftIcon,
    rightIcon,
    hideLabel = false,
    label = 'A button',
    title,
    id = 'buttonIdRequired',
    cssClass = 'button primary',
    onClickHandler = () => {},
    children
  }
) => {
  const buttonCssClass = `${ Array.isArray(cssClass) ? cssClass.join(' ') : cssClass } ${ hideLabel ? 'iconOnly' : '' }`;

  return (
    // eslint-disable-next-line react/button-has-type
    <button id={ id } title={ title } className={ buttonCssClass } type={ buttonType } onClick={ onClickHandler }>
      { leftIcon && <Icon { ...leftIcon } /> }

      <span className={ `${ hideLabel ? 'sr-only' : 'labelText' }` }>{ label }</span>

      { children }

      { rightIcon && <Icon { ...rightIcon } /> }
    </button>
  );
};
