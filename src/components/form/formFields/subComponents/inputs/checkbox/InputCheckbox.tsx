'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormFieldLabel } from '../../labels/FormFieldLabel';
import { ValidationMessages } from '../../../../validation/ValidationMessages';
import { Spinner } from '../../../../../design/spinner/Spinner';
import { Icon } from '../../../../../design/icons/basicIcon/Icon';

import { InputCheckboxProps } from './inputCheckboxProps';

import './inputCheckbox.scss';

export const InputCheckbox: React.FC<InputCheckboxProps> = (
  {
    label,
    field: {
      id,
      name,
      defaultChecked,
      onBlur = () => {},
      onChange = () => {},
      onTouched = () => {}
    },
    validation,
    showSpinner,
    customCssClasses,
    customContent
  }
) => {
  const [isTouched, setIsTouched] = useState(false);
  const { register, getFieldState } = useFormContext();
  const fieldState = getFieldState(name);

  const wrapperCssClass = `formField checkBoxField ${ customCssClasses?.wrapper || '' } ${ isTouched ? 'touched' : '' }`;

  const inputCssClass = `${ customCssClasses?.input || '' }${ fieldState?.invalid ? ' invalidField' : '' }`;

  const isRequired = validation && typeof validation.required !== 'undefined';

  const HandleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    setIsTouched(true);
    if (target) {
      onTouched();
      onBlur(event);
    }
  };

  const labelProps = {
    ...label,
    inputId: id,
    isRequired,
    customContent
  };

  const inputProps = {
    type: 'checkbox',
    id,
    className: inputCssClass,
    defaultChecked,
    'aria-required': isRequired,
    ...register(
      name,
      {
        onChange,
        onBlur: HandleOnBlur,
        ...validation
      }
    )
  };

  return (
    <div
      className={ wrapperCssClass }
    >
      <label
        id={ label.labelId || `${ id }_label` }
        className={ `${ customCssClasses?.label || '' } ${ showSpinner ? 'withSpinner' : '' }` }
        htmlFor={ id }
      >

        { label.position === 'left'
          && <FormFieldLabel { ...labelProps } /> }

        <div className="inputContainer">
          <input { ...inputProps } />
          <span className="checkboxIcons">
            <Icon icon="checkbox-unchecked" />
            <Icon icon="checkbox-checked" />
          </span>
        </div>

        { (!label?.position || label?.position === 'right')
          && <FormFieldLabel { ...labelProps } /> }

        {
          showSpinner && <Spinner />
        }

        <ValidationMessages name={ name } validation={ validation } />
      </label>
    </div>
  );
};

export const CheckboxInput: React.FC<InputCheckboxProps> = (props) => <InputCheckbox { ...props } />;
