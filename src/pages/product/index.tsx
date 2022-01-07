import { useParams } from "react-router";

import { SwiperPreview, SwiperPreviewSlide } from "@/components/SwiperPreview";
import {
  DescriptionAcordeon,
  AccordionItem,
} from "@/components/DescriptionAcordeon";

import Material1 from "@/assets/Material1.png";

import mainSlide1 from "@/assets/mainSlide1.jpg";
import mainSlide2 from "@/assets/mainSlide2.jpg";
import mainSlide3 from "@/assets/mainSlide3.jpg";
import mainSlide4 from "@/assets/mainSlide4.jpg";
import mainSlide5 from "@/assets/mainSlide5.jpg";

import css from "./Profuct.module.css";

const swiperSlides: Array<SwiperPreviewSlide> = [
  {
    id: 0,
    img: mainSlide1,
    alt: "Photo1",
  },
  {
    id: 1,
    img: mainSlide2,
    alt: "Photo2",
  },
  {
    id: 2,
    img: mainSlide3,
    alt: "Photo3",
  },
  {
    id: 3,
    img: mainSlide4,
    alt: "Photo4",
  },
  {
    id: 4,
    img: mainSlide5,
    alt: "Photo5",
  },
  {
    id: 5,
    img: mainSlide1,
    alt: "Photo6",
  },
  {
    id: 6,
    img: mainSlide2,
    alt: "Photo7",
  },
  {
    id: 7,
    img: mainSlide3,
    alt: "Photo8",
  },
];

const accordeonItems: Array<AccordionItem> = [
  {
    id: 0,
    title: "Описание",
    content: (
      <>
        Современный классический диван с элементами декора, в которых есть
        отсылки к стилю арт-деко. В основе декора - каретная стяжка благодаря
        этому и элегантным плавным линиям силуэта диван завораживает своей
        красотой. Диван может изготавливаться без спального места.
        Высокоэластичный пенополиуретан с эффектом памяти и продленным сроком
        эксплуатации легко восстанавливает свою форму. Механизм трансформации
        "пума" легко превращает диван в полноценное спальное место, состоящее из
        двух блоков. К дивану можно заказать кресло.
      </>
    ),
  },
  {
    id: 1,
    title: "Материал обивки",
    content: (
      <>
        <ul className={css.list}>
          <li className={css.item}>
            <span>Велюр</span>
            <img src={Material1} alt="" />
          </li>
          <li>
            <span>Замша</span>
            <img src={Material1} alt="" />
          </li>
          <li>
            <span>Велюр</span>
            <img src={Material1} alt="" />
          </li>
          <li>
            <span>Замша</span>
            <img src={Material1} alt="" />
          </li>
          <li>
            <span>Велюр</span>
            <img src={Material1} alt="" />
          </li>
          <li>
            <span>Замша</span>
            <img src={Material1} alt="" />
          </li>
          <li>
            <span>Велюр</span>
            <img src={Material1} alt="" />
          </li>
        </ul>
      </>
    ),
  },
  { id: 2, title: "Размеры и комлектация", content: <>Неизвестно</> },
  {
    id: 3,
    title: "Фото в интерьере",
    content: (
      <>
        <ul>
          <li></li>
        </ul>
      </>
    ),
  },
];

export default function Product() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <SwiperPreview items={swiperSlides} />
      <DescriptionAcordeon
        items={accordeonItems}
        className={css.descriptionAcordeon}
      />
    </>
  );
}
