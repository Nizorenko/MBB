import { FC } from "react";

import type { IHeading } from "./types";
import css from "./Heading.module.css";

export const Heading: FC<IHeading> = ({ children, className }) => {
  return <h2 className={`${css.heading} ${className}`}>{children}</h2>;
};
