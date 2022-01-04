import { IWithClassName } from "@/types";

export interface BurgerProps extends IWithClassName {
  isOpen: boolean;
  onClick?: () => void;
}
