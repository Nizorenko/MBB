import { FC } from "react";

import { AboutCompanyProps } from "./types";
import { Container } from "../Container";

import css from "./AboutCompany.module.css";
import { Button } from "@/components/Button";

export const AboutCompany: FC<AboutCompanyProps> = ({ className }) => {
  return (
    <section className={className}>
      <Container>
        <h3 className={css.subtitle}>О компании</h3>
        <h2 className={css.header}>Мебель с вековой историей</h2>
        <div className={css.textBox}>
          <p className={css.text}>
            Фабрика «Мебель Братьев Баженовых» работает на рынке мягкой мебели
            уже более 23 лет. Точные сроки поставок комплектующих и работа со
            всеми ведущими поставщиками России и зарубежья.{" "}
          </p>
          <p className={css.text}>
            Срок изготовления мебели 12-21 рабочий день. Прием заказов он-лайн,
            отлаженная система логистики и проверенные перевозчики не сорвут
            сроки доставки.
          </p>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.number}>132</span>
            <span className={css.fragmentText}> Фирменных салона</span>
          </li>
          <li className={css.item}>
            <span className={css.number}>50+</span>
            <span className={css.fragmentText}>Регионов РФ</span>
          </li>
          <li className={css.item}>
            <span className={css.number}>23</span>
            <span className={css.fragmentText}>Года на рынке</span>
          </li>
        </ul>
        <Button className={css.btn} variant="color">
          Узнать подробнее
        </Button>
        <div className={css.boxFeedback}>
          <div className={css.feedback}>
            <h2 className={css.feedbackHeader}>Обратная связь</h2>
            <a className={css.feedbackLink} href="#">
              <p className={css.feedbackText}>Получить косультацию онлайн</p>
            </a>
          </div>
          <div className={css.feedback}>
            <h2 className={css.feedbackHeader}>Купить в салоне</h2>
            <a className={css.feedbackLink} href="#">
              <p className={css.feedbackText}>Получить косультацию в салоне</p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
