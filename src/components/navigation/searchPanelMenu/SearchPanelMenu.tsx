'use client';

import React, { useRef, useState } from 'react';
import { SearchPanelMenusProps } from './searchPanelMenu.interface';
import { SearchPanelMenuTrigger } from './searchPanelMenuTrigger/SearchPanelMenuTrigger';
import { SearchPanelMenuContent } from './searchPanelMenuContent/SearchPanelMenuContent';

import './searchPanelMenu.scss';
import { useOnClickOutside, usePopupKeys } from '../../../hooks';

export const SearchPanelMenu: React.FC<SearchPanelMenusProps> = (
  {
    panels,
    activePanel = 0,
    onSearch = () => {},
    onSearchClear = () => {}
  }
) => {
  const searchPanelsMenus = useRef<HTMLDivElement>(null);
  const [activeMenu, setActiveMenu] = useState(activePanel);
  const [isMenuShowing, setIsMenuShowing] = useState<boolean>(false);

  useOnClickOutside(searchPanelsMenus, () => setIsMenuShowing(false));
  usePopupKeys(searchPanelsMenus, () => setIsMenuShowing(false));

  const toggleSearchPanelMenu = (panelNumber: number) => {
    setActiveMenu(panelNumber);

    if (panelNumber === activeMenu) {
      setIsMenuShowing(!isMenuShowing);
    } else {
      setIsMenuShowing(true);
    }
  };

  return (
    <div ref={ searchPanelsMenus } className="searchPanelMenu">
      <div className="searchPanelMenuTriggers">
        { panels.map((panel, index) => (
          <SearchPanelMenuTrigger
            key={ `${ panel.id }Trigger` }
            panel={ panel }
            panelNumber={ index }
            onClick={ toggleSearchPanelMenu }
          />
        )) }
      </div>

      <div className={ `searchPanelMenuPanels ${ isMenuShowing ? 'open' : '' }` }>
        { panels.map((panel, index) => {
          const isActive = index === activeMenu;

          return (
            <SearchPanelMenuContent
              isActive={ isActive }
              key={ `${ panel.id }Content` }
              panel={ panel }
              onSearch={ onSearch }
              onSearchClear={ onSearchClear }
            />
          );
        }) }
      </div>
    </div>
  );
};

export default SearchPanelMenu;
