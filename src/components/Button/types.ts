import { IWithClassName } from "@/types";

export interface IButton extends IWithClassName {
  onClick?: () => void;
  variant?: "color" | "default";
}
