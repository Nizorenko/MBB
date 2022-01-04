import { useParams } from "react-router";

export default function Product() {
  const params = useParams();
  console.log(params);
  return <>Это страничка продукта</>;
}
