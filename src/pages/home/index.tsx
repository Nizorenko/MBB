import { MainSwiper, MainSlide } from "@/components/MainSwiper";
import { Category } from "@/components/Category";
import { Advantages } from "@/components/Advantages";
import { AdviceSwiper, AdviceSlide } from "@/components/AdviceSwiper";
import { AboutProduction } from "@/components/AboutProduction";
import { AboutCompany } from "@/components/AboutCompany";
import {
  DescriptionAcordeon,
  AccordionItem,
} from "@/components/DescriptionAcordeon";

import Slide1 from "@/assets/SliderThelineupPhoto1.jpg";
import Slide2 from "@/assets/SliderThelineupPhoto2.jpg";
import Slide3 from "@/assets/SliderThelineupPhoto3.jpg";
import Slide4 from "@/assets/SliderThelineupPhoto4.jpg";
import Slide5 from "@/assets/SliderThelineupPhoto5.jpg";
import AdviceSlide1 from "@/assets/Slide1.png";
import AdviceSlide2 from "@/assets/Slide2.png";

import css from "./Home.module.css";

const mainSwiperItems: Array<MainSlide> = [
  { id: 0, img: Slide1, alt: "Slide1" },
  { id: 1, img: Slide2, alt: "Slide2" },
  { id: 2, img: Slide3, alt: "Slide3" },
  { id: 3, img: Slide4, alt: "Slide4" },
  { id: 4, img: Slide5, alt: "Slide5" },
];

const accordeonItems: Array<AccordionItem> = [
  { id: 0, title: "Описание1", content: <>SASDASDAS1</> },
  { id: 1, title: "Описание2", content: <>SASDASDAS2</> },
  { id: 2, title: "Описание3", content: <>SASDASDAS3</> },
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
    id: 0,
    img: AdviceSlide2,
    title: "Как уберечь диван от кошки?",
    text: "Любовь к красивой мебели и любовь к домашним питомцам – понятия вполне совместимые.",
    alt: "Photo1",
  },
  {
    id: 0,
    img: AdviceSlide1,
    title: "Как правильно ухаживать за мебелью",
    text: "Любая мебель, если неправильно за ней ухаживать, может очень быстро прийти в негодность.",
    alt: "Photo1",
  },
  {
    id: 0,
    img: AdviceSlide2,
    title: "Как уберечь диван от кошки?",
    text: "Любовь к красивой мебели и любовь к домашним питомцам – понятия вполне совместимые.",
    alt: "Photo1",
  },
];

export default function Home() {
  return (
    <main className={css.main}>
      <MainSwiper items={mainSwiperItems} />
      <Category className={css.category} />
      <Advantages className={css.advantages} />
      <AdviceSwiper items={adviceSwiperItems} className={css.adviceSwiper} />
      <AboutProduction className={css.AboutProduction} />
      <AboutCompany className={css.AboutCompany} />
    </main>
  );
}
