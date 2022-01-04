import { FC } from "react";

import { CategoryProps } from "./types";
import { Container } from "../Container";
import { Button } from "../Button";

import css from "./Category.module.css";

import photoArmchair from "@/assets/Armchair.jpg";
import photoNewModels from "@/assets/NewModels.jpg";
import photoClassicFurniture from "@/assets/ClassicFurniture.jpg";
import photoSofas from "@/assets/Sofas.jpg";
import photoBeds from "@/assets/Beds.jpg";

export const Category: FC<CategoryProps> = ({ className }) => {
  return (
    <section className={className}>
      <div className={css.headerColor}>
        <Container>
          <div className={css.headerBox}>
            <h2 className={css.header}>Широкий модельный ряд</h2>
          </div>
        </Container>
      </div>
      <Container className={css.container}>
        <div className={css.container}>
          <ul className={css.list}>
            <li className={css.itemOne}>
              <a className={css.link} href="#">
                <img
                  className={css.cardIllustration}
                  src={photoArmchair}
                  alt="Модульные диваны"
                />
                <div className={css.cardTitle}>
                  <div className={css.gridTitle}>
                    <h2 className={css.title}>Модульные диваны</h2>
                    <span className={css.number}>24</span>
                  </div>
                </div>
              </a>
            </li>
            <li className={css.item}>
              <a className={css.link} href="#">
                <img
                  className={css.cardIllustration}
                  src={photoNewModels}
                  alt="Модульные диваны"
                />
                <div className={css.cardTitle}>
                  <div className={css.gridTitle}>
                    <h2 className={css.title}>Кресла</h2>
                    <span className={css.number}>6</span>
                  </div>
                </div>
              </a>
            </li>
            <li className={css.item}>
              <a className={css.link} href="#">
                <img
                  className={css.cardIllustration}
                  src={photoClassicFurniture}
                  alt="Модульные диваны"
                />
                <div className={css.cardTitle}>
                  <div className={css.gridTitle}>
                    <h2 className={css.title}>Новинки</h2>
                    <span className={css.number}>13</span>
                  </div>
                </div>
              </a>
            </li>
            <li className={css.item}>
              <a className={css.link} href="#">
                <img
                  className={css.cardIllustration}
                  src={photoSofas}
                  alt="Модульные диваны"
                />
                <div className={css.cardTitle}>
                  <div className={css.gridTitle}>
                    <h2 className={css.title}>Диваны</h2>
                    <span className={css.number}>27</span>
                  </div>
                </div>
              </a>
            </li>
            <li className={css.item}>
              <a className={css.link} href="#">
                <img
                  className={css.cardIllustration}
                  src={photoBeds}
                  alt="Модульные диваны"
                />
                <div className={css.cardTitle}>
                  <div className={css.gridTitle}>
                    <h2 className={css.title}>Кровати</h2>
                    <span className={css.number}>9</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className={css.boxText}>
          <p className={css.text}>
            <span className={css.fragmentText}>
              Элитный диван или дизайнерское кресло
            </span>
            — это не роскошь, а совершено понятное и объяснимое стремление к
            красоте. Выберите себе один предмет или купите сразу целый набор
            мягкой мебели и преобразите свой интерьер!
          </p>
          <Button className={css.btn} variant="color">
            Открыть каталог
          </Button>
        </div>
      </Container>
    </section>
  );
};
