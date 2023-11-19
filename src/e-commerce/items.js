import React from "react";

export default function Items({ product }) {
  return (
    <li>
      <img src="https://picsum.photos/200/300?random" />
      <div>
        {product.title}, {product.description}, {product.price}
      </div>
    </li>
  );
}
