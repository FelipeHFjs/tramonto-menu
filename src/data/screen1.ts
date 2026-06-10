import type { MenuSectionData } from "./menu.ts";
import { coffee } from "./coffee.ts";
import { frappes } from "./frappes.ts";

export const firstColumn: MenuSectionData[] = [
  // { title: "Coffee", items: coffee.slice(0, 7) },
  {
    title: "Coffee",
    items: coffee,
  },
];

export const secondColumn: MenuSectionData[] = [
  {
    title: "Frappe",
    items: frappes,
  },
];
