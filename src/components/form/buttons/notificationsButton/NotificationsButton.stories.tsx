import type { Meta, StoryObj } from '@storybook/react';

import { NotificationsButton } from './NotificationsButton';

const meta: Meta<typeof NotificationsButton> = {
  title: 'Forms/Buttons/NotificationsButton',
  component: NotificationsButton
};

export default meta;

type Story = StoryObj<typeof NotificationsButton>;

export const CountOfOne: Story = {
  args: {
    count: 1
  }
};

export const CountOfZero: Story = {
  args: {
    count: 0
  }
};

export const CountOfTwo: Story = {
  args: {
    count: 2
  }
};

export const CountOfTen: Story = {
  args: {
    count: 10
  }
};

export const CountOfOneHundred: Story = {
  args: {
    count: 100
  }
};

export const CustomIcon: Story = {
  args: {
    count: 10,
    leftIcon: { icon: 'quill' }
  }
};

export const WithLabelShowing: Story = {
  args: {
    count: 10,
    label: 'Text',
    hideLabel: false,
    leftIcon: { icon: 'quill' }
  }
};
