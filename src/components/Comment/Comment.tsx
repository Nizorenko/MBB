import { FC } from "react";

import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";

import User1 from "@/assets/User1.png";
import User2 from "@/assets/User2.png";
import UserLogo from "@/assets/UserLogo.png";

import { IComment } from "./types";
import css from "./Comment.module.css";

export const Comment: FC<IComment> = () => {
  return (
    <section>
      <Container>
        <div className={css.comment}>
          <Heading>CUSTOMER SAY</Heading>
          <h2 className={css.title}>
            See how businesses like yours found answers with Nimbly
          </h2>
          <p className={css.text}>
            From start-ups to enterprises, we’ve helped transform operations for
            clients from various industrial backgrounds.
          </p>
        </div>

        {/*  Первый слайдер  */}

        <article className={css.cardComment}>
          <div className={css.cardPhoto}>
            <ul className={css.photoList}>
              <li className={css.photoItemIsOpen}>
                <img
                  className={css.photoUser}
                  src={User1}
                  alt="Tondi Sihombing photo"
                  width="440"
                  height="509"
                />
              </li>
              <li className={css.photoItem}>
                <img
                  className={css.photoUser}
                  src={User2}
                  alt="Tondi Sihombing photo"
                  width="440"
                  height="509"
                />
              </li>
              <li className={css.photoItem}>
                <img
                  className={css.photoUser}
                  src={User1}
                  alt="Tondi Sihombing photo"
                  width="440"
                  height="509"
                />
              </li>
              <li className={css.photoItem}>
                <img
                  className={css.photoUser}
                  src={User2}
                  alt="Tondi Sihombing photo"
                  width="440"
                  height="509"
                />
              </li>
              <li className={css.photoItem}>
                <img
                  className={css.photoUser}
                  src={User1}
                  alt="Tondi Sihombing photo"
                  width="440"
                  height="509"
                />
              </li>
            </ul>
          </div>

          {/*  Второй слайдер  */}

          <div className={css.cardText}>
            <ul className={css.textList}>
              <li className={css.textItemIsOpen}>
                <div className={css.textBox}>
                  <p className={css.textUser}>
                    knowledge sharing, smoothens the information flow, and
                    provides seamless access to data more. receive real-time
                    notifications from outlets and follow them up instantly.
                    Nimbly not only reduces paper use, but also simplifies
                    knowledge sharing, smoothens the information flow, and
                    provides seamless access to data more.
                  </p>

                  <div className={css.userCard}>
                    <img
                      className={css.userPhoto}
                      src={UserLogo}
                      alt="Company `s logo"
                      width="78"
                      height="78"
                    />
                    <span className={css.userName}>Tondi Sihombing</span>
                    <span className={css.positnName}>
                      Operations Manager, Kopi Kenangan
                    </span>
                  </div>
                </div>
              </li>
              <li className={css.textItem}>
                <div className={css.textBox}>
                  <p className={css.textUser}>
                    simplifies knowledge sharing, smoothens the information
                    flow, and provides seamless access to data more.
                    notifications from outlets and follow them up instantly.
                    Nimbly not only reduces paper use, but also simplifies
                    knowledge sharing, smoothens the information flow, and
                    provides seamless access to data more.
                  </p>

                  <div className={css.userCard}>
                    <img
                      className={css.userPhoto}
                      src={UserLogo}
                      alt="Company `s logo"
                      width="78"
                      height="78"
                    />
                    <span className={css.userName}>Tondi Sihombing</span>
                    <span className={css.positnName}>
                      Operations Manager, Kopi Kenangan
                    </span>
                  </div>
                </div>
              </li>
              <li className={css.textItem}>
                <div className={css.textBox}>
                  <p className={css.textUser}>
                    Nimbly speeds up our issuee, but also simplifies knowledge
                    sharing, smoothens the information flow, and provides
                    seamless access to data more. but also simplifies knowledge
                    sharing, smoothens the information flow, and provides
                    seamless access to data more.seamless access to data more.
                  </p>

                  <div className={css.userCard}>
                    <img
                      className={css.userPhoto}
                      src={UserLogo}
                      alt="Company `s logo"
                      width="78"
                      height="78"
                    />
                    <span className={css.userName}>Tondi Sihombing</span>
                    <span className={css.positnName}>
                      Operations Manager, Kopi Kenangan
                    </span>
                  </div>
                </div>
              </li>
              <li className={css.textItem}>
                <div className={css.textBox}>
                  <p className={css.textUser}>
                    Nimbly speeds up our issue resolution in Kopi Kenangan. With
                    Nimbly's issue tracker, the headquarters can receive
                    real-time notifications from outlets and follow them up
                    instantly. Nimbly not only reduces paper use, but also
                    simplifies knowledge sharing, smoothens the information
                    flow, and provides seamless access to data more.
                  </p>

                  <div className={css.userCard}>
                    <img
                      className={css.userPhoto}
                      src={UserLogo}
                      alt="Company `s logo"
                      width="78"
                      height="78"
                    />
                    <span className={css.userName}>Tondi Sihombing</span>
                    <span className={css.positnName}>
                      Operations Manager, Kopi Kenangan
                    </span>
                  </div>
                </div>
              </li>
              <li className={css.textItem}>
                <div className={css.textBox}>
                  <p className={css.textUser}>
                    Nimbly speeds up our issue resolution in Kopi Kenangan. With
                    Nimbly's issue tracker, the headquarters can receive
                    real-time notifications from outlets and follow them up
                    instantly. Nimbly not haring, smoothens the information
                    flow, and provides seamless access to data more.
                  </p>

                  <div className={css.userCard}>
                    <img
                      className={css.userPhoto}
                      src={UserLogo}
                      alt="Company `s logo"
                      width="78"
                      height="78"
                    />
                    <span className={css.userName}>Tondi Sihombing</span>
                    <span className={css.positnName}>
                      Operations Manager, Kopi Kenangan
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div className={css.cardPagination}>
              <svg className={css.iconPrev} width="16" height="14">
                <use href="./images/icons.svg#arrow-comments"></use>
              </svg>
              <div className={css.pagination}></div>
              <svg className={css.iconNext} width="16" height="14">
                <use href="./images/icons.svg#arrow-comments"></use>
              </svg>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
};
