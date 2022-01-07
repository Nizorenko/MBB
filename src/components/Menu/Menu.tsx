import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import { MenuProps } from "./types";
import { Button } from "../Button";

import { ReactComponent as Arrow } from "@/assets/Arrow.svg";
import { ReactComponent as Search } from "@/assets/Search.svg";

import css from "./Menu.module.css";

export const Menu: FC<MenuProps> = ({ isOpen, items, openPopup, onClick }) => {
  const burgerMenuClassName = `${css.nav} ${isOpen ? css.isOpenNav : ""}`;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <nav className={burgerMenuClassName}>
      <form className={css.formSearch} method="#">
        <label>
          <Search width="18" height="18" />
        </label>
        <input
          className={css.input}
          type="text"
          placeholder="Поиск по сайту"
          name="user_name"
          id="user_name"
        />
      </form>
      <ul className={css.list}>
        {items.map(({ title, url }) => {
          return (
            <Link key={title} className={css.link} to={url}>
              <li className={css.item} onClick={onClick}>
                {title}
                <Arrow className={css.arrow} width="7" height="10" />
              </li>
            </Link>
          );
        })}
      </ul>

      <Button onClick={openPopup} variant="color">
        Обратная связь
      </Button>
    </nav>
  );
};
