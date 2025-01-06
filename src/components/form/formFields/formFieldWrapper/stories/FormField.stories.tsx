import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../FormField';
import { HookFormWrapper } from '../../../hookFormWrapper/HookFormWrapper';
import { DEFAULT_EMAIL_REGEX } from '../../../../../constants/validationRegex';

const meta: Meta<typeof FormField> = {
  title: 'Forms/Component Structure/FormField',
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

export const Simple: Story = {
  args: {
    label: {
      text: 'Demo label 1'
    },
    field: {
      type: 'text',
      id: 'demo1',
      name: 'demo1'
    }
  }
};

export const Complex: Story = {
  args: {
    label: {
      text: 'This is the label',
      labelTooltip: {
        text: 'This shows on hover, click and keyboard. It can have a custom icon.',
        icon: 'wink'
      },
      srInstruction: 'This is an extra instruction for screen reader users.'
    },
    field: {
      type: 'email',
      id: 'demo1',
      name: 'demo1',
      autoComplete: 'email',
      placeholder: 'fred.flinstone@example.com'
    },
    validation: {
      required: 'This is required',
      pattern: {
        value: DEFAULT_EMAIL_REGEX,
        message: 'Please enter a valid email address.'
      }
    },
    customContent: {
      preLabel: <sup>This is the customContent <strong>preLabel</strong></sup>,
      postLabel: <sup>This is the customContent <strong>postLabel</strong></sup>,
      preField: <strong>This is the customContent preField</strong>,
      postField: <em>This is the customContent postField</em>
    }
  }
};
