import type { Meta, StoryObj } from "@storybook/react";

import TableCraft from "./TableCraft";
import { TableColumn } from "../../types";

const planets: TableColumn<any>[] = [
  { name: "Mercure" },
  { name: "Vénus" },
  { name: "Terre" },
  { name: "Mars" },
  { name: "Jupiter" },
  { name: "Uranus" },
];

const meta = {
  component: TableCraft,
  title: "Table Craft",
  tags: ["autodocs"],
} satisfies Meta<typeof TableCraft>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Noheader: Story = {
  args: {
    noHeader: true,
    selectableRows: true,
    columns: planets,
  },
};

export const Withheader: Story = {
  args: {
    title: "Table Craft",
    selectableRows: false,
    columns: planets,
  },
};
