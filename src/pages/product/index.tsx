import { useParams } from "react-router";

import {
  DescriptionAcordeon,
  AccordionItem,
} from "@/components/DescriptionAcordeon";

const accordeonItems: Array<AccordionItem> = [
  {
    id: 0,
    title: "Описание",
    content: (
      <>
        Современный классический диван с элементами декора, в которых есть
        отсылки к стилю арт-деко. В основе декора - каретная стяжка благодаря
        этому и элегантным плавным линиям силуэта диван завораживает своей
        красотой. Диван может изготавливаться без спального места.
        Высокоэластичный пенополиуретан с эффектом памяти и продленным сроком
        эксплуатации легко восстанавливает свою форму. Механизм трансформации
        "пума" легко превращает диван в полноценное спальное место, состоящее из
        двух блоков. К дивану можно заказать кресло.
      </>
    ),
  },
  {
    id: 1,
    title: "Материал обивки",
    content: (
      <>
        <ul>
          <li>
            <span></span>
            <img src="" alt="" />
          </li>
          <li>
            <span></span>
            <img src="" alt="" />
          </li>
          <li>
            <span></span>
            <img src="" alt="" />
          </li>
          <li>
            <span></span>
            <img src="" alt="" />
          </li>
          <li>
            <span></span>
            <img src="" alt="" />
          </li>
          <li>
            <span></span>
            <img src="" alt="" />
          </li>
          <li>
            <span></span>
            <img src="" alt="" />
          </li>
        </ul>
      </>
    ),
  },
  { id: 2, title: "Размеры и комлектация", content: <>Неизвестно</> },
  {
    id: 3,
    title: "Фото в интерьере",
    content: (
      <>
        <ul>
          <li></li>
        </ul>
      </>
    ),
  },
];

export default function Product() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <DescriptionAcordeon items={accordeonItems} />
    </>
  );
}
