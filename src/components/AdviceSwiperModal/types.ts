import { IWithClassName } from "@/types";

export interface AdviceSwiperModalProps extends IWithClassName {
  items: Array<AdviceSwiper>;
}

export type AdviceSwiper = {
  id: number;
  img: string;
  title: string;
  text: string;
  alt?: string;
};
