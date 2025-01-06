import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { CardContentLine } from './cardContent/CardContentLine';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card
};

export default meta;

type Story = StoryObj<typeof Card>;

export const SimpleCard: Story = {
  args: {
    header: {
      headerItems: [
        {
          title: 'Practice title',
          owner: {
            name: 'Fred Flinstone',
            email: 'fred.flinstone@x15.com.au',
            phone: '0412345678'
          },
          url: 'https://x15ventures.com.au'
        }
      ]
    },
    children: <div>This is the content</div>,
    footer: 'Footer content'
  }
};

export const NoHeader: Story = {
  args: {
    children: <div>This is the content</div>,
    footer: 'Footer content'
  }
};

export const NoFooter: Story = {
  args: {
    header: {
      headerItems: [
        {
          title: 'Practice title',
          owner: {
            name: 'Fred Flinstone',
            email: 'fred.flinstone@x15.com.au',
            phone: '0412345678'
          },
          url: 'https://x15ventures.com.au'
        }
      ]
    },
    children: <div>This is the content</div>
  }
};

export const NoHeaderOrFooter: Story = {
  args: {
    children: <div>This is the content</div>
  }
};

export const MultipleHeaderItems: Story = {
  args: {
    header: {
      headerItems: [
        {
          icon: {
            icon: 'xgraph'
          },
          title: 'xGraph',
          hideTitle: true,
          owner: {
            name: 'Betty Flinstone',
            email: 'betty.flinstone@x15.com.au',
            phone: '0412345678'
          },
          url: 'https://x15ventures.com.au'
        },
        {
          title: 'Practice title',
          owner: {
            name: 'Fred Flinstone',
            email: 'fred.flinstone@x15.com.au',
            phone: '0412345678'
          },
          url: 'https://x15ventures.com.au'
        }
      ]
    },
    children: <div>This is the content</div>
  }
};

export const CardWithCardLines: Story = {
  args: {
    header: {
      headerItems: [
        {
          title: 'Practice title',
          owner: {
            name: 'Fred Flinstone',
            email: 'fred.flinstone@x15.com.au',
            phone: '0412345678'
          },
          url: 'https://x15ventures.com.au'
        }
      ]
    },
    children: (
      <div>
        <CardContentLine
          title="Item 1"
          id="lineItem1"
          icon={{ icon: 'kit' }}
          hideTitle
          owner={{
            name: 'Betty Flinstone',
            email: 'betty.flinstone@x15.com.au',
            phone: '0412345678'
          }}
          statuses={
            {
              statuses: [
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
                  indicator: 'defCon3',
                  dueAt: '2025-09-06T11:00:00.554Z'
                }
              ],
              size: 's'
            }
          }
          onLineClick={ () => {} }
        >
          Imagine chart here
        </CardContentLine>
        <CardContentLine
          title="Item 2"
          id="lineItem2"
          icon={{ icon: 'doshii' }}
          hideTitle
          owner={{
            name: 'Fred Flinstone',
            email: 'fred.flinstone@x15.com.au',
            phone: '0412345678'
          }}
          statuses={
            {
              statuses: [
                {
                  id: '5',
                  description: 'Something about this status',
                  status: 'happy days',
                  indicator: 'success',
                  dueAt: '2025-10-06T15:30:10.554Z'
                }
              ],
              size: 's'
            }
          }
          onLineClick={ () => {} }
        >
          Imagine chart here
        </CardContentLine>
      </div>
    ),
    footer: 'Footer content'
  }
};
