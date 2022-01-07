import { IWithClassName } from "@/types";

export type MainSlide = {
  id: number;
  title: string;
  img: string;
  alt?: string;
  url: string;
};

export interface MainSwiperProps extends IWithClassName {
  items: Array<MainSlide>;
}
