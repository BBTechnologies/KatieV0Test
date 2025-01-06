'use client';

import React from 'react';
import { SpinnerProps } from '../spinner.interface';

import './spinnerWithArms.scss';

export const SpinnerWithArms: React.FC<SpinnerProps> = (
  {
    cssClass = ''
  }
) => (
  <span className={ `spinner spinnerWithArms rotate-steps-12 ${ cssClass }` }>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path
        className="path1"
        d="M48,72c0-1.1,0.9-2,2-2s2,0.9,2,2v26c0,1.1-0.9,2-2,2s-2-0.9-2-2V72z"
      />
      <path
        className="path2"
        d="M59.3,70.1c-0.6-1-0.2-2.2,0.7-2.7s2.2-0.2,2.7,0.7l13,22.5c0.6,1,0.2,2.2-0.7,2.7s-2.2,0.2-2.7-0.7L59.3,70.1z"
      />
      <path
        className="path3"
        d="M68.1,62.7c-1-0.6-1.3-1.8-0.7-2.7s1.8-1.3,2.7-0.7l22.5,13c1,0.6,1.3,1.8,0.7,2.7s-1.8,1.3-2.7,0.7L68.1,62.7z"
      />
      <path
        className="path4"
        d="M72,52c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2H72z"
      />
      <path
        className="path5"
        d="M70.1,40.7c-1,0.6-2.2,0.2-2.7-0.7s-0.2-2.2,0.7-2.7l22.5-13c1-0.6,2.2-0.2,2.7,0.7s0.2,2.2-0.7,2.7L70.1,40.7z"
      />
      <path
        className="path6"
        d="M62.7,31.9c-0.6,1-1.8,1.3-2.7,0.7s-1.3-1.8-0.7-2.7l13-22.5c0.6-1,1.8-1.3,2.7-0.7s1.3,1.8,0.7,2.7L62.7,31.9z"
      />
      <path
        className="path7"
        d="M52,28c0,1.1-0.9,2-2,2s-2-0.9-2-2V2c0-1.1,0.9-2,2-2s2,0.9,2,2V28z"
      />
      <path
        className="path8"
        d="M40.7,29.9c0.6,1,0.2,2.2-0.7,2.7s-2.2,0.2-2.7-0.7l-13-22.5c-0.6-1-0.2-2.2,0.7-2.7s2.2-0.2,2.7,0.7L40.7,29.9z"
      />
      <path
        className="path9"
        d="M31.9,37.3c1,0.6,1.3,1.8,0.7,2.7s-1.8,1.3-2.7,0.7l-22.5-13c-1-0.6-1.3-1.8-0.7-2.7s1.8-1.3,2.7-0.7L31.9,37.3z"
      />
      <path
        className="path10"
        d="M28,48c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2H28z"
      />
      <path
        className="path11"
        d="M29.9,59.3c1-0.6,2.2-0.2,2.7,0.7s0.2,2.2-0.7,2.7l-22.5,13c-1,0.6-2.2,0.2-2.7-0.7s-0.2-2.2,0.7-2.7L29.9,59.3z"
      />
      <path
        className="path12"
        d="M37.3,68.1c0.6-1,1.8-1.3,2.7-0.7s1.3,1.8,0.7,2.7l-13,22.5c-0.6,1-1.8,1.3-2.7,0.7s-1.3-1.8-0.7-2.7L37.3,68.1z"
      />
    </svg>
  </span>
);

export default SpinnerWithArms;
