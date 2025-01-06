import {
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  ReactNode
} from 'react';
import {
  Message,
  Validate,
  ValidationRule
} from 'react-hook-form';
import { GenericFunction } from '../../../../interfaces';

/**
 * Custom content props for additional elements around the label or field.
 */
export interface CustomContentProps {
  /** Element or text to display before the label. */
  preLabel?: ReactElement | string;
  /** Element or text to display after the label. */
  postLabel?: ReactElement | string;
  /** Element or text to display before the field. */
  preField?: ReactElement | string;
  /** Element or text to display after the field. */
  postField?: ReactElement | string;
}

/**
 * Props for the label element.
 */
export interface LabelProps {
  /** Text or element for the label. */
  text: string | ReactNode | ReactElement;
  /** The ID of the input the label is associated with. */
  inputId?: string;
  /** The ID of the label element. */
  labelId?: string;
  /** Whether to hide the label visually. */
  hide?: boolean;
  /** Position of the label relative to the field. */
  position?: 'inset' | 'left' | 'right' | 'string';
  /** Tooltip for the label. */
  labelTooltip?: {
    /** Text for the tooltip. */
    text: string;
    /** Optional icon for the tooltip. */
    icon?: ReactElement | string;
  };
  /** Screen reader instructions for the label. */
  srInstruction?: string;
  /** Whether the field is required. */
  isRequired?: boolean;
  /** Custom content for the label. */
  customContent?: CustomContentProps;
}

/**
 * Type for a single select option.
 */
export type SelectOptionObjectType = {
  /** Label of the option. */
  label: string;
  /** Value of the option. */
  value: string | number | boolean;
};

/**
 * Type for select options, which can be an object or string.
 */
export type SelectOptionType = SelectOptionObjectType | string;

/**
 * Props for the field element.
 */
export interface FieldProps {
  /** The type of the input field. */
  type: string;
  /** The ID of the input field. */
  id: string;
  /** The name of the input field. */
  name: string;
  /** Placeholder text for the input field. */
  placeholder?: string;
  /** Regex pattern for password validation. */
  passwordRegex?: string;
  /** Default value for the input field. */
  defaultValue?: string | number | readonly string[];
  /** Handler for the change event. */
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLSelectElement> | KeyboardEvent<HTMLTextAreaElement>
  ) => void | GenericFunction;
  /** Handler for the blur event. */
  onBlur?: GenericFunction;
  /** Handler for the keydown event. */
  onKeyDown?: (
    event: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLSelectElement> | KeyboardEvent<HTMLTextAreaElement>
  ) => void | GenericFunction;
  /** Handler for marking the field as touched. */
  onTouched?: GenericFunction;
  /** Whether to include an empty option in a dropdown. */
  includeEmptyOption?: boolean;
  /** Label for the empty option. */
  emptyOptionLabel?: string;
  /** Options for a dropdown field. */
  options?: SelectOptionType[];
  /** Auto-complete behavior for the field. */
  autoComplete?: string;
}

/**
 * Validation rules for fields.
 */
export type CustomValidate<TFieldValue> = (
  value: TFieldValue,
  formValues?: unknown
) => boolean | string | Promise<boolean | string>;

/**
 * Props for validation rules.
 */
export interface ValidationProps<
  TFieldValue = unknown | string | boolean,
  TFormValues = unknown
> {
  /** Whether the field is required. */
  required?: Message | ValidationRule<boolean>;
  /** Minimum value or length. */
  min?: ValidationRule<number | string>;
  /** Maximum value or length. */
  max?: ValidationRule<number | string>;
  /** Maximum length of the field. */
  maxLength?: ValidationRule<number>;
  /** Minimum length of the field. */
  minLength?: ValidationRule<number>;
  /** Regex pattern for validation. */
  pattern?: ValidationRule<RegExp>;
  /** Custom validation logic. */
  validate?: CustomValidate<TFieldValue> | Record<string, CustomValidate<TFieldValue>> | Validate<TFieldValue, TFormValues>;
}

export type ValidationKey = keyof ValidationProps<unknown, unknown>; // Restrict to known keys

/**
 * Custom CSS classes for the field components.
 */
export interface CustomFieldCssClassesProps {
  /** CSS class for the label. */
  label?: string;
  /** CSS class for the input field. */
  input?: string;
  /** CSS class for the wrapper. */
  wrapper?: string;
}

/**
 * Props for a form field component.
 */
export interface FormFieldProps {
  /** Props for the label. */
  label: LabelProps;
  /** Props for the field. */
  field: FieldProps;
  /** Layout style of the form field. */
  layout?: 'stacked' | 'horizontal' | string;
  /** Validation rules for the field. */
  validation?: ValidationProps;
  /** Whether to show a spinner. */
  showSpinner?: boolean;
  /** Custom CSS classes for the field. */
  customCssClasses?: CustomFieldCssClassesProps;
  /** Custom content for the field. */
  customContent?: CustomContentProps;
}
