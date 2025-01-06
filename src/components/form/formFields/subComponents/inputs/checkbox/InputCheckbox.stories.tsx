import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputCheckbox } from './InputCheckbox';
import { Tooltip } from '../../../../../design/tooltip/Tooltip';
import { HookFormWrapper } from '../../../../hookFormWrapper/HookFormWrapper';

const meta: Meta<typeof InputCheckbox> = {
  title: 'Forms/Checkbox',
  component: InputCheckbox,
  parameters: {
    docs: {
      description: {
        component: 'All form fields are rendered via the wrapping &lt;FormField { ...args } />&lt;/code> component. They must be nested inside a &lt;FormProvider/> component from the react-hook-form library and a generic HTML &lt;form/> tag. See code samples below for typical form structure.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof InputCheckbox>;

export const Checkbox: Story = {
  render: () => (
    <HookFormWrapper>
      <InputCheckbox
        {
          ...{
            label: {
              text: 'This is the label as text'
            },
            field: {
              name: 'demo1',
              id: 'demo1',
              value: 'demo1Value',
              defaultChecked: false
            }
          }
        }
      />
    </HookFormWrapper>
  )
};

export const CheckboxChecked: Story = {
  render: () => (
    <HookFormWrapper>
      <InputCheckbox
        {
          ...{
            label: {
              text: 'This is the label as text'
            },
            field: {
              name: 'demo2',
              id: 'demo2',
              value: 'demo2Value',
              defaultChecked: true
            }
          }
        }
      />
    </HookFormWrapper>
  )
};

export const CheckboxLabelOnLeft: Story = {
  render: () => (
    <HookFormWrapper>
      <InputCheckbox
        {
          ...{
            label: {
              text: 'This is the label as text',
              position: 'left'
            },
            field: {
              name: 'demo3',
              id: 'demo3',
              value: 'demo3Value',
              defaultChecked: false
            }
          }
        }
      />
    </HookFormWrapper>
  )
};

export const CheckboxLabelWithMarkup: Story = {
  render: () => (
    <HookFormWrapper>
      <InputCheckbox
        {
          ...{
            label: {
              text: <span>
                      This is some text with a <strong>strong</strong> tag and a
                      tooltip <Tooltip icon="eye">This is some tooltip content</Tooltip> in the middle of the text.
              </span>
            },
            field: {
              name: 'demo3',
              id: 'demo3',
              value: 'demo3Value',
              defaultChecked: false
            }
          }
        }
      />
    </HookFormWrapper>
  )
};

export const CheckboxTooltipUsingLabelProp: Story = {
  render: () => (
    <HookFormWrapper>
      <InputCheckbox
        {
          ...{
            label: {
              text: <span>This is some text with a <strong>strong</strong> tag and a tooltip</span>,
              labelTooltip: {
                text: 'This is some tooltip content',
                icon: 'eye'
              }
            },
            field: {
              name: 'demo3',
              id: 'demo3',
              value: 'demo3Value',
              defaultChecked: false
            }
          }
        }
      />
    </HookFormWrapper>
  )
};

export const CheckboxWithValidation: Story = {
  render: () => (
    <HookFormWrapper>
      <InputCheckbox
        {
          ...{
            label: {
              text: <span>
                      This is some text with a <strong>strong</strong> tag and a
                      tooltip <Tooltip icon="eye">This is some tooltip content</Tooltip>
              </span>
            },
            field: {
              name: 'demo3',
              id: 'demo3',
              value: 'demo3Value',
              defaultChecked: false
            },
            validation: { required: true }
          }
        }
      />
    </HookFormWrapper>
  )
};
