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
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
