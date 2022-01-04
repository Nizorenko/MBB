import { useParams } from "react-router";

import { CategorySofa } from "@/components/CategorySofa";
import { AboutCompany } from "@/components/AboutCompany";

import css from "./Category.module.css";

export default function CategoryPage() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <CategorySofa />
      <AboutCompany className={css.aboutCompany} />
    </>
  );
}
