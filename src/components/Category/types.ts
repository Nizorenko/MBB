import { IWithClassName } from "@/types";

export type CategoryItems = {
  id: number;
  img: string;
  url: string;
  title: string;
  number: number;

  alt?: string;
};

export interface CategoryProps extends IWithClassName {
  items: Array<CategoryItems>;
}
