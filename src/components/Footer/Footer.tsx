import { FC } from "react";

import { Container } from "@/components/Container";

import Logo from "@/assets/NimblyLogoFooter.png";
import Qr from "@/assets/QRCode.png";

import css from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer>
      <div className={css.section}>
        <Container>
          <div className={css.footer}>
            <div className={css.about}>
              <a className={css.logoLink} href="#">
                <img className={css.logo} src={Logo} alt="nimbly-logo-footer" />
              </a>
              <p className={css.aboutText}>
                Digitize your business operations and gain real-time analytics
                on your team progress anytime, anywhere.
              </p>

              <img className={css.qr} src={Qr} alt="QR-Code" />
            </div>
            <div className={css.box}>
              <section className={css.boxNav}>
                <h3 className={css.title}>Nimbly</h3>

                <ul className={css.list}>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      About Us
                    </a>
                  </li>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      Features
                    </a>
                  </li>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      Industries
                    </a>
                  </li>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      How it Works
                    </a>
                  </li>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      Insight
                    </a>
                  </li>
                </ul>
              </section>

              <section className={css.boxNav}>
                <h3 className={css.title}>More</h3>

                <ul className={css.list}>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      Blogs
                    </a>
                  </li>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      FAQ
                    </a>
                  </li>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className={css.item}>
                    <a className={css.link} href="#">
                      Terms & Condition
                    </a>
                  </li>
                </ul>
              </section>

              <div className={css.info}>
                <ul className={css.infoList}>
                  <li className={css.infoItem}>
                    <h3 className={css.infoTitle}>Indonesian Office</h3>
                    <p className={css.infoText}>
                      WeWork, Noble House Jl. Dr. Ide Anak Agung Gde Agung DKI
                      Jakarta 12950
                    </p>
                  </li>

                  <li className={css.infoItem}>
                    <h3 className={css.infoTitle}>US Office</h3>
                    <p className={css.infoText}>
                      2001 Ross Avenue Suite #700-119 Dallas, TX 75291
                    </p>
                  </li>
                </ul>
              </div>
              <div className={css.info}>
                <ul className={css.infoList}>
                  <li className={css.infoItem}>
                    <h3 className={css.infoTitle}>Singapore Office</h3>
                    <p className={css.infoText}>
                      100 Peck Seah Street PS100 #08-14 Singapore 079333
                    </p>
                  </li>

                  <li className={css.infoItem}>
                    <h3 className={css.infoTitle}>Colombia Office</h3>
                    <p className={css.infoText}>
                      Calle 52 B # 74 A 32 Bogotá - Colombia
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={css.copyright}>
        <Container>
          <div className={css.copyrightBox}>
            <p className={css.text}>
              Copyright © 2021 Nimbly App. All rights reserved.
            </p>
            <p className={css.textOrder}>
              We are ISO 27001 certified, assuring information security is
              managed with the highest standards.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
