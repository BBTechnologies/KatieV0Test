import type { Meta, StoryObj } from '@storybook/react';

import { StatusIconButton } from './StatusIconButton';

const meta: Meta<typeof StatusIconButton> = {
  title: 'Components/States/Status Icon Button',
  component: StatusIconButton
};

export default meta;

type Story = StoryObj<typeof StatusIconButton>;

export const Info: Story = {
  args: {
    id: '1',
    description: 'Shows as part of hover',
    status: 'info',
    indicator: 'info',
    dueAt: '2024-03-01T00:00:00.000Z',
    label: 'Info status'
  }
};

export const Warn: Story = {
  args: {
    id: '1',
    description: 'Shows as part of hover',
    status: 'warn',
    indicator: 'warn',
    dueAt: '2024-03-01T00:00:00.000Z',
    label: 'Warn status'
  }
};

export const Success: Story = {
  args: {
    id: '1',
    description: 'Shows as part of hover',
    status: 'success',
    indicator: 'success',
    dueAt: '2024-03-01T00:00:00.000Z',
    label: 'Success status'
  }
};

export const Alert: Story = {
  args: {
    id: '1',
    description: 'Shows as part of hover',
    status: 'alert',
    indicator: 'alert',
    dueAt: '2024-03-01T00:00:00.000Z',
    label: 'Alert status'
  }
};

export const DefCon3: Story = {
  args: {
    id: '1',
    description: 'Shows as part of hover',
    status: 'defcon3',
    indicator: 'defCon3',
    dueAt: '2024-03-01T00:00:00.000Z',
    label: 'DefCon3 status'
  }
};

export const IconToRight: Story = {
  args: {
    id: '1',
    description: 'Shows as part of hover',
    status: 'defcon3',
    indicator: 'defCon3',
    dueAt: '2024-03-01T00:00:00.000Z',
    label: 'DefCon3 status',
    iconPosition: 'right'
  }
};

export const CustomIcon: Story = {
  args: {
    id: '1',
    description: 'Shows as part of hover',
    status: 'warn',
    indicator: 'warn',
    dueAt: '2024-03-01T00:00:00.000Z',
    label: 'Warn status',
    customIcon: { icon: 'eye' }
  }
};

export const CustomIconToRight: Story = {
  args: {
    id: '1',
    description: 'Shows as part of hover',
    status: 'success',
    indicator: 'success',
    dueAt: '2024-03-01T00:00:00.000Z',
    label: 'Success status',
    customIcon: { icon: 'eye' },
    iconPosition: 'right'
  }
};
