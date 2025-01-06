import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GlobalDashboard } from './GlobalDashboard';
import { VENTURES } from '../../../../../constants';
import { Tabs } from '../../../../design/tabs/Tabs';
import { SimpleButton } from '../../../../form/buttons/SimpleButton';
import { CardContentLine } from '../../../../design/card/cardContent/CardContentLine';
import { Card } from '../../../../design/card/Card';
import { SearchPanelMenu } from '../../../../navigation/searchPanelMenu/SearchPanelMenu';
import { DashboardMenuMock, MenuMock, UserMenuMock } from '../../../../../mocks/mainMenu.mock';
import { Menu } from '../../../../navigation/menu/Menu';
import { PopupMenu } from '../../../../navigation/popupMenu/PopupMenu';

const meta: Meta = {
  title: 'Layout/GlobalDashboard'
};

export default meta;

type Story = StoryObj;

export const FullDashboard: Story = {
  render: () => (
    <GlobalDashboard
      {
        ...{
          leftPanel: {
            content: <Menu menuItems={ DashboardMenuMock } />,
            isOpen: true
          },
          rightPanel: {
            content: <Tabs
              {
                ...{
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
              }
            />
          },
          mainHeader: {
            logos: [
              {
                ventureDefinition: VENTURES.xGraph,
                ventureKey: 'xGraph'
              },
              {
                ventureDefinition: VENTURES.creditSavvy,
                ventureKey: 'creditSavvy'
              }
            ],
            rightContent: (
              <>
                <SimpleButton label="Feedback" id="demoRightHeaderFeedback" onClickHandler={ () => {} } />
                <SimpleButton label="Docs" id="demoRightHeaderDocs" onClickHandler={ () => {} } />

                <PopupMenu {
                  ...{
                    id: 'demoRightHeaderNotificationsPopupMenu',
                    triggerSettings: {
                      notificationsSettings: {
                        id: 'NotificationsPopupMenu',
                        label: 'Notifications Popup Menu',
                        count: 12
                      }
                    },
                    popDirection: {
                      x: 'left'
                    },
                    menuItems: MenuMock
                  }
                }
                />

                <PopupMenu {
                  ...{
                    id: 'demoRightHeaderUserPopupMenu',
                    triggerSettings: {
                      userSettings: {
                        id: 'BabySlothPopupMenu',
                        label: 'Baby Sloth Popup Menu',
                        user: {
                          imageUrl: 'data:image/jpeg;base64,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',
                          fullName: 'Baby Sloth'
                        }
                      }
                    },
                    popDirection: {
                      x: 'left'
                    },
                    menuItems: UserMenuMock
                  }
                }
                />
              </>
            ),
            children: <SearchPanelMenu
              {
                ...{
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
              }
            />,
            search: {
              label: 'xGraph global search',
              id: 'xGraphGlobalSearch',
              onSearch: () => {}
            }
          },
          toolBar: {
            show: true,
            content:
            <>
              <SimpleButton
                id="demo1button123"
                label="demo ToolBar Button"
                onClickHandler={ () => {} }
                hideLabel
                leftIcon={{ icon: 'eye' }}
              />
              <SimpleButton
                id="demo1button223"
                label="demo ToolBar Button"
                onClickHandler={ () => {} }
                hideLabel
                leftIcon={{ icon: 'pencil' }}
              />
            </>
          }
        }
      }
    >
      <h2>Example workspace content</h2>

      <div className="cardsGrid">
        <Card
          {
            ...{
              id: 'demoCard1',
              header: {
                headerItems: [
                  {
                    title: 'Practice title 1',
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
          }
        />

        <Card
          {
            ...{
              id: 'demoCard2',
              header: {
                headerItems: [
                  {
                    title: 'Practice title 2',
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
          }
        />

        <Card
          {
            ...{
              id: 'demoCard3',
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
              children: <div>Another card with a logo in the header</div>
            }
          }
        />
      </div>
    </GlobalDashboard>
  )
};
