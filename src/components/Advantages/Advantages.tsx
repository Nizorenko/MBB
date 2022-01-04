import { FC } from "react";

import { AdvantagesProps } from "./types";
import { Container } from "../Container";

import Advantages1 from "@/assets/Advantages-1.png";
import Advantages2 from "@/assets/Advantages-2.png";
import Advantages3 from "@/assets/Advantages-3.png";

import css from "../Advantages/Advantages.module.css";

export const Advantages: FC<AdvantagesProps> = ({ className }) => {
  return (
    <section className={className}>
      <div className={css.advantageHeader}>
        <Container>
          <div className={css.boxHeader}>
            <h3 className={css.subtitle}>Приемущества</h3>
            <h2 className={css.header}>
              Мебель Братьев Баженовых — надёжный партнер!
            </h2>
            <p className={css.text}>
              Фабрика «Мебель Братьев Баженовых» работает на рынке мягкой мебели
              уже более 23 лет. Точные сроки поставок комплектующих и работа со
              всеми ведущими поставщиками России и зарубежья.{" "}
            </p>
          </div>
        </Container>
      </div>

      <Container className={css.qwe}>
        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.number}>01</span>
            <div className={css.boxAdvantage}>
              <img
                className={css.imgAdvantage}
                src={Advantages1}
                alt="Decorative illustration advantages"
              />
              <p className={css.textAdvantage}>
                Лидер в отрасли производства мягкой мебели
              </p>
            </div>
          </li>
          <li className={css.item}>
            <span className={css.number}>02</span>
            <div className={css.boxAdvantage}>
              <img
                className={css.imgAdvantage}
                src={Advantages2}
                alt="Decorative illustration advantages"
              />
              <p className={css.textAdvantage}>
                Постоянный участник международных мебельных выставок
              </p>
            </div>
          </li>
          <li className={css.itemOne}>
            <span className={css.number}>03</span>
            <div className={css.boxAdvantage}>
              <img
                className={css.imgAdvantage}
                src={Advantages3}
                alt="Decorative illustration advantages"
              />
              <p className={css.textAdvantage}>
                Релакс и респектабельность на долгие годы
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};
