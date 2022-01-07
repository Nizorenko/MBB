import { IWithClassName } from "@/types";

export type SwiperPreviewSlide = {
  id: number;
  img: string;
  alt?: string;
};

export interface SwiperPreviewProps extends IWithClassName {
  items: Array<SwiperPreviewSlide>;
}
