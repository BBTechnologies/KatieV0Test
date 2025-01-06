import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';

import { BubbleNavigatorFilter } from './BubbleNavigatorFilter';

const meta: Meta<typeof BubbleNavigatorFilter> = {
  title: 'Experimental/Bubble Navigator Filter',
  component: BubbleNavigatorFilter
};

export default meta;

type Story = StoryObj<typeof BubbleNavigatorFilter>;

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const hookFormMethods = useForm({
    mode: 'all',
    criteriaMode: 'all',
    shouldFocusError: true
  });

  return (
    <FormProvider { ...hookFormMethods }>
      <form autoComplete="off">
        { children }
      </form>
    </FormProvider>
  );
};

const testFilterOptions = ['label', 'description', 'status'];

export const DemoBubbleNavigatorFilter: Story = {
  render: () => (
    <FormWrapper>
      <BubbleNavigatorFilter onFilterChange={ () => {} } filterOptions={ testFilterOptions } />
    </FormWrapper>
  )
};

export const XSmallFilterPanelHeight: Story = {
  render: () => (
    <FormWrapper>
      <BubbleNavigatorFilter filterPanelHeight="xs" onFilterChange={ () => {} } filterOptions={ testFilterOptions } />
    </FormWrapper>
  )
};

export const SmallFilterPanelHeight: Story = {
  render: () => (
    <FormWrapper>
      <BubbleNavigatorFilter filterPanelHeight="s" onFilterChange={ () => {} } filterOptions={ testFilterOptions } />
    </FormWrapper>
  )
};

export const AutoFilterPanelHeight: Story = {
  render: () => (
    <FormWrapper>
      <BubbleNavigatorFilter filterPanelHeight="auto" onFilterChange={ () => {} } filterOptions={ testFilterOptions } />
    </FormWrapper>
  )
};
