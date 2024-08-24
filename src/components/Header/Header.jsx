import "./Header.scss";
import React, { useState } from "react";

function Header({ onCategorySelect }) {
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const handleCategoryClick = (category) => {
    onCategorySelect(category); // Tıklanan kategoriyi parent bileşene iletir
  };

  return (
    <div className="header">
      <h1 className="title">Products List</h1>
      <div className="menu">
        <div className="btnWrapper">
          {categories.map((category, index) => (
            <button key={index} onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
