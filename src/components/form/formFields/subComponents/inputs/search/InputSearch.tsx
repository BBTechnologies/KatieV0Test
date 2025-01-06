'use client';

import React from 'react';
import { InputText, InputTextProps } from '../text/InputText';
import { Icon } from '../../../../../design/icons/basicIcon/Icon';

import './inputSearch.scss';

// PRIVATE COMPONENT
// Do not use this directly. It must be created via a FormField component

export const InputSearch: React.FC<InputTextProps> = (
  {
    customContent,
    ...rest
  }
) => (
  <InputText
    { ...rest }
    type="search"
    customContent={
      {
        ...customContent,
        preField: <span className="searchIcon"><Icon icon="search" /></span>
      }
    }
  />
);
