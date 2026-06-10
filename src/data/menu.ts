export type MenuItem = {
  name: string;
  details?: string;
  small: string;
  large?: string;
};

export type MenuSectionData = {
  title: string;
  items: MenuItem[];
  note?: string;
};
