import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormFieldLabel } from '../../subComponents/labels/FormFieldLabel';

const meta: Meta<typeof FormFieldLabel> = {
  title: 'Forms/Component Structure/FormFieldLabel',
  component: FormFieldLabel
};

export default meta;

type Story = StoryObj<typeof FormFieldLabel>;

export const LabelSubComponent: Story = {
  args: {
    text: 'Demo label 1'
  }
};

export const Complex: Story = {
  args: {
    text: 'This is the label text',
    labelTooltip: {
      text: 'This shows on hover, click and keyboard. It can have a custom icon.',
      icon: 'wink'
    },
    customContent: {
      preLabel: <sup>This is the customContent preLabel</sup>,
      postLabel: <sup>This is the customContent postLabel</sup>,
      preField: 'This is the customContent preField',
      postField: 'This is the customContent postField'
    }
  }
};
