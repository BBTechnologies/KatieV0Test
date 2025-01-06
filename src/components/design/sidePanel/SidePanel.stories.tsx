import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SidePanel } from './SidePanel';
import { HeaderBar } from '../headerBar/HeaderBar';
import { LoremIpsum } from '../../testing/loremIpsum/LoremIpsum';
import { SimpleButton } from '../../form/buttons/SimpleButton';

const meta: Meta<typeof SidePanel> = {
  title: 'Components/Sliding Panels',
  component: SidePanel,
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: null // Disable automatic Storybook Docs
    }
  }
};

export default meta;

type Story = StoryObj<typeof SidePanel>;

export const Default: Story = {
  render: () => (
    <SidePanel {
      ...{
        id: 'Demo1',
        onClose: () => {},
        onOpen: () => {},
        isOpen: true
      }
    }
    >
      <HeaderBar text="This is a header bar component" />
      <p><LoremIpsum /></p>
    </SidePanel>
  )
};

export const Left: Story = {
  render: () => (
    <SidePanel {
      ...{
        id: 'Demo2',
        onClose: () => {},
        onOpen: () => {},
        isOpen: true,
        position: 'left'
      }
    }
    >
      <HeaderBar text="This is a header bar component" />
      <p><LoremIpsum /></p>
    </SidePanel>
  )
};

export const Top: Story = {
  render: () => (
    <SidePanel {
      ...{
        id: 'Demo3',
        onClose: () => {},
        onOpen: () => {},
        isOpen: true,
        position: 'top'
      }
    }
    >
      <HeaderBar text="This is a header bar component" />
      <p><LoremIpsum /></p>
    </SidePanel>
  )
};

export const Bottom: Story = {
  render: () => (
    <SidePanel {
      ...{
        id: 'Demo3',
        onClose: () => {},
        onOpen: () => {},
        isOpen: true,
        position: 'bottom'
      }
    }
    >
      <HeaderBar text="This is a header bar component" />
      <p><LoremIpsum /></p>
    </SidePanel>
  )
};

export const SizeLarge: Story = {
  render: () => (
    <SidePanel {
      ...{
        id: 'Demo1',
        onClose: () => {},
        onOpen: () => {},
        isOpen: true,
        size: 'l'
      }
    }
    >
      <HeaderBar text="This is a header bar component" />
      <p><LoremIpsum /></p>
    </SidePanel>
  )
};

export const SizeSmall: Story = {
  render: () => (
    <SidePanel {
      ...{
        id: 'Demo1',
        onClose: () => {},
        onOpen: () => {},
        isOpen: true,
        size: 's',
        panelLabel: 'toolbar'
      }
    }
    >
      <SimpleButton
        id="demo1button1"
        label="demo ToolBar Button"
        onClickHandler={ () => {} }
        hideLabel
        leftIcon={{ icon: 'eye' }}
      />
      <SimpleButton
        id="demo1button2"
        label="demo ToolBar Button"
        onClickHandler={ () => {} }
        hideLabel
        leftIcon={{ icon: 'pencil' }}
      />
    </SidePanel>
  )
};

export const SizeSmallTop: Story = {
  render: () => (
    <SidePanel {
      ...{
        id: 'Demo12',
        onClose: () => {},
        onOpen: () => {},
        isOpen: true,
        size: 's',
        position: 'top',
        panelLabel: 'toolbar'
      }
    }
    >
      <SimpleButton
        id="demo1button12"
        label="demo ToolBar Button"
        onClickHandler={ () => {} }
        hideLabel
        leftIcon={{ icon: 'eye' }}
      />
      <SimpleButton
        id="demo1button22"
        label="demo ToolBar Button"
        onClickHandler={ () => {} }
        hideLabel
        leftIcon={{ icon: 'pencil' }}
      />
    </SidePanel>
  )
};

export const SizeSmallBottom: Story = {
  render: () => (
    <SidePanel {
      ...{
        id: 'Demo123',
        onClose: () => {},
        onOpen: () => {},
        isOpen: true,
        size: 's',
        position: 'bottom',
        panelLabel: 'toolbar'
      }
    }
    >
      <SimpleButton
        id="demo1button123"
        label="demo ToolBar Button"
        onClickHandler={ () => {} }
        hideLabel
        leftIcon={{ icon: 'eye' }}
      />
      <SimpleButton
        id="demo1button223"
        label="demo ToolBar Button"
        onClickHandler={ () => {} }
        hideLabel
        leftIcon={{ icon: 'pencil' }}
      />
    </SidePanel>
  )
};

export const SizeSmallLeft: Story = {
  render: () => (
    <SidePanel {
      ...{
        id: 'Demo1234',
        onClose: () => {},
        onOpen: () => {},
        isOpen: true,
        size: 's',
        position: 'left',
        panelLabel: 'toolbar'
      }
    }
    >
      <SimpleButton
        id="demo1button1234"
        label="demo ToolBar Button"
        onClickHandler={ () => {} }
        hideLabel
        leftIcon={{ icon: 'eye' }}
      />
      <SimpleButton
        id="demo1button2234"
        label="demo ToolBar Button"
        onClickHandler={ () => {} }
        hideLabel
        leftIcon={{ icon: 'pencil' }}
      />
    </SidePanel>
  )
};
