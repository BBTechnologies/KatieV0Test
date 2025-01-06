'use client';

import React from 'react';
import { SpinnerProps } from '../spinner.interface';

import './spinnerArc.scss';

export const SpinnerArc: React.FC<SpinnerProps> = (
  {
    cssClass
  }
) => (
  <span className={ `spinner spinnerArc rotate ${ cssClass }` }>
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="spinnerArcMask" maskUnits="userSpaceOnUse" x="-1" y="0" width="97" height="96">
        <circle cx="47.9021" cy="48" r="48" className="spinnerArcMask" />
      </mask>
      <g mask="url(#spinnerArcMask)">
        <path
          className="spinnerArcPath"
          d="M40.1757 0.489025C40.8387 0.354254 41.4916 0.206371 42.1577 0.0861769C44.9214 -0.384492 47.2441 1.14701 47.8325 3.8203C48.406 6.42071 47.03 8.73432 44.3005 9.41053C39.6471 10.5537 35.0375 11.8018 30.9284 14.3673C18.2082 22.3108 10.9837 33.6605 10.2128 48.9579C10.1512 50.1316 10.1502 51.3082 10.1188 52.4833C10.0265 55.4999 8.15652 57.451 5.3484 57.4449C2.75098 57.4416 0.814064 55.4446 0.661566 52.5158C0.341757 46.5852 1.0917 40.7484 2.96562 35.1612C9.12014 16.8115 21.6922 5.40701 40.1757 0.489025Z"
        />
      </g>
    </svg>
  </span>
);
