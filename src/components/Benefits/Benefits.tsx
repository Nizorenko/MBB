import { FC } from "react";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";

import { ReactComponent as ArrowBtn } from "@/assets/ArrowBtn.svg";
import PhotoGirl from "@/assets/Benefits.png";

import { IBenefits } from "./types";
import css from "./Benefits.module.css";

export const Benefits: FC<IBenefits> = () => {
  return (
    <section>
      <Container>
        <div className={css.benefits}>
          <div className={css.left}>
            <Heading>HOW IT WORKS</Heading>
            <h2 className={css.title}>
              Fast, easy steps to start Operational Excellence
            </h2>
            <p className={css.text}>
              Nimbly works to speed up your work, you won't spend a lot of time
              getting started.
            </p>
            <ul className={css.list}>
              <li className={css.item}>
                <div className={css.itemBox}>
                  <h3 className={css.itemTitle}>Know what to prioritize</h3>
                  <p className={css.itemText}>
                    Reports show you which projects are most profitable and
                    which ones drain your team’s time.
                  </p>
                </div>
              </li>

              <li className={css.item}>
                <div className={css.itemBox}>
                  <h3 className={css.itemTitle}>
                    Make it clear with digitization
                  </h3>
                  <p className={css.itemText}>
                    Go paperless to digitize your checklists and automate your
                    reporting.
                  </p>
                </div>
              </li>
            </ul>
            <Button variant="details">
              See how Nimbly works
              <ArrowBtn width="25" height="24" />
            </Button>
          </div>

          <img
            className="illustration"
            src={PhotoGirl}
            alt="Photo Gerl"
            width="612"
            height="693"
          />
        </div>
      </Container>
    </section>
  );
};
