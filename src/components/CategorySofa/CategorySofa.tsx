import { FC } from "react";
import { Link } from "react-router-dom";

import { CategorySofaProps } from "./types";
import { Container } from "../Container";

import { ReactComponent as ArrowBack } from "@/assets/ArrowBack.svg";
import { ReactComponent as Material1 } from "@/assets/material1.svg";
import { ReactComponent as Material2 } from "@/assets/material2.svg";

import css from "./CategorySofa.module.css";

export const CategorySofa: FC<CategorySofaProps> = ({ className, items }) => {
  return (
    <section className={className}>
      <Container>
        <div className={css.boxHeader}>
          <Link to="/">
            <ArrowBack className={css.arrowBack} />
          </Link>
          <h1 className={css.header}>Модульные диваны</h1>
        </div>
      </Container>
      <div className={css.color}>
        <Container>
          <ul>
            {items.map(({ id, title, img, text, url, alt }) => {
              return (
                <li key={id} className={css.item}>
                  <div className={css.boxItem}>
                    <h3 className={css.categoryName}>{text}</h3>
                    <div className={css.boxMaterial}>
                      <Material1 className={css.material} />
                      <Material2 className={css.material} />
                    </div>
                  </div>
                  <Link className={css.link} to={url}>
                    <img className={css.photo} src={img} alt={alt} />
                  </Link>
                  <h2 className={css.headerBottom}>{title}</h2>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </section>
  );
};
