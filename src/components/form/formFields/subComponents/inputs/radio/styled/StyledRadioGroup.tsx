'use client';

import React, { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { StyledRadioGroupProps } from '../radioInputsProps';
import { useTabbableInputGroup } from '../../../../../../../hooks';
import { FormFieldLabel } from '../../../labels/FormFieldLabel';
import { StyledRadioInput } from './StyledRadioInput';
import { ValidationMessages } from '../../../../../validation/ValidationMessages';
import { Spinner } from '../../../../../../design/spinner/Spinner';

import './styledRadioGroup.scss';

export const StyledRadioGroup: React.FC<StyledRadioGroupProps> = (
  {
    group: {
      id,
      name: groupName,
      value: defaultGroupValue,
      label,
      layout,
      validation,
      showSpinner,
      customCssClasses,
      customContent,
      onChange = () => {}
    },
    radioInputs
  }
) => {
  const [isTouched, setIsTouched] = useState(false);
  const { getValues, setValue } = useFormContext();
  const [groupValue, setGroupValue] = useState(typeof defaultGroupValue !== 'undefined' ? defaultGroupValue : getValues(groupName));
  const radioInputsGroup = useRef(null);

  useTabbableInputGroup({ groupWrappingElementRef: radioInputsGroup });

  const HandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const newValue = target.value;
    setValue(groupName, newValue);
    setGroupValue(newValue);
    setIsTouched(true);
    onChange(newValue);
  };

  const wrapperCssClass = `formField styledRadiosGroup ${ layout || '' } ${ isTouched ? 'touched' : '' } ${ customCssClasses?.wrapper || '' } ${ label?.position || '' }`;

  const labelProps = {
    ...label,
    isRequired: validation && typeof validation.required !== 'undefined',
    customContent
  };

  return (
    <fieldset id={ id } onBlur={ () => setIsTouched(true) } className={ wrapperCssClass }>
      <span className="sr-only">
        Screen reader users are advised that this radio group supports
        custom keyboard navigation between radio options via tabbing.
      </span>

      <legend className={ label.hide ? 'sr-only' : '' }><FormFieldLabel { ...labelProps } /></legend>

      <div ref={ radioInputsGroup } className={ `radioInputs radioInputs_${ radioInputs.length }` }>
        {
          radioInputs.map((radioInput) => (
            <StyledRadioInput
              key={ radioInput.field.id }
              {
                ...{
                  ...radioInput,
                  label: {
                    ...radioInput.label,
                    isChecked: groupValue === radioInput.field.value
                  },
                  field: {
                    ...radioInput.field,
                    defaultChecked: groupValue === radioInput.field.value,
                    groupName,
                    onChange: HandleOnChange
                  }
                }
              }
            />
          ))
        }
      </div>

      {
        showSpinner && <Spinner />
      }

      <ValidationMessages name={ groupName } validation={ validation } />
    </fieldset>
  );
};

export default StyledRadioGroup;
