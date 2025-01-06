import {
  FieldError, FieldErrors, FieldValues
} from 'react-hook-form';

export const NoHookFormContext = {
  register: () => {},
  getFieldState: ():{ invalid: boolean; isDirty: boolean; isTouched: boolean; isValidating: boolean; error?: FieldError; } => ({
    invalid: false, isDirty: true, isTouched: true, isValidating: false
  }),
  setValue: () => {},
  formState: {
    errors: {} as FieldErrors<FieldValues>
  }
};

export default NoHookFormContext;
