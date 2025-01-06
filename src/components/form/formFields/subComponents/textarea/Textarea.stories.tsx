import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { FormFieldProps } from '../../formFieldWrapper/formFieldProps';
import { FormField } from '../../formFieldWrapper/FormField';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textareas',
  component: Textarea
};

export default meta;

type Story = StoryObj<typeof Textarea>;

const TextareaDemo = (args: FormFieldProps) => {
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

export const BasicTextarea: Story = {
  render: () => (
    <TextareaDemo
      {
        ...{
          label: {
            text: 'Demo label 1'
          },
          field: {
            type: 'textarea',
            id: 'demo1',
            name: 'demo1'
          }
        }
      }
    />
  )
};

export const RequiredTextarea: Story = {
  render: () => (
    <TextareaDemo
      {
        ...{
          label: {
            text: 'Demo label 2'
          },
          field: {
            type: 'textarea',
            id: 'demo2',
            name: 'demo2'
          },
          validation: { required: 'This is required' }
        }
      }
    />
  )
};
