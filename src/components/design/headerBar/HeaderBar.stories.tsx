import type { Meta, StoryObj } from '@storybook/react';

import { HeaderBar } from './HeaderBar';

const meta: Meta<typeof HeaderBar> = {
  title: 'Components/Header Bar',
  component: HeaderBar
};

export default meta;

type Story = StoryObj<typeof HeaderBar>;

export const Text: Story = {
  args: {
    text: 'Just a simple header bar with text'
  }
};

export const TextLeftIcon: Story = {
  args: {
    text: 'Just a simple header bar with text and a left icon',
    leftIcon: { icon: 'quill' }
  }
};

export const TextRightIcon: Story = {
  args: {
    text: 'Just a simple header bar with text and a right icon',
    rightIcon: { icon: 'pen' }
  }
};

export const TextLeftAndRightIcon: Story = {
  args: {
    text: 'Just a simple header bar with text and both left and right icons',
    leftIcon: { icon: 'quill' },
    rightIcon: { icon: 'pen' }
  }
};

export const NotificationIcon: Story = {
  args: {
    text: 'Just a simple header bar with text and a notification icon',
    notificationIcon: { text: '5' }
  }
};

export const NotificationIconGiantNumber: Story = {
  args: {
    text: 'Just a simple header bar with text and a notification icon',
    notificationIcon: { text: '9876' }
  }
};

export const Buttons: Story = {
  args: {
    text: 'Just a simple header bar with buttons',
    buttons: [
      {
        label: 'button 1',
        id: 'headerButton1',
        cssClass: 'button primary',
        onClickHandler: () => {},
        leftIcon: { icon: 'camera' }
      },
      {
        label: 'button 2',
        id: 'headerButton2',
        cssClass: 'button secondary',
        onClickHandler: () => {},
        leftIcon: { icon: 'video-camera' }
      }
    ]
  }
};

export const Everything: Story = {
  args: {
    text: 'Just a simple header bar with text and a notification icon',
    leftIcon: { icon: 'quill' },
    rightIcon: { icon: 'pen' },
    notificationIcon: { text: '5' },
    buttons: [
      {
        label: 'button 1',
        id: 'headerButton1',
        cssClass: 'button primary',
        onClickHandler: () => {},
        leftIcon: { icon: 'camera' }
      },
      {
        label: 'button 2',
        id: 'headerButton2',
        cssClass: 'button secondary',
        onClickHandler: () => {},
        leftIcon: { icon: 'video-camera' }
      }
    ]
  }
};



