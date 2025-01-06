import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../../formFieldWrapper/FormField';
import { HookFormWrapper } from '../../../hookFormWrapper/HookFormWrapper';

const meta: Meta<typeof FormField> = {
  title: 'Forms/Selects',
  component: FormField,
  decorators: [
    (Story, context) => (
      <HookFormWrapper>
        <Story { ...context } />
      </HookFormWrapper>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const BasicSelect: Story = {
  args: {
    label: {
      text: 'Demo label 1'
    },
    field: {
      type: 'select',
      id: 'demo1',
      name: 'demo1',
      options: ['apple', 'orange', 'lemon']
    }
  }
};

export const RequiredSelect: Story = {
  args: {
    label: {
      text: 'Demo label 2'
    },
    field: {
      type: 'select',
      id: 'demo2',
      name: 'demo2',
      options: ['apple', 'orange', 'lemon']
    },
    validation: { required: 'This is required' }
  }
};
