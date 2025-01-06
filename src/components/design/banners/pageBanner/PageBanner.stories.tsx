import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PageBanner } from './PageBanner';

const meta: Meta<typeof PageBanner> = {
  title: 'Components/PageBanner',
  component: PageBanner,
  decorators: [
    (Story, context) => (
      <div>
        <p>
          PageBanners are special panels that can appear either fixed at the top or center of the page,
          or inline in the flow of the document. They come in a variety of styles, include an icon to the left and
          can be set to autoHide after a period of time. They include a checkbox to acknowledge the message and
          then never show again on the same browser.
        </p>
        <Story { ...context } />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof PageBanner>;

export const TopFixed: Story = {
  args: {
    animation: 'slide',
    children: 'This is the content of the page banner.'
  }
};

export const CenterGrow: Story = {
  args: {
    animation: 'grow',
    position: 'center',
    children: 'This is the content of the page banner.'
  }
};

export const Inline: Story = {
  args: {
    animation: 'none',
    displayMode: 'inline',
    autoHide: false,
    children: 'This is the content of the page banner.'
  }
};

export const Alert: Story = {
  args: {
    type: 'alert',
    animation: 'none',
    displayMode: 'inline',
    autoHide: false,
    children: 'This is the content of the page banner.'
  }
};

export const Info: Story = {
  args: {
    type: 'info',
    animation: 'none',
    displayMode: 'inline',
    autoHide: false,
    children: 'This is the content of the page banner.'
  }
};

export const Warn: Story = {
  args: {
    type: 'warn',
    animation: 'none',
    displayMode: 'inline',
    autoHide: false,
    children: 'This is the content of the page banner.'
  }
};

export const Error: Story = {
  args: {
    type: 'error',
    animation: 'none',
    displayMode: 'inline',
    autoHide: false,
    children: 'This is the content of the page banner.'
  }
};

export const Success: Story = {
  args: {
    type: 'success',
    animation: 'none',
    displayMode: 'inline',
    autoHide: false,
    children: 'This is the content of the page banner.'
  }
};

export const HeaderAndFooterText: Story = {
  args: {
    type: 'info',
    animation: 'none',
    displayMode: 'inline',
    autoHide: false,
    header: 'Simple header text',
    footer: 'Simple footer text',
    children: 'This is a page banner with header and footer text. It has no animation.'
  }
};

export const HeaderAndFooterElements: Story = {
  args: {
    type: 'info',
    animation: 'none',
    displayMode: 'inline',
    autoHide: false,
    header: <h3>Simple h3 heading</h3>,
    footer: (
      <span>
        MainFooter text with <a href="www.google.com">link</a>
      </span>
    ),
    children: 'This is a page banner with header and footer text. It has no animation.',
  }
};
