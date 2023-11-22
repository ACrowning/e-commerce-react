import React, { useState } from "react";
import Product from "./product";
import MockProducts from "./mock/mockProducts";
import styles from "./styles.module.css";

export default function Products() {
  const [products, setProducts] = useState(MockProducts);

  const deleteProduct = (itemsIndex) => {
    const updatedProducts = [
      ...products.slice(0, itemsIndex),
      ...products.slice(itemsIndex + 1),
    ];
    setProducts(updatedProducts);
  };

  return products.map((product, productIndex) => (
    <div className={styles.productStyle} key={product.id}>
      <Product product={product} />
      <button onClick={() => deleteProduct(productIndex)}>Delete</button>
    </div>
  ));
}
