import { useParams } from "react-router";

import { CategorySofa, CategoryItems } from "@/components/CategorySofa";
import { AboutCompany } from "@/components/AboutCompany";

import categorySofaPhoto1 from "@/assets/categorySofaPhoto1.jpg";
import categorySofaPhoto2 from "@/assets/categorySofaPhoto2.jpg";
import categorySofaPhoto3 from "@/assets/categorySofaPhoto3.jpg";

import css from "./Category.module.css";

const categorySofa: Array<CategoryItems> = [
  {
    id: 1,
    title: "Marsel",
    text: "диваны",
    img: categorySofaPhoto1,
    url: "/divans/Marsel",
    alt: "photo divans Marsel",
  },
  {
    id: 1,
    title: "Silvio",
    text: "диваны",
    img: categorySofaPhoto2,
    url: "/divans/Silvio",
    alt: "photo divans Silvio",
  },
  {
    id: 1,
    title: "Tiffany",
    text: "диваны",
    img: categorySofaPhoto3,
    url: "/divans/Tiffany",
    alt: "photo divans Tiffany",
  },
];

export default function CategoryPage() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <CategorySofa items={categorySofa} />
      <AboutCompany className={css.aboutCompany} />
    </>
  );
}
