'use client';

import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  Merge, useFormContext
} from 'react-hook-form';
import {
  ValidationProps
} from '../formFields/formFieldWrapper/formFieldProps';
import { NoHookFormContext } from '../formFields/utilities/formUtilities';
import { InputCheckboxValidationProps } from '../formFields/subComponents/inputs/checkbox/inputCheckboxProps';

// Type for generic error messages
export const GenericErrorMessages: Record<string, (value?: never) => string> = {
  required: () => 'This field is required. Please enter a value.',
  minLength: (value) => `Please provide a minimum of ${ value } characters.`,
  maxLength: (value) => `Please provide a maximum of ${ value } characters.`,
  min: (value) => `The value must be a minimum of ${ value }.`,
  max: (value) => `The value must be a maximum of ${ value }.`,
  unknown: () => 'An unknown error has occurred.'
};

// Helper function to extract nested errors
const extractError = (
  errors: FieldErrors,
  fieldName: string
): FieldError | Merge<FieldError, FieldErrorsImpl<never>> | undefined => {
  if (!errors) {
    return undefined;
  }

  const pathComponents = fieldName.split('.');

  return pathComponents.reduce<FieldError | Merge<FieldError, FieldErrorsImpl<never>> | undefined>(
    (accumulator, pathComponent) => {
      if (!accumulator) {
        return undefined;
      }

      return (accumulator as never)[pathComponent];
    },
    errors as never
  );
};

interface ValidationMessagesProps {
  name: string;
  validation?: ValidationProps | InputCheckboxValidationProps
}

export const ValidationMessages: React.FC<ValidationMessagesProps> = (
  {
    name,
    validation
  }
) => {
  const { formState: { errors } } = useFormContext() || NoHookFormContext;

  const fieldError = extractError(errors, name);

  if (!fieldError) {
    return null;
  }

  // Check all the validators have a message
  if (validation) {
    Object.entries(validation).forEach(([validatorKey, validator]) => {
      if (GenericErrorMessages[validatorKey]) {
        if (typeof validator === 'boolean') {
          fieldError.message = GenericErrorMessages[validatorKey]();
        } else if (typeof validator === 'object' && 'value' in validator) {
          // eslint-disable-next-line
          // @ts-ignore The hook form types don't seem to cater for versions with value properties properly
          fieldError.message = GenericErrorMessages[validatorKey](validator.value || undefined);
        }
      }
    });
  }

  return (
    <span className="validation" id={ `${ name }_errors` }>
      <span className="message">
        { !fieldError?.message && (
          <span className="error">{ GenericErrorMessages.unknown() }</span>
        ) }

        <ErrorMessage
          errors={ errors }
          name={ name }
          render={ ({ message }) => <span className="error">{ message }</span> }
        />
      </span>
    </span>
  );
};

export default ValidationMessages;
