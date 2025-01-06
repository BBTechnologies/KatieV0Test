import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../FormField';

import { HookFormWrapper } from '../../../hookFormWrapper/HookFormWrapper';

const meta: Meta<typeof HookFormWrapper> = {
  title: 'Forms/Component Structure/HookFormWrapper',
  component: HookFormWrapper
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <HookFormWrapper>
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 1'
            },
            field: {
              type: 'text',
              id: 'demo1',
              name: 'demo1'
            },
            validation: { required: 'This is required' }
          }
        }
      />
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 2'
            },
            field: {
              type: 'text',
              id: 'demo2',
              name: 'demo2'
            },
            validation: { required: 'This is required' }
          }
        }
      />
    </HookFormWrapper>
  )
};

export const ColumnsWithStackedFields: Story = {
  render: () => (
    <HookFormWrapper formCssClass="columnLayout">
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 1'
            },
            field: {
              type: 'text',
              id: 'demo1',
              name: 'demo1'
            },
            validation: { required: 'This is required' }
          }
        }
      />
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 2'
            },
            field: {
              type: 'text',
              id: 'demo2',
              name: 'demo2'
            },
            validation: { required: 'This is required' }
          }
        }
      />
    </HookFormWrapper>
  )
};

export const ColumnsWithHorizontalFields: Story = {
  render: () => (
    <HookFormWrapper formCssClass="columnLayout">
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 1'
            },
            field: {
              type: 'text',
              id: 'demo1',
              name: 'demo1'
            },
            validation: { required: 'This is required' },
            layout: 'horizontal'
          }
        }
      />
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 2'
            },
            field: {
              type: 'text',
              id: 'demo2',
              name: 'demo2'
            },
            validation: { required: 'This is required' },
            layout: 'horizontal'
          }
        }
      />
    </HookFormWrapper>
  )
};

export const ColumnsWithBoth: Story = {
  render: () => (
    <HookFormWrapper formCssClass="columnLayout">
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 1'
            },
            field: {
              type: 'text',
              id: 'demo1',
              name: 'demo1'
            },
            validation: { required: 'This is required' },
            layout: 'horizontal'
          }
        }
      />
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 2'
            },
            field: {
              type: 'text',
              id: 'demo2',
              name: 'demo2'
            },
            validation: { required: 'This is required' },
            layout: 'stacked'
          }
        }
      />
    </HookFormWrapper>
  )
};

export const RowsWithStackedFields: Story = {
  render: () => (
    <HookFormWrapper formCssClass="rowsLayout">
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 1'
            },
            field: {
              type: 'text',
              id: 'demo1',
              name: 'demo1'
            },
            validation: { required: 'This is required' },
            layout: 'stacked'
          }
        }
      />
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 2'
            },
            field: {
              type: 'text',
              id: 'demo2',
              name: 'demo2'
            },
            validation: { required: 'This is required' },
            layout: 'stacked'
          }
        }
      />
    </HookFormWrapper>
  )
};

export const RowsWithHorizontalFields: Story = {
  render: () => (
    <HookFormWrapper formCssClass="rowsLayout">
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 1'
            },
            field: {
              type: 'text',
              id: 'demo1',
              name: 'demo1'
            },
            validation: { required: 'This is required' },
            layout: 'horizontal'
          }
        }
      />
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 2'
            },
            field: {
              type: 'text',
              id: 'demo2',
              name: 'demo2'
            },
            validation: { required: 'This is required' },
            layout: 'horizontal'
          }
        }
      />
    </HookFormWrapper>
  )
};
export const RowsWithBoth: Story = {
  render: () => (
    <HookFormWrapper formCssClass="rowsLayout">
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 1'
            },
            field: {
              type: 'text',
              id: 'demo1',
              name: 'demo1'
            },
            validation: { required: 'This is required' },
            layout: 'horizontal'
          }
        }
      />
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 2'
            },
            field: {
              type: 'text',
              id: 'demo2',
              name: 'demo2'
            },
            validation: { required: 'This is required' },
            layout: 'stacked'
          }
        }
      />
    </HookFormWrapper>
  )
};

export const StackedLayout: Story = {
  render: () => (
    <HookFormWrapper>
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 1'
            },
            field: {
              type: 'text',
              id: 'demo1',
              name: 'demo1'
            },
            validation: { required: 'This is required' },
            layout: 'stacked'
          }
        }
      />
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 2'
            },
            field: {
              type: 'text',
              id: 'demo2',
              name: 'demo2'
            },
            validation: { required: 'This is required' },
            layout: 'stacked'
          }
        }
      />
    </HookFormWrapper>
  )
};

export const HorizontalLayout: Story = {
  render: () => (
    <HookFormWrapper>
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 1'
            },
            field: {
              type: 'text',
              id: 'demo1',
              name: 'demo1'
            },
            validation: { required: 'This is required' },
            layout: 'horizontal'
          }
        }
      />
      <FormField
        {
          ...{
            label: {
              text: 'Demo label 2'
            },
            field: {
              type: 'text',
              id: 'demo2',
              name: 'demo2'
            },
            validation: { required: 'This is required' },
            layout: 'horizontal'
          }
        }
      />
    </HookFormWrapper>
  )
};
