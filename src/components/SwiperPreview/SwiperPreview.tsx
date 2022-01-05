import { FC, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper";
import { Swiper as SwiperClass } from "swiper/types";

import { Container } from "../Container";

import { ReactComponent as LongArrow } from "@/assets/LongArrow.svg";

import { SwiperPreviewProps } from "./types";

import css from "./SwiperPreview.module.css";

export const SwiperPreview: FC<SwiperPreviewProps> = ({ className, items }) => {
  const prefix = useMemo<string>(
    () => (items.length < 10 ? "0" : ""),
    [items.length]
  );
  const slidesQuantity = useMemo<string>(
    () => prefix + items.length,
    [items.length, prefix]
  );
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const [currentIndex, setActiveIndex] = useState<string>("");
  const updateSwiper = (swiper: SwiperClass): void => {
    setActiveIndex(prefix + (swiper.realIndex + 1));
  };

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
          onSwiper={updateSwiper}
          onSlideChange={updateSwiper}
          className="mySwiper2"
        >
          {items.map(({ id, img, alt }) => {
            return (
              <SwiperSlide key={id}>
                <a key={id}>
                  <img className={css.slidePhoto} src={img} alt={alt} />
                </a>
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
          onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {items.map(({ id, img, alt }) => {
            return (
              <SwiperSlide key={id}>
                <a key={id}>
                  <img className={css.slidePhoto} src={img} alt={alt} />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};
