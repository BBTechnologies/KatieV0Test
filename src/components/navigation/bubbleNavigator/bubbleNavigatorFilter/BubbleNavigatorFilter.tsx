'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { splitCamelCase } from '../../../../helpers';
import { Accordion } from '../../../design/accordion/Accordion';
import { InputCheckbox } from '../../../form/formFields/subComponents/inputs/checkbox/InputCheckbox';
import { GenericFunction } from '../../../../interfaces/generic.interface';
import { SimpleButton } from '../../../form/buttons/SimpleButton';
import { FormField } from '../../../form/formFields/formFieldWrapper/FormField';

import './bubbleNavigatorFilter.scss';

interface BubbleNavigatorFilterProps {
  onFilterChange?: GenericFunction;
  filterOptions?: string[];
  filterPanelHeight?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'auto';
}

export const BubbleNavigatorFilter: React.FC<BubbleNavigatorFilterProps> = (
  {
    filterOptions,
    filterPanelHeight = 's',
    onFilterChange
  }
) => {
  const { getValues } = useFormContext();

  const [activeFilterOptions, setActiveFilterOptions] = useState<string[]>([]);

  const ApplyFilters = () => {
    // TODO: Get the form context
    const filterKeys = getValues('bubbleFilterKeys');
    setActiveFilterOptions(filterKeys);
    if (onFilterChange) {
      onFilterChange(filterKeys);
    }
  };

  return (
    <div className="bubbleNavigatorFilter">
      <fieldset className="filterSearchTerm">
        <FormField
          {
            ...{
              label: {
                text: 'Search text'
              },
              field: {
                type: 'search',
                id: 'bubbleFilterSearchText',
                name: 'bubbleFilterSearchText'
              }
            }
          }
        />
        <SimpleButton
          label="apply filters"
          id="bubbleFilterApplyButton"
          onClickHandler={ ApplyFilters }
        />
      </fieldset>

      <Accordion restrictHeight={ filterPanelHeight } id="bubbleNavigatorFilterAccordion" heading="Filter based on category">
        <fieldset className="filterKeys">
          {
            filterOptions && filterOptions.map((key) => (
              <InputCheckbox key={ key }
                {
                  ...{
                    label: {
                      text: splitCamelCase(key)
                    },
                    field: {
                      name: 'bubbleFilterKeys',
                      id: key,
                      value: key,
                      defaultChecked: activeFilterOptions && activeFilterOptions.indexOf(key) !== -1
                    }
                  }
                }
              />
            ))
          }
        </fieldset>
      </Accordion>
    </div>
  );
};
