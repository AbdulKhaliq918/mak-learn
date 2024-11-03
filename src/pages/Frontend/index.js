import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/Home";
import Menu from "./Menu/Menu";
import Product from "./Menu/Product/Product";

export default function Frontend() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Menu />} />
      <Route path="/product/:id" element={<Product />} />
  
      <Route path="*" element="<h1>404 Not found</h1>" />
    </Routes>
  );
}
