'use client';

import React, { ReactNode, ReactElement, FormHTMLAttributes } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface FormWrapperProps {
  formCssClass?: string;
  formProps?: FormHTMLAttributes<HTMLFormElement>;
  children: ReactNode | ReactElement;
}

export const HookFormWrapper: React.FC<FormWrapperProps> = (
  {
    formCssClass = 'x15StandardForm',
    children,
    formProps
  }
) => {
  const hookFormMethods = useForm({
    mode: 'all',
    criteriaMode: 'all',
    shouldFocusError: true
  });

  // TODO: Add standard submit validation logic

  return (
    <FormProvider { ...hookFormMethods }>
      <form className={ formCssClass } autoComplete="off" { ...formProps }>
        {
          children
        }
      </form>
    </FormProvider>
  );
};

export default HookFormWrapper;
