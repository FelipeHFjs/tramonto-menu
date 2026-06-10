import type { MenuSectionData } from "./menu.ts";
import { refreshers } from "./refreshers.ts";
import { smoothies } from "./smoothies.ts";
import { signatureDrinks } from "./signatureDrinks.ts";

export const firstColumn: MenuSectionData[] = [
  {
    title: "Refreshers",
    items: refreshers,
    // note: "Try with mango, kiwi, or blueberry syrups.",
  },
  { title: "Smoothies", items: smoothies },
];

export const secondColumn: MenuSectionData[] = [
  { title: "Signature Drinks", items: signatureDrinks },
];
