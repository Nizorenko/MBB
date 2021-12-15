import { FC } from "react";

import { IContainer } from "./types";
import css from "./Container.module.css";

export const Container: FC<IContainer> = ({
  children,
  variant = "default",
}) => {
  return (
    <div className={variant === "default" ? css.container : css.containerMini}>
      {children}
    </div>
  );
};
