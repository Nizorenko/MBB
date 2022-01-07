import { FC, useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PopupFeedback } from "@/components/PopupFeedback";

import css from "./DefaultLayout.module.css";

export const DefaultLayout: FC = ({ children }) => {
  const [isPopupOpen, setIsOpenPopup] = useState<boolean>(false);
  const openPopup = (): void => {
    setIsOpenPopup(true);
  };
  const closePopup = (): void => {
    setIsOpenPopup(false);
  };

  return (
    <>
      <Header className={css.header} openPopup={openPopup} />
      {children}
      <Footer className={css.footer} openPopup={openPopup} />
      <PopupFeedback isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};
