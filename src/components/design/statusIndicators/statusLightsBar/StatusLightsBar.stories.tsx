import type { Meta, StoryObj } from '@storybook/react';

import { StatusLightsBar } from './StatusLightsBar';

const meta: Meta<typeof StatusLightsBar> = {
  title: 'Components/States/Status Lights Bar',
  component: StatusLightsBar
};

export default meta;

type Story = StoryObj<typeof StatusLightsBar>;

const testStatuses = [
  {
    id: '1',
    description: 'Something about this status',
    status: 'overdue',
    indicator: 'warn',
    dueAt: '2024-03-01T00:00:00.000Z'
  },
  {
    id: '2',
    description: 'Something about this status',
    status: 'requires action',
    indicator: 'alert',
    dueAt: '2025-09-06T11:00:00.554Z'
  },
  {
    id: '3',
    description: 'Something about this status',
    status: 'boring',
    indicator: 'info',
    dueAt: '2025-10-06T15:30:10.554Z'
  },
  {
    id: '4',
    description: 'Something about this status',
    status: 'on fire',
    indicator: 'defCon3',
    dueAt: '2025-10-06T15:30:10.554Z'
  },
  {
    id: '5',
    description: 'Something about this status',
    status: 'happy days',
    indicator: 'success',
    dueAt: '2025-10-06T15:30:10.554Z'
  }
];

export const Default: Story = {
  args: {
    statuses: testStatuses
  }
};

export const Small: Story = {
  args: {
    statuses: testStatuses,
    size: 's'
  }
};

export const Large: Story = {
  args: {
    statuses: testStatuses,
    size: 'l'
  }
};
