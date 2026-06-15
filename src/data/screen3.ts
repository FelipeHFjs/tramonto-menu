import type { MenuSectionData } from "./menu.ts";
import { desserts } from "./desserts.ts";
import { tea } from "./tea.ts";

export const firstColumn: MenuSectionData[] = [
  { title: "Tea", items: tea },
  { title: "Desserts", items: desserts.slice(0, 4) },
];

export const secondColumn: MenuSectionData[] = [
  { title: "Desserts", items: desserts.slice(4) },
];
