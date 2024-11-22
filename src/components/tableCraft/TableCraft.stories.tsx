import type { Meta, StoryObj } from '@storybook/react';

import TableCraft from './TableCraft';

const meta = {
  component: TableCraft,
  title:"Table Craft",
  tags: ['autodocs'],
} satisfies Meta<typeof TableCraft>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sympleable: Story = {
  args: {}
};