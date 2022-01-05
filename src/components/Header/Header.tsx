import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "../Container";
import { Menu, NavItem } from "../Menu";
import { BurgerButton } from "../BurgerButton";

import { ReactComponent as Search } from "@/assets/Search.svg";
import { ReactComponent as Logo } from "@/assets/Logo.svg";

import css from "./Header.module.css";
import { HederProps } from "./types";

const navList: Array<NavItem> = [
  { title: "Каталог", url: "/category-1" },
  { title: "Новости", url: "/category-2" },
  { title: "Салоны", url: "/category-1/qwe" },
  { title: "О компании", url: "/category" },
  { title: "Франшиза", url: "/category" },
  { title: "Контакты", url: "/category" },
  { title: "Партнёрам", url: "/category" },
];

export const Header: FC<HederProps> = ({ openPopup, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handler = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={className}>
      <Container>
        <div className={css.linkBox}>
          <Link className={css.linkLogo} to="/">
            <Logo className={css.logo} />
          </Link>
          <div className={css.itemsBox}>
            <Menu
              openPopup={openPopup}
              onClick={handler}
              isOpen={isOpen}
              navList={navList}
            />

            <button className={css.linkSearch}>
              <Search className={css.search} />
            </button>

            <BurgerButton isOpen={isOpen} onClick={handler} />
          </div>
        </div>
      </Container>
    </header>
  );
};
