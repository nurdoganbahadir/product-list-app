import "./ProductCard.css";
import { products } from "../../helper/data.js";

import React from "react";

function ProductCard() {
  return (
    <div className="container">
      <div className="productCards">
        {products.map((item) => (
          <div className="card">
            <img src={item.image} alt="" />
            <h2 className="price">${item.price}</h2>
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
