import type { MenuSectionData } from "./menu.ts";
import { desserts } from "./desserts.ts";
import { tea } from "./tea.ts";

export const firstColumn: MenuSectionData[] = [
  { title: "Desserts", items: desserts.slice(0, 7) },
];

export const secondColumn: MenuSectionData[] = [
  { title: "Desserts", items: desserts.slice(7) },
  { title: "Tea", items: tea },
];
