import React, { useState } from "react";
import MockProducts from "../../mock/mockProducts";

export default function DeleteProduct({ productIndex }) {
  const [products, setProducts] = useState(MockProducts);

  const productDelete = (itemsIndex) => {
    const updatedProducts = [
      ...products.slice(0, itemsIndex),
      ...products.slice(itemsIndex + 1),
    ];
    setProducts(updatedProducts);
  };

  return (
    <>
      <button onClick={() => productDelete(productIndex)}>Delete</button>
    </>
  );
}
