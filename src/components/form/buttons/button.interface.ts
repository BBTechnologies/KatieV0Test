import { ReactElement, ReactNode } from 'react';
import { IconProps } from '../../design/icons/basicIcon/Icon';
import { GenericFunction } from '../../../interfaces/generic.interface';
import { ButtonClassCombination } from './buttonVariations';

export interface ButtonProps {
  label: string | ReactNode;
  id: string;
  title?: string;
  cssClass?: string | ButtonClassCombination;
  onClickHandler?: GenericFunction;
  buttonType?: 'button' | 'submit' | 'reset';
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  hideLabel?: boolean;
  children?: ReactNode | ReactElement;
}
