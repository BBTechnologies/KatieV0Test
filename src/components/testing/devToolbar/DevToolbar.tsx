'use client';

/* eslint-disable no-console */

import React, { useContext } from 'react';
import { ThemeSwitch } from '../themeSwitch/ThemeSwitch';
import { UserContext } from '../../../contextProviders/userContext/UserContextProvider';
import { SimpleButton } from '../../form/buttons/SimpleButton';

import './devToolbar.scss';
import { SidePanel } from '../../design/sidePanel/SidePanel';

export const DevToolbar: React.FC = () => {
  const context = useContext(UserContext);

  const env = process.env.NODE_ENV;

  const handleThemeChange = (newTheme: string) => {
    if (context && context?.applyThemeChange) {
      context.applyThemeChange(newTheme);
    }
  };

  const listThemeCssVariables = () => {
    const stylesheets = document.styleSheets;

    // Loop through all stylesheets
    for (let i = 0; i < stylesheets.length; i += 1) {
      const stylesheet = stylesheets[i];

      if (stylesheet && stylesheet.ownerNode && 'id' in stylesheet.ownerNode && stylesheet.ownerNode.id.includes('x15-ui-library-theme')) {
        try {
          const rules = stylesheet.cssRules || stylesheet.rules;
          for (let j = 0; j < rules.length; j += 1) {
            const rule = rules[j];

            if (rule instanceof CSSStyleRule) {
              if (rule.selectorText === ':root') {
                for (let k = 0; k < rule.style.length; k += 1) {
                  const prop = rule.style[k];
                  if (prop.startsWith('--')) {
                    console.log(`${ prop }: ${ rule.style.getPropertyValue(prop).trim() }`);
                  }
                }
              }
            }
          }
        } catch (e) {
          console.error('Could not access stylesheet:', e);
        }
      }
    }
  };

  return (
    <SidePanel {
      ...{
        id: 'devToolbar',
        open: true,
        size: 's',
        position: 'top',
        panelLabel: 'dev toolbar'
      }
    }
    >
      <aside className="devToolbar">
        <div>Environment: { env }</div>
        <ThemeSwitch onThemeChange={ handleThemeChange } />
        <SimpleButton cssClass="button primary compact" label="List css variables" id="devCssTool" onClickHandler={ listThemeCssVariables } />
      </aside>
    </SidePanel>
  );
};
