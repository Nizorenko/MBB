import type { FC } from "react";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import { ReactComponent as Frame } from "@/assets/Frame.svg";
import Logo from "@/assets/NimblyLogoHeader.png";

import css from "./Header.module.css";

const navList: Array<string> = [
  "Features",
  "How it works",
  "Industries",
  "Insight",
];

export const Header: FC = () => {
  const handler = (): void => {
    alert("я не тупой");
  };

  return (
    <header className={css.section}>
      <Container>
        <div className={css.header}>
          <a className={css.logo} href="#">
            <img alt="Company logo" src={Logo} />
          </a>

          <button className={css.iconMobil} type="button">
            <Frame width="30" height="30" />
          </button>
          <nav className={css.nav}>
            <ul className={css.list}>
              {navList.map((value, index) => {
                return (
                  <li key={index}>
                    <a className={css.link} href="#">
                      {value}
                    </a>
                  </li>
                );
              })}
            </ul>

            <Button className={css.btnIsLock} variant="color">
              Request Demo
            </Button>
          </nav>

          <div className={css.user}>
            <button className={css.entrance} type="button">
              <Frame width="24" height="24" />
              Sign In
            </button>

            <Button variant="color" onClick={handler}>
              Request Demo
            </Button>
          </div>

          <button className={css.burgerMenu} type="button">
            burger menu
            <span />
          </button>
        </div>
      </Container>
    </header>
  );
};
