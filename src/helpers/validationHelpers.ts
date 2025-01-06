import {
  ValidateResult,
  ValidationValueMessage
} from 'react-hook-form';
import { CustomValidate } from '../components/form/formFields/formFieldWrapper/formFieldProps';

export type ValidationRuleWithValue<TFieldValue = unknown> = Record<string, CustomValidate<TFieldValue>>;

export type ValidationRuleType<TFieldValue = unknown> =
  | boolean
  | string
  | number
  | RegExp
  | ValidationValueMessage<RegExp>
  | ValidationValueMessage<boolean | number | string | RegExp>
  | ValidationRuleWithValue<TFieldValue>
  | CustomValidate<TFieldValue>
  | ValidationValueMessage<number | string | boolean>
  | undefined;

export const isValidationRuleWithValue = (
  rule:
    | boolean | string | ValidationValueMessage<boolean | number | string | RegExp> | number | RegExp
    | ValidationRuleWithValue<unknown> | ValidationValueMessage<RegExp> | ValidationValueMessage<number | string | boolean>
    | ((value: unknown, formValues: unknown) => (ValidateResult | Promise<ValidateResult>))
    | Record<string, (value: unknown, formValues: unknown) => (ValidateResult | Promise<ValidateResult>)>
    | ((dateString: string) => boolean) | undefined
): rule is ValidationRuleWithValue => typeof rule === 'object' && 'value' in rule;
