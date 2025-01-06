import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';
import { LoremIpsum } from '../../testing/loremIpsum/LoremIpsum';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    options: {
      storySort: ['Docs', 'Accessibility', 'Accordion', '*']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  args: {
    heading: 'This is the heading',
    footer: 'This is a footer',
    children: <div>This is the content</div>
  }
};

export const Fixed: Story = {
  args: {
    isFixed: true,
    heading: 'This is the heading',
    footer: 'This is a footer',
    children: <div>This is the content</div>
  }
};

export const CustomIcons: Story = {
  args: {
    openIcon: 'quill',
    closeIcon: 'pen',
    heading: 'This is the heading',
    footer: 'This is a footer',
    children: <div>This is the content</div>
  }
};

export const RestrictHeightXSmall: Story = {
  args: {
    restrictHeight: 'xs',
    heading: 'This is the heading',
    footer: 'This is a footer',
    children: <LoremIpsum />
  }
};

export const RestrictHeightSmall: Story = {
  args: {
    restrictHeight: 's',
    heading: 'This is the heading',
    footer: 'This is a footer',
    children: <LoremIpsum />
  }
};

export const RestrictHeightMedium: Story = {
  args: {
    restrictHeight: 'm',
    heading: 'This is the heading',
    footer: 'This is a footer',
    children: <LoremIpsum />
  }
};

export const RestrictHeightLarge: Story = {
  args: {
    restrictHeight: 'l',
    heading: 'This is the heading',
    footer: 'This is a footer',
    children: <LoremIpsum />
  }
};

export const RestrictHeightXLarge: Story = {
  args: {
    restrictHeight: 'xl',
    heading: 'This is the heading',
    footer: 'This is a footer',
    children: <LoremIpsum />
  }
};
