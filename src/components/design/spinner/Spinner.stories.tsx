'use client';

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinners',
  component: Spinner
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const DefaultArmsStyle: Story = {
  args: {}
};

export const ArcStyle: Story = {
  args: {
    spinnerStyle: 'arc'
  }
};

export const Sizes: Story = {
  render: () => (
    <>
      <h3>Arms style</h3>
      <Spinner size="xs" />
      <Spinner size="s" />
      <Spinner size="m" />
      <Spinner size="l" />
      <Spinner size="xl" />

      <br /><br />

      <h3>Arc style</h3>
      <p>Note: the arc will match the current font colour. If this is white you will need to set the .spinnerArcMask to be black.</p>
      <Spinner spinnerStyle="arc" size="xs" />
      <Spinner spinnerStyle="arc" size="s" />
      <Spinner spinnerStyle="arc" size="m" />
      <Spinner spinnerStyle="arc" size="l" />
      <Spinner spinnerStyle="arc" size="xl" />
    </>
  )
};
