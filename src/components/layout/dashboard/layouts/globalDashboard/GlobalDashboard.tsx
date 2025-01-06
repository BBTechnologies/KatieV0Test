'use client';

import React from 'react';
import { GlobalDashboardProps } from '../dashboard.interface';
import { SidePanel } from '../../../../design/sidePanel/SidePanel';
import { MainHeader } from '../../../mainHeader/MainHeader';

import './globalDashboard.scss';

export const GlobalDashboard: React.FC<GlobalDashboardProps> = ({
  leftPanel,
  rightPanel,
  toolBar,
  mainHeader,
  mainFooter,
  children
}) => (
  <div className={ `dashboard globalDashboard ${ toolBar ? 'withRightToolbar' : '' }` }>
    { leftPanel && (
      <SidePanel
        {
          ...{
            id: 'dashboardLeftPanel',
            position: 'left',
            size: 'm',
            animation: 'slide',
            isOpen: leftPanel.isOpen || true,
            isFloating: false,
            icons: {
              open: 'menu',
              closed: 'chevronLeftSelect'
            }
          }
        }
      >
        { leftPanel.content }
        <footer>
          <span className="versionText">v2.0.0</span>
        </footer>
      </SidePanel>
    ) }

    <MainHeader { ...mainHeader } />

    <main>{ children }</main>

    { mainFooter && <footer className="dashboardFooter">{ mainFooter }</footer> }

    { rightPanel && (
      <SidePanel
        { ...{
          id: 'dashboardRightPanel',
          position: 'right',
          size: 'm',
          animation: 'slide',
          isOpen: rightPanel.isOpen || false
        } }
      >
        { rightPanel.content }
      </SidePanel>
    ) }

    { toolBar && (
      <SidePanel
        { ...{
          id: 'dashboardToolbar',
          position: 'right',
          size: 's',
          animation: 'none',
          isFloating: false,
          isOpen: true
        } }
      >
        { toolBar.content }
      </SidePanel>
    ) }
  </div>
);

export default GlobalDashboard;
