import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom } from "swiper";
import { Swiper as SwiperClass } from "swiper/types";

import { Container } from "../Container";

import { ReactComponent as LongArrow } from "@/assets/LongArrow.svg";

import { MainSwiperProps } from "./types";

import css from "./MainSwiper.module.css";

export const MainSwiper: FC<MainSwiperProps> = ({ items }) => {
  const prefix = items.length < 10 ? "0" : "";
  const slidesQuantity = prefix + items.length;
  const [currentIndex, setActiveIndex] = useState<string>("");
  const updateActiveIndex = (swiper: SwiperClass): void => {
    setActiveIndex(prefix + (swiper.activeIndex + 1));
  };

  return (
    <Container>
      <div className={css.boxNumer}>
        <div className={css.itemNumber}>
          {currentIndex}/{slidesQuantity}
        </div>
      </div>
      <Swiper
        modules={[Navigation, Zoom]}
        zoom={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ prevEl: `.${css.prev}`, nextEl: `.${css.next}` }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={updateActiveIndex}
        onSlideChange={updateActiveIndex}
      >
        {items.map(({ id, img, alt }) => {
          return (
            <SwiperSlide key={id}>
              <div className="swiper-zoom-container">
                <img className={css.slidePhoto} src={img} alt={alt} />
              </div>
            </SwiperSlide>
          );
        })}

        <button className={css.prev}>
          <LongArrow />
        </button>
        <button className={css.next}>
          <LongArrow />
        </button>
      </Swiper>
    </Container>
  );
};
