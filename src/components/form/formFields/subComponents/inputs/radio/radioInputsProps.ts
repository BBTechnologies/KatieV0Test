import React, { ReactElement, ReactNode } from 'react';
import { Message, Validate, ValidationRule } from 'react-hook-form';

import {
  CustomContentProps, CustomFieldCssClassesProps, FieldProps, LabelProps, ValidationProps
} from '../../../formFieldWrapper/formFieldProps';
import { GenericFunction } from '../../../../../../interfaces';

export interface RadioInputLabelProps extends Omit<LabelProps, 'hide' | 'position' | 'text'> {
  position?: 'left' | 'right';
  cssClasses: {
    checked: string;
    unchecked: string;
  };
  text: {
    checked: string | ReactNode | ReactElement;
    unchecked: string | ReactNode | ReactElement;
  };
  isChecked?: boolean;
}

export interface RadioInputFieldProps extends Omit<FieldProps, 'onChange' | 'type' | 'placeholder' | 'defaultValue' | 'referenceDate' | 'includeEmptyOption' | 'options'> {
  isOnlyOption?: boolean;
  defaultChecked?: boolean;
  value?: string | number | readonly string[];
  groupName: string; // Comes from the group
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface RadioInputValidationProps<TFieldValue = unknown, TFormValues = unknown> {
  required?: Message | ValidationRule<boolean>;
  validate?: Validate<TFieldValue, TFormValues> | Record<string, Validate<TFieldValue, TFormValues>>;
  [key: string]:
    | Message
    | ValidationRule<RegExp>
    | ValidationRule<number | string | boolean>
    | Validate<TFieldValue, TFormValues>
    | Record<string, Validate<TFieldValue, TFormValues>>
    | undefined;
}

export interface RadioInputProps {
  label: RadioInputLabelProps,
  field: RadioInputFieldProps,
  validation?: RadioInputValidationProps;
  showSpinner?: boolean;
  customCssClasses?: CustomFieldCssClassesProps;
  customContent?: CustomContentProps;
}

export interface StyledRadioGroupProps {
  group: {
    id: string;
    name: string;
    label: LabelProps;
    layout?: 'stacked' | undefined,
    showSpinner?: boolean;
    validation?: ValidationProps;
    customCssClasses?: CustomFieldCssClassesProps;
    customContent?: CustomContentProps;
    value?: string | number | boolean;
    onChange?: GenericFunction
  };
  radioInputs: RadioInputProps[]
}
