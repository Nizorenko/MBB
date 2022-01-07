import { IWithClassName } from "@/types";

export type CategoryItems = {
  id: number;
  img: string;
  title: string;
  text: string;
  url: string;
  alt?: string;
};

export interface CategorySofaProps extends IWithClassName {
  items: Array<CategoryItems>;
}
