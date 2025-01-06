import React from 'react';
import { MenuItemPropTypes } from '../components/navigation/menu/Menu.interfaces';

export const MenuMock: MenuItemPropTypes[] = [
  {
    icons: {
      right: 'happy'
    },
    label: 'Item 1',
    id: 'item1'
  },
  {
    url: '#',
    icons: {
      right: 'happy2'
    },
    label: 'Item 2',
    id: 'item2'
  },
  {
    url: '#',
    icons: {
      right: 'smile'
    },
    label: 'Item 3 - hidden',
    hideItem: true,
    id: 'item3'
  },
  {
    icons: {
      right: {
        open: 'smile',
        closed: 'smile2'
      }
    },
    label: 'Item 4',
    menuItems: [
      {
        icons: {
          right: 'tongue'
        },
        label: 'Submenu item 1',
        id: 'item4a'
      },
      {
        icons: {
          right: 'tongue2'
        },
        label: 'Submenu item 2',
        id: 'item4b'
      },
      {
        icons: {
          right: 'sad'
        },
        label: 'Submenu item 3',
        id: 'item4c'
      },
      {
        icons: {
          right: 'sad2'
        },
        label: 'Submenu item 4',
        id: 'item4d'
      }
    ],
    id: 'item4'
  },
  {
    icons: {
      left: 'wink'
    },
    label: 'Item 5',
    id: 'item5'
  },
  {
    icons: {
      left: 'wink',
      right: 'wink2'
    },
    label: 'Item 6',
    id: 'item6',
    menuItems: [
      {
        icons: {
          right: 'tongue'
        },
        label: 'Submenu item 1',
        id: 'item6a'
      },
      {
        icons: {
          right: 'tongue2'
        },
        label: 'Submenu item 2',
        id: 'item6b'
      }
    ]
  }
];

export const xGraphTopMenuMock: MenuItemPropTypes[] = [
  {
    icons: {
      left: 'search'
    },
    label: <>Type <span className="codeSnippet">/</span> to search</>,
    id: 'mm_Search'
  },
  {
    icons: {
      left: 'newspaper'
    },
    label: 'Overview',
    id: 'mm_Overview'
  },
  {
    icons: {
      left: 'equalizer'
    },
    label: 'Controls',
    id: 'mm_Controls'
  },
  {
    icons: {
      left: 'scale'
    },
    label: 'Risks',
    id: 'mm_Risks'
  },
  {
    icons: {
      left: 'users'
    },
    label: 'Users',
    id: 'mm_Users'
  }
];

export const xGraphMainMenuMock: MenuItemPropTypes[] = [
  {
    label: 'Dependencies',
    id: 'mm_Dependencies',
    icons: {
      left: 'stack'
    }
  },
  {
    label: 'Reports',
    id: 'mm_Reports',
    icons: {
      left: 'files-empty',
      right: {
        open: 'chevronDownSelect',
        closed: 'chevronRightSelect'
      }
    },
    menuItems: [
      {
        icons: {
          left: 'stats-bars2'
        },
        label: 'Dora metrics',
        id: 'mm_DoraMetrics'
      },
      {
        icons: {
          left: 'cloud-costs',
          right: 'new-tab'
        },
        label: 'Cloud costs',
        id: 'mm_CloudCosts'
      },
      {
        icons: {
          left: 'github',
          right: 'new-tab'
        },
        label: 'GitHub costs',
        id: 'mm_GitHubCosts'
      }
    ]
  },
  {
    icons: {
      left: 'clipboard'
    },
    label: 'Risk assessments',
    id: 'mm_RiskAssessments'
  },
  {
    icons: {
      left: 'table'
    },
    label: 'Risk matrix',
    id: 'mm_RiskMatrix'
  }
];

export const DashboardMenuMock: MenuItemPropTypes[] = [
  {
    icons: {
      left: 'newspaper'
    },
    label: 'Dashboard',
    id: 'mm_Dashboard'
  },
  {
    icons: {
      left: 'users'
    },
    label: 'Users',
    id: 'mm_Users'
  },
  {
    label: 'Dependencies',
    id: 'mm_Dependencies',
    icons: {
      left: 'stack'
    }
  },
  {
    icons: {
      left: 'scale',
      right: {
        open: 'chevronDownSelect',
        closed: 'chevronRightSelect'
      }
    },
    label: 'Risk',
    id: 'mm_Risk',
    menuItems: [
      {
        icons: {
          left: 'equalizer'
        },
        label: 'Controls overview',
        id: 'mm_Controls'
      },
      {
        icons: {
          left: 'terminal'
        },
        label: 'Assessments tool',
        id: 'mm_Risks'
      },
      {
        icons: {
          left: 'clipboard'
        },
        label: 'Assessments summary',
        id: 'mm_RiskAssessments'
      },
      {
        icons: {
          left: 'table'
        },
        label: 'Matrix',
        id: 'mm_RiskMatrix'
      }
    ]
  },
  {
    label: 'Reports',
    id: 'mm_Reports',
    icons: {
      left: 'files-empty',
      right: {
        open: 'chevronDownSelect',
        closed: 'chevronRightSelect'
      }
    },
    menuItems: [
      {
        icons: {
          left: 'stats-bars2'
        },
        label: 'Dora metrics',
        id: 'mm_DoraMetrics'
      },
      {
        icons: {
          left: 'cloud-costs',
          right: 'new-tab'
        },
        label: 'Cloud costs',
        id: 'mm_CloudCosts'
      },
      {
        icons: {
          left: 'github',
          right: 'new-tab'
        },
        label: 'GitHub costs',
        id: 'mm_GitHubCosts'
      }
    ]
  }
];

export const UserMenuMock: MenuItemPropTypes[] = [
  {
    icons: {
      left: 'user'
    },
    label: 'Account',
    id: 'item1'
  },
  {
    icons: {
      left: 'cog'
    },
    label: 'Settings',
    id: 'item2'
  },
  {
    icons: {
      left: 'unlocked'
    },
    label: 'Logout',
    id: 'item2'
  }
];

export default {
  MenuMock,
  xGraphTopMenuMock,
  xGraphMainMenuMock,
  DashboardMenuMock,
  UserMenuMock
};
