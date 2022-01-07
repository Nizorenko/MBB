import { FC } from "react";

import { BurgerProps } from "./types";
import css from "./BurgerButton.module.css";

export const BurgerButton: FC<BurgerProps> = ({
  isOpen,
  onClick,
  children,
}) => {
  const burgerButtonClass = `${css.burgerButton} ${
    isOpen ? css.isOpenNav : ""
  }`;

  return (
    <button className={burgerButtonClass} onClick={onClick}>
      navigation button
      {children}
      <span />
    </button>
  );
};
