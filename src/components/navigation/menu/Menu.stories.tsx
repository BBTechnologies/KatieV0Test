import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import { MenuMock, xGraphTopMenuMock, xGraphMainMenuMock } from '../../../mocks/mainMenu.mock';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const SimpleMenu: Story = {
  args: {
    menuItems: MenuMock
  }
};

export const xGraphTopMenu: Story = {
  args: {
    menuItems: xGraphTopMenuMock
  }
};

export const xGraphMainMenu: Story = {
  args: {
    menuItems: xGraphMainMenuMock
  }
};

