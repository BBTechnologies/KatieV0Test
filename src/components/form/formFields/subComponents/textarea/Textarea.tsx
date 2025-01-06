'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormFieldProps } from '../../formFieldWrapper/formFieldProps';
import { NoHookFormContext } from '../../utilities/formUtilities';

interface TextareaProps extends FormFieldProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = (
  {
    field: {
      id,
      name,
      placeholder,
      defaultValue,
      onBlur = () => {},
      onChange = () => {},
      onKeyDown = () => {},
      onTouched = () => {}
    },
    validation,
    showSpinner,
    customCssClasses,
    customContent
  }
) => {
  const { register, getFieldState } = useFormContext() || NoHookFormContext;
  const fieldState = getFieldState(name);

  const HandleAutoFill = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target) {
      onChange(event);
    }
  };

  const HandleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target) {
      onTouched();
      onBlur(event);
    }
  };

  const HandleKeyEvent = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    onTouched();
    onKeyDown(event);
  };

  const cssClass = `${ customCssClasses?.input || '' }${ fieldState && fieldState?.invalid ? ' invalidField' : '' }`;

  const textareaProps = {
    id,
    className: cssClass,
    placeholder,
    defaultValue,
    ...(showSpinner ? { disabled: true } : {}),
    ...(validation && typeof validation.required !== 'undefined' ? { required: true } : {}),
    ...register(
      name,
      {
        onChange: HandleAutoFill,
        onBlur: HandleOnBlur,
        ...validation
      }
    ),
    onKeyDown: HandleKeyEvent
  };

  return (
    <>
      { customContent?.preField && <span className="preField">{ customContent?.preField }</span> }

      <textarea { ...textareaProps } />

      { customContent?.postField && <span className="postField">{ customContent?.postField }</span> }
    </>
  );
};
