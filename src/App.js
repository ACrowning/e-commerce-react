import React from "react";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import styles from "./components/styles.module.css";

function App() {
  return (
    <div className={styles.containerStyle}>
      <Navbar />

      <Products />
    </div>
  );
}

export default App;
