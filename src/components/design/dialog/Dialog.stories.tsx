import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Dialog } from './Dialog';
import { SimpleButton } from '../../form/buttons/SimpleButton';
import { HeaderBar } from '../headerBar/HeaderBar';
import { LoremIpsum } from '../../testing/loremIpsum/LoremIpsum';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DialogDocs from './Dialog.mdx';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      page: DialogDocs
    },
    options: {
      storySort: {
        order: ['Docs', 'Components', '*']
      }
    }
  },
  decorators: [
    (Story, context) => {
      const [dialogIsOpen, setDialogIsOpen] = useState(true);

      return (
        <div>
          <SimpleButton
            cssClass="button primary demoDialogTrigger"
            label="Open and close dialog"
            id="trigger1"
            onClickHandler={ () => setDialogIsOpen(!dialogIsOpen) }
          />
          { dialogIsOpen && (
            <Story
              { ...context }
              setDialogIsOpen={ setDialogIsOpen }
              dialogIsOpen={ dialogIsOpen }
            />
          ) }
        </div>
      );
    }
  ]
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo1',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const UsingHeaderBarComponent: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo2',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const SizeXS: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo3a',
        header: 'Simple header text',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'xs'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const SizeXSWithHeaderBar: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo3b',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'xs'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const SizeS: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo4a',
        header: 'Simple header text',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 's'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const SizeSWithHeaderBar: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo4b',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 's'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const SizeMDefault: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo5',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'm'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const SizeL: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo5',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'l'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const SizeXL: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo6',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'xl'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const ScrollingContentOnly: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo7',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        scrollBehaviour: 'contentOnly'
      }
    }
    >
      <LoremIpsum />
    </Dialog>
  )
};

export const ScrollingContentLargeHeader: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo7b',
        header: (
          <div>
            <h2>This is a tall header</h2>
            <p>
              It includes tall content. <br />
              It goes over multiple lines.<br />
              It tests the scrolling behaviour.
            </p>
          </div>
        ),
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        scrollBehaviour: 'contentOnly'
      }
    }
    >
      <LoremIpsum />
    </Dialog>
  )
};

export const ScrollingContentLargeHeaderTinyDialog: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo7c',
        header: (
          <div>
            <h2>This is a tall header</h2>
            <p>
              It includes tall content. <br />
              It is not smart use of a tiny dialog.
            </p>
          </div>
        ),
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'xs',
        scrollBehaviour: 'contentOnly'
      }
    }
    >
      <LoremIpsum />
    </Dialog>
  )
};

export const ScrollingContentAndFooter: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo8',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        scrollBehaviour: 'contentAndFooter'
      }
    }
    >
      <LoremIpsum />
    </Dialog>
  )
};

export const ScrollingContentAndFooterLargeHeader: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo8b',
        header: (
          <div>
            <h2>This is a tall header</h2>
            <p>
                      It includes tall content. <br />
                      It goes over multiple lines.<br />
                      It tests the scrolling behaviour.
            </p>
          </div>
        ),
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        scrollBehaviour: 'contentAndFooter'
      }
    }
    >
      <LoremIpsum />
    </Dialog>
  )
};

export const FullScrolling: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo9',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        scrollBehaviour: 'all'
      }
    }
    >
      <LoremIpsum />
    </Dialog>
  )
};

export const AnimationGrow: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo10',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        scrollBehaviour: 'contentOnly',
        animation: 'grow'
      }
    }
    >
      <LoremIpsum />
    </Dialog>
  )
};

export const AnimationReveal: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo11',
        header: <HeaderBar text="This is the header text" />,
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        scrollBehaviour: 'contentOnly',
        animation: 'reveal'
      }
    }
    >
      <LoremIpsum />
    </Dialog>
  )
};

export const PositionLeftDefault: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo12',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        position: 'left'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionLeftXLarge: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo12b',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'xl',
        position: 'left'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionRightDefault: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo12c',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        position: 'right'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionRightXLarge: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo12d',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'xl',
        position: 'right'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionTopDefault: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo12e',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        position: 'top'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionTopXLarge: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo12f',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'xl',
        position: 'top'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionBottomDefault: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo12g',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        position: 'bottom'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionBottomXLarge: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo12g',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        size: 'xl',
        position: 'bottom'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionTopLeft: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo13',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        position: 'topleft'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionTopRight: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo13a',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        position: 'topright'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionBottomLeft: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo13b',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        position: 'bottomleft'
      }
    }
    >
      This is the content
    </Dialog>
  )
};

export const PositionBottomRight: Story = {
  render: (args, { setDialogIsOpen }) => (
    <Dialog {
      ...{
        id: 'Demo13c',
        header: 'This is a header',
        footer: 'This is the footer',
        onClose: () => setDialogIsOpen(false),
        open: true,
        position: 'bottomright'
      }
    }
    >
      This is the content
    </Dialog>
  )
};
