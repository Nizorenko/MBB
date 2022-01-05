import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper";
import { Swiper as SwiperClass } from "swiper/types";

import { Container } from "../Container";

import { ReactComponent as LongArrow } from "@/assets/LongArrow.svg";

import { SwiperPreviewProps } from "./types";

import css from "./SwiperPreview.module.css";

export const SwiperPreview: FC<SwiperPreviewProps> = ({ className, items }) => {
  const prefix = items.length < 10 ? "0" : "";
  const slidesQuantity = prefix + items.length;
  const [currentIndex, setActiveIndex] = useState<string>("");

  const updateActiveIndex = (swiper: SwiperClass): void => {
    setActiveIndex(prefix + (swiper.activeIndex + 1));
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const updateThumbsSwiper = (swiper: SwiperClass): void => {
    setThumbsSwiper(thumbsSwiper);
  };
  console.log(thumbsSwiper);

  return (
    <section className={className}>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Thumbs, FreeMode]}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ prevEl: `.${css.prev}`, nextEl: `.${css.next}` }}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={updateActiveIndex}
          onSlideChange={updateActiveIndex}
        >
          {items.map(({ id, img, alt }) => {
            return (
              <SwiperSlide key={id}>
                <div className="swiper-zoom-container">
                  <a key={id}>
                    <img className={css.slidePhoto} src={img} alt={alt} />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}

          <div className={css.boxPagination}>
            <button className={css.prev}>
              <LongArrow />
            </button>
            <div className={css.itemNumber}>
              {currentIndex}/{slidesQuantity}
            </div>
            <button className={css.next}>
              <LongArrow />
            </button>
          </div>
        </Swiper>

        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          freeMode={true}
          onSwiper={updateThumbsSwiper}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {items.map(({ id, img, alt }) => {
            return (
              <SwiperSlide key={id}>
                <div className="swiper-zoom-container">
                  <a key={id}>
                    <img className={css.slidePhoto} src={img} alt={alt} />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};
