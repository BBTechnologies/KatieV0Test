import type { Meta, StoryObj } from '@storybook/react';
import { MainHeader } from './MainHeader';
import { VENTURES } from '../../../constants/ventures';

const meta: Meta<typeof MainHeader> = {
  title: 'Layout/MainHeader',
  component: MainHeader
};

export default meta;

type Story = StoryObj<typeof MainHeader>;

export const SimpleHeader: Story = {
  args: {
    logos: [
      {
        ventureDefinition: VENTURES.xGraph,
        ventureKey: 'xGraph'
      }
    ],
    search: {
      label: 'xGraph global search',
      id: 'xGraphGlobalSearch',
      onSearch: () => {}
    }
  }
};

export const x15AllLogos: Story = {
  args: {
    logos: [
      {
        ventureDefinition: VENTURES.x15Ventures,
        ventureKey: 'x15Ventures'
      },
      {
        ventureDefinition: VENTURES.xGraph,
        ventureKey: 'xGraph'
      }
    ],
    search: {
      label: 'xGraph global search',
      id: 'xGraphGlobalSearch',
      onSearch: () => {}
    }
  }
};

export const VentureLogos: Story = {
  args: {
    logos: [
      {
        ventureDefinition: VENTURES.creditSavvy,
        ventureKey: 'creditSavvy'
      },
      {
        ventureDefinition: VENTURES.homeIn,
        ventureKey: 'homeIn'
      },
      {
        ventureDefinition: VENTURES.doshii,
        ventureKey: 'doshii'
      },
      {
        ventureDefinition: VENTURES.unloan,
        ventureKey: 'unloan'
      },
      {
        ventureDefinition: VENTURES.kit,
        ventureKey: 'kit'
      },
      {
        ventureDefinition: VENTURES.truyu,
        ventureKey: 'truyu'
      }
    ],
    search: {
      label: 'xGraph global search',
      id: 'xGraphGlobalSearch',
      onSearch: () => {}
    }
  }
};
