import { MainSwiper, MainSlide } from "@/components/MainSwiper";
import { Category, CategoryItems } from "@/components/Category";
import { Advantages } from "@/components/Advantages";
import { AdviceSwiper, AdviceSlide } from "@/components/AdviceSwiper";
import { AboutProduction } from "@/components/AboutProduction";
import { AboutCompany } from "@/components/AboutCompany";
import { SwiperPreview, SwiperPreviewSlide } from "@/components/SwiperPreview";

import categoryPhoto1 from "@/assets/categoryPhoto1.jpg";
import categoryPhoto2 from "@/assets/categoryPhoto2.jpg";
import categoryPhoto3 from "@/assets/categoryPhoto3.jpg";
import categoryPhoto4 from "@/assets/categoryPhoto4.jpg";
import categoryPhoto5 from "@/assets/categoryPhoto5.jpg";

import mainSlide1 from "@/assets/mainSlide1.jpg";
import mainSlide2 from "@/assets/mainSlide2.jpg";
import mainSlide3 from "@/assets/mainSlide3.jpg";
import mainSlide4 from "@/assets/mainSlide4.jpg";
import mainSlide5 from "@/assets/mainSlide5.jpg";

import AdviceSlide1 from "@/assets/AdviceSlide1.png";
import AdviceSlide2 from "@/assets/AdviceSlide2.png";

import css from "./Home.module.css";

const mainSwiperItems: Array<MainSlide> = [
  {
    id: 0,
    img: mainSlide1,
    alt: "Slide Malta",
    title: "Malta",
    url: "/category-1/product-1",
  },
  {
    id: 1,
    img: mainSlide2,
    alt: "Slide Munich",
    title: "Munich",
    url: "/category-2/product-2",
  },
  {
    id: 2,
    img: mainSlide3,
    alt: "Slide Malta",
    title: "Malta",
    url: "/category-3/product-3",
  },
  {
    id: 3,
    img: mainSlide4,
    alt: "Slide Munich",
    title: "Munich",
    url: "/category-4/product-4",
  },
  {
    id: 4,
    img: mainSlide5,
    alt: "Slide Malta",
    title: "Malta",
    url: "/category-4/product-4",
  },
];

const categoryItems: Array<CategoryItems> = [
  {
    id: 0,
    img: categoryPhoto1,
    url: "/category-1",
    title: "Модульные диваны",
    number: 24,
    alt: "Модульные диваны",
  },
  {
    id: 1,
    img: categoryPhoto2,
    url: "/category-2",
    title: "Кресла",
    number: 6,
    alt: "Кресла",
  },
  {
    id: 2,
    img: categoryPhoto3,
    url: "/category-3",
    title: "Новинки",
    number: 13,
    alt: "Новинки",
  },
  {
    id: 3,
    img: categoryPhoto4,
    url: "/category-4",
    title: "Классическая мебель",
    number: 48,
    alt: "Классическая мебель",
  },
  {
    id: 4,
    img: categoryPhoto5,
    url: "/category-5",
    title: "Диваны",
    number: 27,
    alt: "Диваны",
  },
  {
    id: 5,
    img: categoryPhoto1,
    url: "/category-6",
    title: "Кровати",
    number: 9,
    alt: "Кровати",
  },
];

const adviceSwiperItems: Array<AdviceSlide> = [
  {
    id: 0,
    img: AdviceSlide1,
    title: "Как правильно ухаживать за мебелью",
    text: "Любая мебель, если неправильно за ней ухаживать, может очень быстро прийти в негодность.",
    alt: "Photo1",
  },
  {
    id: 1,
    img: AdviceSlide2,
    title: "Как уберечь диван от кошки?",
    text: "Любовь к красивой мебели и любовь к домашним питомцам – понятия вполне совместимые.",
    alt: "Photo2",
  },
  {
    id: 2,
    img: AdviceSlide1,
    title: "Как правильно ухаживать за мебелью",
    text: "Любая мебель, если неправильно за ней ухаживать, может очень быстро прийти в негодность.",
    alt: "Photo1",
  },
  {
    id: 3,
    img: AdviceSlide2,
    title: "Как уберечь диван от кошки?",
    text: "Любовь к красивой мебели и любовь к домашним питомцам – понятия вполне совместимые.",
    alt: "Photo2",
  },
];

const swiperPreviewItems: Array<SwiperPreviewSlide> = [
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

export default function Home() {
  return (
    <main className={css.main}>
      <MainSwiper items={mainSwiperItems} />
      <Category items={categoryItems} className={css.category} />
      <SwiperPreview items={swiperPreviewItems} />
      <Advantages className={css.advantages} />
      <AdviceSwiper items={adviceSwiperItems} className={css.adviceSwiper} />
      <AboutProduction className={css.AboutProduction} />
      <AboutCompany className={css.AboutCompany} />
    </main>
  );
}
