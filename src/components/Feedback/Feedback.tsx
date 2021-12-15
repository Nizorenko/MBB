import { FC } from "react";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import { IFeedback } from "./types";
import css from "./Feedback.module.css";

export const Feedback: FC<IFeedback> = () => {
  return (
    <section>
      <Container variant="mini">
        <div className={css.feedback}>
          <h2 className={css.title}>
            Empower your team today. Get started with intelligent workflows
          </h2>
          <p className={css.text}>
            Nimbly brings you new opportunities through seamless digitization
          </p>
        </div>

        <form className={css.form} action="#" method="#">
          <ul className={css.list}>
            <li className={css.item}>
              <label className={css.label}>Full Name :</label>
              <input
                className={css.input}
                type="text"
                placeholder="Enter your full name"
                name="user_name"
                id="user_name"
              />
            </li>

            <li className={css.item}>
              <label className={css.label}>Email Address :</label>
              <input
                className={css.input}
                type="mail"
                placeholder="Enter your email address"
                name="user_mail"
                id="user_mail"
              />
            </li>

            <li className={css.item}>
              <label className={css.label}>Mobile :</label>
              <input
                className={css.input}
                type="tel"
                placeholder="Enter your mobile"
                name="user_phone"
                id="user_phone"
              />
            </li>

            <li className={css.item}>
              <label className={css.label}>Company Name :</label>
              <input
                className={css.input}
                type="text"
                placeholder="Enter your company name"
                name="user_company"
                id="user_company"
              />
            </li>

            <li className={css.item}>
              <label className={css.label}>Tittle :</label>
              <input
                className={css.input}
                type="text"
                placeholder="Enter your tittle"
                name="user_tittle"
                id="user_tittle"
              />
            </li>

            <li className={css.item}>
              <label className={css.label}>Industry :</label>

              <select className={css.input}>
                <option value="">Select Industry</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </li>
            <Button variant="color">Request Demo</Button>
          </ul>
        </form>
      </Container>
    </section>
  );
};
