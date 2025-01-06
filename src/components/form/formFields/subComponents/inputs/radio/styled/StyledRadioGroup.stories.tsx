import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { StyledRadioGroup } from './StyledRadioGroup';
import { StyledRadioGroupProps } from '../radioInputsProps';

import { Icon } from '../../../../../../design/icons/basicIcon/Icon';
import { HookFormWrapper } from '../../../../../hookFormWrapper/HookFormWrapper';

const meta: Meta<typeof StyledRadioGroup> = {
  title: 'Forms/Radios',
  component: StyledRadioGroup,
  parameters: {
    docs: {
      description: {
        component: 'All form fields are rendered via the wrapping &lt;FormField { ...args } />&lt;/code> component. They must be nested inside a &lt;FormProvider/> component from the react-hook-form library and a generic HTML &lt;form/> tag. See code samples below for typical form structure.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof StyledRadioGroup>;

export const StyledRadios: Story = {
  render: () => {
    const testRadios: StyledRadioGroupProps = {
      group: {
        id: 'testGroupId',
        name: 'groupName',
        label: {
          text: 'Favourite things'
        }
      },
      radioInputs: [
        {
          label: {
            text: {
              checked: <><Icon icon="happy" /> <span>music</span></>,
              unchecked: <><Icon icon="music" /> <span>music</span></>
            },
            cssClasses: {
              checked: 'button primary',
              unchecked: 'button secondary outline'
            }
          },
          field: {
            id: 'music',
            value: 'music',
            name: 'groupName',
            groupName: 'groupName'
          }
        },
        {
          label: {
            text: {
              checked: <><Icon icon="happy" /> <span>film</span></>,
              unchecked: <><Icon icon="film" /> <span>film</span></>
            },
            cssClasses: {
              checked: 'button primary',
              unchecked: 'button secondary outline'
            }
          },
          field: {
            id: 'film',
            value: 'film',
            name: 'groupName',
            groupName: 'groupName'
          }
        },
        {
          label: {
            text: {
              checked: <><Icon icon="happy" /> <span>podcast</span></>,
              unchecked: <><Icon icon="podcast" /> <span>podcast</span></>
            },
            cssClasses: {
              checked: 'button primary',
              unchecked: 'button secondary outline'
            }
          },
          field: {
            id: 'podcast',
            value: 'podcast',
            name: 'groupName',
            groupName: 'groupName'
          }
        }
      ]
    };

    return (
      <StyledRadioGroup
        {
          ...testRadios
        }
      />
    );
  }
};

export const WackyStyledRadios: Story = {
  render: () => {
    const testRadios: StyledRadioGroupProps = {
      group: {
        id: 'testGroupId',
        name: 'groupName',
        label: {
          text: 'Group label'
        }
      },
      radioInputs: [
        {
          label: {
            text: {
              checked: <span><Icon icon="pencil" /> I am a pencil</span>,
              unchecked: <span><Icon icon="pen" /> I am a pen</span>
            },
            cssClasses: {
              checked: 'button primary',
              unchecked: 'button primary outline'
            }
          },
          field: {
            id: 'writingImplement',
            value: 'writingImplement',
            name: 'groupName',
            groupName: 'groupName'
          }
        },
        {
          label: {
            text: {
              checked: <span><Icon icon="happy" /> I am happy</span>,
              unchecked: <span><Icon icon="sad" /> I am sad</span>
            },
            cssClasses: {
              checked: 'button secondary',
              unchecked: 'button secondary outline'
            }
          },
          field: {
            id: 'emotions',
            value: 'emotions',
            name: 'groupName',
            groupName: 'groupName'
          }
        },
        {
          label: {
            text: {
              checked: <span><Icon icon="clubs" /> I am clubs</span>,
              unchecked: <span><Icon icon="diamonds" /> I am diamonds</span>
            },
            cssClasses: {
              checked: 'button secondary',
              unchecked: 'button secondary outline'
            }
          },
          field: {
            id: 'cards',
            value: 'cards',
            name: 'groupName',
            groupName: 'groupName'
          }
        }
      ]
    };

    return (
      <StyledRadioGroup
        {
          ...testRadios
        }
      />
    );
  }
};
