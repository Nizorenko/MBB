import { FC } from "react";

import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";

import BrainsCloud from "@/assets/BrainsCloud.mp4";
import Poster from "@/assets/BrainsCloud.jpg";

import { IPresentation } from "./types";
import css from "./Presentation.module.css";

export const Presentation: FC<IPresentation> = () => {
  return (
    <section>
      <Container variant="mini">
        <div className={css.Presentation}>
          <Heading>WAYS NIMBLY HELPS YOU</Heading>
          <h2 className={css.PresentationTitle}>
            Helping you maximize operations management with digitization
          </h2>

          <p className={css.PresentationText}>
            Nimbly will digitize your business operations so you'll get
            real-time analytics on your team's progress anytime, anywhere even
            without an internet connection.
          </p>

          <video
            className={css.PresentationVideo}
            controls={true}
            src={BrainsCloud}
            poster={Poster}
          />
        </div>
      </Container>
    </section>
  );
};
