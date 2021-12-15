import { FC } from "react";

import type { IButton } from "./types";
import css from "./Button.module.css";

export const Button: FC<IButton> = ({
  children,
  onClick,
  variant = "default",
  className = "",
}) => {
  const buttonClassName = `${
    variant === "color" || variant === "default" ? css.btn : ""
  } ${variant === "color" ? css.color : ""} ${
    variant === "details" ? css.details : ""
  } ${variant === "phone" ? css.overviewBtnCall : ""} ${className}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};
