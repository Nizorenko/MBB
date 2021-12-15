import { FC } from "react";

import { Heading } from "@/components/Heading";

import { ReactComponent as RealTime } from "@/assets/RealTime.svg";
import { ReactComponent as Audits } from "@/assets/Audits.svg";
import { ReactComponent as Issue } from "@/assets/Issue.svg";
import { ReactComponent as Validation } from "@/assets/Validation.svg";
import { ReactComponent as Analytics } from "@/assets/Analytics.svg";
import PreviewItem1 from "@/assets/PreviewItem1.png";
import PreviewItem2 from "@/assets/PreviewItem2.png";

import { IPreview } from "./types";
import css from "./Preview.module.css";

export const Preview: FC<IPreview> = () => {
  return (
    <section>
      <div className={css.containerPreview}>
        <div className={css.preview}>
          <span className="heading">OUR FEATURES</span>
          <h2 className={css.previewTitle}>
            Discover How Our Features Can Simplify Your Work Flow
          </h2>

          {/*  Навигация списка  */}

          <nav className={css.nav}>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <button type="button" className={css.navBtn}>
                  <RealTime className={css.navIcon} width="32" height="32" />
                  <span className={css.navName}>Real-time Audits</span>
                </button>
              </li>

              <li className={css.navItem}>
                <button type="button" className={css.navBtn}>
                  <Audits className={css.navIcon} width="32" height="32" />
                  <span className={css.navName}>Easy Digital Audits</span>
                </button>
              </li>

              <li className={css.navItem}>
                <button type="button" className={css.navBtn}>
                  <Issue className={css.navIcon} width="32" height="32" />
                  <span className={css.navName}>Issue Tracker</span>
                </button>
              </li>

              <li className={css.navItem}>
                <button type="button" className={css.navBtn}>
                  <Validation className={css.navIcon} width="32" height="32" />
                  <span className={css.navName}>Robust Validation</span>
                </button>
              </li>

              <li className={css.navItem}>
                <button type="button" className={css.navBtn}>
                  <Analytics className={css.navIcon} width="32" height="32" />
                  <span className={css.navName}>Report & Analytics</span>
                </button>
              </li>
            </ul>
          </nav>

          {/*  Карточка элемента списка  */}

          <div className={css.card}>
            <ul className={css.cardList}>
              <li className={css.isOpenTab}>
                <div className={css.cardBox}>
                  <p className={css.cardText}>
                    You can optimize inspections with visual promoting guides to
                    ensure products and services are being delivered
                    consistently across the company.
                    <a className={css.cardLink} href="#">
                      Learn more.
                    </a>
                  </p>
                  <img
                    className={css.cardIllustration}
                    src={PreviewItem1}
                    alt="lication demonstration"
                  />
                </div>
              </li>

              <li className={css.cardItem}>
                <div className={css.cardBox}>
                  <p className={css.cardText}>
                    By using our issue tracker and resolution monitoring
                    technologies, all your problems will be resolved according
                    to your SLA.{" "}
                    <a className={css.cardLink} href="#">
                      Learn more.
                    </a>
                  </p>
                  <img
                    className={css.cardIllustration}
                    src={PreviewItem2}
                    alt="lication demonstration"
                  />
                </div>
              </li>

              <li className={css.cardItem}>
                <div className={css.cardBox}>
                  <p className={css.cardText}>
                    You can optimize inspections with visual promoting guides to
                    ensure products and services are being delivered
                    consistently across the company.
                    <a className={css.cardLink} href="#">
                      Learn more.
                    </a>
                  </p>
                  <img
                    className={css.cardIllustration}
                    src={PreviewItem1}
                    alt="lication demonstration"
                  />
                </div>
              </li>

              <li className={css.cardItem}>
                <div className={css.cardBox}>
                  <p className={css.cardText}>
                    By using our issue tracker and resolution monitoring
                    technologies, all your problems will be resolved according
                    to your SLA.{" "}
                    <a className={css.cardLink} href="#">
                      Learn more.
                    </a>
                  </p>
                  <img
                    className={css.cardIllustration}
                    src={PreviewItem2}
                    alt="lication demonstration"
                  />
                </div>
              </li>

              <li className={css.cardItem}>
                <div className={css.cardBox}>
                  <p className={css.cardText}>
                    You can optimize inspections with visual promoting guides to
                    ensure products and services are being delivered
                    consistently across the company.
                    <a className={css.cardLink} href="#">
                      Learn more.
                    </a>
                  </p>
                  <img
                    className={css.cardIllustration}
                    src={PreviewItem1}
                    alt="lication demonstration"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className={css.grade}>
            <ul className={css.gradeList}>
              <p className={css.gradeText}>
                We support various organizations to fundementally change the way
                we operate for a better future.
              </p>
              <li className={css.gradeItem}>
                <span className={css.gradeNumber}>57 h</span>
                <span className={css.gradeName}>Hours your saved</span>
              </li>

              <li className={css.gradeItem}>
                <span className={css.gradeNumber}>59%</span>
                <span className={css.gradeName}>Inspection cost saved</span>
              </li>

              <li className={css.gradeItem}>
                <span className={css.gradeNumber}>86%</span>
                <span className={css.gradeName}>Increase in productivity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
