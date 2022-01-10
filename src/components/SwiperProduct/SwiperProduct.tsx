import { FC, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper";
import { Swiper as SwiperClass } from "swiper/types";

import { Gallery, Item } from "react-photoswipe-gallery";

import { Container } from "../Container";

import { ReactComponent as LongArrow } from "@/assets/LongArrow.svg";
import { ReactComponent as Icon3D } from "@/assets/Icon3D.svg";
import { ReactComponent as Material1 } from "@/assets/material1.svg";
import { ReactComponent as Material2 } from "@/assets/material2.svg";

import { SwiperProductProps } from "./types";

import css from "./SwiperProduct.module.css";

export const SwiperProduct: FC<SwiperProductProps> = ({ className, items }) => {
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
            className={css.Swiper}
            creativeEffect={{ shadowPerProgress: true }}
          >
            {items.map(({ id, img, alt }) => {
              return (
                <SwiperSlide>
                  <Item
                    original={img}
                    thumbnail={img}
                    width="1920"
                    height="1300"
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
            <div className={css.boxItem}>
              <button className={css.btn3D}>
                <Icon3D className={css.icon3D} />
              </button>
              <div className={css.boxMaterial}>
                <Material1 className={css.material} />
                <Material2 className={css.material} />
              </div>
            </div>

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
          autoHeight={false}
        >
          {items.map(({ id, img, alt }) => {
            return (
              <SwiperSlide key={id} className={css.slideBrightness}>
                <img className={css.slidePhotoThumbs} src={img} alt={alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};
