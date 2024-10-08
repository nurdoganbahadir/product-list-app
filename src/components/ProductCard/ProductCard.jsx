import "./ProductCard.scss";
import { products, categories } from "../../helper/data.js";
import React from "react";

function ProductCard({ products }) {
  return (
    <div className="container">
      <div className="productCards">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <h3 className="price">${item.price}</h3>
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
