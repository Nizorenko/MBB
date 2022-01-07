import { FC, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper";
import { Swiper as SwiperClass } from "swiper/types";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

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
        <Gallery>
          <Swiper
            modules={[Navigation, Pagination, Thumbs, FreeMode]}
            pagination={{
              progressbarFillClass: `${css.colorProgressBar}`,

              clickable: true,
              type: "progressbar",
            }}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ prevEl: `.${css.prev}`, nextEl: `.${css.next}` }}
            thumbs={{ swiper: thumbsSwiper }}
            onSwiper={updateSwiper}
            onSlideChange={updateSwiper}
            className={css.SwiperPreview}
          >
            {items.map(({ id, img, alt }) => {
              return (
                <SwiperSlide>
                  <Item
                    original={img}
                    thumbnail={img}
                    width="1920"
                    height="1080"
                  >
                    {({ ref, open }) => (
                      <img
                        key={id}
                        className={css.slidePhoto}
                        ref={ref}
                        onClick={open}
                        src={img}
                        alt={alt}
                      />
                    )}
                  </Item>
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
        </Gallery>
        <Swiper
          spaceBetween={0}
          slidesPerView={6.5}
          freeMode={true}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
          className={css.SwiperPreview}
        >
          {items.map(({ id, img, alt }) => {
            return (
              <SwiperSlide key={id}>
                <img className={css.slidePhoto} src={img} alt={alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};
