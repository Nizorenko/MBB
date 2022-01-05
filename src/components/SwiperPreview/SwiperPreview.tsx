import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom } from "swiper";
import { Swiper as SwiperClass } from "swiper/types";

import { Container } from "../Container";
import { Button } from "../Button";

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

  return (
    <section className={className}>
      <Container>
        <h2 className={css.header}>Советы</h2>

        <Swiper
          modules={[Navigation, Zoom]}
          zoom={{ maxRatio: 3 }}
          spaceBetween={50}
          navigation={{ prevEl: `.${css.prev}`, nextEl: `.${css.next}` }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            650: {
              slidesPerView: 1.5,
            },
            1051: {
              slidesPerView: 2.5,
            },
          }}
          onSwiper={updateActiveIndex}
          onSlideChange={updateActiveIndex}
        >
          {items.map(({ id, img, title, text, alt }) => {
            return (
              <SwiperSlide key={id}>
                <div className={css.adviceSwiper}>
                  <img className={css.slidePhoto} src={img} alt={alt} />
                  <h2 className={css.adviceHeader}>{title}</h2>
                  <p className={css.adviceText}>{text}</p>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <ul className={css.qwe}>
              <li>sad</li>
            </ul>
          </SwiperSlide>

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
          <Button className={css.btn} variant="color">
            Больше советов
          </Button>
        </Swiper>
      </Container>
    </section>
  );
};
