import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';
import { InputDate } from './InputDate';
import { FormFieldProps } from '../../../formFieldWrapper/formFieldProps';
import { FormField } from '../../../formFieldWrapper/FormField';

const meta: Meta<typeof InputDate> = {
  title: 'Forms/Date',
  component: InputDate
};

export default meta;

type Story = StoryObj<typeof InputDate>;

const InputDateDemo = (args: FormFieldProps) => {
  const hookFormMethods = useForm({
    mode: 'all',
    criteriaMode: 'all',
    shouldFocusError: true
  });

  return (
    <FormProvider { ...hookFormMethods }>
      <form autoComplete="off">
        <FormField { ...args } />
      </form>
    </FormProvider>
  );
};

export const DateInput: Story = {
  render: () => (
    <InputDateDemo
      {
        ...{
          label: {
            text: 'Demo label 1'
          },
          field: {
            type: 'date',
            id: 'demo1',
            name: 'demo1'
          }
        }
      }
    />
  )
};

export const RequiredDateInput: Story = {
  render: () => (
    <InputDateDemo
      {
        ...{
          label: {
            text: 'Demo label 2'
          },
          field: {
            type: 'date',
            id: 'demo2',
            name: 'demo2'
          },
          validation: { required: 'This is required' }
        }
      }
    />
  )
};
