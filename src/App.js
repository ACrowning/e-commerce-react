import React from "react";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products";
import styles from "./components/styles.module.css";

function App() {
  return (
    <div className={styles.containerStyle}>
      {/* Вынеси этот navbar в папку components. Все стили, связанные с этим компонентом, должны быть вынесены в отдельный файл */}
      {/* Тут ты столкнёшься с проблемой: ты не сможешь добавить новый айтем в продукты, потому что все методы будут в новом компоненте */}
      {/* Напиши мне, когда дойдёшь до этого */}
      <Navbar />
      <div className={styles.divProducts}>
        <ul className={styles.ulStyle}>
          <Products />
        </ul>
      </div>
    </div>
  );
}

export default App;
