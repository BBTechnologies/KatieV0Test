import { Message, Validate, ValidationRule } from 'react-hook-form';
import {
  CustomContentProps,
  CustomFieldCssClassesProps,
  FieldProps,
  FormFieldProps,
  LabelProps
} from '../../../formFieldWrapper/formFieldProps';

export interface InputCheckboxLabelProps extends Omit<LabelProps, 'hide' | 'position'> {
  position?: 'left' | 'right';
}

export interface InputCheckboxFieldProps extends Omit<FieldProps, 'type' | 'placeholder' | 'defaultValue' | 'referenceDate' | 'includeEmptyOption' | 'options'> {
  value: boolean | string;
  defaultChecked?: boolean;
}

export interface InputCheckboxValidationProps<TFieldValue = unknown, TFormValues = unknown> {
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

export interface InputCheckboxProps extends Omit<FormFieldProps, 'label' | 'field' | 'layout' | 'validation'> {
  label: InputCheckboxLabelProps,
  field: InputCheckboxFieldProps,
  validation?: InputCheckboxValidationProps;
  showSpinner?: boolean;
  customCssClasses?: CustomFieldCssClassesProps;
  customContent?: CustomContentProps;
}
