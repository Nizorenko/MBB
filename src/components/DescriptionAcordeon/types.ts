import { IWithClassName } from "@/types";
import { ReactElement } from "react";

export interface DescriptionAcordeonProps extends IWithClassName {
  items: Array<AccordionItem>;
}

export type AccordionItem = {
  id: number;
  title: string;
  content: ReactElement;
};
