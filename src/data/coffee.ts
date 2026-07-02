import type { MenuItem } from "./menu.ts";

export type CoffeeFlavorNoteItem = {
  name: string;
  price?: string;
  description?: string;
  accent?: boolean;
};

export type CoffeeFlavorNote =
  | {
      name: "Extras" | "Sabores";
      items: CoffeeFlavorNoteItem[];
    }
  | {
      name: "Sabores Sugar Free";
      description: string;
    };

export const coffee: MenuItem[] = [
  {
    name: "Drip Coffee",
    small: "30",
    large: "35",
  },
  {
    name: "Americano",
    small: "40",
    large: "45",
  },
  {
    name: "Latte",
    small: "65",
    large: "72",
  },
  {
    name: "Cappuccino",
    small: "65",
    large: "72",
  },
  {
    name: "Iced Coffee",
    small: "60",
    large: "67",
  },
  {
    name: "Caramel Macchiato",
    small: "70",
    large: "77",
  },
  {
    name: "Mocha",
    small: "70",
    large: "77",
    details: "Chocolate • White Chocolate",
  },
  {
    name: "Iced Shaken Espresso",
    small: "70",
    large: "77",
  },
  // {
  //   name: "Frappe",
  //   small: "80",
  //   large: "87",
  // },
];

export const coffeeFlavorNote: CoffeeFlavorNote[] = [
  {
    name: "Sabores",
    items: [
      {
        name: "Vainilla • Vainilla Francesa • Caramelo • Brown Sugar • Avellana • Banana Bread • Crema Irlandesa",
        price: "+0",
        accent: true,
      },
      {
        name: "Chocolate • White Chocolate",
        price: "+5",
        accent: true,
      },
    ],
  },
  {
    name: "Extras",
    items: [
      {
        name: "Extra Espresso",
        price: "+10",
      },
      {
        name: "Cream Top: Original • Banana Bread • Strawberry",
        price: "+15",
      },
      {
        name: "Leche Entera • Deslactosada",
        price: "+0",
      },
      {
        name: "Leche de Almendra",
        price: "+10",
      },
      {
        name: "Leche de Avena",
        price: "+15",
      },
      {
        name: "Extra Syrup",
        price: "+0",
      },
    ],
  },
  {
    name: "Sabores Sugar Free",
    description: "Vainilla • Caramelo",
  },
];
