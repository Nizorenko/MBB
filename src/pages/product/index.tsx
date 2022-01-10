import { useParams } from "react-router";

import { SwiperProduct, SwiperProductSlide } from "@/components/SwiperProduct";
import {
  DescriptionAcordeon,
  AccordionItem,
} from "@/components/DescriptionAcordeon";

import Material1 from "@/assets/Material1.png";
import Material2 from "@/assets/Material2.png";
import Material3 from "@/assets/Material3.png";
import Material4 from "@/assets/Material4.png";
import Material5 from "@/assets/Material5.png";
import Material6 from "@/assets/Material6.png";

import mainSlide1 from "@/assets/categorySofaPhoto2.jpg";
import mainSlide2 from "@/assets/categorySofaPhoto3.jpg";

import css from "./Profuct.module.css";

const swiperSlides: Array<SwiperProductSlide> = [
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
    img: mainSlide1,
    alt: "Photo3",
  },
  {
    id: 3,
    img: mainSlide2,
    alt: "Photo4",
  },
  {
    id: 4,
    img: mainSlide1,
    alt: "Photo5",
  },
  {
    id: 5,
    img: mainSlide2,
    alt: "Photo6",
  },
  {
    id: 6,
    img: mainSlide1,
    alt: "Photo7",
  },
  {
    id: 7,
    img: mainSlide2,
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
          <li className={css.item}>
            <span>Замша</span>
            <img src={Material2} alt="" />
          </li>
          <li className={css.item}>
            <span>Шеннил</span>
            <img src={Material3} alt="" />
          </li>
          <li className={css.item}>
            <span>Жаккард</span>
            <img src={Material4} alt="" />
          </li>
          <li className={css.item}>
            <span>Рогожка</span>
            <img src={Material5} alt="" />
          </li>
          <li className={css.item}>
            <span>Гобелен</span>
            <img src={Material6} alt="" />
          </li>
          <li className={css.item}>
            <span>Велюр</span>
            <img src={Material1} alt="" />
          </li>
          <li className={css.item}>
            <span>Замша</span>
            <img src={Material2} alt="" />
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
          <li>
            <img className={css.photo} src={mainSlide1} alt="" />
          </li>
          <li>
            <img className={css.photo} src={mainSlide2} alt="" />
          </li>
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
      <SwiperProduct items={swiperSlides} />
      <DescriptionAcordeon
        items={accordeonItems}
        className={css.descriptionAcordeon}
      />
    </>
  );
}
