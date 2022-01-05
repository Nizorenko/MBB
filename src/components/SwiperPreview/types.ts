import { IWithClassName } from "@/types";

export interface SwiperPreviewProps extends IWithClassName {
  items: Array<SwiperPreviewSlide>;
}

export type SwiperPreviewSlide = {
  id: number;
  img: string;
  alt?: string;
  bigImg?: string;
};
