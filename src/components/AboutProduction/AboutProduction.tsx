import { FC } from "react";

import { Container } from "../Container";

import { ReactComponent as Present } from "@/assets/Present.svg";
import { ReactComponent as Condition } from "@/assets/Condition.svg";
import { ReactComponent as Delivery } from "@/assets/Delivery.svg";
import { ReactComponent as Guarante } from "@/assets/Guarante.svg";

import { AboutProductionProps } from "./types";
import css from "./AboutProduction.module.css";

export const AboutProduction: FC<AboutProductionProps> = ({ className }) => {
  return (
    <section className={className}>
      <div className={css.colorHeader}>
        <Container>
          <h2 className={css.header}>О производстве</h2>
        </Container>
      </div>
      <Container>
        <ul className={css.list}>
          <li className={css.item}>
            <a className={css.link} href="#">
              <Guarante className={css.guarante} />
              <h3 className={css.subtitle}>Гарантия</h3>
            </a>
          </li>
          <li className={css.item}>
            <a className={css.link} href="#">
              <Delivery className={css.delivery} />
              <h3 className={css.subtitle}>Доставка</h3>
            </a>
          </li>
          <li className={css.item}>
            <a className={css.link} href="#">
              <Condition className={css.condition} />
              <h3 className={css.subtitle}>Условия ухода</h3>
            </a>
          </li>

          <li className={css.item}>
            <a className={css.link} href="#">
              <Present className={css.present} />
              <h3 className={css.subtitle}>Подарки</h3>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};
