import "./App.css";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import React, { useState } from "react";
import { products } from "./helper/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Ürünleri seçilen kategoriye göre filtreleme
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <Header onCategorySelect={handleCategorySelect} />
      <ProductCard products={filteredProducts} />
    </>
  );
}

export default App;
