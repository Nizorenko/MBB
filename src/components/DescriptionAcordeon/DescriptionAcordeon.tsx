import { FC, useState } from "react";

import { Container } from "../Container";

import { DescriptionAcordeonProps, AccordionItem } from "./types";

import css from "./DescriptionAcordeon.module.css";

export const DescriptionAcordeon: FC<DescriptionAcordeonProps> = ({
  className,
  items,
}) => {
  const [openedItems, setOpenedItems] = useState<Array<number>>([]);
  const toggleAccordionItem = (itemId: number): void => {
    let newOpenedItems = [...openedItems];
    if (newOpenedItems.includes(itemId)) {
      newOpenedItems = newOpenedItems.filter(id => {
        return id !== itemId;
      });
    } else {
      newOpenedItems.push(itemId);
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
                    onClick={() => toggleAccordionItem(id)}
                  >
                    <h2 className={css.header}>{title}</h2>
                  </button>
                  <span
                    className={`${css.plus} ${
                      openedItems.includes(id) ? css.plusIsOpen : ""
                    }`}
                  ></span>
                </div>
                <p
                  className={`${css.text} ${
                    openedItems.includes(id) ? css.isOpen : ""
                  }`}
                >
                  {content}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
