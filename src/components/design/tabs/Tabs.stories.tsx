import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const SimpleDemo: Story = {
  args: {
    tabs: [
      {
        id: 'tab1',
        control: {
          text: 'Tab 1'
        },
        content: 'Tab 1 content'
      },
      {
        id: 'tab2',
        control: {
          text: 'Tab 2'
        },
        content: 'Tab 2 content'
      },
      {
        id: 'tab3',
        control: {
          text: 'Tab 3'
        },
        content: 'Tab 3 content'
      }
    ]
  }
};
