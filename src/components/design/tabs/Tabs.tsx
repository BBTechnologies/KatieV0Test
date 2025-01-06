'use client';

import React, { useState } from 'react';
import { Icon, IconProps } from '../icons/basicIcon/Icon';
import { NotificationIcon, NotificationIconProps } from '../icons/notificationIcon/NotificationIcon';

import './tabs.scss';

interface TabProps {
  id: string;
  control: {
    text: string;
    leftIcon?: IconProps;
    rightIcon?: IconProps;
    notificationIcon?: NotificationIconProps;
  },
  content: React.ReactNode | React.ReactElement
}

interface TabsProps {
  tabs: TabProps[];
  activeTabIndex?: number;
}

export const Tabs: React.FC<TabsProps> = (
  {
    tabs,
    activeTabIndex = 0
  }
) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const getIds = (id: string) => ({
    controlId: `tabControl_${ id }`,
    panelId: `tabPanel_${ id }`
  });

  return (
    <div className="tabGroup">
      <div className="tabControls" role="tablist">
        {
          tabs.map((tab, index) => {
            const { id, control } = tab;
            const {
              text, leftIcon, rightIcon, notificationIcon
            } = control;

            const { controlId, panelId } = getIds(id);

            return (
              <button key={ controlId }
                role="tab"
                id={ controlId }
                aria-controls={ panelId }
                aria-selected={ index === activeTab }
                tabIndex={ index === activeTab ? 0 : -1 }
                type="button"
                onClick={ () => setActiveTab(index) }
                className={ `button tabControl ${ notificationIcon ? 'withNotification' : '' } ${ index === activeTab ? 'active' : '' }` }
              >
                {
                  leftIcon && <Icon { ...leftIcon } />
                }

                { text }

                {
                  rightIcon && <Icon { ...rightIcon } />
                }

                {
                  notificationIcon && <NotificationIcon { ...notificationIcon } />
                }
              </button>
            );
          })
        }
      </div>

      <div className="tabPanels">
        {
          tabs.map((tab, index) => {
            const { id, content } = tab;

            const { controlId, panelId } = getIds(id);

            return (
              <div key={ panelId }
                aria-labelledby={ controlId }
                role="tabpanel"
                tabIndex={ index === activeTab ? 0 : -1 }
                id={ panelId }
                className={ `tabPanel ${ index === activeTab ? 'active' : '' }` }
              >
                { content }
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
