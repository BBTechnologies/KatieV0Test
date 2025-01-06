import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';
import { InputSearch } from './InputSearch';
import { FormFieldProps } from '../../../formFieldWrapper/formFieldProps';
import { FormField } from '../../../formFieldWrapper/FormField';

const meta: Meta<typeof InputSearch> = {
  title: 'Forms/Search',
  component: InputSearch,
};

export default meta;

type Story = StoryObj<typeof InputSearch>;

const InputSearchDemo = (args: FormFieldProps) => {
  const hookFormMethods = useForm({
    mode: 'all',
    criteriaMode: 'all',
    shouldFocusError: true,
  });

  return (
    <FormProvider {...hookFormMethods}>
      <form autoComplete="off">
        <FormField {...args} />
      </form>
    </FormProvider>
  );
};

export const SearchInput: Story = {
  render: () => (
    <InputSearchDemo
      {...{
        label: {
          text: 'Demo label 1',
        },
        field: {
          type: 'search',
          id: 'demo1',
          name: 'demo1',
        },
      }}
    />
  ),
};

export const RequiredSearchInput: Story = {
  render: () => (
    <InputSearchDemo
      {...{
        label: {
          text: 'Demo label 2',
        },
        field: {
          type: 'search',
          id: 'demo2',
          name: 'demo2',
        },
        validation: { required: 'This is required' },
      }}
    />
  ),
};
