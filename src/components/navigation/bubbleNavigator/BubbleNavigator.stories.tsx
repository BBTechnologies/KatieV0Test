import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';

import { BubbleNavigator } from './BubbleNavigator';

import { MockBubbleData } from '../../../mocks/bubbleNavigatorData.mock';

const meta: Meta<typeof BubbleNavigator> = {
  title: 'Experimental/Bubble Navigator',
  component: BubbleNavigator
};

export default meta;

type Story = StoryObj<typeof BubbleNavigator>;

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

export const DemoBubbleNavigator: Story = {
  render: () => (
    <FormWrapper>
      <BubbleNavigator bubblesData={ MockBubbleData } filters={ [] } />
    </FormWrapper>
  )
};
