import { FC, useState } from "react";

import { FooterProps } from "./types";
import { Container } from "../Container";

import { ReactComponent as Logo } from "@/assets/Logo.svg";
import { ReactComponent as Instagram } from "@/assets/Instagram.svg";
import { ReactComponent as Vk } from "@/assets/Vk.svg";
import { ReactComponent as Facebook } from "@/assets/Facebook.svg";
import { ReactComponent as Telegram } from "@/assets/Telegram.svg";

import css from "./Footer.module.css";

export const Footer: FC<FooterProps> = ({ className, openPopup }) => {
  return (
    <footer className={className}>
      <Container>
        <div className={css.nav}>
          <div className={css.headerBox}>
            <h2 className={css.header}>Каталог товаров</h2>
          </div>
          <ul>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Модульные диваны</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Диваны</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Классическая мебель</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Малогабритные диваны</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Кровати</h3>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Новинки</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Кресла</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Бескаркасная мебель</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Аксессуары</h3>
              </a>
            </li>
          </ul>
        </div>
        <div className={css.nav}>
          <div className={css.headerBox}>
            <h2 className={css.header}>Информация</h2>
          </div>
          <ul>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>О компании</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Где купить</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Салоны</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Новости</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Вакансии</h3>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Дилерам</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Дизайнерам</h3>
              </a>
            </li>
            <li>
              <a className={css.link} href="#">
                <h3 className={css.subtitle}>Кабинет партнера</h3>
              </a>
            </li>
          </ul>
        </div>

        <div className={css.social}>
          <a href="/">
            <Logo className={css.logo} />
          </a>

          <div className={css.boxContacts}>
            <a className={css.linkPhone} href="tel:8 800 250 43 06">
              8 800 250-43-06
            </a>
            <a className={css.linkEmail} href="mailto:info@kirovmebel.ru">
              info@kirovmebel.ru
            </a>
          </div>
          <ul className={css.list}>
            <li>
              <a href="#">
                <Instagram className={css.instagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <Vk className={css.vk} />
              </a>
            </li>
            <li>
              <a href="#">
                <Facebook className={css.facebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <Telegram className={css.telegram} />
              </a>
            </li>
          </ul>
          <button onClick={openPopup} className={css.feedback}>
            Обратная связь
          </button>
        </div>
      </Container>
    </footer>
  );
};
