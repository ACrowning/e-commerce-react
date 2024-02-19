import React, { useState } from "react";
import Product from "../product/product";
import MockProducts from "../../mock/mockProducts";
import styles from "./products.module.css";
import DeleteProduct from "../delete/deleteProduct";
export default function Products({ products }) {
  // const [products, setProducts] = useState(MockProducts);

  // const deleteProduct = (itemsIndex) => {
  //   const updatedProducts = [
  //     ...products.slice(0, itemsIndex),
  //     ...products.slice(itemsIndex + 1),
  //   ];
  //   setProducts(updatedProducts);
  // };

  return products.map((product, productIndex) => (
    <div className={styles.divProducts}>
      <ul className={styles.ulStyle}>
        <div className={styles.productStyle} key={product.id}>
          <Product product={product} />
          <DeleteProduct productIndex={productIndex} />
          {/* <button onClick={() => deleteProduct(productIndex)}>Delete</button> */}
        </div>
      </ul>
    </div>
  ));
}
