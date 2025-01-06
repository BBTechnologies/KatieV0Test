import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SearchPanelMenu } from './SearchPanelMenu';

const meta: Meta = {
  title: 'Navigation/SearchPanelMenu',
  component: SearchPanelMenu,
  decorators: [
    (Story, context) => (
      <div className="searchPanelMenuDemo">
        <Story
          { ...context }
        />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof SearchPanelMenu>;

export const SinglePanel: Story = {
  args: {
    panels: [
      {
        id: 'menuPanelTeams',
        search: {
          label: 'Search for teams',
          id: 'menuPanelTeamsSearch'
        },
        heading: 'Teams',
        activeActionButtonId: 'team2ActionButton',
        topActionButtons: [
          {
            label: 'Another action',
            id: 'topActionButton1',
            leftIcon: { icon: 'user' },
            onClickHandler: () => {}
          }
        ],
        mainActionButtons: [
          {
            label: 'Team 1',
            id: 'team1ActionButton',
            leftIcon: { icon: 'cheddar' },
            onClickHandler: () => {}
          },
          {
            label: 'Team 2',
            id: 'team2ActionButton',
            leftIcon: { icon: 'credit-savvy' },
            onClickHandler: () => {}
          },
          {
            label: 'Team 3',
            id: 'team3ActionButton',
            leftIcon: { icon: 'doshii' },
            onClickHandler: () => {}
          }
        ],
        bottomActionButtons: [
          {
            label: 'Another action',
            id: 'bottomActionButton1',
            leftIcon: { icon: 'lock' },
            onClickHandler: () => {}
          }
        ]
      }
    ]
  }
};

export const TwoPanels: Story = {
  args: {
    panels: [
      {
        id: 'menuPanelTeams',
        search: {
          label: 'Search for teams',
          id: 'menuPanelTeamsSearch'
        },
        heading: 'Teams',
        activeActionButtonId: 'team2ActionButton',
        topActionButtons: [
          {
            label: 'Another action',
            id: 'topActionButton1',
            leftIcon: { icon: 'user' },
            onClickHandler: () => {}
          }
        ],
        mainActionButtons: [
          {
            label: 'Team 1',
            id: 'team1ActionButton',
            leftIcon: { icon: 'cheddar' },
            onClickHandler: () => {}
          },
          {
            label: 'Team 2',
            id: 'team2ActionButton',
            leftIcon: { icon: 'credit-savvy' },
            onClickHandler: () => {}
          },
          {
            label: 'Team 3',
            id: 'team3ActionButton',
            leftIcon: { icon: 'doshii' },
            onClickHandler: () => {}
          }
        ],
        bottomActionButtons: [
          {
            label: 'Another action',
            id: 'bottomActionButton1',
            leftIcon: { icon: 'lock' },
            onClickHandler: () => {}
          }
        ]
      },
      {
        id: 'menuPanelProduct',
        search: {
          label: 'Search for products',
          id: 'menuPanelProductSearch'
        },
        heading: 'Products',
        activeActionButtonId: 'product2ActionButton',
        mainActionButtons: [
          {
            label: 'Product 1',
            id: 'product1ActionButton',
            onClickHandler: () => {}
          },
          {
            label: 'Product 2',
            id: 'product2ActionButton',
            onClickHandler: () => {}
          },
          {
            label: 'Product 3',
            id: 'product3ActionButton',
            onClickHandler: () => {}
          }
        ]
      }
    ]
  }
};

export const TwoPanelsSearchResults: Story = {
  args: {
    activePanel: 1,
    panels: [
      {
        id: 'menuPanelTeams',
        search: {
          label: 'Search for teams',
          id: 'menuPanelTeamsSearch'
        },
        heading: 'Teams',
        activeActionButtonId: 'team2ActionButton',
        topActionButtons: [
          {
            label: 'Another action',
            id: 'topActionButton1',
            leftIcon: { icon: 'user' },
            onClickHandler: () => {}
          }
        ],
        mainActionButtons: [
          {
            label: 'Team 1',
            id: 'team1ActionButton',
            leftIcon: { icon: 'cheddar' },
            onClickHandler: () => {}
          },
          {
            label: 'Team 2',
            id: 'team2ActionButton',
            leftIcon: { icon: 'credit-savvy' },
            onClickHandler: () => {}
          },
          {
            label: 'Team 3',
            id: 'team3ActionButton',
            leftIcon: { icon: 'doshii' },
            onClickHandler: () => {}
          }
        ],
        bottomActionButtons: [
          {
            label: 'Another action',
            id: 'bottomActionButton1',
            leftIcon: { icon: 'lock' },
            onClickHandler: () => {}
          }
        ]
      },
      {
        id: 'menuPanelProduct',
        search: {
          label: 'Search for products',
          id: 'menuPanelProductSearch',
          searchResults: [
            {
              label: 'search result 1',
              id: 'searchResult1',
              onClick: () => {}
            },
            {
              label: 'search result 2',
              id: 'searchResult2',
              onClick: () => {}
            },
            {
              label: 'search result 3',
              id: 'searchResult3',
              onClick: () => {}
            }
          ]
        },
        heading: 'Products',
        activeActionButtonId: 'product2ActionButton',
        mainActionButtons: [
          {
            label: 'Product 1',
            id: 'product1ActionButton',
            onClickHandler: () => {}
          },
          {
            label: 'Product 2',
            id: 'product2ActionButton',
            onClickHandler: () => {}
          },
          {
            label: 'Product 3',
            id: 'product3ActionButton',
            onClickHandler: () => {}
          }
        ]
      }
    ]
  }
};
