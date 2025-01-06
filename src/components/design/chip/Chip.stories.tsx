import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    label: 'Simple chip'
  }
};

export const WithMarkup: Story = {
  args: {
    label: (
      <em>
        E=mc<sup>2</sup>
      </em>
    )
  }
};

export const Size_xs: Story = {
  args: {
    label: 'Simple chip',
    size: 'xs'
  }
};

export const Size_s: Story = {
  args: {
    label: 'Simple chip',
    size: 's'
  }
};

export const Size_m: Story = {
  args: {
    label: 'Simple chip',
    size: 'm'
  }
};

export const Size_l: Story = {
  args: {
    label: 'Simple chip',
    size: 'l'
  }
};

export const Size_xl: Story = {
  args: {
    label: 'Simple chip',
    size: 'xl'
  }
};

export const Yellow: Story = {
  args: {
    label: 'Simple chip',
    color: 'yellow'
  }
};

export const YellowOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'yellow',
    variant: 'outline'
  }
};

export const YellowOutlineInverse: Story = {
  args: {
    label: 'Simple chip',
    color: 'yellow',
    variant: 'outlineInverse'
  }
};

export const Orange: Story = {
  args: {
    label: 'Simple chip',
    color: 'orange'
  }
};

export const OrangeOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'orange',
    variant: 'outline'
  }
};

export const OrangeOutlineInverse: Story = {
  args: {
    label: 'Simple chip',
    color: 'orange',
    variant: 'outlineInverse'
  }
};

export const Red: Story = {
  args: {
    label: 'Simple chip',
    color: 'red'
  }
};

export const RedOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'red',
    variant: 'outline'
  }
};

export const RedOutlineInverse: Story = {
  args: {
    label: 'Simple chip',
    color: 'red',
    variant: 'outlineInverse'
  }
};

export const Purple: Story = {
  args: {
    label: 'Simple chip',
    color: 'purple'
  }
};

export const PurpleOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'purple',
    variant: 'outline'
  }
};

export const PurpleOutlineInverse: Story = {
  args: {
    label: 'Simple chip',
    color: 'purple',
    variant: 'outlineInverse'
  }
};

export const Blue: Story = {
  args: {
    label: 'Simple chip',
    color: 'blue'
  }
};

export const BlueOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'blue',
    variant: 'outline'
  }
};

export const BlueOutlineInverse: Story = {
  args: {
    label: 'Simple chip',
    color: 'blue',
    variant: 'outlineInverse'
  }
};

export const Green: Story = {
  args: {
    label: 'Simple chip',
    color: 'green'
  }
};

export const GreenOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'green',
    variant: 'outline'
  }
};

export const GreenOutlineInverse: Story = {
  args: {
    label: 'Simple chip',
    color: 'green',
    variant: 'outlineInverse'
  }
};

export const White: Story = {
  args: {
    label: 'Simple chip',
    color: 'white'
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#000', padding: '20px' }}>
        <Story />
      </div>
    )
  ]
};

export const WhiteOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'white',
    variant: 'outline'
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#000', padding: '20px' }}>
        <Story />
      </div>
    )
  ]
};

export const Black: Story = {
  args: {
    label: 'Simple chip',
    color: 'black'
  }
};

export const BlackOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'black',
    variant: 'outline'
  }
};

export const DarkGrey: Story = {
  args: {
    label: 'Simple chip',
    color: 'darkgrey'
  }
};

export const DarkGreyOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'darkgrey',
    variant: 'outline'
  }
};

export const DarkGreyOutlineInverse: Story = {
  args: {
    label: 'Simple chip',
    color: 'darkgrey',
    variant: 'outlineInverse'
  }
};

export const LightGrey: Story = {
  args: {
    label: 'Simple chip',
    color: 'lightgrey'
  }
};

export const LightGreyOutline: Story = {
  args: {
    label: 'Simple chip',
    color: 'lightgrey',
    variant: 'outline'
  }
};

export const LightGreyOutlineInverse: Story = {
  args: {
    label: 'Simple chip',
    color: 'lightgrey',
    variant: 'outlineInverse'
  }
};
