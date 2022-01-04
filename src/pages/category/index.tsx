import { useParams } from "react-router";
import css from "./Category.module.css";

export default function CategoryPage() {
  const params = useParams();
  console.log(params);

  return <div className={css.main}>Страница категории</div>;
}
