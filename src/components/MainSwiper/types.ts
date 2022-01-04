import { IWithClassName } from "@/types";

export interface MainSwiperProps extends IWithClassName {
  items: Array<MainSlide>;
}

export type MainSlide = {
  id: number;
  img: string;
  alt?: string;
};
