import { FC } from "react";
import { Link } from "react-router-dom";

import { CategoryProps } from "./types";
import { Container } from "../Container";
import { Button } from "../Button";

import css from "./Category.module.css";

export const Category: FC<CategoryProps> = ({ className, items }) => {
  return (
    <section className={className}>
      <div className={css.headerColor}>
        <Container>
          <div className={css.headerBox}>
            <h2 className={css.header}>Широкий модельный ряд</h2>
          </div>
        </Container>
      </div>
      <div className={css.boxCategory}>
        <Container>
          <div className={css.container}>
            <ul className={css.list}>
              {items.map(({ id, img, imgHover, title, number, url, alt }) => {
                return (
                  <li key={id} className={css.itemOne}>
                    <Link key={title} className={css.link} to={url}>
                      <img
                        className={css.cardIllustration}
                        src={img}
                        alt={alt}
                      />
                      <img
                        className={`${css.cardIllustration} ${css.activeHover}`}
                        src={imgHover}
                        alt={alt}
                      />
                      <div className={css.cardTitle}>
                        <div className={css.gridTitle}>
                          <h3 className={css.title}>{title}</h3>
                          <span className={css.number}>{number}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
      <Container>
        <div className={css.boxText}>
          <p className={css.text}>
            <span className={css.fragmentText}>
              Элитный диван или дизайнерское кресло
            </span>
            — это не роскошь, а совершено понятное и объяснимое стремление к
            красоте. Выберите себе один предмет или купите сразу целый набор
            мягкой мебели и преобразите свой интерьер!
          </p>
          <Link to="/divans/">
            <Button className={css.btn} variant="color">
              Открыть каталог
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
