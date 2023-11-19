import React from "react";

// Items - название, которое говорит о множественном числе, хотя здесь отображается один продукт. Логичнее переименовать его в Item 
// Или лучше переименовать в Product
export default function Items({ product }) {
  return (
    <li>
      {/* Для тега <img /> надо указывать атрибут alt=, можешь указать его как product.title */}
      <img src="https://picsum.photos/200/300?random" />
      <div>
        {product.title}, {product.description}, {product.price}
      </div>
    </li>
  );
}
