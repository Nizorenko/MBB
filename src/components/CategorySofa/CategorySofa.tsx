import { FC } from "react";

import { CategorySofaProps } from "./types";
import { Container } from "../Container";

import Photo1 from "@/assets/SliderThelineupPhoto1.jpg";

import { ReactComponent as ArrowBack } from "@/assets/ArrowBack.svg";
import { ReactComponent as Material1 } from "@/assets/material1.svg";
import { ReactComponent as Material2 } from "@/assets/material2.svg";

import css from "./CategorySofa.module.css";

export const CategorySofa: FC<CategorySofaProps> = ({ className }) => {
  return (
    <section className={className}>
      <Container>
        <div className={css.boxHeader}>
          <ArrowBack className={css.arrowBack} />
          <h1 className={css.header}>Модульные диваны</h1>
        </div>
      </Container>
      <div className={css.color}>
        <Container>
          <ul>
            <li className={css.item}>
              <div className={css.boxItem}>
                <h3 className={css.headerTop}>диваны</h3>
                <div className={css.boxMaterial}>
                  <Material1 className={css.material} />
                  <Material2 className={css.material} />
                </div>
              </div>
              <a className={css.link} href="/category-1/Marsel">
                <img className={css.photo} src={Photo1} alt="Photo slide1" />
              </a>
              <h2 className={css.headerBottom}>Marsel</h2>
            </li>
            <li className={css.item}>
              <div className={css.boxItem}>
                <h3 className={css.headerTop}>диваны</h3>
                <div className={css.boxMaterial}>
                  <Material1 className={css.material} />
                  <Material2 className={css.material} />
                </div>
              </div>
              <a className={css.link} href="">
                <img className={css.photo} src={Photo1} alt="Photo slide1" />
              </a>
              <h2 className={css.headerBottom}>Marsel</h2>
            </li>
            <li className={css.item}>
              <div className={css.boxItem}>
                <h3 className={css.headerTop}>диваны</h3>
                <div className={css.boxMaterial}>
                  <Material1 className={css.material} />
                  <Material2 className={css.material} />
                </div>
              </div>
              <a className={css.link} href="">
                <img className={css.photo} src={Photo1} alt="Photo slide1" />
              </a>
              <h2 className={css.headerBottom}>Marsel</h2>
            </li>
          </ul>
        </Container>
      </div>
    </section>
  );
};
