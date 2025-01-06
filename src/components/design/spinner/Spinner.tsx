'use client';

import React from 'react';
import { SpinnerWithArms } from './spinnerWithArms/SpinnerWithArms';
import { SpinnerArc } from './spinnerArc/SpinnerArc';
import { SpinnersInterface } from './spinner.interface';

import './spinners.scss';

export const Spinner: React.FC<SpinnersInterface> = (
  {
    spinnerStyle = 'arms',
    size = 'm',
    customCssClass = ''
  }
) => {
  const spinnerCssClass = `spinner_${ size } ${ customCssClass }`;

  if (spinnerStyle === 'arc') {
    return <SpinnerArc cssClass={ spinnerCssClass } />;
  }
  return <SpinnerWithArms cssClass={ spinnerCssClass } />;
};

export default Spinner;
