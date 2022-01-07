import { FC, useEffect } from "react";

import { PopupFeedbackProps } from "./types";
import { Button } from "../Button";

import { ReactComponent as Name } from "@/assets/Name.svg";
import { ReactComponent as Phone } from "@/assets/Phone.svg";
import { ReactComponent as Mail } from "@/assets/Mail.svg";

import { ReactComponent as ArrowBack } from "@/assets/ArrowBack.svg";

import css from "./PopupFeedback.module.css";

export const PopupFeedback: FC<PopupFeedbackProps> = ({ isOpen, onClose }) => {
  const popupClassName = `${css.popup} ${isOpen ? css.isOpenPopup : ""}`;
  const handler = (): void => {
    if (isOpen) onClose();
  };

  return (
    <div className={popupClassName} onClick={handler}>
      <div className={css.body}>
        <div className={css.content} onClick={e => e.stopPropagation()}>
          <div className={css.boxFeedbeak}>
            <button className={css.btnArrowBack}>
              <ArrowBack onClick={handler} className={css.arrowBack} />
            </button>

            <h2 className={css.feedbeak}>Обратная связь</h2>
          </div>

          <form className={css.form} action="#" method="#">
            <div className={css.boxIput}>
              <label className={css.label}>
                <Name width="15" height="15" />
              </label>

              <input
                className={css.input}
                type="text"
                placeholder="Ваше Имя"
                name="name_user"
                id="name_user"
              />
            </div>

            <div className={css.boxIput}>
              <label className={css.label}>
                <Phone width="15" height="15" />
              </label>

              <input
                className={css.input}
                type="number"
                placeholder="Ваш телефон"
                name="phone_user"
                id="phone_user"
              />
            </div>

            <div className={css.boxIput}>
              <label className={css.label}>
                <Mail width="15.195" height="10.52" />
              </label>

              <input
                className={css.input}
                type="mail"
                placeholder="Ваше email (необзятально)"
                name="mail_user"
                id="mail_user"
              />
            </div>
          </form>
          <Button className={css.button} variant="color">
            Перезвонить мне!
          </Button>
          <address className={css.contacts}>
            <span className={css.titleAddress}>Наш адресс</span>
            <a
              className={css.linkAddress}
              href="https://goo.gl/maps/Md7ffSRAUdbtkj2o7"
              target="_blank"
            >
              Оренбург, ул. Салмышская, 58, корпус 2
            </a>

            <span className={css.titlePhone}>Телефон</span>
            <a className={css.linkPhone} href="tel:+7 (8142) 33 22 11">
              8 (912) 842 12 00
            </a>
            <span className={css.titleEmail}>Email</span>
            <a className={css.linkEmail} href="mailto:nizorenkolist@gmail.com">
              nizorenkolist@gmail.com
            </a>
          </address>
        </div>
      </div>
    </div>
  );
};
