import { FC } from "react";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";

import ProposalImj from "@/assets/Proposal.png";
import { ReactComponent as ArrowBtn } from "@/assets/ArrowBtn.svg";
import { ReactComponent as Food } from "@/assets/Food.svg";
import { ReactComponent as Shop } from "@/assets/Shop.svg";
import { ReactComponent as Builder } from "@/assets/Builder.svg";
import { ReactComponent as Flower } from "@/assets/Flower.svg";
import { ReactComponent as ArrowList } from "@/assets/ArrowList.svg";

import { IProposal } from "./types";
import css from "./Proposal.module.css";

export const Proposal: FC<IProposal> = () => {
  return (
    <section>
      <Container>
        <div className={css.proposal}>
          <img
            className={css.illustration}
            src={ProposalImj}
            alt="Photo Industries"
            width="603"
            height="775"
          />
          <div className={css.right}>
            <Heading>INDUSTRIES</Heading>

            <h2 className={css.title}>
              Desk work or field work, we’ve covered
            </h2>

            <ul className={css.list}>
              <li className={css.item}>
                <button className={css.button}>
                  <Food className={css.icon} width="33" height="32" />
                  Food & Beverage
                  <ArrowList className={css.arrow} width="12" height="20" />
                </button>

                <div className={css.content}>
                  <p className={css.text}>
                    Businesses in more than 100 different industries track and
                    automate with Nimbly. Businesses in more than 100 different
                    industries track and automate with Nimbly.
                  </p>
                </div>
              </li>

              <li className={css.item}>
                <button className={css.button}>
                  <Shop className={css.icon} width="33" height="32" />
                  Retail
                  <ArrowList className={css.arrow} width="12" height="20" />
                </button>

                <div className={css.content}>
                  <p className={css.text}>
                    Businesses in more than 100 different industries track and
                    automate with Nimbly. Businesses in more than 100 different
                    industries track and automate with Nimbly.
                  </p>
                </div>
              </li>

              <li className={css.item}>
                <button className={css.button}>
                  <Builder className={css.icon} width="33" height="32" />
                  Manufacturing
                  <ArrowList className={css.arrow} width="12" height="20" />
                </button>

                <div className={css.content}>
                  <p className={css.text}>
                    Businesses in more than 100 different industries track and
                    automate with Nimbly. Businesses in more than 100 different
                    industries track and automate with Nimbly.
                  </p>
                </div>
              </li>

              <li className={css.item}>
                <button className={css.button}>
                  <Flower className={css.icon} width="33" height="32" />
                  Agriculture
                  <ArrowList className={css.arrow} width="12" height="20" />
                </button>

                <div className={css.content}>
                  <p className={css.text}>
                    Businesses in more than 100 different industries track and
                    automate with Nimbly. Businesses in more than 100 different
                    industries track and automate with Nimbly.
                  </p>
                </div>
              </li>
            </ul>
            <Button className={css.buttonLink} variant="details">
              Select your Industry
              <ArrowBtn width="25" height="24" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
