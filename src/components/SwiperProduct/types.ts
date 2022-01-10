import { IWithClassName } from "@/types";

export type SwiperProductSlide = {
  id: number;
  img: string;
  alt?: string;
};

export interface SwiperProductProps extends IWithClassName {
  items: Array<SwiperProductSlide>;
}
