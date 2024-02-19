import { useState } from "react";
import MockProducts from "./mock/mockProducts";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import styles from "./globalStyles/styles.module.css";

function App() {
  const [products, setProducts] = useState(MockProducts);

  const addItem = (newProduct) => {
    newProduct = {
      id: `${products.length + 1}`,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className={styles.containerStyle}>
      <Navbar products={products} addItem={addItem} />

      <Products products={products} />
    </div>
  );
}

export default App;
