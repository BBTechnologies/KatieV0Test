'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormFieldProps, ValidationKey } from '../../../formFieldWrapper/formFieldProps';
import { NoHookFormContext } from '../../../utilities/formUtilities';
import { isValidationRuleWithValue } from '../../../../../../helpers/validationHelpers';

export interface InputTextProps extends FormFieldProps, React.InputHTMLAttributes<HTMLInputElement> {}

export const InputText: React.FC<InputTextProps> = (
  {
    field: {
      type = 'text',
      id,
      name,
      placeholder,
      defaultValue,
      onBlur = () => {},
      onChange = () => {},
      onKeyDown = () => {},
      onTouched = () => {},
      ...htmlNativeDomProps
    },
    validation,
    showSpinner,
    customCssClasses,
    customContent
  }
) => {
  const { register, getFieldState, setValue } = useFormContext() || NoHookFormContext;
  const fieldState = getFieldState(name);

  const HandleAutoFill = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target) {
      const newValue = target.value;
      if (type !== 'number' && type !== 'date') {
        setValue(name, newValue);
      }
      onChange(event);
    }
  };

  const HandleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target) {
      const newValue = target.value;
      if (type === 'text') {
        setValue(name, newValue.trim());
      }
      onTouched();
      onBlur(event);
    }
  };

  const HandleKeyEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(event);
  };

  const cssClass = `${ customCssClasses?.input || '' }${ fieldState && fieldState?.invalid ? ' invalidField' : '' }`;

  const addLengthValidatorProps = (validatorKey: ValidationKey) => {
    if (
      validation
      && typeof validation[validatorKey] !== 'undefined'
      && isValidationRuleWithValue(validation[validatorKey])
    ) {
      return {
        [validatorKey]: validation[validatorKey]?.value
      };
    }
    return {};
  };

  const inputProps = {
    type,
    id,
    className: cssClass,
    placeholder,
    defaultValue,
    ...(showSpinner ? { disabled: true } : {}),
    ...(validation && typeof validation.required !== 'undefined' ? { required: true } : {}),
    ...(addLengthValidatorProps('maxLength')),
    ...(addLengthValidatorProps('minLength')),
    ...(addLengthValidatorProps('max')),
    ...(addLengthValidatorProps('min')),
    ...register(
      name,
      {
        onChange: HandleAutoFill,
        onBlur: HandleOnBlur,
        ...validation
      }
    ),
    onKeyDown: HandleKeyEvent,
    ...htmlNativeDomProps
  };

  return (
    <>
      {
        customContent?.preField
        && <span className="preField">{ customContent?.preField }</span>
      }

      <input { ...inputProps } />

      {
        customContent?.postField
        && <span className="postField">{ customContent?.postField }</span>
      }
    </>
  );
};
