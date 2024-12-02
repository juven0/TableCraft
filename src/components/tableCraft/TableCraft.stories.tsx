import type { Meta, StoryObj } from "@storybook/react";

import TableCraft from "./TableCraft";
import { TableColumn } from "../../types";

const planetsData = [
  {
    name: "Mercure",
    distanceFromSun: "57.9M km",
    mass: "3.30 x 10^23 kg",
    moons: 0,
    type: "Tellurique",
  },
  {
    name: "Vénus",
    distanceFromSun: "108.2M km",
    mass: "4.87 x 10^24 kg",
    moons: 0,
    type: "Tellurique",
  },
  {
    name: "Terre",
    distanceFromSun: "149.6M km",
    mass: "5.97 x 10^24 kg",
    moons: 1,
    type: "Tellurique",
  },
  {
    name: "Mars",
    distanceFromSun: "227.9M km",
    mass: "6.42 x 10^23 kg",
    moons: 2,
    type: "Tellurique",
  },
  {
    name: "Jupiter",
    distanceFromSun: "778.5M km",
    mass: "1.90 x 10^27 kg",
    moons: 79,
    type: "Géante gazeuse",
  },
  {
    name: "Saturne",
    distanceFromSun: "1.43B km",
    mass: "5.68 x 10^26 kg",
    moons: 83,
    type: "Géante gazeuse",
  },
  {
    name: "Uranus",
    distanceFromSun: "2.87B km",
    mass: "8.68 x 10^25 kg",
    moons: 27,
    type: "Géante glacée",
  },
  {
    name: "Neptune",
    distanceFromSun: "4.50B km",
    mass: "1.02 x 10^26 kg",
    moons: 14,
    type: "Géante glacée",
  },
];

const columns: TableColumn<any>[] = [
  { name: "name", title: "Nom de la planète", visible: true },
  { name: "distanceFromSun", title: "Distance du Soleil", visible: true },
  { name: "mass", title: "Masse", visible: true },
  { name: "moons", title: "Nombre de lunes", visible: true },
  { name: "type", title: "Type", visible: true },
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
    columns: columns,
    data: planetsData,
  },
};

export const Withheader: Story = {
  args: {
    title: "Table Craft",
    selectableRows: false,
    columns: columns,
    data: planetsData,
  },
};
