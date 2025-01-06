'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { isAnObject } from '../../../../../helpers/objectHelpers';
import { FormFieldProps, SelectOptionObjectType, SelectOptionType } from '../../formFieldWrapper/formFieldProps';
import { NoHookFormContext } from '../../utilities/formUtilities';

interface SelectProps extends FormFieldProps, React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select: React.FC<SelectProps> = (
  {
    field: {
      id,
      name,
      placeholder,
      defaultValue,
      onBlur = () => {},
      onChange = () => {},
      onKeyDown = () => {},
      onTouched = () => {},
      includeEmptyOption = true,
      emptyOptionLabel = 'Please select',
      options
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

  const HandleKeyEvent = (event: React.KeyboardEvent<HTMLSelectElement>) => {
    onTouched();
    onKeyDown(event);
  };

  const cssClass = `${ customCssClasses?.input || '' }${ fieldState && fieldState?.invalid ? ' invalidField' : '' }`;

  const selectProps = {
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

  const renderOption = (option: SelectOptionType) => {
    if (isAnObject(option)) {
      const typedOption = option as SelectOptionObjectType;
      return (
        <option key={ `${ id }_${ typedOption.value }` } data-option={ JSON.stringify(typedOption) } value={ typedOption.value as string }>
          { typedOption.label }
        </option>
      );
    }
    return (
      <option key={ `${ id }_${ option }` } data-option={ JSON.stringify(option) } value={ option as string }>
        { option as string }
      </option>
    );
  };

  return (
    <>
      { customContent?.preField && <span className="preField">{ customContent?.preField }</span> }

      <select { ...selectProps }>
        { includeEmptyOption && <option value="">{ emptyOptionLabel }</option> }
        { options?.map(renderOption) }
      </select>

      { customContent?.postField && <span className="postField">{ customContent?.postField }</span> }
    </>
  );
};
