import React from 'react';

import './chip.scss';

interface ChipProps {
  label: string | React.ReactNode;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  color?: 'yellow' | 'orange' | 'red' | 'purple' | 'blue' | 'green' | 'white' | 'black' | 'darkgrey' | 'lightgrey';
  variant?: 'solid' | 'outline' | 'outlineInverse';
  customCssClass?: string;
}

export const Chip: React.FC<ChipProps> = (
  {
    label,
    size = 'm',
    color = 'darkgrey',
    variant = 'solid',
    customCssClass = ''
  }
) => (
  <strong className={ `chip chip_${ size } chip_${ color } chip_${ variant } ${ customCssClass }` }>
    <small>{ label }</small>
  </strong>
);

export default Chip;
