import { IWithClassName } from "@/types";

export type NavItem = {
  title: string;
  url: string;
};

export interface MenuProps extends IWithClassName {
  onClick: () => void;
  openPopup: () => void;
  isOpen: boolean;
  navList: Array<NavItem>;
}
