import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from '../../subComponents/inputs/text/InputText';
import { HookFormWrapper } from '../../../hookFormWrapper/HookFormWrapper';

const meta: Meta<typeof InputText> = {
  title: 'Forms/Component Structure/InputText',
  component: InputText,
  decorators: [
    (Story, context) => (
      <HookFormWrapper>
        <Story { ...context } />
      </HookFormWrapper>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const InputSubComponent: Story = {
  args: {
    field: {
      type: 'text', id: 'demo1', name: 'demo1'
    },
    label: {
      text: 'Demo label 2'
    }
  }
};
