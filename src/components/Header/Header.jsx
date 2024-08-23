import "./Header.scss";
import React from "react";

function Header() {
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <div className="header">
      <h1 className="title">Products List</h1>
      <div className="menu">
        <div className="btnWrapper">
          {categories.map((category, index) => (
            <button key={index}>{category}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
