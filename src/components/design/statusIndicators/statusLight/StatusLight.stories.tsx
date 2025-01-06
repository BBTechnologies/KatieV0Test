import type { Meta, StoryObj } from '@storybook/react';

import { StatusLight } from './StatusLight';

const meta: Meta<typeof StatusLight> = {
  title: 'Components/States/Status Lights',
  component: StatusLight
};

export default meta;

type Story = StoryObj<typeof StatusLight>;

export const Warn: Story = {
  args: {
    id: '1',
    description: 'Something about this status',
    status: 'overdue',
    indicator: 'warn',
    dueAt: '2024-03-01T00:00:00.000Z'
  }
};

export const Alert: Story = {
  args: {
    id: '2',
    description: 'Something about this status',
    status: 'requires action',
    indicator: 'alert',
    dueAt: '2025-09-06T11:00:00.554Z'
  }
};

export const Info: Story = {
  args: {
    id: '3',
    description: 'Something about this status',
    status: 'boring',
    indicator: 'info',
    dueAt: '2025-10-06T15:30:10.554Z'
  }
};

export const DefCon3: Story = {
  args: {
    id: '4',
    description: 'Something about this status',
    status: 'on fire',
    indicator: 'defCon3',
    dueAt: '2025-10-06T15:30:10.554Z'
  }
};

export const Success: Story = {
  args: {
    id: '5',
    description: 'Something about this status',
    status: 'happy days',
    indicator: 'success',
    dueAt: '2025-10-06T15:30:10.554Z'
  }
};

export const Small: Story = {
  args: {
    id: '4',
    description: 'Something about this status',
    status: 'on fire',
    indicator: 'defCon3',
    dueAt: '2025-10-06T15:30:10.554Z',
    size: 's'
  }
};

export const Medium: Story = {
  args: {
    id: '4',
    description: 'Something about this status',
    status: 'on fire',
    indicator: 'defCon3',
    dueAt: '2025-10-06T15:30:10.554Z',
    size: 'm'
  }
};

export const Large: Story = {
  args: {
    id: '4',
    description: 'Something about this status',
    status: 'on fire',
    indicator: 'defCon3',
    dueAt: '2025-10-06T15:30:10.554Z',
    size: 'l'
  }
};
