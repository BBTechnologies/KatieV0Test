'use client';

import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { SearchPanelMenuContentProps, SearchPanelResultProps } from '../searchPanelMenu.interface';
import { FormField } from '../../../form/formFields/formFieldWrapper/FormField';
import { SimpleButton } from '../../../form/buttons/SimpleButton';

export const SearchPanelMenuContent: React.FC<SearchPanelMenuContentProps> = (
  {
    panel,
    isActive,
    onSearch = () => {},
    onSearchClear = () => {}
  }
) => {
  const {
    id,
    search,
    heading,
    topActionButtons,
    mainActionButtons,
    bottomActionButtons,
    activeActionButtonId
  } = panel;

  const [isResultsShowing, setIsResultsShowing] = useState(typeof search.searchResults !== 'undefined');

  // TODO: This will likely need to be async promise based
  const handleSearch = (event: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLSelectElement> | KeyboardEvent<HTMLTextAreaElement>) => {
    const searchTerm = (event as ChangeEvent<HTMLInputElement>).target.value;
    if (searchTerm === '') {
      clearSearchResults();
    } else {
      setIsResultsShowing(true);
      onSearch(searchTerm);
    }
  };

  const handleSearchResultClick = (searchResult: SearchPanelResultProps) => {
    if (searchResult.onClick) {
      searchResult.onClick(searchResult);
    }
  };

  const clearSearchResults = () => {
    setIsResultsShowing(false);
    onSearchClear();
  };

  return (
    <div className={ `searchPanelMenuContent ${ isActive ? 'active' : '' }` }>
      <FormField
        { ...{
          label: {
            text: search.label,
            hide: true
          },
          field: {
            type: 'search',
            id: `${ id }Search`,
            name: `${ id }Search`,
            onChange: handleSearch
          }
        } }
      />

      { isResultsShowing ? (
        <div className="searchPanelResults">
          { search.searchResults?.length === 0 ? (
            <div className="noSearchPanelResults">
              <h4>Sorry. No matches found</h4>
            </div>
          ) : (
            <div className="searchPanelResultsList">
              <ul className="noBullet">
                {
                  search.searchResults?.map((searchResult) => (
                    <li key={ searchResult.id }>
                      <SimpleButton cssClass="button" label={ searchResult.label } id={ `${ searchResult.id }` } onClickHandler={ () => handleSearchResultClick(searchResult) } />
                    </li>
                  ))
                }
              </ul>
            </div>
          ) }
          <SimpleButton cssClass="button tertiary outline clearSearchButton" label="Clear search" id={ `${ id }ClearSearchButton` } onClickHandler={ clearSearchResults } />
        </div>
      ) : (
        <div className="searchPanelMenuActionButtons">
          { topActionButtons?.map((actionButton) => (
            <SimpleButton cssClass="button"
              { ...actionButton }
              key={ actionButton.id }
            />
          )) }
          <h3>{ heading }</h3>
          <div className="mainActionButtons">
            { mainActionButtons?.map((actionButton) => {
              const cssClass = activeActionButtonId === actionButton.id ? 'button isActive' : 'button';
              return <SimpleButton { ...{ ...actionButton, cssClass } } key={ actionButton.id } />;
            }) }
          </div>
          { bottomActionButtons?.map((actionButton) => (
            <SimpleButton cssClass="button"
              { ...actionButton }
              key={ actionButton.id }
            />
          )) }
        </div>
      ) }
    </div>
  );
};
