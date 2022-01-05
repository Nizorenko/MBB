import { FC, useState } from "react";

import anime from "animejs";

import { Container } from "../Container";

import { DescriptionAcordeonProps, AccordionItem } from "./types";

import css from "./DescriptionAcordeon.module.css";

export const DescriptionAcordeon: FC<DescriptionAcordeonProps> = ({
  className,
  items,
}) => {
  const [openedItems, setOpenedItems] = useState<Array<number>>([]);
  const toggleAccordionItem = (
    itemId: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    //eslint-disable-next-line
    //@ts-ignore
    const contentElement = e.target.closest("li").querySelector(".jsContent");
    let newOpenedItems = [...openedItems];
    if (newOpenedItems.includes(itemId)) {
      newOpenedItems = newOpenedItems.filter(id => {
        return id !== itemId;
      });
      anime({
        targets: contentElement,
        height: 0,
        duration: 500,
        easing: "easeInOutQuad",
      });
    } else {
      newOpenedItems.push(itemId);
      anime({
        targets: contentElement,
        height: (elem: HTMLElement) => elem.scrollHeight,
        duration: 500,
        easing: "easeInOutQuad",
      });
    }
    setOpenedItems(newOpenedItems);
  };

  return (
    <section className={className}>
      <Container>
        <ul>
          {items.map(({ id, title, content }) => {
            return (
              <li key={id} className={css.item}>
                <div className={css.btnBox}>
                  <button
                    className={css.btn}
                    onClick={e => toggleAccordionItem(id, e)}
                  >
                    <h2 className={css.header}>{title}</h2>
                  </button>
                  <span
                    className={`${css.plus} ${
                      openedItems.includes(id) ? css.plusIsOpen : ""
                    }`}
                  />
                </div>
                <div className={`${css.text} jsContent`}>{content}</div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
