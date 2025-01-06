import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { FormField } from '../../../formFieldWrapper/FormField';
import { Icon } from '../../../../../design/icons/basicIcon/Icon';
import { SimpleButton } from '../../../../buttons/SimpleButton';
import { HookFormWrapper } from '../../../../hookFormWrapper/HookFormWrapper';
import { DEFAULT_EMAIL_REGEX, DEFAULT_PASSWORD_REGEX } from '../../../../../../constants/validationRegex';

const meta: Meta<typeof FormField> = {
  title: 'Forms/Text',
  component: FormField,
  parameters: {
    docs: {
      description: {
        component: 'All form fields are rendered via the wrapping &lt;FormField { ...args } />&lt;/code> component. They must be nested inside a &lt;FormProvider/> component from the react-hook-form library and a generic HTML &lt;form/> tag. See code samples below for typical form structure.'
      }
    }
  },
  decorators: [
    (Story, context) => (
      <HookFormWrapper>
        <Story { ...context } />
      </HookFormWrapper>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const TextInput: Story = {
  args: {
    label: {
      text: 'Demo label 1'
    },
    field: {
      type: 'text',
      id: 'demo1',
      name: 'demo1'
    }
  }
};

export const HideLabelInput: Story = {
  args: {
    label: {
      text: 'Demo label 1',
      hide: true
    },
    field: {
      type: 'text',
      id: 'demo1',
      name: 'demo1',
      placeholder: 'Be careful hiding labels. Consider using an inset label for better usability instead.'
    }
  }
};

export const InsetLabel: Story = {
  args: {
    label: {
      text: 'The label shows if the placeholder is not showing so I know what to do',
      position: 'inset'
    },
    field: {
      type: 'text',
      id: 'demo1',
      name: 'demo1',
      placeholder: 'This is the placeholder text'
    }
  }
};

export const RequiredInput: Story = {
  args: {
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
};

export const DateInput: Story = {
  args: {
    label: {
      text: 'Demo label 1'
    },
    field: {
      type: 'date',
      id: 'demo1',
      name: 'demo1'
    },
    validation: { required: 'This is required' }
  }
};

export const EmailInput: Story = {
  args: {
    label: {
      text: 'Email input with autofill and regex validator'
    },
    field: {
      type: 'email',
      id: 'demo1',
      name: 'demo1',
      autoComplete: 'email'
    },
    validation: {
      required: 'This is required',
      pattern: {
        value: DEFAULT_EMAIL_REGEX,
        message: 'Please enter a valid email address.'
      }
    }
  }
};

export const PasswordInput: Story = {
  args: {
    label: {
      text: 'Password input no regex validator'
    },
    field: {
      type: 'password',
      id: 'password1',
      name: 'password1',
      autoComplete: 'current-password'
    },
    validation: {
      required: 'This is required'
    }
  }
};

export const PasswordInputNewPassword: Story = {
  args: {
    label: {
      text: 'Password input with regex validator'
    },
    field: {
      type: 'email',
      id: 'demo1',
      name: 'demo1',
      autoComplete: 'new-password'
    },
    validation: {
      required: 'This is required',
      pattern: {
        value: DEFAULT_PASSWORD_REGEX,
        message: 'Your password should be minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
      }
    }
  }
};

export const NumberInput: Story = {
  args: {
    label: {
      text: 'Demo label 1'
    },
    field: {
      type: 'number',
      id: 'demo1',
      name: 'demo1'
    },
    validation: { required: 'This is required' }
  }
};

export const WithSpinner: Story = {
  args: {
    label: {
      text: 'Demo label 1'
    },
    field: {
      type: 'text',
      id: 'demo1',
      name: 'demo1'
    },
    showSpinner: true,
    validation: { required: 'This is required' }
  }
};

export const MulitpleValidators: Story = {
  args: {
    label: {
      text: 'Demo label 1'
    },
    field: {
      type: 'text',
      id: 'demo1',
      name: 'demo1'
    },
    validation: {
      required: 'This field is required.',
      maxLength: {
        value: 10,
        message: 'Maximum of 10 characters'
      }
    }
  }
};

export const WithPreFieldAndPostField: Story = {
  args: {
    label: {
      text: 'Demo label 8'
    },
    field: {
      type: 'text',
      id: 'demo8',
      name: 'demo8'
    },
    validation: { required: 'This is required' },
    customContent: {
      preField: <Icon icon="pen" />,
      postField: <SimpleButton id="demoButtonX" label="Button" onClickHandler={ () => {} } />
    }
  }
};
