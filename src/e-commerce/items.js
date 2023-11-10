import React from "react";

export default function Items({ product }) {
  return (
    <li>
      {product.id}, {product.title}, {product.description}, {product.price},
      {product.favorite}, {product.count}
    </li>
  );
}
