'use client';

import React, { ReactNode, useState } from 'react';
import { FormFieldLabel } from '../subComponents/labels/FormFieldLabel';
import { FormFieldProps } from './formFieldProps';
import { InputText } from '../subComponents/inputs/text/InputText';
import { ValidationMessages } from '../../validation/ValidationMessages';
import { Spinner } from '../../../design/spinner/Spinner';
import { InputSearch } from '../subComponents/inputs/search/InputSearch';
import { InputDate } from '../subComponents/inputs/date/InputDate';
import { Select } from '../subComponents/select/Select';
import { Textarea } from '../subComponents/textarea/Textarea';

export const FormField: React.FC<FormFieldProps> = (
  {
    label,
    field,
    layout = 'stacked',
    showSpinner,
    validation,
    customContent,
    customCssClasses
  }
) => {
  const [isTouched, setIsTouched] = useState(false);

  const wrapperCssClass = `
    formField 
    ${ layout } 
    ${ field.type }_Field 
    ${ customCssClasses?.wrapper || '' } 
    ${ isTouched ? 'touched' : '' } 
    ${ typeof validation !== 'undefined' ? 'withValidation' : '' } 
    ${ label?.position === 'inset' ? 'insetLabel' : '' }
  `;

  const wrapperHoverText = (): string | undefined => {
    if (!label.hide) {
      return undefined;
    }

    if (field.placeholder) {
      return field.placeholder;
    }

    if (typeof label.text === 'string') {
      return label.text;
    }

    return undefined;
  };

  const getFieldElement = () => {
    const fieldType = field.type.toLowerCase();
    const fieldProps = {
      field: {
        ...field,
        ...(fieldType !== 'checkbox' ? { defaultValue: field.defaultValue || '' } : {}),
        onTouched: () => setIsTouched(true)
      },
      label,
      showSpinner,
      validation,
      customContent
    };

    switch (fieldType) {
    case 'textarea':
      return <Textarea { ...fieldProps } />;
    case 'select':
      return <Select { ...fieldProps } />;
    case 'checkbox':
      return new Error('Checkboxes require special handling. Please use the InputCheckbox component instead.');
    case 'file':
      return '';
    case 'password':
      return <InputText { ...fieldProps } />;
    case 'date':
      return <InputDate { ...fieldProps } />;
    case 'search':
      return <InputSearch { ...fieldProps } />;
    default:
      return <InputText { ...fieldProps } />;
    }
  };

  const labelProps = {
    ...label,
    inputId: field.id,
    isRequired: validation && typeof validation.required !== 'undefined',
    customContent
  };

  return (
    <div
      className={ wrapperCssClass }
      title={ wrapperHoverText() }
    >
      <label
        id={ label.labelId || `${ field.id }_label` }
        className={ `${ customCssClasses?.label || '' } ${ showSpinner ? 'withSpinner' : '' } ${ label.hide ? 'hiddenLabel' : '' }` }
        htmlFor={ field.id }
      >

        { (!label?.position || label.position === 'left')
          && <FormFieldLabel { ...labelProps } /> }

        <span className="inputContainer">
          {
            getFieldElement() as ReactNode
          }

          { label?.position === 'inset'
            && <FormFieldLabel { ...labelProps } /> }
        </span>

        { label?.position === 'right'
          && <FormFieldLabel { ...labelProps } /> }

        {
          showSpinner && <Spinner />
        }

        <ValidationMessages name={ field.name } validation={ validation } />

      </label>
    </div>
  );
};

export default FormField;
