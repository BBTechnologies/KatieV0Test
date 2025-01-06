'use client';

import React, { ReactElement } from 'react';

export interface IconProps {
  icon: string | ReactElement;
  customCssClass?: string;
  isMultiColor?: boolean;
  pathsCount?: number;
}

export const Icon: React.FC<IconProps> = (
  {
    icon,
    customCssClass = '',
    isMultiColor = false,
    pathsCount = 20
  }
  : IconProps
) => {
  if (isMultiColor) {
    return (
      <span
        className={ `icon icon-${ icon } ${ customCssClass }` }
        role="presentation"
        aria-hidden="true"
      >
        { /* eslint-disable-next-line react/no-array-index-key */ }
        { Array(pathsCount).fill(0).map((pathElement, index) => (<span key={ `${ icon }IconPath${ index }` } className={ `path${ (index + 1) }` } />)) }
      </span>
    );
  }

  if (typeof icon === 'string') {
    return (
      <i
        className={ `icon icon-${ icon } ${ customCssClass }` }
        role="presentation"
        aria-hidden="true"
      />
    );
  }

  return icon;
};

export default Icon;
