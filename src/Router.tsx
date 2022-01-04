import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "@/pages/home";
import Category from "@/pages/category";
import Product from "@/pages/product";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/:category/:product" element={<Product />} />
    </Routes>
  );
};
