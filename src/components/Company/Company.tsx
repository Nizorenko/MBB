import { FC } from "react";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import { ReactComponent as Phone } from "@/assets/Phone.svg";
import Logo from "@/assets/Company.png";
import Kfc from "@/assets/kfc.png";
import Cargill from "@/assets/Cargill.png";
import Seven from "@/assets/7elven.png";
import Underarmour from "@/assets/Underarmour.png";
import Dq from "@/assets/Dq.png";
import Toto from "@/assets/Toto.png";

import { ICompany } from "./types";
import css from "./Company.module.css";

export const Company: FC<ICompany> = () => {
  return (
    <section>
      <Container>
        <div className={css.companyOverview}>
          <div className={css.overviewLeft}>
            <div className={css.overviewAbout}>
              <h1 className={css.overviewTitle}>
                Make your operations Easier and Efficient with{" "}
                <span className={css.overviewItemColor}>Nimbly</span>
              </h1>
              <p className={css.overviewText}>
                Digitize your business operations and gain real-time analytics
                on your team progress anytime, anywhere.
              </p>
            </div>
            <div className={css.overviewBtn}>
              <Button variant="color" className={css.overvewBtnForm}>
                Request Demo
              </Button>
              <Button variant="phone">
                <Phone
                  className={css.overviewIconCall}
                  width="24"
                  height="24"
                />
                Free Consultation
              </Button>
            </div>
          </div>
          <div className={css.overviewRight}>
            <img
              className={css.overviewIllustration}
              alt="Company"
              src={Logo}
            />
          </div>
        </div>
        <div className={css.companyCooperation}>
          <h2 className={css.workTitle}>
            Trusted by 10,000+ the world’s fastest growing companies including:
          </h2>
          <ul className={css.workList}>
            <li className={css.workItem}>
              <a className={css.workLink} href="#">
                <img
                  className={css.workIllustration}
                  alt="Logo kfs"
                  src={Kfc}
                />
              </a>
            </li>
            <li className={css.workItem}>
              <a className={css.workLink} href="#">
                <img
                  className={css.workIllustration}
                  alt="Logo Cargill"
                  src={Cargill}
                />
              </a>
            </li>
            <li className={css.workItem}>
              <a className={css.workLink} href="#">
                <img
                  className={css.workIllustration}
                  alt="Logo 7elven"
                  src={Seven}
                />
              </a>
            </li>
            <li className={css.workItem}>
              <a className={css.workLink} href="#">
                <img
                  className={css.workIllustration}
                  alt="Logo Underarmour"
                  src={Underarmour}
                />
              </a>
            </li>
            <li className={css.workItem}>
              <a className={css.workLink} href="#">
                <img className={css.workIllustration} alt="Logo Dq" src={Dq} />
              </a>
            </li>
            <li className={css.workItem}>
              <a className={css.workLink} href="#">
                <img
                  className={css.workIllustration}
                  alt="Logo Toto"
                  src={Toto}
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
