'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { RadioInputProps } from '../radioInputsProps';
import { StyledRadioLabel } from './StyledRadioLabel';

export const StyledRadioInput: React.FC<RadioInputProps> = (
  {
    label,
    field: {
      isOnlyOption,
      value,
      id,
      groupName,
      defaultChecked,
      onBlur = () => {},
      onChange = () => {},
      onTouched = () => {}
    },
    validation,
    customCssClasses,
    customContent
  }
) => {
  const {
    getFieldState, register
  } = useFormContext();

  const fieldState = getFieldState(groupName);

  const inputCssClass = `${ customCssClasses?.input || '' }${ fieldState?.invalid ? ' invalidField' : '' }`;

  const isRequired = validation && typeof validation.required !== 'undefined';

  const HandleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
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

  const fieldRegistration = register(
    groupName,
    {
      onChange,
      onBlur: HandleOnBlur,
      ...validation
    }
  );

  const inputProps = {
    type: 'radio',
    id,
    value,
    className: inputCssClass,
    defaultChecked: defaultChecked || isOnlyOption,
    disabled: isOnlyOption,
    'aria-required': isRequired,
    ...fieldRegistration
  };

  return (
    <div className={ `styledRadioInput ${ customCssClasses?.label || '' }` }>
      <label
        id={ label.labelId || `${ id }_label` }
        className={ defaultChecked ? label.cssClasses.checked : label.cssClasses.unchecked }
        htmlFor={ id }
      >
        { label.position === 'left'
          && <StyledRadioLabel { ...labelProps } /> }

        <div className="inputContainer">
          <input { ...inputProps } />
        </div>

        { (!label?.position || label?.position === 'right')
          && <StyledRadioLabel { ...labelProps } /> }
      </label>
    </div>
  );
};

export default StyledRadioInput;
